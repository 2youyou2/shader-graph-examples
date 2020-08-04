"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
const type_1 = require("../../../type");
class MultiplyNode extends base_1.ShaderNode {
    constructor() {
        super(...arguments);
        this.concretePrecisionType = type_1.ConcretePrecisionType.Max;
    }
    generateCode() {
        let a = this.getInputValue(0);
        let b = this.getInputValue(1);
        return `${this.getOutputVarDefine(0)} = ${a} * ${b};`;
    }
}
exports.default = MultiplyNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlwbHlOb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL25vZGVzL21hdGgvYmFzaWMvTXVsdGlwbHlOb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQTJDO0FBQzNDLHdDQUFzRDtBQUV0RCxNQUFxQixZQUFhLFNBQVEsaUJBQVU7SUFBcEQ7O1FBQ0ksMEJBQXFCLEdBQUcsNEJBQXFCLENBQUMsR0FBRyxDQUFDO0lBT3RELENBQUM7SUFMRyxZQUFZO1FBQ1IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLE9BQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQzFELENBQUM7Q0FDSjtBQVJELCtCQVFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hhZGVyTm9kZSB9IGZyb20gXCIuLi8uLi8uLi9iYXNlXCI7XHJcbmltcG9ydCB7IENvbmNyZXRlUHJlY2lzaW9uVHlwZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNdWx0aXBseU5vZGUgZXh0ZW5kcyBTaGFkZXJOb2RlIHtcclxuICAgIGNvbmNyZXRlUHJlY2lzaW9uVHlwZSA9IENvbmNyZXRlUHJlY2lzaW9uVHlwZS5NYXg7XHJcbiAgICBcclxuICAgIGdlbmVyYXRlQ29kZSAoKSB7XHJcbiAgICAgICAgbGV0IGEgPSB0aGlzLmdldElucHV0VmFsdWUoMCk7XHJcbiAgICAgICAgbGV0IGIgPSB0aGlzLmdldElucHV0VmFsdWUoMSk7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZ2V0T3V0cHV0VmFyRGVmaW5lKDApfSA9ICR7YX0gKiAke2J9O2A7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==