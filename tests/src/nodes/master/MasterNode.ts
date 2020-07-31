import { ShaderNode, ShaderSlot, ShaderPropery } from "../../base";
import fs from 'fs';
import path from 'path';

function findConnectNodes (slot: ShaderSlot, nodes: ShaderNode[]) {
    if (!slot.connectSlot) return;

    let connectNode = slot.connectSlot.node;
    if (connectNode) {
        if (!nodes.includes(connectNode)) {
            nodes.push(connectNode);
        }
        else {
            return;
        }

        connectNode.inputSlots.forEach(slot => {
            findConnectNodes(slot, nodes);
        })
    }
}

export default class MasterNode extends ShaderNode {

    vsSlotIndices: number[] = [];
    fsSlotIndices: number[] = [];

    templatePath = '';

    isMasterNode = true;
    fixedConcretePrecision = true;

    properties: ShaderPropery[] = [];

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
            node.generateCode().split('\n').forEach(c => {
                code.push('    ' + c);
            });
        })

        return code.join('\n');
    }

    generateFsCode () {
        let code: string[] = ['\n'];

        let nodes = this.getConnectNodes(this.fsSlotIndices);
        nodes.forEach(node => {
            node.generateCode().split('\n').forEach(c => {
                code.push('    ' + c);
            });
        })

        return code.join('\n');
    }

    generatePropertiesCode () {
        let uniform = '\n';
        let mtl = '\n'
        let uniformSampler = '';

        let properties = this.properties;
        properties.sort((a, b) => {
            return b.concretePrecision - a.concretePrecision;
        })

        properties.forEach(p => {
            let precision = '';
            let mtlValue = '';

            let value = p.defaultValue;
            let isColor = value.r !== undefined;
            let x = isColor ? value.r : value.x;
            let y = isColor ? value.g : value.y;
            let z = isColor ? value.b : value.z;
            let w = isColor ? value.a : value.w;

            if (p.concretePrecision === 1) {
                precision = 'float';
                mtlValue = `${x}`
            }
            else if (p.concretePrecision === 2) {
                precision = 'vec2';
                mtlValue = `[${x}, ${y}]`
            }
            else if (p.concretePrecision === 3) {
                precision = 'vec4';
                mtlValue = `[${x}, ${y}, ${z}, 0]`
            }
            else if (p.concretePrecision === 4) {
                precision = 'vec4';
                mtlValue = `[${x}, ${y}, ${z},  ${w}]`
            }

            let editorStr = isColor ? `, editor: { type: color }` : ''

            uniform += `    ${precision} ${p.name};\n`;
            mtl += `        ${p.name}: { value: ${mtlValue} ${editorStr}}\n`
        })
        
        if (properties.length === 0) {
            uniform += '    vec4 empty_value;\n'
        }

        return {
            uniform,
            uniformSampler,
            mtl,
        };
    }

    generateCode () {
        let code = fs.readFileSync(this.templatePath, 'utf-8');

        let commonChunk = fs.readFileSync(path.join(__dirname, '../../../templates/chunks/common.chunk'), 'utf-8');

        const vsCode = this.generateVsCode();
        const fsCode = this.generateFsCode();

        code = code.replace('{{chunks}}', commonChunk);

        let chunkIncludes = `
  #include <shader_graph_common>
        `;

        code = code.replace('{{vs_chunks}}', chunkIncludes);
        code = code.replace('{{fs_chunks}}', chunkIncludes);

        code = code.replace('{{vs}}', vsCode);
        code = code.replace('{{fs}}', fsCode);

        if (!this.properties || this.properties.length === 0) {
            code = code.replace(/properties: &props/g, '');
            code = code.replace(/properties: \*props/g, '');
        }

        let props = this.generatePropertiesCode();
        code = code.replace('{{properties}}', props.uniform);
        code = code.replace('{{properties_sampler}}', props.uniformSampler);
        code = code.replace('{{properties_mtl}}', props.mtl);

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
