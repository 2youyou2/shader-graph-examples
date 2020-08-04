"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const type_1 = require("../../type");
class PropertyNode extends base_1.ShaderNode {
    constructor() {
        super(...arguments);
        this.concretePrecisionType = type_1.ConcretePrecisionType.Fixed;
        this.property = null;
    }
    searchProperties(properties) {
        this.property = properties.find(p => {
            return p.data.m_Guid.m_GuidSerialized === this.data.m_PropertyGuidSerialized;
        });
        if (this.property) {
            this.property.node = this;
        }
    }
    generateCode() {
        var _a;
        return `${this.getOutputVarDefine(0)} = ${(_a = this.property) === null || _a === void 0 ? void 0 : _a.name};`;
    }
}
exports.default = PropertyNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvcGVydHlOb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL25vZGVzL2lucHV0L1Byb3BlcnR5Tm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUF1RDtBQUN2RCxxQ0FBbUQ7QUFFbkQsTUFBcUIsWUFBYSxTQUFRLGlCQUFVO0lBQXBEOztRQUNJLDBCQUFxQixHQUFHLDRCQUFxQixDQUFDLEtBQUssQ0FBQztRQUVwRCxhQUFRLEdBQXlCLElBQUksQ0FBQztJQWUxQyxDQUFDO0lBYkcsZ0JBQWdCLENBQUUsVUFBVTtRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDaEMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDO1FBQ2pGLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQUVELFlBQVk7O1FBQ1IsT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsTUFBTSxNQUFBLElBQUksQ0FBQyxRQUFRLDBDQUFFLElBQUksR0FBRyxDQUFDO0lBQ3JFLENBQUM7Q0FDSjtBQWxCRCwrQkFrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFkZXJOb2RlLCBTaGFkZXJQcm9wZXJ5IH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcclxuaW1wb3J0IHsgQ29uY3JldGVQcmVjaXNpb25UeXBlIH0gZnJvbSBcIi4uLy4uL3R5cGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3BlcnR5Tm9kZSBleHRlbmRzIFNoYWRlck5vZGUge1xyXG4gICAgY29uY3JldGVQcmVjaXNpb25UeXBlID0gQ29uY3JldGVQcmVjaXNpb25UeXBlLkZpeGVkO1xyXG5cclxuICAgIHByb3BlcnR5OiBTaGFkZXJQcm9wZXJ5IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgc2VhcmNoUHJvcGVydGllcyAocHJvcGVydGllcykge1xyXG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0aWVzLmZpbmQocCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBwLmRhdGEubV9HdWlkLm1fR3VpZFNlcmlhbGl6ZWQgPT09IHRoaXMuZGF0YS5tX1Byb3BlcnR5R3VpZFNlcmlhbGl6ZWQ7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcGVydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eS5ub2RlID0gdGhpcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVDb2RlICgpIHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5nZXRPdXRwdXRWYXJEZWZpbmUoMCl9ID0gJHt0aGlzLnByb3BlcnR5Py5uYW1lfTtgO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=