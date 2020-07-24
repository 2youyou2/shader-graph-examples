"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnlitMasterNode = void 0;
const path_1 = __importDefault(require("path"));
const MasterNode_1 = require("./MasterNode");
class UnlitMasterNode extends MasterNode_1.MasterNode {
    constructor() {
        super(...arguments);
        this.vsSlotIndices = [0, 1, 2];
        this.fsSlotIndices = [3, 4, 5];
        this.templatePath = path_1.default.join(__dirname, '../../../templates/master/UnlitMasterNode.effect');
    }
}
exports.UnlitMasterNode = UnlitMasterNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5saXRNYXN0ZXJOb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL25vZGVzL21hc3Rlci9VbmxpdE1hc3Rlck5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsZ0RBQXdCO0FBQ3hCLDZDQUEwQztBQUUxQyxNQUFhLGVBQWdCLFNBQVEsdUJBQVU7SUFBL0M7O1FBQ0ksa0JBQWEsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUIsa0JBQWEsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFMUIsaUJBQVksR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxrREFBa0QsQ0FBQyxDQUFBO0lBQzNGLENBQUM7Q0FBQTtBQUxELDBDQUtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7IE1hc3Rlck5vZGUgfSBmcm9tIFwiLi9NYXN0ZXJOb2RlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVW5saXRNYXN0ZXJOb2RlIGV4dGVuZHMgTWFzdGVyTm9kZSB7XHJcbiAgICB2c1Nsb3RJbmRpY2VzID0gWzAsIDEsIDJdO1xyXG4gICAgZnNTbG90SW5kaWNlcyA9IFszLCA0LCA1XTtcclxuXHJcbiAgICB0ZW1wbGF0ZVBhdGggPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vLi4vLi4vdGVtcGxhdGVzL21hc3Rlci9VbmxpdE1hc3Rlck5vZGUuZWZmZWN0JylcclxufVxyXG4iXX0=