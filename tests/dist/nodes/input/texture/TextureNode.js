"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
class TextureNode extends base_1.ShaderNode {
    constructor() {
        super(...arguments);
        this.concretePrecisionType = base_1.ConcretePrecisionType.Texture;
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
exports.default = TextureNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dHVyZU5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbm9kZXMvaW5wdXQvdGV4dHVyZS9UZXh0dXJlTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUFpRjtBQUVqRixNQUFxQixXQUFZLFNBQVEsaUJBQVU7SUFBbkQ7O1FBQ0ksMEJBQXFCLEdBQUcsNEJBQXFCLENBQUMsT0FBTyxDQUFDO0lBZTFELENBQUM7SUFiRyxnQkFBZ0IsQ0FBRSxVQUFVO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNoQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUM7UUFDakYsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBRUQsWUFBWTs7UUFDUixPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxNQUFNLE1BQUEsSUFBSSxDQUFDLFFBQVEsMENBQUUsSUFBSSxHQUFHLENBQUM7SUFDckUsQ0FBQztDQUNKO0FBaEJELDhCQWdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoYWRlck5vZGUsIFNoYWRlclByb3BlcnksIENvbmNyZXRlUHJlY2lzaW9uVHlwZSB9IGZyb20gXCIuLi8uLi8uLi9iYXNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlTm9kZSBleHRlbmRzIFNoYWRlck5vZGUge1xyXG4gICAgY29uY3JldGVQcmVjaXNpb25UeXBlID0gQ29uY3JldGVQcmVjaXNpb25UeXBlLlRleHR1cmU7XHJcblxyXG4gICAgc2VhcmNoUHJvcGVydGllcyAocHJvcGVydGllcykge1xyXG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0aWVzLmZpbmQocCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBwLmRhdGEubV9HdWlkLm1fR3VpZFNlcmlhbGl6ZWQgPT09IHRoaXMuZGF0YS5tX1Byb3BlcnR5R3VpZFNlcmlhbGl6ZWQ7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcGVydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eS5ub2RlID0gdGhpcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVDb2RlICgpIHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5nZXRPdXRwdXRWYXJEZWZpbmUoMCl9ID0gJHt0aGlzLnByb3BlcnR5Py5uYW1lfTtgO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=