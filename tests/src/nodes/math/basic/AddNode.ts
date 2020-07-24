import { ShaderNode, ShaderSlotType, ShaderSlot } from "../../../base";

export class AddNode extends ShaderNode {
    constructor(data: any) {
        super(data);
    }

    generateCode () {
        return `add(${this.getInputValue(0)}, ${this.getInputValue(1)}, ${this.getOutputVarName(0)});`;
    }
}

