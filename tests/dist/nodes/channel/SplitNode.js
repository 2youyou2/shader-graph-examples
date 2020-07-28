"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
class SplitNode extends base_1.ShaderNode {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BsaXROb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL25vZGVzL2NoYW5uZWwvU3BsaXROb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXdDO0FBRXhDLE1BQXFCLFNBQVUsU0FBUSxpQkFBVTtJQUM3QyxZQUFZOztRQUNSLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxJQUFJLENBQUMseUJBQXlCLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDckMsSUFBSSxJQUFJLFNBQVMsTUFBQSxJQUFJLENBQUMseUJBQXlCLENBQUMsR0FBRyxDQUFDLDBDQUFFLE9BQU8sTUFBTSxLQUFLLE9BQU8sQ0FBQztTQUNuRjtRQUNELElBQUksSUFBSSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3JDLElBQUksSUFBSSxTQUFTLE1BQUEsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQywwQ0FBRSxPQUFPLE1BQU0sS0FBSyxPQUFPLENBQUM7U0FDbkY7UUFDRCxJQUFJLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNyQyxJQUFJLElBQUksU0FBUyxNQUFBLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsMENBQUUsT0FBTyxNQUFNLEtBQUssT0FBTyxDQUFDO1NBQ25GO1FBQ0QsSUFBSSxJQUFJLENBQUMseUJBQXlCLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDckMsSUFBSSxJQUFJLFNBQVMsTUFBQSxJQUFJLENBQUMseUJBQXlCLENBQUMsR0FBRyxDQUFDLDBDQUFFLE9BQU8sTUFBTSxLQUFLLE9BQU8sQ0FBQztTQUNuRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Q0FDSjtBQWxCRCw0QkFrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFkZXJOb2RlIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwbGl0Tm9kZSBleHRlbmRzIFNoYWRlck5vZGUge1xyXG4gICAgZ2VuZXJhdGVDb2RlICgpIHtcclxuICAgICAgICBsZXQgVmFsdWUgPSB0aGlzLmdldElucHV0VmFsdWUoMCk7XHJcbiAgICAgICAgbGV0IGNvZGUgPSAnJztcclxuICAgICAgICBpZiAodGhpcy5nZXRPdXRwdXRTbG90V2l0aFNsb3ROYW1lKCdSJykpIHtcclxuICAgICAgICAgICAgY29kZSArPSBgZmxvYXQgJHt0aGlzLmdldE91dHB1dFNsb3RXaXRoU2xvdE5hbWUoJ1InKT8udmFyTmFtZX0gPSAke1ZhbHVlfS5yO1xcbmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmdldE91dHB1dFNsb3RXaXRoU2xvdE5hbWUoJ0cnKSkge1xyXG4gICAgICAgICAgICBjb2RlICs9IGBmbG9hdCAke3RoaXMuZ2V0T3V0cHV0U2xvdFdpdGhTbG90TmFtZSgnRycpPy52YXJOYW1lfSA9ICR7VmFsdWV9Lmc7XFxuYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0T3V0cHV0U2xvdFdpdGhTbG90TmFtZSgnQicpKSB7XHJcbiAgICAgICAgICAgIGNvZGUgKz0gYGZsb2F0ICR7dGhpcy5nZXRPdXRwdXRTbG90V2l0aFNsb3ROYW1lKCdCJyk/LnZhck5hbWV9ID0gJHtWYWx1ZX0uYjtcXG5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5nZXRPdXRwdXRTbG90V2l0aFNsb3ROYW1lKCdBJykpIHtcclxuICAgICAgICAgICAgY29kZSArPSBgZmxvYXQgJHt0aGlzLmdldE91dHB1dFNsb3RXaXRoU2xvdE5hbWUoJ0EnKT8udmFyTmFtZX0gPSAke1ZhbHVlfS5hO1xcbmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb2RlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==