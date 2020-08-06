"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
class TilingAndOffsetNode extends base_1.ShaderNode {
    generateCode() {
        let UV;
        if (!this.inputSlots[0].connectSlot) {
            UV = 'v_uv';
        }
        else {
            UV = this.getInputValue(0);
        }
        let Tiling = this.getInputValue(1);
        let Offset = this.getInputValue(2);
        return `vec2 ${this.getOutputVarName(0)} = ${UV} * ${Tiling} + ${Offset};`;
    }
}
exports.default = TilingAndOffsetNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGlsaW5nQW5kT2Zmc2V0Tm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NvdXJjZS9wYW5lbC9vcGVyYXRpb24vbm9kZXMvdXYvVGlsaW5nQW5kT2Zmc2V0Tm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUF3QztBQUV4QyxNQUFxQixtQkFBb0IsU0FBUSxpQkFBVTtJQUN2RCxZQUFZO1FBQ1IsSUFBSSxFQUFFLENBQUM7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUU7WUFDakMsRUFBRSxHQUFHLE1BQU0sQ0FBQztTQUNmO2FBQ0k7WUFDRCxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QjtRQUNELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxPQUFPLFFBQVEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxNQUFNLE1BQU0sTUFBTSxHQUFHLENBQUM7SUFDL0UsQ0FBQztDQUNKO0FBYkQsc0NBYUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFkZXJOb2RlIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGluZ0FuZE9mZnNldE5vZGUgZXh0ZW5kcyBTaGFkZXJOb2RlIHtcclxuICAgIGdlbmVyYXRlQ29kZSAoKSB7XHJcbiAgICAgICAgbGV0IFVWO1xyXG4gICAgICAgIGlmICghdGhpcy5pbnB1dFNsb3RzWzBdLmNvbm5lY3RTbG90KSB7XHJcbiAgICAgICAgICAgIFVWID0gJ3ZfdXYnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgVVYgPSB0aGlzLmdldElucHV0VmFsdWUoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBUaWxpbmcgPSB0aGlzLmdldElucHV0VmFsdWUoMSk7XHJcbiAgICAgICAgbGV0IE9mZnNldCA9IHRoaXMuZ2V0SW5wdXRWYWx1ZSgyKTtcclxuICAgICAgICByZXR1cm4gYHZlYzIgJHt0aGlzLmdldE91dHB1dFZhck5hbWUoMCl9ID0gJHtVVn0gKiAke1RpbGluZ30gKyAke09mZnNldH07YDtcclxuICAgIH1cclxufVxyXG4iXX0=