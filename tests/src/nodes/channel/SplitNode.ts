import { ShaderNode } from "../../base";

export default class SplitNode extends ShaderNode {
    fixedConcretePrecision = true;

    constructor (data) {
        super(data);
    }

    calcConcretePrecision () {
        super.calcConcretePrecision()
    }

    generateCode () {
        let Value = this.getInputValue(0);
        let code = '';
        let slotR = this.getOutputSlotWithSlotName('R');
        let slotG = this.getOutputSlotWithSlotName('G');
        let slotB = this.getOutputSlotWithSlotName('B');
        let slotA = this.getOutputSlotWithSlotName('A');
        if (slotR && slotR.connectSlot) {
            code += `float ${slotR?.varName} = ${Value}.r;\n`;
        }
        if (slotG && slotG.connectSlot) {
            code += `float ${slotG?.varName} = ${Value}.g;\n`;
        }
        if (slotB && slotB.connectSlot) {
            code += `float ${slotB?.varName} = ${Value}.b;\n`;
        }
        if (slotA && slotA.connectSlot) {
            code += `float ${slotA?.varName} = ${Value}.a;\n`;
        }
        return code;
    }
}
