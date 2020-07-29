"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
class PropertyNode extends base_1.ShaderNode {
    constructor() {
        super(...arguments);
        this.fixedConcretePrecision = true;
        this.property = null;
    }
    searchProperties(properties) {
        this.property = properties.find(p => {
            return p.data.m_Guid.m_GuidSerialized === this.data.m_PropertyGuidSerialized;
        });
    }
    generateCode() {
        var _a;
        return `${this.getOutputVarDefine(0)} = ${(_a = this.property) === null || _a === void 0 ? void 0 : _a.name};`;
    }
}
exports.default = PropertyNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvcGVydHlOb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL25vZGVzL2lucHV0L1Byb3BlcnR5Tm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUF1RDtBQUV2RCxNQUFxQixZQUFhLFNBQVEsaUJBQVU7SUFBcEQ7O1FBQ0ksMkJBQXNCLEdBQUcsSUFBSSxDQUFDO1FBRTlCLGFBQVEsR0FBeUIsSUFBSSxDQUFDO0lBVzFDLENBQUM7SUFURyxnQkFBZ0IsQ0FBRSxVQUFVO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNoQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUM7UUFDakYsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsWUFBWTs7UUFDUixPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxNQUFNLE1BQUEsSUFBSSxDQUFDLFFBQVEsMENBQUUsSUFBSSxHQUFHLENBQUM7SUFDckUsQ0FBQztDQUNKO0FBZEQsK0JBY0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFkZXJOb2RlLCBTaGFkZXJQcm9wZXJ5IH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3BlcnR5Tm9kZSBleHRlbmRzIFNoYWRlck5vZGUge1xyXG4gICAgZml4ZWRDb25jcmV0ZVByZWNpc2lvbiA9IHRydWU7XHJcblxyXG4gICAgcHJvcGVydHk6IFNoYWRlclByb3BlcnkgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBzZWFyY2hQcm9wZXJ0aWVzIChwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnRpZXMuZmluZChwID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHAuZGF0YS5tX0d1aWQubV9HdWlkU2VyaWFsaXplZCA9PT0gdGhpcy5kYXRhLm1fUHJvcGVydHlHdWlkU2VyaWFsaXplZDtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlQ29kZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZ2V0T3V0cHV0VmFyRGVmaW5lKDApfSA9ICR7dGhpcy5wcm9wZXJ0eT8ubmFtZX07YDtcclxuICAgIH1cclxufVxyXG5cclxuIl19