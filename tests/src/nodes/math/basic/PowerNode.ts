import { ShaderNode, ShaderSlotType, ShaderSlot } from "../../../base";

export default class PowerNode extends ShaderNode {
    generateCode () {
        return `${this.getOutputVarName(0)} = pow(${this.getInputValue(0)}, ${this.getInputValue(1)});`;
    }
}

