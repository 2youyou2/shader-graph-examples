"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
class PropertyNode extends base_1.ShaderNode {
    constructor() {
        super(...arguments);
        this.property = null;
    }
    searchProperties(properties) {
        this.property = properties.find(p => {
            return p.data.m_Guid.m_GuidSerialized;
        });
    }
    generateCode() {
        var _a;
        return `${this.getOutputVarName(0)} = ${(_a = this.property) === null || _a === void 0 ? void 0 : _a.data.m_Name};`;
    }
}
exports.default = PropertyNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvcGVydHlOb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL25vZGVzL2lucHV0L1Byb3BlcnR5Tm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUF1RDtBQUV2RCxNQUFxQixZQUFhLFNBQVEsaUJBQVU7SUFBcEQ7O1FBQ0ksYUFBUSxHQUF5QixJQUFJLENBQUM7SUFXMUMsQ0FBQztJQVRHLGdCQUFnQixDQUFFLFVBQVU7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2hDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsWUFBWTs7UUFDUixPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxNQUFNLE1BQUEsSUFBSSxDQUFDLFFBQVEsMENBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDO0lBQzFFLENBQUM7Q0FDSjtBQVpELCtCQVlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hhZGVyTm9kZSwgU2hhZGVyUHJvcGVyeSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9wZXJ0eU5vZGUgZXh0ZW5kcyBTaGFkZXJOb2RlIHtcclxuICAgIHByb3BlcnR5OiBTaGFkZXJQcm9wZXJ5IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgc2VhcmNoUHJvcGVydGllcyAocHJvcGVydGllcykge1xyXG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0aWVzLmZpbmQocCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBwLmRhdGEubV9HdWlkLm1fR3VpZFNlcmlhbGl6ZWQ7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZUNvZGUgKCkge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmdldE91dHB1dFZhck5hbWUoMCl9ID0gJHt0aGlzLnByb3BlcnR5Py5kYXRhLm1fTmFtZX07YDtcclxuICAgIH1cclxufVxyXG5cclxuIl19