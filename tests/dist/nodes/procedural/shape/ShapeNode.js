"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
const type_1 = require("../../../type");
class ShapeNode extends base_1.ShaderNode {
    constructor() {
        super(...arguments);
        this.concretePrecisionType = type_1.ConcretePrecisionType.Fixed;
        this.depChunks = ['shape'];
    }
}
exports.default = ShapeNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hhcGVOb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL25vZGVzL3Byb2NlZHVyYWwvc2hhcGUvU2hhcGVOb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQTJDO0FBQzNDLHdDQUFzRDtBQUV0RCxNQUFxQixTQUFVLFNBQVEsaUJBQVU7SUFBakQ7O1FBQ0ksMEJBQXFCLEdBQUcsNEJBQXFCLENBQUMsS0FBSyxDQUFDO1FBRXBELGNBQVMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3pCLENBQUM7Q0FBQTtBQUpELDRCQUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hhZGVyTm9kZSB9IGZyb20gXCIuLi8uLi8uLi9iYXNlXCI7XHJcbmltcG9ydCB7IENvbmNyZXRlUHJlY2lzaW9uVHlwZSB9IGZyb20gXCIuLi8uLi8uLi90eXBlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFwZU5vZGUgZXh0ZW5kcyBTaGFkZXJOb2RlIHtcclxuICAgIGNvbmNyZXRlUHJlY2lzaW9uVHlwZSA9IENvbmNyZXRlUHJlY2lzaW9uVHlwZS5GaXhlZDtcclxuXHJcbiAgICBkZXBDaHVua3MgPSBbJ3NoYXBlJ11cclxufVxyXG4iXX0=