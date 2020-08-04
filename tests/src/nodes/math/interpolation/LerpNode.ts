import { ShaderNode } from "../../../base";

export default class LerpNode extends ShaderNode {
    generateCode () {
        let A = this.getInputValue(0);
        let B = this.getInputValue(1);
        let T = this.getInputValue(2);
        return `${this.getOutputVarDefine(0)} = mix(${A}, ${B}, ${T});`;
    }
}

