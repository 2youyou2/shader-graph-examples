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
        this.vsSlotIndices = [0, 1, 2];
        this.fsSlotIndices = [3, 4, 5];
        this.templatePath = path_1.default.join(__dirname, '../../../templates/master/UnlitMasterNode.effect');
    }
}
exports.default = UnlitMasterNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5saXRNYXN0ZXJOb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL25vZGVzL21hc3Rlci9VbmxpdE1hc3Rlck5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxnREFBd0I7QUFDeEIsOERBQXNDO0FBRXRDLE1BQXFCLGVBQWdCLFNBQVEsb0JBQVU7SUFBdkQ7O1FBQ0ksa0JBQWEsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUIsa0JBQWEsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFMUIsaUJBQVksR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxrREFBa0QsQ0FBQyxDQUFBO0lBQzNGLENBQUM7Q0FBQTtBQUxELGtDQUtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCBNYXN0ZXJOb2RlIGZyb20gXCIuL01hc3Rlck5vZGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVubGl0TWFzdGVyTm9kZSBleHRlbmRzIE1hc3Rlck5vZGUge1xyXG4gICAgdnNTbG90SW5kaWNlcyA9IFswLCAxLCAyXTtcclxuICAgIGZzU2xvdEluZGljZXMgPSBbMywgNCwgNV07XHJcblxyXG4gICAgdGVtcGxhdGVQYXRoID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJy4uLy4uLy4uL3RlbXBsYXRlcy9tYXN0ZXIvVW5saXRNYXN0ZXJOb2RlLmVmZmVjdCcpXHJcbn1cclxuIl19