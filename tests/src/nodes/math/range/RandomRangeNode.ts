import { ShaderNode, ShaderSlotType, ShaderSlot } from "../../../base";

export default class RandomRangeNode extends ShaderNode {
    generateCode () {
        let seed = this.getInputValue(0);
        let min = this.getInputValue(0);
        let max = this.getInputValue(0);
        return `randomRange(${seed}, ${min}, ${max}, ${this.getOutputVarName(0)});`;
    }
}

