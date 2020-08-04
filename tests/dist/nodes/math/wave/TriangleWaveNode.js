"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
class TriangleWaveNode extends base_1.ShaderNode {
    generateCode() {
        let In = this.getInputValue(0);
        return `${this.getOutputVarDefine(0)} = 2.0 * abs( 2. * (${In} - floor(0.5 + ${In})) ) - 1.0;`;
    }
}
exports.default = TriangleWaveNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJpYW5nbGVXYXZlTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2Rlcy9tYXRoL3dhdmUvVHJpYW5nbGVXYXZlTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUEyQztBQUUzQyxNQUFxQixnQkFBaUIsU0FBUSxpQkFBVTtJQUNwRCxZQUFZO1FBQ1IsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyx1QkFBdUIsRUFBRSxrQkFBa0IsRUFBRSxhQUFhLENBQUM7SUFDbkcsQ0FBQztDQUNKO0FBTEQsbUNBS0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFkZXJOb2RlIH0gZnJvbSBcIi4uLy4uLy4uL2Jhc2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyaWFuZ2xlV2F2ZU5vZGUgZXh0ZW5kcyBTaGFkZXJOb2RlIHtcclxuICAgIGdlbmVyYXRlQ29kZSAoKSB7XHJcbiAgICAgICAgbGV0IEluID0gdGhpcy5nZXRJbnB1dFZhbHVlKDApO1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmdldE91dHB1dFZhckRlZmluZSgwKX0gPSAyLjAgKiBhYnMoIDIuICogKCR7SW59IC0gZmxvb3IoMC41ICsgJHtJbn0pKSApIC0gMS4wO2A7XHJcbiAgICB9XHJcbn1cclxuIl19