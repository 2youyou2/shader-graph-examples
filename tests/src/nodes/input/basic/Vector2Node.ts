import { ShaderNode, ShaderSlotType, ShaderSlot } from "../../../base";

export default class Vector2Node extends ShaderNode {
    constructor(data: any) {
        super(data);
    }

    generateCode () {
        return `vec2 ${this.getOutputVarName(0)} = ${this.getInputValue(0)};`;
    }
}

