import { ShaderNode, ConcretePrecisionType } from "../../../base";

export default class EllipseNode extends ShaderNode {
    concretePrecisionType = ConcretePrecisionType.Fixed;

    depChunks = ['noise']

    generateCode () {
        let uv = this.getInputValue(0);
        let scale = this.getInputValue(1);
        return `${this.getOutputVarDefine(0)} = simpleNoise(${uv}, ${scale});`;
    }
}
