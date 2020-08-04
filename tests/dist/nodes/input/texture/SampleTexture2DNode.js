"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InputNode_1 = __importDefault(require("../InputNode"));
class SampleTexture2DNode extends InputNode_1.default {
    generateCode() {
        let texture = this.getSlotWithSlotName('Texture');
        let rgba = this.getSlotWithSlotName('RGBA');
        let code;
        if (!(texture === null || texture === void 0 ? void 0 : texture.connectSlot)) {
            code = `vec4 ${rgba === null || rgba === void 0 ? void 0 : rgba.varName} = vec4(1.);\n`;
        }
        else {
            let uv;
            if (!this.inputSlots[1].connectSlot) {
                uv = 'v_uv';
            }
            else {
                uv = this.getInputValue(1);
            }
            code = `vec4 ${rgba === null || rgba === void 0 ? void 0 : rgba.varName} = texture(${texture === null || texture === void 0 ? void 0 : texture.connectSlot.varName}, ${uv});\n`;
        }
        let r = this.getSlotWithSlotName('R');
        if (r && r.connectSlot) {
            code += `float ${r.varName} = ${rgba === null || rgba === void 0 ? void 0 : rgba.varName}.r;\n`;
        }
        let g = this.getSlotWithSlotName('g');
        if (g && g.connectSlot) {
            code += `float ${g.varName} = ${rgba === null || rgba === void 0 ? void 0 : rgba.varName}.g;\n`;
        }
        let b = this.getSlotWithSlotName('b');
        if (b && b.connectSlot) {
            code += `float ${b.varName} = ${rgba === null || rgba === void 0 ? void 0 : rgba.varName}.b;\n`;
        }
        let a = this.getSlotWithSlotName('a');
        if (a && a.connectSlot) {
            code += `float ${a.varName} = ${rgba === null || rgba === void 0 ? void 0 : rgba.varName}.a;\n`;
        }
        return code;
    }
}
exports.default = SampleTexture2DNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2FtcGxlVGV4dHVyZTJETm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2Rlcy9pbnB1dC90ZXh0dXJlL1NhbXBsZVRleHR1cmUyRE5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2REFBcUM7QUFFckMsTUFBcUIsbUJBQW9CLFNBQVEsbUJBQVM7SUFDdEQsWUFBWTtRQUNSLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFNUMsSUFBSSxJQUFJLENBQUM7UUFDVCxJQUFJLEVBQUMsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFdBQVcsQ0FBQSxFQUFFO1lBQ3ZCLElBQUksR0FBRyxRQUFRLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxPQUFPLGdCQUFnQixDQUFDO1NBQ2hEO2FBQ0k7WUFDRCxJQUFJLEVBQUUsQ0FBQztZQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRTtnQkFDakMsRUFBRSxHQUFHLE1BQU0sQ0FBQzthQUNmO2lCQUNJO2dCQUNELEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzlCO1lBQ0QsSUFBSSxHQUFHLFFBQVEsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLE9BQU8sY0FBYyxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsV0FBVyxDQUFDLE9BQU8sS0FBSyxFQUFFLE1BQU0sQ0FBQztTQUN2RjtRQUVELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksSUFBSSxTQUFTLENBQUMsQ0FBQyxPQUFPLE1BQU0sSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLE9BQU8sT0FBTyxDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxJQUFJLFNBQVMsQ0FBQyxDQUFDLE9BQU8sTUFBTSxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsT0FBTyxPQUFPLENBQUM7U0FDeEQ7UUFDRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLElBQUksU0FBUyxDQUFDLENBQUMsT0FBTyxNQUFNLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxPQUFPLE9BQU8sQ0FBQztTQUN4RDtRQUNELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksSUFBSSxTQUFTLENBQUMsQ0FBQyxPQUFPLE1BQU0sSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLE9BQU8sT0FBTyxDQUFDO1NBQ3hEO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztDQUNKO0FBdkNELHNDQXVDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnB1dE5vZGUgZnJvbSBcIi4uL0lucHV0Tm9kZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FtcGxlVGV4dHVyZTJETm9kZSBleHRlbmRzIElucHV0Tm9kZSB7XHJcbiAgICBnZW5lcmF0ZUNvZGUgKCkge1xyXG4gICAgICAgIGxldCB0ZXh0dXJlID0gdGhpcy5nZXRTbG90V2l0aFNsb3ROYW1lKCdUZXh0dXJlJyk7XHJcbiAgICAgICAgbGV0IHJnYmEgPSB0aGlzLmdldFNsb3RXaXRoU2xvdE5hbWUoJ1JHQkEnKTtcclxuXHJcbiAgICAgICAgbGV0IGNvZGU7XHJcbiAgICAgICAgaWYgKCF0ZXh0dXJlPy5jb25uZWN0U2xvdCkge1xyXG4gICAgICAgICAgICBjb2RlID0gYHZlYzQgJHtyZ2JhPy52YXJOYW1lfSA9IHZlYzQoMS4pO1xcbmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgdXY7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pbnB1dFNsb3RzWzFdLmNvbm5lY3RTbG90KSB7XHJcbiAgICAgICAgICAgICAgICB1diA9ICd2X3V2JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHV2ID0gdGhpcy5nZXRJbnB1dFZhbHVlKDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvZGUgPSBgdmVjNCAke3JnYmE/LnZhck5hbWV9ID0gdGV4dHVyZSgke3RleHR1cmU/LmNvbm5lY3RTbG90LnZhck5hbWV9LCAke3V2fSk7XFxuYDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByID0gdGhpcy5nZXRTbG90V2l0aFNsb3ROYW1lKCdSJyk7XHJcbiAgICAgICAgaWYgKHIgJiYgci5jb25uZWN0U2xvdCkge1xyXG4gICAgICAgICAgICBjb2RlICs9IGBmbG9hdCAke3IudmFyTmFtZX0gPSAke3JnYmE/LnZhck5hbWV9LnI7XFxuYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGcgPSB0aGlzLmdldFNsb3RXaXRoU2xvdE5hbWUoJ2cnKTtcclxuICAgICAgICBpZiAoZyAmJiBnLmNvbm5lY3RTbG90KSB7XHJcbiAgICAgICAgICAgIGNvZGUgKz0gYGZsb2F0ICR7Zy52YXJOYW1lfSA9ICR7cmdiYT8udmFyTmFtZX0uZztcXG5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYiA9IHRoaXMuZ2V0U2xvdFdpdGhTbG90TmFtZSgnYicpO1xyXG4gICAgICAgIGlmIChiICYmIGIuY29ubmVjdFNsb3QpIHtcclxuICAgICAgICAgICAgY29kZSArPSBgZmxvYXQgJHtiLnZhck5hbWV9ID0gJHtyZ2JhPy52YXJOYW1lfS5iO1xcbmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhID0gdGhpcy5nZXRTbG90V2l0aFNsb3ROYW1lKCdhJyk7XHJcbiAgICAgICAgaWYgKGEgJiYgYS5jb25uZWN0U2xvdCkge1xyXG4gICAgICAgICAgICBjb2RlICs9IGBmbG9hdCAke2EudmFyTmFtZX0gPSAke3JnYmE/LnZhck5hbWV9LmE7XFxuYDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb2RlO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=