import { ShaderNode, ShaderSlotType, ShaderSlot, ConcretePrecisionType } from "../../../base";

export default class LengthNode extends ShaderNode {
    concretePrecisionType = ConcretePrecisionType.Fixed;

    generateCode () {
        return `${this.getOutputVarDefine(0)} = length(${this.getInputValue(0)});`;
    }
}
