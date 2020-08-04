"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const MasterNode_1 = __importDefault(require("./MasterNode"));
class PBRMasterNode extends MasterNode_1.default {
    constructor(data) {
        super(data);
        this.vsSlotIndices = ['Vertex Position', 'Vertex Normal', 'Vertex Tangent'];
        this.fsSlotIndices = ['Albedo', 'Normal', 'Emission', 'Metallic', 'Smoothness', 'Occlusion', 'Alpha', 'AlphaClipThreshold'];
        this.templatePath = path_1.default.join(__dirname, '../../../templates/master/PBRMasterNode.effect');
    }
}
exports.default = PBRMasterNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUEJSTWFzdGVyTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2Rlcy9tYXN0ZXIvUEJSTWFzdGVyTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLGdEQUF3QjtBQUN4Qiw4REFBc0M7QUFFdEMsTUFBcUIsYUFBYyxTQUFRLG9CQUFVO0lBTWpELFlBQWEsSUFBSTtRQUNiLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQU5mLGtCQUFhLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUN2RSxrQkFBYSxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFFdkgsaUJBQVksR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxnREFBZ0QsQ0FBQyxDQUFDO0lBSXRGLENBQUM7Q0FDSjtBQVRELGdDQVNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCBNYXN0ZXJOb2RlIGZyb20gXCIuL01hc3Rlck5vZGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBCUk1hc3Rlck5vZGUgZXh0ZW5kcyBNYXN0ZXJOb2RlIHtcclxuICAgIHZzU2xvdEluZGljZXMgPSBbJ1ZlcnRleCBQb3NpdGlvbicsICdWZXJ0ZXggTm9ybWFsJywgJ1ZlcnRleCBUYW5nZW50J107XHJcbiAgICBmc1Nsb3RJbmRpY2VzID0gWydBbGJlZG8nLCAnTm9ybWFsJywgJ0VtaXNzaW9uJywgJ01ldGFsbGljJywgJ1Ntb290aG5lc3MnLCAnT2NjbHVzaW9uJywgJ0FscGhhJywgJ0FscGhhQ2xpcFRocmVzaG9sZCddO1xyXG5cclxuICAgIHRlbXBsYXRlUGF0aCA9IHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi8uLi8uLi90ZW1wbGF0ZXMvbWFzdGVyL1BCUk1hc3Rlck5vZGUuZWZmZWN0Jyk7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKGRhdGEpIHtcclxuICAgICAgICBzdXBlcihkYXRhKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==