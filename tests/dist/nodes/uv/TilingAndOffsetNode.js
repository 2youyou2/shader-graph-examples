"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
class TilingAndOffsetNode extends base_1.ShaderNode {
    generateCode() {
        let UV = this.getInputValue(0);
        let Tiling = this.getInputValue(1);
        let Offset = this.getInputValue(2);
        return `vec2 ${this.getOutputVarName(0)} = ${UV} * ${Tiling} + ${Offset};`;
    }
}
exports.default = TilingAndOffsetNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGlsaW5nQW5kT2Zmc2V0Tm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2Rlcy91di9UaWxpbmdBbmRPZmZzZXROb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXdDO0FBRXhDLE1BQXFCLG1CQUFvQixTQUFRLGlCQUFVO0lBQ3ZELFlBQVk7UUFDUixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxPQUFPLFFBQVEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxNQUFNLE1BQU0sTUFBTSxHQUFHLENBQUM7SUFDL0UsQ0FBQztDQUNKO0FBUEQsc0NBT0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFkZXJOb2RlIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGluZ0FuZE9mZnNldE5vZGUgZXh0ZW5kcyBTaGFkZXJOb2RlIHtcclxuICAgIGdlbmVyYXRlQ29kZSAoKSB7XHJcbiAgICAgICAgbGV0IFVWID0gdGhpcy5nZXRJbnB1dFZhbHVlKDApO1xyXG4gICAgICAgIGxldCBUaWxpbmcgPSB0aGlzLmdldElucHV0VmFsdWUoMSk7XHJcbiAgICAgICAgbGV0IE9mZnNldCA9IHRoaXMuZ2V0SW5wdXRWYWx1ZSgyKTtcclxuICAgICAgICByZXR1cm4gYHZlYzIgJHt0aGlzLmdldE91dHB1dFZhck5hbWUoMCl9ID0gJHtVVn0gKiAke1RpbGluZ30gKyAke09mZnNldH07YDtcclxuICAgIH1cclxufVxyXG4iXX0=