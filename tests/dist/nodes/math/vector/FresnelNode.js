"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
class FresnelNode extends base_1.ShaderNode {
    generateCode() {
        let Normal = this.getInputValue(0);
        let ViewDir = this.getInputValue(1);
        let Power = this.getInputValue(2);
        return `${this.getOutputVarDefine(0)} = pow((1.0 - saturate(dot(normalize(${Normal}), normalize(${ViewDir})))), ${Power});`;
    }
}
exports.default = FresnelNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnJlc25lbE5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbm9kZXMvbWF0aC92ZWN0b3IvRnJlc25lbE5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBMkM7QUFFM0MsTUFBcUIsV0FBWSxTQUFRLGlCQUFVO0lBQy9DLFlBQVk7UUFDUixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyx3Q0FBd0MsTUFBTSxnQkFBZ0IsT0FBTyxTQUFTLEtBQUssSUFBSSxDQUFDO0lBQ2hJLENBQUM7Q0FDSjtBQVBELDhCQU9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hhZGVyTm9kZSB9IGZyb20gXCIuLi8uLi8uLi9iYXNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmVzbmVsTm9kZSBleHRlbmRzIFNoYWRlck5vZGUge1xyXG4gICAgZ2VuZXJhdGVDb2RlICgpIHtcclxuICAgICAgICBsZXQgTm9ybWFsID0gdGhpcy5nZXRJbnB1dFZhbHVlKDApO1xyXG4gICAgICAgIGxldCBWaWV3RGlyID0gdGhpcy5nZXRJbnB1dFZhbHVlKDEpO1xyXG4gICAgICAgIGxldCBQb3dlciA9IHRoaXMuZ2V0SW5wdXRWYWx1ZSgyKTtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5nZXRPdXRwdXRWYXJEZWZpbmUoMCl9ID0gcG93KCgxLjAgLSBzYXR1cmF0ZShkb3Qobm9ybWFsaXplKCR7Tm9ybWFsfSksIG5vcm1hbGl6ZSgke1ZpZXdEaXJ9KSkpKSwgJHtQb3dlcn0pO2A7XHJcbiAgICB9XHJcbn1cclxuIl19