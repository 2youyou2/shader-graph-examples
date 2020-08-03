"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
class PropertyNode extends base_1.ShaderNode {
    constructor() {
        super(...arguments);
        this.concretePrecisionType = base_1.ConcretePrecisionType.Fixed;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvcGVydHlOb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL25vZGVzL2lucHV0L1Byb3BlcnR5Tm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUE4RTtBQUU5RSxNQUFxQixZQUFhLFNBQVEsaUJBQVU7SUFBcEQ7O1FBQ0ksMEJBQXFCLEdBQUcsNEJBQXFCLENBQUMsS0FBSyxDQUFDO1FBRXBELGFBQVEsR0FBeUIsSUFBSSxDQUFDO0lBZTFDLENBQUM7SUFiRyxnQkFBZ0IsQ0FBRSxVQUFVO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNoQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUM7UUFDakYsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBRUQsWUFBWTs7UUFDUixPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxNQUFNLE1BQUEsSUFBSSxDQUFDLFFBQVEsMENBQUUsSUFBSSxHQUFHLENBQUM7SUFDckUsQ0FBQztDQUNKO0FBbEJELCtCQWtCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoYWRlck5vZGUsIFNoYWRlclByb3BlcnksIENvbmNyZXRlUHJlY2lzaW9uVHlwZSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9wZXJ0eU5vZGUgZXh0ZW5kcyBTaGFkZXJOb2RlIHtcclxuICAgIGNvbmNyZXRlUHJlY2lzaW9uVHlwZSA9IENvbmNyZXRlUHJlY2lzaW9uVHlwZS5GaXhlZDtcclxuXHJcbiAgICBwcm9wZXJ0eTogU2hhZGVyUHJvcGVyeSB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIHNlYXJjaFByb3BlcnRpZXMgKHByb3BlcnRpZXMpIHtcclxuICAgICAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydGllcy5maW5kKHAgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcC5kYXRhLm1fR3VpZC5tX0d1aWRTZXJpYWxpemVkID09PSB0aGlzLmRhdGEubV9Qcm9wZXJ0eUd1aWRTZXJpYWxpemVkO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BlcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcGVydHkubm9kZSA9IHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlQ29kZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZ2V0T3V0cHV0VmFyRGVmaW5lKDApfSA9ICR7dGhpcy5wcm9wZXJ0eT8ubmFtZX07YDtcclxuICAgIH1cclxufVxyXG5cclxuIl19