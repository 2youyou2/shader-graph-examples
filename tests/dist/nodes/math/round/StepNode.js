"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
class StepNode extends base_1.ShaderNode {
    calcConcretePrecision() {
        super.calcConcretePrecision();
    }
    generateCode() {
        let edge = this.getInputValue(0);
        let In = this.getInputValue(1);
        return `${this.getOutputVarDefine(0)} = step(${edge}, ${In});`;
    }
}
exports.default = StepNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RlcE5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbm9kZXMvbWF0aC9yb3VuZC9TdGVwTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUF1RTtBQUV2RSxNQUFxQixRQUFTLFNBQVEsaUJBQVU7SUFDNUMscUJBQXFCO1FBQ2pCLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxDQUFBO0lBQ2pDLENBQUM7SUFDRCxZQUFZO1FBQ1IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLE9BQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLFdBQVcsSUFBSSxLQUFLLEVBQUUsSUFBSSxDQUFDO0lBQ25FLENBQUM7Q0FDSjtBQVRELDJCQVNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hhZGVyTm9kZSwgU2hhZGVyU2xvdFR5cGUsIFNoYWRlclNsb3QgfSBmcm9tIFwiLi4vLi4vLi4vYmFzZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RlcE5vZGUgZXh0ZW5kcyBTaGFkZXJOb2RlIHtcclxuICAgIGNhbGNDb25jcmV0ZVByZWNpc2lvbiAoKSB7XHJcbiAgICAgICAgc3VwZXIuY2FsY0NvbmNyZXRlUHJlY2lzaW9uKClcclxuICAgIH1cclxuICAgIGdlbmVyYXRlQ29kZSAoKSB7XHJcbiAgICAgICAgbGV0IGVkZ2UgPSB0aGlzLmdldElucHV0VmFsdWUoMCk7XHJcbiAgICAgICAgbGV0IEluID0gdGhpcy5nZXRJbnB1dFZhbHVlKDEpO1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmdldE91dHB1dFZhckRlZmluZSgwKX0gPSBzdGVwKCR7ZWRnZX0sICR7SW59KTtgO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==