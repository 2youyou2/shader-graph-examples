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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlzdGFuY2VOb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc291cmNlL3BhbmVsL29wZXJhdGlvbi9ub2Rlcy9tYXRoL3ZlY3Rvci9EaXN0YW5jZU5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBMkM7QUFFM0MsTUFBcUIsWUFBYSxTQUFRLGlCQUFVO0lBQ2hELFlBQVk7UUFDUixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDbkUsQ0FBQztDQUNKO0FBTkQsK0JBTUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFkZXJOb2RlIH0gZnJvbSBcIi4uLy4uLy4uL2Jhc2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3RhbmNlTm9kZSBleHRlbmRzIFNoYWRlck5vZGUge1xyXG4gICAgZ2VuZXJhdGVDb2RlICgpIHtcclxuICAgICAgICBsZXQgQSA9IHRoaXMuZ2V0SW5wdXRWYWx1ZSgwKTtcclxuICAgICAgICBsZXQgQiA9IHRoaXMuZ2V0SW5wdXRWYWx1ZSgxKTtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5nZXRPdXRwdXRWYXJEZWZpbmUoMCl9ID0gZGlzdGFuY2UoJHtBfSwgJHtCfSk7YDtcclxuICAgIH1cclxufVxyXG4iXX0=