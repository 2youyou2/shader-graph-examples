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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU21vb3Roc3RlcE5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbm9kZXMvbWF0aC9pbnRlcnBvbGF0aW9uL1Ntb290aHN0ZXBOb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQXVFO0FBRXZFLE1BQXFCLGNBQWUsU0FBUSxpQkFBVTtJQUNsRCxZQUFZO1FBQ1IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksRUFBRSxHQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEtBQUssS0FBSyxLQUFLLEtBQUssRUFBRSxJQUFJLENBQUM7SUFDcEYsQ0FBQztDQUNKO0FBUEQsaUNBT0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFkZXJOb2RlLCBTaGFkZXJTbG90VHlwZSwgU2hhZGVyU2xvdCB9IGZyb20gXCIuLi8uLi8uLi9iYXNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbW9vdGhzdGVwTm9kZSBleHRlbmRzIFNoYWRlck5vZGUge1xyXG4gICAgZ2VuZXJhdGVDb2RlICgpIHtcclxuICAgICAgICBsZXQgRWRnZTEgPSB0aGlzLmdldElucHV0VmFsdWUoMCk7XHJcbiAgICAgICAgbGV0IEVkZ2UyID0gdGhpcy5nZXRJbnB1dFZhbHVlKDEpO1xyXG4gICAgICAgIGxldCBJbiAgICA9IHRoaXMuZ2V0SW5wdXRWYWx1ZSgyKTtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5nZXRPdXRwdXRWYXJEZWZpbmUoMCl9ID0gc21vb3Roc3RlcCgke0VkZ2UxfSwgJHtFZGdlMn0sICR7SW59KTtgO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=