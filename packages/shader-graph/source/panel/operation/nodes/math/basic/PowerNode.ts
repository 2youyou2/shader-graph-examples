import { ShaderNode } from "../../../base";

export default class PowerNode extends ShaderNode {
    generateCode () {
        return `${this.getOutputVarDefine(0)} = pow(${this.getInputValue(0)}, ${this.getInputValue(1)});`;
    }
}

