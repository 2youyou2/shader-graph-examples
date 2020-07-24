"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector1Node = void 0;
const base_1 = require("../../../base");
class Vector1Node extends base_1.ShaderNode {
    constructor(data) {
        super(data);
    }
    generateCode() {
        return `float ${this.getOutputVarName(0)} = ${this.getInputValue(0)};`;
    }
}
exports.Vector1Node = Vector1Node;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVjdG9yMU5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbm9kZXMvaW5wdXQvYmFzaWMvVmVjdG9yMU5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQXVFO0FBRXZFLE1BQWEsV0FBWSxTQUFRLGlCQUFVO0lBQ3ZDLFlBQVksSUFBUztRQUNqQixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUVELFlBQVk7UUFDUixPQUFPLFNBQVMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUMzRSxDQUFDO0NBQ0o7QUFSRCxrQ0FRQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoYWRlck5vZGUsIFNoYWRlclNsb3RUeXBlLCBTaGFkZXJTbG90IH0gZnJvbSBcIi4uLy4uLy4uL2Jhc2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWZWN0b3IxTm9kZSBleHRlbmRzIFNoYWRlck5vZGUge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YTogYW55KSB7XHJcbiAgICAgICAgc3VwZXIoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVDb2RlICgpIHtcclxuICAgICAgICByZXR1cm4gYGZsb2F0ICR7dGhpcy5nZXRPdXRwdXRWYXJOYW1lKDApfSA9ICR7dGhpcy5nZXRJbnB1dFZhbHVlKDApfTtgO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=