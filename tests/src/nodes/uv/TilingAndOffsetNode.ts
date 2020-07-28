import { ShaderNode } from "../../base";

export default class TilingAndOffsetNode extends ShaderNode {
    generateCode () {
        let UV = this.getInputValue(0);
        let Tiling = this.getInputValue(1);
        let Offset = this.getInputValue(2);
        return `vec2 ${this.getOutputVarName(0)} = ${UV} * ${Tiling} + ${Offset};`;
    }
}
