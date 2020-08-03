import { ShaderNode, ConcretePrecisionType } from "../../../base";

export default class ShapeNode extends ShaderNode {
    concretePrecisionType = ConcretePrecisionType.Fixed;

    depChunks = ['shape']
}
