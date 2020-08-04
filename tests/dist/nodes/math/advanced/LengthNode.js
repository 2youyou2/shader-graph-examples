"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
const type_1 = require("../../../type");
class LengthNode extends base_1.ShaderNode {
    constructor() {
        super(...arguments);
        this.concretePrecisionType = type_1.ConcretePrecisionType.Fixed;
    }
    generateCode() {
        return `${this.getOutputVarDefine(0)} = length(${this.getInputValue(0)});`;
    }
}
exports.default = LengthNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGVuZ3RoTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2Rlcy9tYXRoL2FkdmFuY2VkL0xlbmd0aE5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBMkM7QUFDM0Msd0NBQXNEO0FBRXRELE1BQXFCLFVBQVcsU0FBUSxpQkFBVTtJQUFsRDs7UUFDSSwwQkFBcUIsR0FBRyw0QkFBcUIsQ0FBQyxLQUFLLENBQUM7SUFLeEQsQ0FBQztJQUhHLFlBQVk7UUFDUixPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxhQUFhLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMvRSxDQUFDO0NBQ0o7QUFORCw2QkFNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoYWRlck5vZGUgfSBmcm9tIFwiLi4vLi4vLi4vYmFzZVwiO1xyXG5pbXBvcnQgeyBDb25jcmV0ZVByZWNpc2lvblR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVuZ3RoTm9kZSBleHRlbmRzIFNoYWRlck5vZGUge1xyXG4gICAgY29uY3JldGVQcmVjaXNpb25UeXBlID0gQ29uY3JldGVQcmVjaXNpb25UeXBlLkZpeGVkO1xyXG5cclxuICAgIGdlbmVyYXRlQ29kZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZ2V0T3V0cHV0VmFyRGVmaW5lKDApfSA9IGxlbmd0aCgke3RoaXMuZ2V0SW5wdXRWYWx1ZSgwKX0pO2A7XHJcbiAgICB9XHJcbn1cclxuIl19