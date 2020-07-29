import { ShaderNode, ShaderSlotType, ShaderSlot } from "../../../base";

export default class SaturateNode extends ShaderNode {
    generateCode () {
        let In = this.getInputValue(0);
        let InMinMax = this.getInputValue(0);
        let OutMinMax = this.getInputValue(0);
        return `${this.getOutputVarDefine(0)} = ${OutMinMax}.x + (${In} - ${InMinMax}.x) * (${OutMinMax}.y - ${OutMinMax}.x) / (${InMinMax}.y - ${InMinMax}.x);`;
    }
}

