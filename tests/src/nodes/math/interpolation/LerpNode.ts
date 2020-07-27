import { ShaderNode, ShaderSlotType, ShaderSlot } from "../../../base";

export default class LerpNode extends ShaderNode {
    generateCode () {
        let A = this.getInputValue(0);
        let B = this.getInputValue(1);
        let T = this.getInputValue(2);
        return `${this.getOutputVarName(0)} = mix(${A}, ${B}, ${T});`;
    }
}

