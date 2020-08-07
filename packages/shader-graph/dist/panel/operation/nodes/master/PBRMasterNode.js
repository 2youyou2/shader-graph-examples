"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const MasterNode_1 = __importDefault(require("./MasterNode"));
const utils_1 = require("../../utils");
class PBRMasterNode extends MasterNode_1.default {
    constructor(data) {
        super(data);
        this.vsSlotIndices = ['Vertex Position', 'Vertex Normal', 'Vertex Tangent'];
        this.fsSlotIndices = ['Albedo', 'Normal', 'Emission', 'Metallic', 'Smoothness', 'Occlusion', 'Alpha', 'AlphaClipThreshold'];
        this.templatePath = path_1.default.join(utils_1.shaderTemplatesDir, 'master/PBRMasterNode.effect');
        this.depVarings = ['PositionSpace.World', 'NormalSpace.World'];
    }
}
exports.default = PBRMasterNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUEJSTWFzdGVyTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NvdXJjZS9wYW5lbC9vcGVyYXRpb24vbm9kZXMvbWFzdGVyL1BCUk1hc3Rlck5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxnREFBd0I7QUFDeEIsOERBQXNDO0FBQ3RDLHVDQUFpRDtBQUVqRCxNQUFxQixhQUFjLFNBQVEsb0JBQVU7SUFRakQsWUFBYSxJQUFJO1FBQ2IsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBUmYsa0JBQWEsR0FBRyxDQUFDLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3ZFLGtCQUFhLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUV2SCxpQkFBWSxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsMEJBQWtCLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztRQUU1RSxlQUFVLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxtQkFBbUIsQ0FBQyxDQUFBO0lBSXpELENBQUM7Q0FDSjtBQVhELGdDQVdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCBNYXN0ZXJOb2RlIGZyb20gXCIuL01hc3Rlck5vZGVcIjtcclxuaW1wb3J0IHsgc2hhZGVyVGVtcGxhdGVzRGlyIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUEJSTWFzdGVyTm9kZSBleHRlbmRzIE1hc3Rlck5vZGUge1xyXG4gICAgdnNTbG90SW5kaWNlcyA9IFsnVmVydGV4IFBvc2l0aW9uJywgJ1ZlcnRleCBOb3JtYWwnLCAnVmVydGV4IFRhbmdlbnQnXTtcclxuICAgIGZzU2xvdEluZGljZXMgPSBbJ0FsYmVkbycsICdOb3JtYWwnLCAnRW1pc3Npb24nLCAnTWV0YWxsaWMnLCAnU21vb3RobmVzcycsICdPY2NsdXNpb24nLCAnQWxwaGEnLCAnQWxwaGFDbGlwVGhyZXNob2xkJ107XHJcblxyXG4gICAgdGVtcGxhdGVQYXRoID0gcGF0aC5qb2luKHNoYWRlclRlbXBsYXRlc0RpciwgJ21hc3Rlci9QQlJNYXN0ZXJOb2RlLmVmZmVjdCcpO1xyXG5cclxuICAgIGRlcFZhcmluZ3MgPSBbJ1Bvc2l0aW9uU3BhY2UuV29ybGQnLCAnTm9ybWFsU3BhY2UuV29ybGQnXVxyXG5cclxuICAgIGNvbnN0cnVjdG9yIChkYXRhKSB7XHJcbiAgICAgICAgc3VwZXIoZGF0YSlcclxuICAgIH1cclxufVxyXG4iXX0=