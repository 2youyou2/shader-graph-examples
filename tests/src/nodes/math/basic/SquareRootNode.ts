import { ShaderNode, ShaderSlotType, ShaderSlot } from "../../../base";

export default class SquareRootNode extends ShaderNode {
    generateCode () {
        return `${this.getOutputVarName(0)} = sqrt(${this.getInputValue(0)}, ${this.getInputValue(1)});`;
    }
}

