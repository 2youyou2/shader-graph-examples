"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
class AbsoluteNode extends base_1.ShaderNode {
    generateCode() {
        return `${this.getOutputVarDefine(0)} = abs(${this.getInputValue(0)});`;
    }
}
exports.default = AbsoluteNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzb2x1dGVOb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL25vZGVzL21hdGgvYWR2YW5jZWQvQWJzb2x1dGVOb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQXVFO0FBRXZFLE1BQXFCLFlBQWEsU0FBUSxpQkFBVTtJQUNoRCxZQUFZO1FBQ1IsT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsVUFBVSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDNUUsQ0FBQztDQUNKO0FBSkQsK0JBSUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFkZXJOb2RlLCBTaGFkZXJTbG90VHlwZSwgU2hhZGVyU2xvdCB9IGZyb20gXCIuLi8uLi8uLi9iYXNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYnNvbHV0ZU5vZGUgZXh0ZW5kcyBTaGFkZXJOb2RlIHtcclxuICAgIGdlbmVyYXRlQ29kZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZ2V0T3V0cHV0VmFyRGVmaW5lKDApfSA9IGFicygke3RoaXMuZ2V0SW5wdXRWYWx1ZSgwKX0pO2A7XHJcbiAgICB9XHJcbn1cclxuIl19