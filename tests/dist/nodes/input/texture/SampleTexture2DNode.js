"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InputNode_1 = __importDefault(require("../InputNode"));
var TextureType;
(function (TextureType) {
    TextureType[TextureType["Default"] = 0] = "Default";
    TextureType[TextureType["Normal"] = 1] = "Normal";
})(TextureType || (TextureType = {}));
var NormalSpace;
(function (NormalSpace) {
    NormalSpace[NormalSpace["Tangent"] = 0] = "Tangent";
    NormalSpace[NormalSpace["Object"] = 1] = "Object";
})(NormalSpace || (NormalSpace = {}));
class SampleTexture2DNode extends InputNode_1.default {
    generateCode() {
        let texture = this.getSlotWithSlotName('Texture');
        let rgba = this.getSlotWithSlotName('RGBA');
        let rgbaVarName = rgba === null || rgba === void 0 ? void 0 : rgba.varName;
        let code;
        if (!(texture === null || texture === void 0 ? void 0 : texture.connectSlot)) {
            code = `vec4 ${rgbaVarName} = vec4(1.);\n`;
        }
        else {
            let uv;
            if (!this.inputSlots[1].connectSlot) {
                uv = 'v_uv';
            }
            else {
                uv = this.getInputValue(1);
            }
            code = `vec4 ${rgbaVarName} = texture(${texture === null || texture === void 0 ? void 0 : texture.connectSlot.varName}, ${uv});\n`;
        }
        if (this.data.m_TextureType === TextureType.Normal && this.data.m_NormalMapSpace === NormalSpace.Tangent) {
            code += `${rgbaVarName}.xyz -= vec3(0.5);\n`;
            code += `${rgbaVarName}.xyz = \n`;
            code += `  ${rgbaVarName}.x * normalize(v_tangent) +\n`;
            code += `  ${rgbaVarName}.y * normalize(v_bitangent) +\n`;
            code += `  ${rgbaVarName}.z * normalize(v_normal);\n`;
        }
        let r = this.getSlotWithSlotName('R');
        if (r && r.connectSlot) {
            code += `float ${r.varName} = ${rgbaVarName}.r;\n`;
        }
        let g = this.getSlotWithSlotName('g');
        if (g && g.connectSlot) {
            code += `float ${g.varName} = ${rgbaVarName}.g;\n`;
        }
        let b = this.getSlotWithSlotName('b');
        if (b && b.connectSlot) {
            code += `float ${b.varName} = ${rgbaVarName}.b;\n`;
        }
        let a = this.getSlotWithSlotName('a');
        if (a && a.connectSlot) {
            code += `float ${a.varName} = ${rgbaVarName}.a;\n`;
        }
        return code;
    }
}
exports.default = SampleTexture2DNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2FtcGxlVGV4dHVyZTJETm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2Rlcy9pbnB1dC90ZXh0dXJlL1NhbXBsZVRleHR1cmUyRE5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2REFBcUM7QUFFckMsSUFBSyxXQUdKO0FBSEQsV0FBSyxXQUFXO0lBQ1osbURBQU8sQ0FBQTtJQUNQLGlEQUFNLENBQUE7QUFDVixDQUFDLEVBSEksV0FBVyxLQUFYLFdBQVcsUUFHZjtBQUVELElBQUssV0FHSjtBQUhELFdBQUssV0FBVztJQUNaLG1EQUFPLENBQUE7SUFDUCxpREFBTSxDQUFBO0FBQ1YsQ0FBQyxFQUhJLFdBQVcsS0FBWCxXQUFXLFFBR2Y7QUFFRCxNQUFxQixtQkFBb0IsU0FBUSxtQkFBUztJQUN0RCxZQUFZO1FBQ1IsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU1QyxJQUFJLFdBQVcsR0FBRyxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsT0FBTyxDQUFDO1FBQ2hDLElBQUksSUFBSSxDQUFDO1FBQ1QsSUFBSSxFQUFDLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxXQUFXLENBQUEsRUFBRTtZQUN2QixJQUFJLEdBQUcsUUFBUSxXQUFXLGdCQUFnQixDQUFDO1NBQzlDO2FBQ0k7WUFDRCxJQUFJLEVBQUUsQ0FBQztZQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRTtnQkFDakMsRUFBRSxHQUFHLE1BQU0sQ0FBQzthQUNmO2lCQUNJO2dCQUNELEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzlCO1lBQ0QsSUFBSSxHQUFHLFFBQVEsV0FBVyxjQUFjLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxXQUFXLENBQUMsT0FBTyxLQUFLLEVBQUUsTUFBTSxDQUFDO1NBQ3JGO1FBR0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsS0FBSyxXQUFXLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEtBQUssV0FBVyxDQUFDLE9BQU8sRUFBRTtZQUN0RyxJQUFJLElBQUksR0FBRyxXQUFXLHNCQUFzQixDQUFDO1lBQzdDLElBQUksSUFBSSxHQUFHLFdBQVcsV0FBVyxDQUFDO1lBQ2xDLElBQUksSUFBSSxLQUFLLFdBQVcsK0JBQStCLENBQUM7WUFDeEQsSUFBSSxJQUFJLEtBQUssV0FBVyxpQ0FBaUMsQ0FBQztZQUMxRCxJQUFJLElBQUksS0FBSyxXQUFXLDZCQUE2QixDQUFDO1NBQ3pEO1FBRUQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxJQUFJLFNBQVMsQ0FBQyxDQUFDLE9BQU8sTUFBTSxXQUFXLE9BQU8sQ0FBQztTQUN0RDtRQUNELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksSUFBSSxTQUFTLENBQUMsQ0FBQyxPQUFPLE1BQU0sV0FBVyxPQUFPLENBQUM7U0FDdEQ7UUFDRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLElBQUksU0FBUyxDQUFDLENBQUMsT0FBTyxNQUFNLFdBQVcsT0FBTyxDQUFDO1NBQ3REO1FBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxJQUFJLFNBQVMsQ0FBQyxDQUFDLE9BQU8sTUFBTSxXQUFXLE9BQU8sQ0FBQztTQUN0RDtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Q0FDSjtBQWpERCxzQ0FpREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5wdXROb2RlIGZyb20gXCIuLi9JbnB1dE5vZGVcIjtcclxuXHJcbmVudW0gVGV4dHVyZVR5cGUge1xyXG4gICAgRGVmYXVsdCxcclxuICAgIE5vcm1hbFxyXG59XHJcblxyXG5lbnVtIE5vcm1hbFNwYWNlIHtcclxuICAgIFRhbmdlbnQsXHJcbiAgICBPYmplY3RcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FtcGxlVGV4dHVyZTJETm9kZSBleHRlbmRzIElucHV0Tm9kZSB7XHJcbiAgICBnZW5lcmF0ZUNvZGUgKCkge1xyXG4gICAgICAgIGxldCB0ZXh0dXJlID0gdGhpcy5nZXRTbG90V2l0aFNsb3ROYW1lKCdUZXh0dXJlJyk7XHJcbiAgICAgICAgbGV0IHJnYmEgPSB0aGlzLmdldFNsb3RXaXRoU2xvdE5hbWUoJ1JHQkEnKTtcclxuXHJcbiAgICAgICAgbGV0IHJnYmFWYXJOYW1lID0gcmdiYT8udmFyTmFtZTtcclxuICAgICAgICBsZXQgY29kZTtcclxuICAgICAgICBpZiAoIXRleHR1cmU/LmNvbm5lY3RTbG90KSB7XHJcbiAgICAgICAgICAgIGNvZGUgPSBgdmVjNCAke3JnYmFWYXJOYW1lfSA9IHZlYzQoMS4pO1xcbmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgdXY7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pbnB1dFNsb3RzWzFdLmNvbm5lY3RTbG90KSB7XHJcbiAgICAgICAgICAgICAgICB1diA9ICd2X3V2JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHV2ID0gdGhpcy5nZXRJbnB1dFZhbHVlKDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvZGUgPSBgdmVjNCAke3JnYmFWYXJOYW1lfSA9IHRleHR1cmUoJHt0ZXh0dXJlPy5jb25uZWN0U2xvdC52YXJOYW1lfSwgJHt1dn0pO1xcbmA7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5tX1RleHR1cmVUeXBlID09PSBUZXh0dXJlVHlwZS5Ob3JtYWwgJiYgdGhpcy5kYXRhLm1fTm9ybWFsTWFwU3BhY2UgPT09IE5vcm1hbFNwYWNlLlRhbmdlbnQpIHtcclxuICAgICAgICAgICAgY29kZSArPSBgJHtyZ2JhVmFyTmFtZX0ueHl6IC09IHZlYzMoMC41KTtcXG5gO1xyXG4gICAgICAgICAgICBjb2RlICs9IGAke3JnYmFWYXJOYW1lfS54eXogPSBcXG5gO1xyXG4gICAgICAgICAgICBjb2RlICs9IGAgICR7cmdiYVZhck5hbWV9LnggKiBub3JtYWxpemUodl90YW5nZW50KSArXFxuYDtcclxuICAgICAgICAgICAgY29kZSArPSBgICAke3JnYmFWYXJOYW1lfS55ICogbm9ybWFsaXplKHZfYml0YW5nZW50KSArXFxuYDtcclxuICAgICAgICAgICAgY29kZSArPSBgICAke3JnYmFWYXJOYW1lfS56ICogbm9ybWFsaXplKHZfbm9ybWFsKTtcXG5gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHIgPSB0aGlzLmdldFNsb3RXaXRoU2xvdE5hbWUoJ1InKTtcclxuICAgICAgICBpZiAociAmJiByLmNvbm5lY3RTbG90KSB7XHJcbiAgICAgICAgICAgIGNvZGUgKz0gYGZsb2F0ICR7ci52YXJOYW1lfSA9ICR7cmdiYVZhck5hbWV9LnI7XFxuYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGcgPSB0aGlzLmdldFNsb3RXaXRoU2xvdE5hbWUoJ2cnKTtcclxuICAgICAgICBpZiAoZyAmJiBnLmNvbm5lY3RTbG90KSB7XHJcbiAgICAgICAgICAgIGNvZGUgKz0gYGZsb2F0ICR7Zy52YXJOYW1lfSA9ICR7cmdiYVZhck5hbWV9Lmc7XFxuYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGIgPSB0aGlzLmdldFNsb3RXaXRoU2xvdE5hbWUoJ2InKTtcclxuICAgICAgICBpZiAoYiAmJiBiLmNvbm5lY3RTbG90KSB7XHJcbiAgICAgICAgICAgIGNvZGUgKz0gYGZsb2F0ICR7Yi52YXJOYW1lfSA9ICR7cmdiYVZhck5hbWV9LmI7XFxuYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGEgPSB0aGlzLmdldFNsb3RXaXRoU2xvdE5hbWUoJ2EnKTtcclxuICAgICAgICBpZiAoYSAmJiBhLmNvbm5lY3RTbG90KSB7XHJcbiAgICAgICAgICAgIGNvZGUgKz0gYGZsb2F0ICR7YS52YXJOYW1lfSA9ICR7cmdiYVZhck5hbWV9LmE7XFxuYDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb2RlO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=