import { ShaderNode, ShaderSlotType, ShaderSlot } from "../../../base";

export default class Vector3Node extends ShaderNode {
    constructor(data: any) {
        super(data);
    }

    generateCode () {
        return `vec3 ${this.getOutputVarName(0)} = ${this.getInputValue(0)};`;
    }
}

