"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
class SmoothstepNode extends base_1.ShaderNode {
    generateCode() {
        let Edge1 = this.getInputValue(0);
        let Edge2 = this.getInputValue(1);
        let In = this.getInputValue(2);
        return `${this.getOutputVarDefine(0)} = smoothstep(${Edge1}, ${Edge2}, ${In});`;
    }
}
exports.default = SmoothstepNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU21vb3Roc3RlcE5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbm9kZXMvbWF0aC9pbnRlcnBvbGF0aW9uL1Ntb290aHN0ZXBOb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQTJDO0FBRTNDLE1BQXFCLGNBQWUsU0FBUSxpQkFBVTtJQUNsRCxZQUFZO1FBQ1IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksRUFBRSxHQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEtBQUssS0FBSyxLQUFLLEtBQUssRUFBRSxJQUFJLENBQUM7SUFDcEYsQ0FBQztDQUNKO0FBUEQsaUNBT0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFkZXJOb2RlIH0gZnJvbSBcIi4uLy4uLy4uL2Jhc2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNtb290aHN0ZXBOb2RlIGV4dGVuZHMgU2hhZGVyTm9kZSB7XHJcbiAgICBnZW5lcmF0ZUNvZGUgKCkge1xyXG4gICAgICAgIGxldCBFZGdlMSA9IHRoaXMuZ2V0SW5wdXRWYWx1ZSgwKTtcclxuICAgICAgICBsZXQgRWRnZTIgPSB0aGlzLmdldElucHV0VmFsdWUoMSk7XHJcbiAgICAgICAgbGV0IEluICAgID0gdGhpcy5nZXRJbnB1dFZhbHVlKDIpO1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmdldE91dHB1dFZhckRlZmluZSgwKX0gPSBzbW9vdGhzdGVwKCR7RWRnZTF9LCAke0VkZ2UyfSwgJHtJbn0pO2A7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==