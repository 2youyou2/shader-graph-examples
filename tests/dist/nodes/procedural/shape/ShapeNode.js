"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
class ShapeNode extends base_1.ShaderNode {
    constructor() {
        super(...arguments);
        this.concretePrecisionType = base_1.ConcretePrecisionType.Fixed;
        this.depChunks = ['shape'];
    }
}
exports.default = ShapeNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hhcGVOb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL25vZGVzL3Byb2NlZHVyYWwvc2hhcGUvU2hhcGVOb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQWtFO0FBRWxFLE1BQXFCLFNBQVUsU0FBUSxpQkFBVTtJQUFqRDs7UUFDSSwwQkFBcUIsR0FBRyw0QkFBcUIsQ0FBQyxLQUFLLENBQUM7UUFFcEQsY0FBUyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDekIsQ0FBQztDQUFBO0FBSkQsNEJBSUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFkZXJOb2RlLCBDb25jcmV0ZVByZWNpc2lvblR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vYmFzZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcGVOb2RlIGV4dGVuZHMgU2hhZGVyTm9kZSB7XHJcbiAgICBjb25jcmV0ZVByZWNpc2lvblR5cGUgPSBDb25jcmV0ZVByZWNpc2lvblR5cGUuRml4ZWQ7XHJcblxyXG4gICAgZGVwQ2h1bmtzID0gWydzaGFwZSddXHJcbn1cclxuIl19