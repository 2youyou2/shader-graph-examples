"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const type_1 = require("../../type");
class SplitNode extends base_1.ShaderNode {
    constructor() {
        super(...arguments);
        this.concretePrecisionType = type_1.ConcretePrecisionType.Fixed;
    }
    generateCode() {
        let Value = this.getInputValue(0);
        let code = '';
        let slotR = this.getOutputSlotWithSlotName('R');
        let slotG = this.getOutputSlotWithSlotName('G');
        let slotB = this.getOutputSlotWithSlotName('B');
        let slotA = this.getOutputSlotWithSlotName('A');
        if (slotR && slotR.connectSlot) {
            code += `float ${slotR === null || slotR === void 0 ? void 0 : slotR.varName} = ${Value}.r;\n`;
        }
        if (slotG && slotG.connectSlot) {
            code += `float ${slotG === null || slotG === void 0 ? void 0 : slotG.varName} = ${Value}.g;\n`;
        }
        if (slotB && slotB.connectSlot) {
            code += `float ${slotB === null || slotB === void 0 ? void 0 : slotB.varName} = ${Value}.b;\n`;
        }
        if (slotA && slotA.connectSlot) {
            code += `float ${slotA === null || slotA === void 0 ? void 0 : slotA.varName} = ${Value}.a;\n`;
        }
        return code;
    }
}
exports.default = SplitNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BsaXROb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL25vZGVzL2NoYW5uZWwvU3BsaXROb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXdDO0FBQ3hDLHFDQUFtRDtBQUVuRCxNQUFxQixTQUFVLFNBQVEsaUJBQVU7SUFBakQ7O1FBQ0ksMEJBQXFCLEdBQUcsNEJBQXFCLENBQUMsS0FBSyxDQUFDO0lBdUJ4RCxDQUFDO0lBckJHLFlBQVk7UUFDUixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRCxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFO1lBQzVCLElBQUksSUFBSSxTQUFTLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxPQUFPLE1BQU0sS0FBSyxPQUFPLENBQUM7U0FDckQ7UUFDRCxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFO1lBQzVCLElBQUksSUFBSSxTQUFTLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxPQUFPLE1BQU0sS0FBSyxPQUFPLENBQUM7U0FDckQ7UUFDRCxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFO1lBQzVCLElBQUksSUFBSSxTQUFTLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxPQUFPLE1BQU0sS0FBSyxPQUFPLENBQUM7U0FDckQ7UUFDRCxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFO1lBQzVCLElBQUksSUFBSSxTQUFTLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxPQUFPLE1BQU0sS0FBSyxPQUFPLENBQUM7U0FDckQ7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0NBQ0o7QUF4QkQsNEJBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hhZGVyTm9kZSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XHJcbmltcG9ydCB7IENvbmNyZXRlUHJlY2lzaW9uVHlwZSB9IGZyb20gXCIuLi8uLi90eXBlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGxpdE5vZGUgZXh0ZW5kcyBTaGFkZXJOb2RlIHtcclxuICAgIGNvbmNyZXRlUHJlY2lzaW9uVHlwZSA9IENvbmNyZXRlUHJlY2lzaW9uVHlwZS5GaXhlZDtcclxuXHJcbiAgICBnZW5lcmF0ZUNvZGUgKCkge1xyXG4gICAgICAgIGxldCBWYWx1ZSA9IHRoaXMuZ2V0SW5wdXRWYWx1ZSgwKTtcclxuICAgICAgICBsZXQgY29kZSA9ICcnO1xyXG4gICAgICAgIGxldCBzbG90UiA9IHRoaXMuZ2V0T3V0cHV0U2xvdFdpdGhTbG90TmFtZSgnUicpO1xyXG4gICAgICAgIGxldCBzbG90RyA9IHRoaXMuZ2V0T3V0cHV0U2xvdFdpdGhTbG90TmFtZSgnRycpO1xyXG4gICAgICAgIGxldCBzbG90QiA9IHRoaXMuZ2V0T3V0cHV0U2xvdFdpdGhTbG90TmFtZSgnQicpO1xyXG4gICAgICAgIGxldCBzbG90QSA9IHRoaXMuZ2V0T3V0cHV0U2xvdFdpdGhTbG90TmFtZSgnQScpO1xyXG4gICAgICAgIGlmIChzbG90UiAmJiBzbG90Ui5jb25uZWN0U2xvdCkge1xyXG4gICAgICAgICAgICBjb2RlICs9IGBmbG9hdCAke3Nsb3RSPy52YXJOYW1lfSA9ICR7VmFsdWV9LnI7XFxuYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNsb3RHICYmIHNsb3RHLmNvbm5lY3RTbG90KSB7XHJcbiAgICAgICAgICAgIGNvZGUgKz0gYGZsb2F0ICR7c2xvdEc/LnZhck5hbWV9ID0gJHtWYWx1ZX0uZztcXG5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2xvdEIgJiYgc2xvdEIuY29ubmVjdFNsb3QpIHtcclxuICAgICAgICAgICAgY29kZSArPSBgZmxvYXQgJHtzbG90Qj8udmFyTmFtZX0gPSAke1ZhbHVlfS5iO1xcbmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzbG90QSAmJiBzbG90QS5jb25uZWN0U2xvdCkge1xyXG4gICAgICAgICAgICBjb2RlICs9IGBmbG9hdCAke3Nsb3RBPy52YXJOYW1lfSA9ICR7VmFsdWV9LmE7XFxuYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvZGU7XHJcbiAgICB9XHJcbn1cclxuIl19