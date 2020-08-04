import InputNode from "../InputNode";

export default class SampleTexture2DNode extends InputNode {
    generateCode () {
        let texture = this.getSlotWithSlotName('Texture');
        let rgba = this.getSlotWithSlotName('RGBA');

        let code;
        if (!texture?.connectSlot) {
            code = `vec4 ${rgba?.varName} = vec4(1.);\n`;
        }
        else {
            let uv;
            if (!this.inputSlots[1].connectSlot) {
                uv = 'v_uv';
            }
            else {
                uv = this.getInputValue(1);
            }
            code = `vec4 ${rgba?.varName} = texture(${texture?.connectSlot.varName}, ${uv});\n`;
        }

        let r = this.getSlotWithSlotName('R');
        if (r && r.connectSlot) {
            code += `float ${r.varName} = ${rgba?.varName}.r;\n`;
        }
        let g = this.getSlotWithSlotName('g');
        if (g && g.connectSlot) {
            code += `float ${g.varName} = ${rgba?.varName}.g;\n`;
        }
        let b = this.getSlotWithSlotName('b');
        if (b && b.connectSlot) {
            code += `float ${b.varName} = ${rgba?.varName}.b;\n`;
        }
        let a = this.getSlotWithSlotName('a');
        if (a && a.connectSlot) {
            code += `float ${a.varName} = ${rgba?.varName}.a;\n`;
        }

        return code;
    }
}

