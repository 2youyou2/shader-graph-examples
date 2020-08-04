"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const type_1 = require("../../type");
class RotateNode extends base_1.ShaderNode {
    constructor() {
        super(...arguments);
        this.concretePrecisionType = type_1.ConcretePrecisionType.Fixed;
        this.depChunks = ['uv'];
    }
    generateCode() {
        let UV;
        if (!this.inputSlots[0].connectSlot) {
            UV = 'v_uv';
        }
        else {
            UV = this.getInputValue(0);
        }
        let Center = this.getInputValue(1);
        let Rotation = this.getInputValue(2);
        return `vec2 ${this.getOutputVarName(0)} = rotateCoordinates(${UV}, ${Center}, ${Rotation});`;
    }
}
exports.default = RotateNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm90YXRlTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2Rlcy91di9Sb3RhdGVOb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXdDO0FBQ3hDLHFDQUFtRDtBQUVuRCxNQUFxQixVQUFXLFNBQVEsaUJBQVU7SUFBbEQ7O1FBQ0ksMEJBQXFCLEdBQUcsNEJBQXFCLENBQUMsS0FBSyxDQUFDO1FBQ3BELGNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBY3RCLENBQUM7SUFaRyxZQUFZO1FBQ1IsSUFBSSxFQUFFLENBQUM7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUU7WUFDakMsRUFBRSxHQUFHLE1BQU0sQ0FBQztTQUNmO2FBQ0k7WUFDRCxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QjtRQUNELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxPQUFPLFFBQVEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLE1BQU0sS0FBSyxRQUFRLElBQUksQ0FBQztJQUNsRyxDQUFDO0NBQ0o7QUFoQkQsNkJBZ0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hhZGVyTm9kZSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XHJcbmltcG9ydCB7IENvbmNyZXRlUHJlY2lzaW9uVHlwZSB9IGZyb20gXCIuLi8uLi90eXBlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3RhdGVOb2RlIGV4dGVuZHMgU2hhZGVyTm9kZSB7XHJcbiAgICBjb25jcmV0ZVByZWNpc2lvblR5cGUgPSBDb25jcmV0ZVByZWNpc2lvblR5cGUuRml4ZWQ7XHJcbiAgICBkZXBDaHVua3MgPSBbJ3V2J11cclxuXHJcbiAgICBnZW5lcmF0ZUNvZGUgKCkge1xyXG4gICAgICAgIGxldCBVVjtcclxuICAgICAgICBpZiAoIXRoaXMuaW5wdXRTbG90c1swXS5jb25uZWN0U2xvdCkge1xyXG4gICAgICAgICAgICBVViA9ICd2X3V2JztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIFVWID0gdGhpcy5nZXRJbnB1dFZhbHVlKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgQ2VudGVyID0gdGhpcy5nZXRJbnB1dFZhbHVlKDEpO1xyXG4gICAgICAgIGxldCBSb3RhdGlvbiA9IHRoaXMuZ2V0SW5wdXRWYWx1ZSgyKTtcclxuICAgICAgICByZXR1cm4gYHZlYzIgJHt0aGlzLmdldE91dHB1dFZhck5hbWUoMCl9ID0gcm90YXRlQ29vcmRpbmF0ZXMoJHtVVn0sICR7Q2VudGVyfSwgJHtSb3RhdGlvbn0pO2A7XHJcbiAgICB9XHJcbn1cclxuIl19