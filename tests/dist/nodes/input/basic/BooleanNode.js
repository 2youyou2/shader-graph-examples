"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
class BooleanNode extends base_1.ShaderNode {
    constructor() {
        super(...arguments);
        this.fixedConcretePrecision = true;
    }
    generateCode() {
        return `bool ${this.getOutputVarName(0)} = ${this.getInputValue(0)};`;
    }
}
exports.default = BooleanNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9vbGVhbk5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbm9kZXMvaW5wdXQvYmFzaWMvQm9vbGVhbk5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBdUU7QUFFdkUsTUFBcUIsV0FBWSxTQUFRLGlCQUFVO0lBQW5EOztRQUNJLDJCQUFzQixHQUFHLElBQUksQ0FBQztJQUtsQyxDQUFDO0lBSEcsWUFBWTtRQUNSLE9BQU8sUUFBUSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQzFFLENBQUM7Q0FDSjtBQU5ELDhCQU1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hhZGVyTm9kZSwgU2hhZGVyU2xvdFR5cGUsIFNoYWRlclNsb3QgfSBmcm9tIFwiLi4vLi4vLi4vYmFzZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9vbGVhbk5vZGUgZXh0ZW5kcyBTaGFkZXJOb2RlIHtcclxuICAgIGZpeGVkQ29uY3JldGVQcmVjaXNpb24gPSB0cnVlO1xyXG5cclxuICAgIGdlbmVyYXRlQ29kZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBib29sICR7dGhpcy5nZXRPdXRwdXRWYXJOYW1lKDApfSA9ICR7dGhpcy5nZXRJbnB1dFZhbHVlKDApfTtgO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=