"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
const type_1 = require("../../../type");
class UVNode extends base_1.ShaderNode {
    constructor() {
        super(...arguments);
        this.concretePrecisionType = type_1.ConcretePrecisionType.Fixed;
    }
    calcConcretePrecision() {
        this.slots.forEach(slot => {
            slot._concretePrecision = 2;
        });
    }
    generateCode() {
        let uvName = 'v_uv';
        if (this.data.m_OutputChannel) {
            uvName = `v_uv${this.data.m_OutputChannel}`;
        }
        return `${this.getOutputVarDefine(0)} = ${uvName};`;
    }
}
exports.default = UVNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVVZOb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL25vZGVzL2lucHV0L2dlb21ldHJ5L1VWTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUEyQztBQUMzQyx3Q0FBc0Q7QUFFdEQsTUFBcUIsTUFBTyxTQUFRLGlCQUFVO0lBQTlDOztRQUNJLDBCQUFxQixHQUFHLDRCQUFxQixDQUFDLEtBQUssQ0FBQztJQWV4RCxDQUFDO0lBYkcscUJBQXFCO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsWUFBWTtRQUNSLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNwQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQzNCLE1BQU0sR0FBRyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDL0M7UUFDRCxPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxNQUFNLE1BQU0sR0FBRyxDQUFDO0lBQ3hELENBQUM7Q0FDSjtBQWhCRCx5QkFnQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFkZXJOb2RlIH0gZnJvbSBcIi4uLy4uLy4uL2Jhc2VcIjtcclxuaW1wb3J0IHsgQ29uY3JldGVQcmVjaXNpb25UeXBlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVWTm9kZSBleHRlbmRzIFNoYWRlck5vZGUge1xyXG4gICAgY29uY3JldGVQcmVjaXNpb25UeXBlID0gQ29uY3JldGVQcmVjaXNpb25UeXBlLkZpeGVkO1xyXG5cclxuICAgIGNhbGNDb25jcmV0ZVByZWNpc2lvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zbG90cy5mb3JFYWNoKHNsb3QgPT4ge1xyXG4gICAgICAgICAgICBzbG90Ll9jb25jcmV0ZVByZWNpc2lvbiA9IDI7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZUNvZGUgKCkge1xyXG4gICAgICAgIGxldCB1dk5hbWUgPSAndl91dic7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5tX091dHB1dENoYW5uZWwpIHtcclxuICAgICAgICAgICAgdXZOYW1lID0gYHZfdXYke3RoaXMuZGF0YS5tX091dHB1dENoYW5uZWx9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZ2V0T3V0cHV0VmFyRGVmaW5lKDApfSA9ICR7dXZOYW1lfTtgO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=