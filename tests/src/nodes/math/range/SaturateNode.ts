import { ShaderNode, ShaderSlotType, ShaderSlot } from "../../../base";

export default class SaturateNode extends ShaderNode {
    generateCode () {
        let IN = this.getInputValue(0);
        return `${this.getOutputVarName(0)} = saturate(${IN});`;
    }
}

