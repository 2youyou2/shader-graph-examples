"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
class CeilingNode extends base_1.ShaderNode {
    generateCode() {
        let In = this.getInputValue(0);
        return `${this.getOutputVarDefine(0)} = ceil(${In});`;
    }
}
exports.default = CeilingNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2VpbGluZ05vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbm9kZXMvbWF0aC9yb3VuZC9DZWlsaW5nTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUF1RTtBQUV2RSxNQUFxQixXQUFZLFNBQVEsaUJBQVU7SUFDL0MsWUFBWTtRQUNSLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0IsT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQztJQUMxRCxDQUFDO0NBQ0o7QUFMRCw4QkFLQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoYWRlck5vZGUsIFNoYWRlclNsb3RUeXBlLCBTaGFkZXJTbG90IH0gZnJvbSBcIi4uLy4uLy4uL2Jhc2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENlaWxpbmdOb2RlIGV4dGVuZHMgU2hhZGVyTm9kZSB7XHJcbiAgICBnZW5lcmF0ZUNvZGUgKCkge1xyXG4gICAgICAgIGxldCBJbiA9IHRoaXMuZ2V0SW5wdXRWYWx1ZSgwKTtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5nZXRPdXRwdXRWYXJEZWZpbmUoMCl9ID0gY2VpbCgke0lufSk7YDtcclxuICAgIH1cclxufVxyXG5cclxuIl19