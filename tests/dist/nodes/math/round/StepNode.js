"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
class StepNode extends base_1.ShaderNode {
    generateCode() {
        let edge = this.getInputValue(0);
        let In = this.getInputValue(1);
        return `${this.getOutputVarDefine(0)} = step(${edge}, ${In});`;
    }
}
exports.default = StepNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RlcE5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbm9kZXMvbWF0aC9yb3VuZC9TdGVwTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUF1RTtBQUV2RSxNQUFxQixRQUFTLFNBQVEsaUJBQVU7SUFDNUMsWUFBWTtRQUNSLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxXQUFXLElBQUksS0FBSyxFQUFFLElBQUksQ0FBQztJQUNuRSxDQUFDO0NBQ0o7QUFORCwyQkFNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoYWRlck5vZGUsIFNoYWRlclNsb3RUeXBlLCBTaGFkZXJTbG90IH0gZnJvbSBcIi4uLy4uLy4uL2Jhc2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0ZXBOb2RlIGV4dGVuZHMgU2hhZGVyTm9kZSB7XHJcbiAgICBnZW5lcmF0ZUNvZGUgKCkge1xyXG4gICAgICAgIGxldCBlZGdlID0gdGhpcy5nZXRJbnB1dFZhbHVlKDApO1xyXG4gICAgICAgIGxldCBJbiA9IHRoaXMuZ2V0SW5wdXRWYWx1ZSgxKTtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5nZXRPdXRwdXRWYXJEZWZpbmUoMCl9ID0gc3RlcCgke2VkZ2V9LCAke0lufSk7YDtcclxuICAgIH1cclxufVxyXG4iXX0=