"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
const type_1 = require("../../../type");
class EllipseNode extends base_1.ShaderNode {
    constructor() {
        super(...arguments);
        this.concretePrecisionType = type_1.ConcretePrecisionType.Fixed;
        this.depChunks = ['noise'];
    }
    generateCode() {
        let uv = this.getInputValue(0);
        let scale = this.getInputValue(1);
        return `${this.getOutputVarDefine(0)} = simpleNoise(${uv}, ${scale});`;
    }
}
exports.default = EllipseNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9pc2VOb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL25vZGVzL3Byb2NlZHVyYWwvbm9pc2UvTm9pc2VOb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQTJDO0FBQzNDLHdDQUFzRDtBQUV0RCxNQUFxQixXQUFZLFNBQVEsaUJBQVU7SUFBbkQ7O1FBQ0ksMEJBQXFCLEdBQUcsNEJBQXFCLENBQUMsS0FBSyxDQUFDO1FBRXBELGNBQVMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBT3pCLENBQUM7SUFMRyxZQUFZO1FBQ1IsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLEtBQUssS0FBSyxJQUFJLENBQUM7SUFDM0UsQ0FBQztDQUNKO0FBVkQsOEJBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFkZXJOb2RlIH0gZnJvbSBcIi4uLy4uLy4uL2Jhc2VcIjtcclxuaW1wb3J0IHsgQ29uY3JldGVQcmVjaXNpb25UeXBlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsbGlwc2VOb2RlIGV4dGVuZHMgU2hhZGVyTm9kZSB7XHJcbiAgICBjb25jcmV0ZVByZWNpc2lvblR5cGUgPSBDb25jcmV0ZVByZWNpc2lvblR5cGUuRml4ZWQ7XHJcblxyXG4gICAgZGVwQ2h1bmtzID0gWydub2lzZSddXHJcblxyXG4gICAgZ2VuZXJhdGVDb2RlICgpIHtcclxuICAgICAgICBsZXQgdXYgPSB0aGlzLmdldElucHV0VmFsdWUoMCk7XHJcbiAgICAgICAgbGV0IHNjYWxlID0gdGhpcy5nZXRJbnB1dFZhbHVlKDEpO1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmdldE91dHB1dFZhckRlZmluZSgwKX0gPSBzaW1wbGVOb2lzZSgke3V2fSwgJHtzY2FsZX0pO2A7XHJcbiAgICB9XHJcbn1cclxuIl19