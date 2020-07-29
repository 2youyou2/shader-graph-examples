import { ShaderNode, ShaderSlotType, ShaderSlot } from "../../../base";

export default class NormalizeNode extends ShaderNode {
    generateCode () {
        return `${this.getOutputVarDefine(0)} = 1. / (${this.getInputValue(0)} * ${this.getInputValue(0)});`;
    }
}
