"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
class NormalizeNode extends base_1.ShaderNode {
    generateCode() {
        return `${this.getOutputVarDefine(0)} = 1. / (${this.getInputValue(0)} * ${this.getInputValue(0)});`;
    }
}
exports.default = NormalizeNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjaXByb2NhbE5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbm9kZXMvbWF0aC9hZHZhbmNlZC9SZWNpcHJvY2FsTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUEyQztBQUUzQyxNQUFxQixhQUFjLFNBQVEsaUJBQVU7SUFDakQsWUFBWTtRQUNSLE9BQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLFlBQVksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDekcsQ0FBQztDQUNKO0FBSkQsZ0NBSUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFkZXJOb2RlIH0gZnJvbSBcIi4uLy4uLy4uL2Jhc2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vcm1hbGl6ZU5vZGUgZXh0ZW5kcyBTaGFkZXJOb2RlIHtcclxuICAgIGdlbmVyYXRlQ29kZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZ2V0T3V0cHV0VmFyRGVmaW5lKDApfSA9IDEuIC8gKCR7dGhpcy5nZXRJbnB1dFZhbHVlKDApfSAqICR7dGhpcy5nZXRJbnB1dFZhbHVlKDApfSk7YDtcclxuICAgIH1cclxufVxyXG4iXX0=