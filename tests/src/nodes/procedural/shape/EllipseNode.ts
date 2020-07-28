import { ShaderNode } from "../../../base";

export default class EllipseNode extends ShaderNode {
    generateCode () {
        let UV = this.getInputValue(0);
        let width = this.getInputValue(1);
        let height = this.getInputValue(2);
        return `ellipse(${UV}, ${width}, ${height}, ${this.getOutputVarName(0)});`;
    }
}
