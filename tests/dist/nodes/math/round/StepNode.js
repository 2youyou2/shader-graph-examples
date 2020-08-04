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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RlcE5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbm9kZXMvbWF0aC9yb3VuZC9TdGVwTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUEyQztBQUUzQyxNQUFxQixRQUFTLFNBQVEsaUJBQVU7SUFDNUMscUJBQXFCO1FBQ2pCLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxDQUFBO0lBQ2pDLENBQUM7SUFDRCxZQUFZO1FBQ1IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLE9BQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLFdBQVcsSUFBSSxLQUFLLEVBQUUsSUFBSSxDQUFDO0lBQ25FLENBQUM7Q0FDSjtBQVRELDJCQVNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hhZGVyTm9kZSB9IGZyb20gXCIuLi8uLi8uLi9iYXNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGVwTm9kZSBleHRlbmRzIFNoYWRlck5vZGUge1xyXG4gICAgY2FsY0NvbmNyZXRlUHJlY2lzaW9uICgpIHtcclxuICAgICAgICBzdXBlci5jYWxjQ29uY3JldGVQcmVjaXNpb24oKVxyXG4gICAgfVxyXG4gICAgZ2VuZXJhdGVDb2RlICgpIHtcclxuICAgICAgICBsZXQgZWRnZSA9IHRoaXMuZ2V0SW5wdXRWYWx1ZSgwKTtcclxuICAgICAgICBsZXQgSW4gPSB0aGlzLmdldElucHV0VmFsdWUoMSk7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZ2V0T3V0cHV0VmFyRGVmaW5lKDApfSA9IHN0ZXAoJHtlZGdlfSwgJHtJbn0pO2A7XHJcbiAgICB9XHJcbn1cclxuIl19