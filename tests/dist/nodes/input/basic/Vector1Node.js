"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
class Vector1Node extends base_1.ShaderNode {
    constructor() {
        super(...arguments);
        this.fixedConcretePrecision = true;
    }
    generateCode() {
        return `float ${this.getOutputVarName(0)} = ${this.getInputValue(0)};`;
    }
}
exports.default = Vector1Node;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVjdG9yMU5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbm9kZXMvaW5wdXQvYmFzaWMvVmVjdG9yMU5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBdUU7QUFFdkUsTUFBcUIsV0FBWSxTQUFRLGlCQUFVO0lBQW5EOztRQUNJLDJCQUFzQixHQUFHLElBQUksQ0FBQztJQUtsQyxDQUFDO0lBSEcsWUFBWTtRQUNSLE9BQU8sU0FBUyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQzNFLENBQUM7Q0FDSjtBQU5ELDhCQU1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hhZGVyTm9kZSwgU2hhZGVyU2xvdFR5cGUsIFNoYWRlclNsb3QgfSBmcm9tIFwiLi4vLi4vLi4vYmFzZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yMU5vZGUgZXh0ZW5kcyBTaGFkZXJOb2RlIHtcclxuICAgIGZpeGVkQ29uY3JldGVQcmVjaXNpb24gPSB0cnVlO1xyXG5cclxuICAgIGdlbmVyYXRlQ29kZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBmbG9hdCAke3RoaXMuZ2V0T3V0cHV0VmFyTmFtZSgwKX0gPSAke3RoaXMuZ2V0SW5wdXRWYWx1ZSgwKX07YDtcclxuICAgIH1cclxufVxyXG5cclxuIl19