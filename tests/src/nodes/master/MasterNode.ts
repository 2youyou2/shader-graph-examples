import { ShaderNode, ShaderSlot } from "../../base";
import fs from 'fs';

function findConnectNodes (slot: ShaderSlot, nodes: ShaderNode[]) {
    if (!slot.connectSlot) return;

    let connectNode = slot.connectSlot.node;
    if (connectNode) {
        if (!nodes.includes(connectNode)) {
            nodes.push(connectNode);
        }

        connectNode.inputSlots.forEach(slot => {
            findConnectNodes(slot, nodes);
        })
    }
}

export class MasterNode extends ShaderNode {
    vsSlotIndices: number[] = [];
    fsSlotIndices: number[] = [];

    templatePath = '';

    isMasterNode = true;

    getConnectNodes (slotIndices: number[]) {
        let inputSlots = slotIndices.map(i => this.slots[i]);
        let nodes: ShaderNode[] = [];
        inputSlots.forEach(slot => {
            findConnectNodes(slot, nodes);
        })

        nodes.sort((a, b) => b.priority - a.priority);
        return nodes;
    }

    generateVsCode () {
        let code: string[] = ['\n'];

        let nodes = this.getConnectNodes(this.vsSlotIndices);
        nodes.forEach(node => {
            code.push('    ' + node.generateCode());
        })

        return code.join('\n');
    }

    generateFsCode () {
        let code: string[] = ['\n'];

        let nodes = this.getConnectNodes(this.fsSlotIndices);
        nodes.forEach(node => {
            code.push('    ' + node.generateCode());
        })

        return code.join('\n');
    }

    generateCode () {
        let code = fs.readFileSync(this.templatePath, 'utf-8');

        const vsCode = this.generateVsCode();
        const fsCode = this.generateFsCode();

        code = code.replace('{{vs}}', vsCode);
        code = code.replace('{{fs}}', fsCode);

        this.inputSlots.forEach((slot, index) => {
            var tempName = `slot_${index}`;
            let value = slot.slotValue;
            let reg = new RegExp(`{{${tempName} *=* *(.*)}}`);
            if (!value) {
                let res = reg.exec(code);
                if (res) {
                    value = res[1];
                }
            }
            code = code.replace(reg, value);
        })

        return code;
    }
}
