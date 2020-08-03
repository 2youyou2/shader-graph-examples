"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InputNode_1 = __importDefault(require("../InputNode"));
class BooleanNode extends InputNode_1.default {
    generateCode() {
        return `bool ${this.getOutputVarName(0)} = ${this.getInputValue(0)};`;
    }
}
exports.default = BooleanNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9vbGVhbk5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbm9kZXMvaW5wdXQvYmFzaWMvQm9vbGVhbk5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2REFBcUM7QUFFckMsTUFBcUIsV0FBWSxTQUFRLG1CQUFTO0lBQzlDLFlBQVk7UUFDUixPQUFPLFFBQVEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUMxRSxDQUFDO0NBQ0o7QUFKRCw4QkFJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnB1dE5vZGUgZnJvbSBcIi4uL0lucHV0Tm9kZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9vbGVhbk5vZGUgZXh0ZW5kcyBJbnB1dE5vZGUge1xyXG4gICAgZ2VuZXJhdGVDb2RlICgpIHtcclxuICAgICAgICByZXR1cm4gYGJvb2wgJHt0aGlzLmdldE91dHB1dFZhck5hbWUoMCl9ID0gJHt0aGlzLmdldElucHV0VmFsdWUoMCl9O2A7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==