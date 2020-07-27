import { ShaderNode, ShaderSlotType, ShaderSlot } from "../../../base";

export default class PosterizeNode extends ShaderNode {
    generateCode () {
        return `${this.getOutputVarName(0)} = floor(${this.getInputValue(0)} / (1. / ${this.getInputValue(1)})) * (1. / ${this.getInputValue(1)});`;
    }
}
