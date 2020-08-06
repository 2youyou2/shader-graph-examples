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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2FtcGxlVGV4dHVyZTJETm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NvdXJjZS9wYW5lbC9vcGVyYXRpb24vbm9kZXMvaW5wdXQvdGV4dHVyZS9TYW1wbGVUZXh0dXJlMkROb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNkRBQXFDO0FBRXJDLElBQUssV0FHSjtBQUhELFdBQUssV0FBVztJQUNaLG1EQUFPLENBQUE7SUFDUCxpREFBTSxDQUFBO0FBQ1YsQ0FBQyxFQUhJLFdBQVcsS0FBWCxXQUFXLFFBR2Y7QUFFRCxJQUFLLFdBR0o7QUFIRCxXQUFLLFdBQVc7SUFDWixtREFBTyxDQUFBO0lBQ1AsaURBQU0sQ0FBQTtBQUNWLENBQUMsRUFISSxXQUFXLEtBQVgsV0FBVyxRQUdmO0FBRUQsTUFBcUIsbUJBQW9CLFNBQVEsbUJBQVM7SUFDdEQsWUFBWTtRQUNSLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFNUMsSUFBSSxXQUFXLEdBQUcsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLE9BQU8sQ0FBQztRQUNoQyxJQUFJLElBQUksQ0FBQztRQUNULElBQUksRUFBQyxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsV0FBVyxDQUFBLEVBQUU7WUFDdkIsSUFBSSxHQUFHLFFBQVEsV0FBVyxnQkFBZ0IsQ0FBQztTQUM5QzthQUNJO1lBQ0QsSUFBSSxFQUFFLENBQUM7WUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUU7Z0JBQ2pDLEVBQUUsR0FBRyxNQUFNLENBQUM7YUFDZjtpQkFDSTtnQkFDRCxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM5QjtZQUNELElBQUksR0FBRyxRQUFRLFdBQVcsY0FBYyxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsV0FBVyxDQUFDLE9BQU8sS0FBSyxFQUFFLE1BQU0sQ0FBQztTQUNyRjtRQUdELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEtBQUssV0FBVyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixLQUFLLFdBQVcsQ0FBQyxPQUFPLEVBQUU7WUFDdEcsSUFBSSxJQUFJLEdBQUcsV0FBVyxzQkFBc0IsQ0FBQztZQUM3QyxJQUFJLElBQUksR0FBRyxXQUFXLFdBQVcsQ0FBQztZQUNsQyxJQUFJLElBQUksS0FBSyxXQUFXLCtCQUErQixDQUFDO1lBQ3hELElBQUksSUFBSSxLQUFLLFdBQVcsaUNBQWlDLENBQUM7WUFDMUQsSUFBSSxJQUFJLEtBQUssV0FBVyw2QkFBNkIsQ0FBQztTQUN6RDtRQUVELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksSUFBSSxTQUFTLENBQUMsQ0FBQyxPQUFPLE1BQU0sV0FBVyxPQUFPLENBQUM7U0FDdEQ7UUFDRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLElBQUksU0FBUyxDQUFDLENBQUMsT0FBTyxNQUFNLFdBQVcsT0FBTyxDQUFDO1NBQ3REO1FBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxJQUFJLFNBQVMsQ0FBQyxDQUFDLE9BQU8sTUFBTSxXQUFXLE9BQU8sQ0FBQztTQUN0RDtRQUNELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksSUFBSSxTQUFTLENBQUMsQ0FBQyxPQUFPLE1BQU0sV0FBVyxPQUFPLENBQUM7U0FDdEQ7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0NBQ0o7QUFqREQsc0NBaURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElucHV0Tm9kZSBmcm9tIFwiLi4vSW5wdXROb2RlXCI7XHJcblxyXG5lbnVtIFRleHR1cmVUeXBlIHtcclxuICAgIERlZmF1bHQsXHJcbiAgICBOb3JtYWxcclxufVxyXG5cclxuZW51bSBOb3JtYWxTcGFjZSB7XHJcbiAgICBUYW5nZW50LFxyXG4gICAgT2JqZWN0XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhbXBsZVRleHR1cmUyRE5vZGUgZXh0ZW5kcyBJbnB1dE5vZGUge1xyXG4gICAgZ2VuZXJhdGVDb2RlICgpIHtcclxuICAgICAgICBsZXQgdGV4dHVyZSA9IHRoaXMuZ2V0U2xvdFdpdGhTbG90TmFtZSgnVGV4dHVyZScpO1xyXG4gICAgICAgIGxldCByZ2JhID0gdGhpcy5nZXRTbG90V2l0aFNsb3ROYW1lKCdSR0JBJyk7XHJcblxyXG4gICAgICAgIGxldCByZ2JhVmFyTmFtZSA9IHJnYmE/LnZhck5hbWU7XHJcbiAgICAgICAgbGV0IGNvZGU7XHJcbiAgICAgICAgaWYgKCF0ZXh0dXJlPy5jb25uZWN0U2xvdCkge1xyXG4gICAgICAgICAgICBjb2RlID0gYHZlYzQgJHtyZ2JhVmFyTmFtZX0gPSB2ZWM0KDEuKTtcXG5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHV2O1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5wdXRTbG90c1sxXS5jb25uZWN0U2xvdCkge1xyXG4gICAgICAgICAgICAgICAgdXYgPSAndl91dic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1diA9IHRoaXMuZ2V0SW5wdXRWYWx1ZSgxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb2RlID0gYHZlYzQgJHtyZ2JhVmFyTmFtZX0gPSB0ZXh0dXJlKCR7dGV4dHVyZT8uY29ubmVjdFNsb3QudmFyTmFtZX0sICR7dXZ9KTtcXG5gO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEubV9UZXh0dXJlVHlwZSA9PT0gVGV4dHVyZVR5cGUuTm9ybWFsICYmIHRoaXMuZGF0YS5tX05vcm1hbE1hcFNwYWNlID09PSBOb3JtYWxTcGFjZS5UYW5nZW50KSB7XHJcbiAgICAgICAgICAgIGNvZGUgKz0gYCR7cmdiYVZhck5hbWV9Lnh5eiAtPSB2ZWMzKDAuNSk7XFxuYDtcclxuICAgICAgICAgICAgY29kZSArPSBgJHtyZ2JhVmFyTmFtZX0ueHl6ID0gXFxuYDtcclxuICAgICAgICAgICAgY29kZSArPSBgICAke3JnYmFWYXJOYW1lfS54ICogbm9ybWFsaXplKHZfdGFuZ2VudCkgK1xcbmA7XHJcbiAgICAgICAgICAgIGNvZGUgKz0gYCAgJHtyZ2JhVmFyTmFtZX0ueSAqIG5vcm1hbGl6ZSh2X2JpdGFuZ2VudCkgK1xcbmA7XHJcbiAgICAgICAgICAgIGNvZGUgKz0gYCAgJHtyZ2JhVmFyTmFtZX0ueiAqIG5vcm1hbGl6ZSh2X25vcm1hbCk7XFxuYDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByID0gdGhpcy5nZXRTbG90V2l0aFNsb3ROYW1lKCdSJyk7XHJcbiAgICAgICAgaWYgKHIgJiYgci5jb25uZWN0U2xvdCkge1xyXG4gICAgICAgICAgICBjb2RlICs9IGBmbG9hdCAke3IudmFyTmFtZX0gPSAke3JnYmFWYXJOYW1lfS5yO1xcbmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBnID0gdGhpcy5nZXRTbG90V2l0aFNsb3ROYW1lKCdnJyk7XHJcbiAgICAgICAgaWYgKGcgJiYgZy5jb25uZWN0U2xvdCkge1xyXG4gICAgICAgICAgICBjb2RlICs9IGBmbG9hdCAke2cudmFyTmFtZX0gPSAke3JnYmFWYXJOYW1lfS5nO1xcbmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBiID0gdGhpcy5nZXRTbG90V2l0aFNsb3ROYW1lKCdiJyk7XHJcbiAgICAgICAgaWYgKGIgJiYgYi5jb25uZWN0U2xvdCkge1xyXG4gICAgICAgICAgICBjb2RlICs9IGBmbG9hdCAke2IudmFyTmFtZX0gPSAke3JnYmFWYXJOYW1lfS5iO1xcbmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhID0gdGhpcy5nZXRTbG90V2l0aFNsb3ROYW1lKCdhJyk7XHJcbiAgICAgICAgaWYgKGEgJiYgYS5jb25uZWN0U2xvdCkge1xyXG4gICAgICAgICAgICBjb2RlICs9IGBmbG9hdCAke2EudmFyTmFtZX0gPSAke3JnYmFWYXJOYW1lfS5hO1xcbmA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY29kZTtcclxuICAgIH1cclxufVxyXG5cclxuIl19