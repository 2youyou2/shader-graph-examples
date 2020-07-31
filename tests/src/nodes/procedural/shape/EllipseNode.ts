import { ShaderNode } from "../../../base";

export default class EllipseNode extends ShaderNode {
    fixedConcretePrecision = true;
    
    generateCode () {
        let UV = this.getInputValue(0);
        let width = this.getInputValue(1);
        let height = this.getInputValue(2);
        return `${this.getOutputVarDefine(0)} = ellipse(${UV}, ${width}, ${height});`;
    }
}
