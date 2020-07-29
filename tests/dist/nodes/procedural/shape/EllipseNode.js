"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
class EllipseNode extends base_1.ShaderNode {
    generateCode() {
        let UV = this.getInputValue(0);
        let width = this.getInputValue(1);
        let height = this.getInputValue(2);
        return `${this.getOutputVarDefine(0)} = ellipse(${UV}, ${width}, ${height});`;
    }
}
exports.default = EllipseNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWxsaXBzZU5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbm9kZXMvcHJvY2VkdXJhbC9zaGFwZS9FbGxpcHNlTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUEyQztBQUUzQyxNQUFxQixXQUFZLFNBQVEsaUJBQVU7SUFDL0MsWUFBWTtRQUNSLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE9BQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxLQUFLLEtBQUssS0FBSyxNQUFNLElBQUksQ0FBQztJQUNsRixDQUFDO0NBQ0o7QUFQRCw4QkFPQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoYWRlck5vZGUgfSBmcm9tIFwiLi4vLi4vLi4vYmFzZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxsaXBzZU5vZGUgZXh0ZW5kcyBTaGFkZXJOb2RlIHtcclxuICAgIGdlbmVyYXRlQ29kZSAoKSB7XHJcbiAgICAgICAgbGV0IFVWID0gdGhpcy5nZXRJbnB1dFZhbHVlKDApO1xyXG4gICAgICAgIGxldCB3aWR0aCA9IHRoaXMuZ2V0SW5wdXRWYWx1ZSgxKTtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5nZXRJbnB1dFZhbHVlKDIpO1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmdldE91dHB1dFZhckRlZmluZSgwKX0gPSBlbGxpcHNlKCR7VVZ9LCAke3dpZHRofSwgJHtoZWlnaHR9KTtgO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==