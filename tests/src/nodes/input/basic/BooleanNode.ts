import { ShaderNode, ShaderSlotType, ShaderSlot } from "../../../base";

export default class BooleanNode extends ShaderNode {
    constructor(data: any) {
        super(data);
    }

    generateCode () {
        return `bool ${this.getOutputVarName(0)} = ${this.getInputValue(0)};`;
    }
}

