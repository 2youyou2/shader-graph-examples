import { ShaderNode, ShaderSlotType, ShaderSlot } from "../../../base";

export default class StepNode extends ShaderNode {
    generateCode () {
        let edge = this.getInputValue(0);
        let In = this.getInputValue(1);
        return `${this.getOutputVarName(0)} = step(${edge}, ${In});`;
    }
}
