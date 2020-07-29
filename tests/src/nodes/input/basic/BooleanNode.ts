import { ShaderNode, ShaderSlotType, ShaderSlot } from "../../../base";

export default class BooleanNode extends ShaderNode {
    fixedConcretePrecision = true;

    generateCode () {
        return `bool ${this.getOutputVarName(0)} = ${this.getInputValue(0)};`;
    }
}

