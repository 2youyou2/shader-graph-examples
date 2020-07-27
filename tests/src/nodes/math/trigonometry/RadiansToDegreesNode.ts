import { ShaderNode, ShaderSlotType, ShaderSlot } from "../../../base";

export default class RadiansToDegreesNode extends ShaderNode {
    generateCode () {
        let In = this.getInputValue(0);
        return `${this.getOutputVarName(0)} = degrees(${In});`;
    }
}
