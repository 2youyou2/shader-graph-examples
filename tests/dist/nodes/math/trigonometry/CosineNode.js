"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
class CosineNode extends base_1.ShaderNode {
    generateCode() {
        let In = this.getInputValue(0);
        return `${this.getOutputVarDefine(0)} = cos(${In});`;
    }
}
exports.default = CosineNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29zaW5lTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2Rlcy9tYXRoL3RyaWdvbm9tZXRyeS9Db3NpbmVOb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQXVFO0FBRXZFLE1BQXFCLFVBQVcsU0FBUSxpQkFBVTtJQUM5QyxZQUFZO1FBQ1IsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO0lBQ3pELENBQUM7Q0FDSjtBQUxELDZCQUtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hhZGVyTm9kZSwgU2hhZGVyU2xvdFR5cGUsIFNoYWRlclNsb3QgfSBmcm9tIFwiLi4vLi4vLi4vYmFzZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29zaW5lTm9kZSBleHRlbmRzIFNoYWRlck5vZGUge1xyXG4gICAgZ2VuZXJhdGVDb2RlICgpIHtcclxuICAgICAgICBsZXQgSW4gPSB0aGlzLmdldElucHV0VmFsdWUoMCk7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZ2V0T3V0cHV0VmFyRGVmaW5lKDApfSA9IGNvcygke0lufSk7YDtcclxuICAgIH1cclxufVxyXG4iXX0=