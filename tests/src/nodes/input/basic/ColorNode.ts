import { ShaderNode, ShaderSlotType, ShaderSlot } from "../../../base";

export default class BooleanNode extends ShaderNode {
    constructor(data: any) {
        super(data);
    }

    generateCode () {
        return `vec4 ${this.getOutputVarName(0)} = vec4(${this.getInputValue(0)}, ${this.getInputValue(1)}, ${this.getInputValue(2)}, ${this.getInputValue(3)});`;
    }
}

