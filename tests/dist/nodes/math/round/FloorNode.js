"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
class FloorNode extends base_1.ShaderNode {
    generateCode() {
        let In = this.getInputValue(0);
        return `${this.getOutputVarDefine(0)} = floor(${In});`;
    }
}
exports.default = FloorNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxvb3JOb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL25vZGVzL21hdGgvcm91bmQvRmxvb3JOb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQXVFO0FBRXZFLE1BQXFCLFNBQVUsU0FBUSxpQkFBVTtJQUM3QyxZQUFZO1FBQ1IsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDO0lBQzNELENBQUM7Q0FDSjtBQUxELDRCQUtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hhZGVyTm9kZSwgU2hhZGVyU2xvdFR5cGUsIFNoYWRlclNsb3QgfSBmcm9tIFwiLi4vLi4vLi4vYmFzZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvb3JOb2RlIGV4dGVuZHMgU2hhZGVyTm9kZSB7XHJcbiAgICBnZW5lcmF0ZUNvZGUgKCkge1xyXG4gICAgICAgIGxldCBJbiA9IHRoaXMuZ2V0SW5wdXRWYWx1ZSgwKTtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5nZXRPdXRwdXRWYXJEZWZpbmUoMCl9ID0gZmxvb3IoJHtJbn0pO2A7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==