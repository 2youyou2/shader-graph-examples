import { ShaderNode, ShaderSlotType, ShaderSlot } from "../../../base";

export default class MinimumNode extends ShaderNode {
    generateCode () {
        let In = this.getInputValue(0);
        return `${this.getOutputVarName(0)} = 1. - ${In};`;
    }
}

