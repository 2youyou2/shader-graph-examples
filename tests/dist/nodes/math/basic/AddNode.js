"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddNode = void 0;
const base_1 = require("../../../base");
class AddNode extends base_1.ShaderNode {
    constructor(data) {
        super(data);
    }
    generateCode() {
        return `add(${this.getInputValue(0)}, ${this.getInputValue(1)}, ${this.getOutputVarName(0)});`;
    }
}
exports.AddNode = AddNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2Rlcy9tYXRoL2Jhc2ljL0FkZE5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQXVFO0FBRXZFLE1BQWEsT0FBUSxTQUFRLGlCQUFVO0lBQ25DLFlBQVksSUFBUztRQUNqQixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUVELFlBQVk7UUFDUixPQUFPLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ25HLENBQUM7Q0FDSjtBQVJELDBCQVFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hhZGVyTm9kZSwgU2hhZGVyU2xvdFR5cGUsIFNoYWRlclNsb3QgfSBmcm9tIFwiLi4vLi4vLi4vYmFzZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFkZE5vZGUgZXh0ZW5kcyBTaGFkZXJOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGE6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlQ29kZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBhZGQoJHt0aGlzLmdldElucHV0VmFsdWUoMCl9LCAke3RoaXMuZ2V0SW5wdXRWYWx1ZSgxKX0sICR7dGhpcy5nZXRPdXRwdXRWYXJOYW1lKDApfSk7YDtcclxuICAgIH1cclxufVxyXG5cclxuIl19