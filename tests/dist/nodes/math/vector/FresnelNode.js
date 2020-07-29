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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnJlc25lbE5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbm9kZXMvbWF0aC92ZWN0b3IvRnJlc25lbE5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBdUU7QUFFdkUsTUFBcUIsV0FBWSxTQUFRLGlCQUFVO0lBQy9DLFlBQVk7UUFDUixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyx3Q0FBd0MsTUFBTSxnQkFBZ0IsT0FBTyxTQUFTLEtBQUssSUFBSSxDQUFDO0lBQ2hJLENBQUM7Q0FDSjtBQVBELDhCQU9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hhZGVyTm9kZSwgU2hhZGVyU2xvdFR5cGUsIFNoYWRlclNsb3QgfSBmcm9tIFwiLi4vLi4vLi4vYmFzZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJlc25lbE5vZGUgZXh0ZW5kcyBTaGFkZXJOb2RlIHtcclxuICAgIGdlbmVyYXRlQ29kZSAoKSB7XHJcbiAgICAgICAgbGV0IE5vcm1hbCA9IHRoaXMuZ2V0SW5wdXRWYWx1ZSgwKTtcclxuICAgICAgICBsZXQgVmlld0RpciA9IHRoaXMuZ2V0SW5wdXRWYWx1ZSgxKTtcclxuICAgICAgICBsZXQgUG93ZXIgPSB0aGlzLmdldElucHV0VmFsdWUoMik7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZ2V0T3V0cHV0VmFyRGVmaW5lKDApfSA9IHBvdygoMS4wIC0gc2F0dXJhdGUoZG90KG5vcm1hbGl6ZSgke05vcm1hbH0pLCBub3JtYWxpemUoJHtWaWV3RGlyfSkpKSksICR7UG93ZXJ9KTtgO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==