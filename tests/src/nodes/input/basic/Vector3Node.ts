import { ShaderNode, ShaderSlotType, ShaderSlot } from "../../../base";

export default class Vector3Node extends ShaderNode {
    fixedConcretePrecision = true;

    generateCode () {
        let x = this.getInputValue(0);
        let y = this.getInputValue(1);
        let z = this.getInputValue(2);
        return `vec3 ${this.getOutputVarName(0)} = vec3(${x}, ${y}, ${z});`;
    }
}

