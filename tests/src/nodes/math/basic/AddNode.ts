import { ShaderNode, ShaderSlotType, ShaderSlot } from "../../../base";

export default class AddNode extends ShaderNode {
    generateCode () {
        return `${this.getOutputVarDefine(0)} = ${this.getInputValue(0)} + ${this.getInputValue(1)};`;
    }
}

