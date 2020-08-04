"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
class RejectionNode extends base_1.ShaderNode {
    generateCode() {
        let In = this.getInputValue(0);
        let Normal = this.getInputValue(1);
        return `${this.getOutputVarDefine(0)} = reflect(${In}, ${Normal});`;
    }
}
exports.default = RejectionNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVmbGVjdGlvbk5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbm9kZXMvbWF0aC92ZWN0b3IvUmVmbGVjdGlvbk5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBMkM7QUFFM0MsTUFBcUIsYUFBYyxTQUFRLGlCQUFVO0lBQ2pELFlBQVk7UUFDUixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLEtBQUssTUFBTSxJQUFJLENBQUM7SUFDeEUsQ0FBQztDQUNKO0FBTkQsZ0NBTUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFkZXJOb2RlIH0gZnJvbSBcIi4uLy4uLy4uL2Jhc2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlamVjdGlvbk5vZGUgZXh0ZW5kcyBTaGFkZXJOb2RlIHtcclxuICAgIGdlbmVyYXRlQ29kZSAoKSB7XHJcbiAgICAgICAgbGV0IEluID0gdGhpcy5nZXRJbnB1dFZhbHVlKDApO1xyXG4gICAgICAgIGxldCBOb3JtYWwgPSB0aGlzLmdldElucHV0VmFsdWUoMSk7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZ2V0T3V0cHV0VmFyRGVmaW5lKDApfSA9IHJlZmxlY3QoJHtJbn0sICR7Tm9ybWFsfSk7YDtcclxuICAgIH1cclxufVxyXG4iXX0=