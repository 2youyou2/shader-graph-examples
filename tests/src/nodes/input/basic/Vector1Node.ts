import { ShaderNode, ShaderSlotType, ShaderSlot } from "../../../base";

export class Vector1Node extends ShaderNode {
    constructor(data: any) {
        super(data);
    }

    generateCode () {
        return `float ${this.getOutputVarName(0)} = ${this.getInputValue(0)};`;
    }
}

