"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
class ModuloNode extends base_1.ShaderNode {
    calcConcretePrecision() {
        super.calcConcretePrecision();
    }
    generateCode() {
        let A = this.getInputValue(0);
        let B = this.getInputValue(1);
        return `${this.getOutputVarDefine(0)} = mod(${A}, ${B});`;
    }
}
exports.default = ModuloNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kdWxvTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2Rlcy9tYXRoL2FkdmFuY2VkL01vZHVsb05vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBMkM7QUFFM0MsTUFBcUIsVUFBVyxTQUFRLGlCQUFVO0lBQzlDLHFCQUFxQjtRQUNqQixLQUFLLENBQUMscUJBQXFCLEVBQUUsQ0FBQTtJQUNqQyxDQUFDO0lBQ0QsWUFBWTtRQUNSLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUM5RCxDQUFDO0NBQ0o7QUFURCw2QkFTQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoYWRlck5vZGUgfSBmcm9tIFwiLi4vLi4vLi4vYmFzZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kdWxvTm9kZSBleHRlbmRzIFNoYWRlck5vZGUge1xyXG4gICAgY2FsY0NvbmNyZXRlUHJlY2lzaW9uICgpIHtcclxuICAgICAgICBzdXBlci5jYWxjQ29uY3JldGVQcmVjaXNpb24oKVxyXG4gICAgfVxyXG4gICAgZ2VuZXJhdGVDb2RlICgpIHtcclxuICAgICAgICBsZXQgQSA9IHRoaXMuZ2V0SW5wdXRWYWx1ZSgwKTtcclxuICAgICAgICBsZXQgQiA9IHRoaXMuZ2V0SW5wdXRWYWx1ZSgxKTtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5nZXRPdXRwdXRWYXJEZWZpbmUoMCl9ID0gbW9kKCR7QX0sICR7Qn0pO2A7XHJcbiAgICB9XHJcbn1cclxuIl19