import { ShaderNode, ShaderSlotType, ShaderSlot } from "../../../base";

export default class HyperbolicCosineNode extends ShaderNode {
    generateCode () {
        let In = this.getInputValue(0);
        return `${this.getOutputVarName(0)} = sinh(${In});`;
    }
}
