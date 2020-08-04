"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const MasterNode_1 = __importDefault(require("./MasterNode"));
class UnlitMasterNode extends MasterNode_1.default {
    constructor() {
        super(...arguments);
        this.vsSlotIndices = ['Vertex Position', 'Vertex Normal', 'Vertex Tangent'];
        this.fsSlotIndices = ['Color', 'Alpha', 'AlphaClipThreshold'];
        this.templatePath = path_1.default.join(__dirname, '../../../templates/master/UnlitMasterNode.effect');
    }
}
exports.default = UnlitMasterNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5saXRNYXN0ZXJOb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL25vZGVzL21hc3Rlci9VbmxpdE1hc3Rlck5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxnREFBd0I7QUFDeEIsOERBQXNDO0FBRXRDLE1BQXFCLGVBQWdCLFNBQVEsb0JBQVU7SUFBdkQ7O1FBQ0ksa0JBQWEsR0FBRyxDQUFDLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3ZFLGtCQUFhLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFFekQsaUJBQVksR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxrREFBa0QsQ0FBQyxDQUFBO0lBQzNGLENBQUM7Q0FBQTtBQUxELGtDQUtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCBNYXN0ZXJOb2RlIGZyb20gXCIuL01hc3Rlck5vZGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVubGl0TWFzdGVyTm9kZSBleHRlbmRzIE1hc3Rlck5vZGUge1xyXG4gICAgdnNTbG90SW5kaWNlcyA9IFsnVmVydGV4IFBvc2l0aW9uJywgJ1ZlcnRleCBOb3JtYWwnLCAnVmVydGV4IFRhbmdlbnQnXTtcclxuICAgIGZzU2xvdEluZGljZXMgPSBbJ0NvbG9yJywgJ0FscGhhJywgJ0FscGhhQ2xpcFRocmVzaG9sZCddO1xyXG5cclxuICAgIHRlbXBsYXRlUGF0aCA9IHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi8uLi8uLi90ZW1wbGF0ZXMvbWFzdGVyL1VubGl0TWFzdGVyTm9kZS5lZmZlY3QnKVxyXG59XHJcbiJdfQ==