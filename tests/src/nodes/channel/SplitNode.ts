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
        if (this.getOutputSlotWithSlotName('R')) {
            code += `float ${this.getOutputSlotWithSlotName('R')?.varName} = ${Value}.r;\n`;
        }
        if (this.getOutputSlotWithSlotName('G')) {
            code += `float ${this.getOutputSlotWithSlotName('G')?.varName} = ${Value}.g;\n`;
        }
        if (this.getOutputSlotWithSlotName('B')) {
            code += `float ${this.getOutputSlotWithSlotName('B')?.varName} = ${Value}.b;\n`;
        }
        if (this.getOutputSlotWithSlotName('A')) {
            code += `float ${this.getOutputSlotWithSlotName('A')?.varName} = ${Value}.a;\n`;
        }
        return code;
    }
}
