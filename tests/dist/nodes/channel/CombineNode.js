"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const type_1 = require("../../type");
class CombineNode extends base_1.ShaderNode {
    constructor() {
        super(...arguments);
        this.concretePrecisionType = type_1.ConcretePrecisionType.Fixed;
    }
    generateCode() {
        let slotR = this.getSlotWithSlotName('R');
        let slotG = this.getSlotWithSlotName('G');
        let slotB = this.getSlotWithSlotName('B');
        let slotA = this.getSlotWithSlotName('A');
        let slotRGBA = this.getSlotWithSlotName('RGBA');
        let slotRGB = this.getSlotWithSlotName('RGB');
        let slotRG = this.getSlotWithSlotName('RG');
        let code = '';
        if (slotRGBA && slotRGBA.connectSlot) {
            code += `${slotRGBA === null || slotRGBA === void 0 ? void 0 : slotRGBA.varDefine} = vec4(${slotR === null || slotR === void 0 ? void 0 : slotR.slotValue}, ${slotG === null || slotG === void 0 ? void 0 : slotG.slotValue}, ${slotB === null || slotB === void 0 ? void 0 : slotB.slotValue}, ${slotA === null || slotA === void 0 ? void 0 : slotA.slotValue});\n`;
        }
        if (slotRGB && slotRGB.connectSlot) {
            code += `${slotRGB === null || slotRGB === void 0 ? void 0 : slotRGB.varDefine} = vec3(${slotR === null || slotR === void 0 ? void 0 : slotR.slotValue}, ${slotG === null || slotG === void 0 ? void 0 : slotG.slotValue}, ${slotB === null || slotB === void 0 ? void 0 : slotB.slotValue});\n`;
        }
        if (slotRG && slotRG.connectSlot) {
            code += `${slotRG === null || slotRG === void 0 ? void 0 : slotRG.varDefine} = vec2(${slotR === null || slotR === void 0 ? void 0 : slotR.slotValue}, ${slotG === null || slotG === void 0 ? void 0 : slotG.slotValue});\n`;
        }
        return code;
    }
}
exports.default = CombineNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tYmluZU5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbm9kZXMvY2hhbm5lbC9Db21iaW5lTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUF3QztBQUN4QyxxQ0FBbUQ7QUFFbkQsTUFBcUIsV0FBWSxTQUFRLGlCQUFVO0lBQW5EOztRQUNJLDBCQUFxQixHQUFHLDRCQUFxQixDQUFDLEtBQUssQ0FBQztJQTJCeEQsQ0FBQztJQXpCRyxZQUFZO1FBRVIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTFDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTVDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUVkLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxXQUFXLEVBQUU7WUFDbEMsSUFBSSxJQUFJLEdBQUcsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLFNBQVMsV0FBVyxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsU0FBUyxLQUFLLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxTQUFTLEtBQUssS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLFNBQVMsS0FBSyxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsU0FBUyxNQUFNLENBQUM7U0FDbEk7UUFDRCxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFO1lBQ2hDLElBQUksSUFBSSxHQUFHLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxTQUFTLFdBQVcsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLFNBQVMsS0FBSyxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsU0FBUyxLQUFLLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxTQUFTLE1BQU0sQ0FBQztTQUM1RztRQUNELElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxXQUFXLEVBQUU7WUFDOUIsSUFBSSxJQUFJLEdBQUcsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFNBQVMsV0FBVyxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsU0FBUyxLQUFLLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxTQUFTLE1BQU0sQ0FBQztTQUN0RjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Q0FDSjtBQTVCRCw4QkE0QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFkZXJOb2RlIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcclxuaW1wb3J0IHsgQ29uY3JldGVQcmVjaXNpb25UeXBlIH0gZnJvbSBcIi4uLy4uL3R5cGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbWJpbmVOb2RlIGV4dGVuZHMgU2hhZGVyTm9kZSB7XHJcbiAgICBjb25jcmV0ZVByZWNpc2lvblR5cGUgPSBDb25jcmV0ZVByZWNpc2lvblR5cGUuRml4ZWQ7XHJcblxyXG4gICAgZ2VuZXJhdGVDb2RlICgpIHtcclxuXHJcbiAgICAgICAgbGV0IHNsb3RSID0gdGhpcy5nZXRTbG90V2l0aFNsb3ROYW1lKCdSJyk7XHJcbiAgICAgICAgbGV0IHNsb3RHID0gdGhpcy5nZXRTbG90V2l0aFNsb3ROYW1lKCdHJyk7XHJcbiAgICAgICAgbGV0IHNsb3RCID0gdGhpcy5nZXRTbG90V2l0aFNsb3ROYW1lKCdCJyk7XHJcbiAgICAgICAgbGV0IHNsb3RBID0gdGhpcy5nZXRTbG90V2l0aFNsb3ROYW1lKCdBJyk7XHJcblxyXG4gICAgICAgIGxldCBzbG90UkdCQSA9IHRoaXMuZ2V0U2xvdFdpdGhTbG90TmFtZSgnUkdCQScpO1xyXG4gICAgICAgIGxldCBzbG90UkdCID0gdGhpcy5nZXRTbG90V2l0aFNsb3ROYW1lKCdSR0InKTtcclxuICAgICAgICBsZXQgc2xvdFJHID0gdGhpcy5nZXRTbG90V2l0aFNsb3ROYW1lKCdSRycpO1xyXG5cclxuICAgICAgICBsZXQgY29kZSA9ICcnO1xyXG5cclxuICAgICAgICBpZiAoc2xvdFJHQkEgJiYgc2xvdFJHQkEuY29ubmVjdFNsb3QpIHtcclxuICAgICAgICAgICAgY29kZSArPSBgJHtzbG90UkdCQT8udmFyRGVmaW5lfSA9IHZlYzQoJHtzbG90Uj8uc2xvdFZhbHVlfSwgJHtzbG90Rz8uc2xvdFZhbHVlfSwgJHtzbG90Qj8uc2xvdFZhbHVlfSwgJHtzbG90QT8uc2xvdFZhbHVlfSk7XFxuYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNsb3RSR0IgJiYgc2xvdFJHQi5jb25uZWN0U2xvdCkge1xyXG4gICAgICAgICAgICBjb2RlICs9IGAke3Nsb3RSR0I/LnZhckRlZmluZX0gPSB2ZWMzKCR7c2xvdFI/LnNsb3RWYWx1ZX0sICR7c2xvdEc/LnNsb3RWYWx1ZX0sICR7c2xvdEI/LnNsb3RWYWx1ZX0pO1xcbmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzbG90UkcgJiYgc2xvdFJHLmNvbm5lY3RTbG90KSB7XHJcbiAgICAgICAgICAgIGNvZGUgKz0gYCR7c2xvdFJHPy52YXJEZWZpbmV9ID0gdmVjMigke3Nsb3RSPy5zbG90VmFsdWV9LCAke3Nsb3RHPy5zbG90VmFsdWV9KTtcXG5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gY29kZTtcclxuICAgIH1cclxufVxyXG4iXX0=