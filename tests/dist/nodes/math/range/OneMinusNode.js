"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
class MinimumNode extends base_1.ShaderNode {
    generateCode() {
        let In = this.getInputValue(0);
        return `${this.getOutputVarDefine(0)} = 1. - ${In};`;
    }
}
exports.default = MinimumNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT25lTWludXNOb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL25vZGVzL21hdGgvcmFuZ2UvT25lTWludXNOb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQXVFO0FBRXZFLE1BQXFCLFdBQVksU0FBUSxpQkFBVTtJQUMvQyxZQUFZO1FBQ1IsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDO0lBQ3pELENBQUM7Q0FDSjtBQUxELDhCQUtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hhZGVyTm9kZSwgU2hhZGVyU2xvdFR5cGUsIFNoYWRlclNsb3QgfSBmcm9tIFwiLi4vLi4vLi4vYmFzZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWluaW11bU5vZGUgZXh0ZW5kcyBTaGFkZXJOb2RlIHtcclxuICAgIGdlbmVyYXRlQ29kZSAoKSB7XHJcbiAgICAgICAgbGV0IEluID0gdGhpcy5nZXRJbnB1dFZhbHVlKDApO1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmdldE91dHB1dFZhckRlZmluZSgwKX0gPSAxLiAtICR7SW59O2A7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==