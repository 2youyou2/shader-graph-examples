import { ShaderNode, ShaderSlotType, ShaderSlot } from "../../../base";

export default class AbsoluteNode extends ShaderNode {
    generateCode () {
        return `${this.getOutputVarName(0)} = abs(${this.getInputValue(0)});`;
    }
}
