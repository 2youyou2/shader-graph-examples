import { ShaderNode, ShaderSlotType, ShaderSlot } from "../../../base";

export default class NegateNode extends ShaderNode {
    generateCode () {
        return `${this.getOutputVarDefine(0)} = -${this.getInputValue(0)};`;
    }
}
