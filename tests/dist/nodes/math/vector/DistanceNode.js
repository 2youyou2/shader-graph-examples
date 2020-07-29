"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
class DistanceNode extends base_1.ShaderNode {
    generateCode() {
        let A = this.getInputValue(0);
        let B = this.getInputValue(1);
        return `${this.getOutputVarDefine(0)} = distance(${A}, ${B});`;
    }
}
exports.default = DistanceNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlzdGFuY2VOb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL25vZGVzL21hdGgvdmVjdG9yL0Rpc3RhbmNlTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUF1RTtBQUV2RSxNQUFxQixZQUFhLFNBQVEsaUJBQVU7SUFDaEQsWUFBWTtRQUNSLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUNuRSxDQUFDO0NBQ0o7QUFORCwrQkFNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoYWRlck5vZGUsIFNoYWRlclNsb3RUeXBlLCBTaGFkZXJTbG90IH0gZnJvbSBcIi4uLy4uLy4uL2Jhc2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3RhbmNlTm9kZSBleHRlbmRzIFNoYWRlck5vZGUge1xyXG4gICAgZ2VuZXJhdGVDb2RlICgpIHtcclxuICAgICAgICBsZXQgQSA9IHRoaXMuZ2V0SW5wdXRWYWx1ZSgwKTtcclxuICAgICAgICBsZXQgQiA9IHRoaXMuZ2V0SW5wdXRWYWx1ZSgxKTtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5nZXRPdXRwdXRWYXJEZWZpbmUoMCl9ID0gZGlzdGFuY2UoJHtBfSwgJHtCfSk7YDtcclxuICAgIH1cclxufVxyXG4iXX0=