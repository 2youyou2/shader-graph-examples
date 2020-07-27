import { ShaderNode, ShaderSlotType, ShaderSlot } from "../../../base";

export default class MaximumNode extends ShaderNode {
    generateCode () {
        let a = this.getInputValue(0);
        let b = this.getInputValue(1);
        return `${this.getOutputVarName(0)} = max(${a}, ${b});`;
    }
}

