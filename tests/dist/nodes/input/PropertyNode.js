"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const type_1 = require("../../type");
class PropertyNode extends base_1.ShaderNode {
    constructor() {
        super(...arguments);
        this.concretePrecisionType = type_1.ConcretePrecisionType.Fixed;
        this.property = null;
        this.isPropertyNode = true;
        // generateCode () {
        //     return `${this.getOutputVarDefine(0)} = ${this.property?.name};`;
        // }
    }
    searchProperties(properties) {
        this.property = properties.find(p => {
            return p.data.m_Guid.m_GuidSerialized === this.data.m_PropertyGuidSerialized;
        });
        if (this.property) {
            this.property.node = this;
        }
    }
}
exports.default = PropertyNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvcGVydHlOb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL25vZGVzL2lucHV0L1Byb3BlcnR5Tm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUF1RDtBQUN2RCxxQ0FBbUQ7QUFFbkQsTUFBcUIsWUFBYSxTQUFRLGlCQUFVO0lBQXBEOztRQUNJLDBCQUFxQixHQUFHLDRCQUFxQixDQUFDLEtBQUssQ0FBQztRQUNwRCxhQUFRLEdBQXlCLElBQUksQ0FBQztRQUV0QyxtQkFBYyxHQUFHLElBQUksQ0FBQztRQVl0QixvQkFBb0I7UUFDcEIsd0VBQXdFO1FBQ3hFLElBQUk7SUFDUixDQUFDO0lBYkcsZ0JBQWdCLENBQUUsVUFBVTtRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDaEMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDO1FBQ2pGLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztDQUtKO0FBbkJELCtCQW1CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoYWRlck5vZGUsIFNoYWRlclByb3BlcnkgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xyXG5pbXBvcnQgeyBDb25jcmV0ZVByZWNpc2lvblR5cGUgfSBmcm9tIFwiLi4vLi4vdHlwZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvcGVydHlOb2RlIGV4dGVuZHMgU2hhZGVyTm9kZSB7XHJcbiAgICBjb25jcmV0ZVByZWNpc2lvblR5cGUgPSBDb25jcmV0ZVByZWNpc2lvblR5cGUuRml4ZWQ7XHJcbiAgICBwcm9wZXJ0eTogU2hhZGVyUHJvcGVyeSB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIGlzUHJvcGVydHlOb2RlID0gdHJ1ZTtcclxuXHJcbiAgICBzZWFyY2hQcm9wZXJ0aWVzIChwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnRpZXMuZmluZChwID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHAuZGF0YS5tX0d1aWQubV9HdWlkU2VyaWFsaXplZCA9PT0gdGhpcy5kYXRhLm1fUHJvcGVydHlHdWlkU2VyaWFsaXplZDtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wZXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BlcnR5Lm5vZGUgPSB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBnZW5lcmF0ZUNvZGUgKCkge1xyXG4gICAgLy8gICAgIHJldHVybiBgJHt0aGlzLmdldE91dHB1dFZhckRlZmluZSgwKX0gPSAke3RoaXMucHJvcGVydHk/Lm5hbWV9O2A7XHJcbiAgICAvLyB9XHJcbn1cclxuXHJcbiJdfQ==