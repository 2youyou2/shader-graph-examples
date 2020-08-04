"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
const type_1 = require("../../../type");
class RemapNode extends base_1.ShaderNode {
    constructor() {
        super(...arguments);
        this.concretePrecisionType = type_1.ConcretePrecisionType.Fixed;
    }
    generateCode() {
        let In = this.getInputValue(0);
        let InMinMax = this.getInputValue(1);
        let OutMinMax = this.getInputValue(2);
        return `${this.getOutputVarDefine(0)} = ${OutMinMax}.x + (${In} - ${InMinMax}.x) * (${OutMinMax}.y - ${OutMinMax}.x) / (${InMinMax}.y - ${InMinMax}.x);`;
    }
}
exports.default = RemapNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVtYXBOb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL25vZGVzL21hdGgvcmFuZ2UvUmVtYXBOb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQTJDO0FBQzNDLHdDQUFzRDtBQUV0RCxNQUFxQixTQUFVLFNBQVEsaUJBQVU7SUFBakQ7O1FBQ0ksMEJBQXFCLEdBQUcsNEJBQXFCLENBQUMsS0FBSyxDQUFDO0lBUXhELENBQUM7SUFORyxZQUFZO1FBQ1IsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsTUFBTSxTQUFTLFNBQVMsRUFBRSxNQUFNLFFBQVEsVUFBVSxTQUFTLFFBQVEsU0FBUyxVQUFVLFFBQVEsUUFBUSxRQUFRLE1BQU0sQ0FBQztJQUM3SixDQUFDO0NBQ0o7QUFURCw0QkFTQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoYWRlck5vZGUgfSBmcm9tIFwiLi4vLi4vLi4vYmFzZVwiO1xyXG5pbXBvcnQgeyBDb25jcmV0ZVByZWNpc2lvblR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVtYXBOb2RlIGV4dGVuZHMgU2hhZGVyTm9kZSB7XHJcbiAgICBjb25jcmV0ZVByZWNpc2lvblR5cGUgPSBDb25jcmV0ZVByZWNpc2lvblR5cGUuRml4ZWQ7XHJcblxyXG4gICAgZ2VuZXJhdGVDb2RlICgpIHtcclxuICAgICAgICBsZXQgSW4gPSB0aGlzLmdldElucHV0VmFsdWUoMCk7XHJcbiAgICAgICAgbGV0IEluTWluTWF4ID0gdGhpcy5nZXRJbnB1dFZhbHVlKDEpO1xyXG4gICAgICAgIGxldCBPdXRNaW5NYXggPSB0aGlzLmdldElucHV0VmFsdWUoMik7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZ2V0T3V0cHV0VmFyRGVmaW5lKDApfSA9ICR7T3V0TWluTWF4fS54ICsgKCR7SW59IC0gJHtJbk1pbk1heH0ueCkgKiAoJHtPdXRNaW5NYXh9LnkgLSAke091dE1pbk1heH0ueCkgLyAoJHtJbk1pbk1heH0ueSAtICR7SW5NaW5NYXh9LngpO2A7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==