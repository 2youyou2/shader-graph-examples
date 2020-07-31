"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
class SplitNode extends base_1.ShaderNode {
    constructor(data) {
        super(data);
        this.fixedConcretePrecision = true;
    }
    calcConcretePrecision() {
        super.calcConcretePrecision();
    }
    generateCode() {
        var _a, _b, _c, _d;
        let Value = this.getInputValue(0);
        let code = '';
        if (this.getOutputSlotWithSlotName('R')) {
            code += `float ${(_a = this.getOutputSlotWithSlotName('R')) === null || _a === void 0 ? void 0 : _a.varName} = ${Value}.r;\n`;
        }
        if (this.getOutputSlotWithSlotName('G')) {
            code += `float ${(_b = this.getOutputSlotWithSlotName('G')) === null || _b === void 0 ? void 0 : _b.varName} = ${Value}.g;\n`;
        }
        if (this.getOutputSlotWithSlotName('B')) {
            code += `float ${(_c = this.getOutputSlotWithSlotName('B')) === null || _c === void 0 ? void 0 : _c.varName} = ${Value}.b;\n`;
        }
        if (this.getOutputSlotWithSlotName('A')) {
            code += `float ${(_d = this.getOutputSlotWithSlotName('A')) === null || _d === void 0 ? void 0 : _d.varName} = ${Value}.a;\n`;
        }
        return code;
    }
}
exports.default = SplitNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BsaXROb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL25vZGVzL2NoYW5uZWwvU3BsaXROb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXdDO0FBRXhDLE1BQXFCLFNBQVUsU0FBUSxpQkFBVTtJQUc3QyxZQUFhLElBQUk7UUFDYixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFIaEIsMkJBQXNCLEdBQUcsSUFBSSxDQUFDO0lBSTlCLENBQUM7SUFFRCxxQkFBcUI7UUFDakIsS0FBSyxDQUFDLHFCQUFxQixFQUFFLENBQUE7SUFDakMsQ0FBQztJQUVELFlBQVk7O1FBQ1IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZCxJQUFJLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNyQyxJQUFJLElBQUksU0FBUyxNQUFBLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsMENBQUUsT0FBTyxNQUFNLEtBQUssT0FBTyxDQUFDO1NBQ25GO1FBQ0QsSUFBSSxJQUFJLENBQUMseUJBQXlCLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDckMsSUFBSSxJQUFJLFNBQVMsTUFBQSxJQUFJLENBQUMseUJBQXlCLENBQUMsR0FBRyxDQUFDLDBDQUFFLE9BQU8sTUFBTSxLQUFLLE9BQU8sQ0FBQztTQUNuRjtRQUNELElBQUksSUFBSSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3JDLElBQUksSUFBSSxTQUFTLE1BQUEsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQywwQ0FBRSxPQUFPLE1BQU0sS0FBSyxPQUFPLENBQUM7U0FDbkY7UUFDRCxJQUFJLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNyQyxJQUFJLElBQUksU0FBUyxNQUFBLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsMENBQUUsT0FBTyxNQUFNLEtBQUssT0FBTyxDQUFDO1NBQ25GO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztDQUNKO0FBNUJELDRCQTRCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoYWRlck5vZGUgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BsaXROb2RlIGV4dGVuZHMgU2hhZGVyTm9kZSB7XHJcbiAgICBmaXhlZENvbmNyZXRlUHJlY2lzaW9uID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoZGF0YSkge1xyXG4gICAgICAgIHN1cGVyKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGNDb25jcmV0ZVByZWNpc2lvbiAoKSB7XHJcbiAgICAgICAgc3VwZXIuY2FsY0NvbmNyZXRlUHJlY2lzaW9uKClcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZUNvZGUgKCkge1xyXG4gICAgICAgIGxldCBWYWx1ZSA9IHRoaXMuZ2V0SW5wdXRWYWx1ZSgwKTtcclxuICAgICAgICBsZXQgY29kZSA9ICcnO1xyXG4gICAgICAgIGlmICh0aGlzLmdldE91dHB1dFNsb3RXaXRoU2xvdE5hbWUoJ1InKSkge1xyXG4gICAgICAgICAgICBjb2RlICs9IGBmbG9hdCAke3RoaXMuZ2V0T3V0cHV0U2xvdFdpdGhTbG90TmFtZSgnUicpPy52YXJOYW1lfSA9ICR7VmFsdWV9LnI7XFxuYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0T3V0cHV0U2xvdFdpdGhTbG90TmFtZSgnRycpKSB7XHJcbiAgICAgICAgICAgIGNvZGUgKz0gYGZsb2F0ICR7dGhpcy5nZXRPdXRwdXRTbG90V2l0aFNsb3ROYW1lKCdHJyk/LnZhck5hbWV9ID0gJHtWYWx1ZX0uZztcXG5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5nZXRPdXRwdXRTbG90V2l0aFNsb3ROYW1lKCdCJykpIHtcclxuICAgICAgICAgICAgY29kZSArPSBgZmxvYXQgJHt0aGlzLmdldE91dHB1dFNsb3RXaXRoU2xvdE5hbWUoJ0InKT8udmFyTmFtZX0gPSAke1ZhbHVlfS5iO1xcbmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmdldE91dHB1dFNsb3RXaXRoU2xvdE5hbWUoJ0EnKSkge1xyXG4gICAgICAgICAgICBjb2RlICs9IGBmbG9hdCAke3RoaXMuZ2V0T3V0cHV0U2xvdFdpdGhTbG90TmFtZSgnQScpPy52YXJOYW1lfSA9ICR7VmFsdWV9LmE7XFxuYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvZGU7XHJcbiAgICB9XHJcbn1cclxuIl19