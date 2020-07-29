import { ShaderNode, ShaderSlotType, ShaderSlot } from "../../../base";

export default class Vector1Node extends ShaderNode {
    fixedConcretePrecision = true;

    generateCode () {
        return `float ${this.getOutputVarName(0)} = ${this.getInputValue(0)};`;
    }
}

