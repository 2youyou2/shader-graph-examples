"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
class MaximumNode extends base_1.ShaderNode {
    generateCode() {
        let a = this.getInputValue(0);
        let b = this.getInputValue(1);
        return `${this.getOutputVarDefine(0)} = max(${a}, ${b});`;
    }
}
exports.default = MaximumNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWF4aW11bU5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbm9kZXMvbWF0aC9yYW5nZS9NYXhpbXVtTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUF1RTtBQUV2RSxNQUFxQixXQUFZLFNBQVEsaUJBQVU7SUFDL0MsWUFBWTtRQUNSLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUM5RCxDQUFDO0NBQ0o7QUFORCw4QkFNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoYWRlck5vZGUsIFNoYWRlclNsb3RUeXBlLCBTaGFkZXJTbG90IH0gZnJvbSBcIi4uLy4uLy4uL2Jhc2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1heGltdW1Ob2RlIGV4dGVuZHMgU2hhZGVyTm9kZSB7XHJcbiAgICBnZW5lcmF0ZUNvZGUgKCkge1xyXG4gICAgICAgIGxldCBhID0gdGhpcy5nZXRJbnB1dFZhbHVlKDApO1xyXG4gICAgICAgIGxldCBiID0gdGhpcy5nZXRJbnB1dFZhbHVlKDEpO1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmdldE91dHB1dFZhckRlZmluZSgwKX0gPSBtYXgoJHthfSwgJHtifSk7YDtcclxuICAgIH1cclxufVxyXG5cclxuIl19