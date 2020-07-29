"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
class ColorNode extends base_1.ShaderNode {
    constructor() {
        super(...arguments);
        this.fixedConcretePrecision = true;
    }
    generateCode() {
        let x = this.getInputValue(0);
        let y = this.getInputValue(1);
        let z = this.getInputValue(2);
        let w = this.getInputValue(3);
        return `vec4 ${this.getOutputVarName(0)} = vec4(${x}, ${y}, ${z}, ${w});`;
    }
}
exports.default = ColorNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sb3JOb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL25vZGVzL2lucHV0L2Jhc2ljL0NvbG9yTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUF1RTtBQUV2RSxNQUFxQixTQUFVLFNBQVEsaUJBQVU7SUFBakQ7O1FBQ0ksMkJBQXNCLEdBQUcsSUFBSSxDQUFDO0lBU2xDLENBQUM7SUFQRyxZQUFZO1FBQ1IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixPQUFPLFFBQVEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQzlFLENBQUM7Q0FDSjtBQVZELDRCQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hhZGVyTm9kZSwgU2hhZGVyU2xvdFR5cGUsIFNoYWRlclNsb3QgfSBmcm9tIFwiLi4vLi4vLi4vYmFzZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3JOb2RlIGV4dGVuZHMgU2hhZGVyTm9kZSB7XHJcbiAgICBmaXhlZENvbmNyZXRlUHJlY2lzaW9uID0gdHJ1ZTtcclxuXHJcbiAgICBnZW5lcmF0ZUNvZGUgKCkge1xyXG4gICAgICAgIGxldCB4ID0gdGhpcy5nZXRJbnB1dFZhbHVlKDApO1xyXG4gICAgICAgIGxldCB5ID0gdGhpcy5nZXRJbnB1dFZhbHVlKDEpO1xyXG4gICAgICAgIGxldCB6ID0gdGhpcy5nZXRJbnB1dFZhbHVlKDIpO1xyXG4gICAgICAgIGxldCB3ID0gdGhpcy5nZXRJbnB1dFZhbHVlKDMpO1xyXG4gICAgICAgIHJldHVybiBgdmVjNCAke3RoaXMuZ2V0T3V0cHV0VmFyTmFtZSgwKX0gPSB2ZWM0KCR7eH0sICR7eX0sICR7en0sICR7d30pO2A7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==