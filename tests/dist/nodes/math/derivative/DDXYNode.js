"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
class DDXYNode extends base_1.ShaderNode {
    generateCode() {
        return `${this.getOutputVarDefine(0)} = abs(dFdx(${this.getInputValue(0)})) + abs(dFdy(${this.getInputValue(0)}));`;
    }
}
exports.default = DDXYNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRERYWU5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbm9kZXMvbWF0aC9kZXJpdmF0aXZlL0REWFlOb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQTJDO0FBRTNDLE1BQXFCLFFBQVMsU0FBUSxpQkFBVTtJQUM1QyxZQUFZO1FBQ1IsT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsZUFBZSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3hILENBQUM7Q0FDSjtBQUpELDJCQUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hhZGVyTm9kZSB9IGZyb20gXCIuLi8uLi8uLi9iYXNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBERFhZTm9kZSBleHRlbmRzIFNoYWRlck5vZGUge1xyXG4gICAgZ2VuZXJhdGVDb2RlICgpIHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5nZXRPdXRwdXRWYXJEZWZpbmUoMCl9ID0gYWJzKGRGZHgoJHt0aGlzLmdldElucHV0VmFsdWUoMCl9KSkgKyBhYnMoZEZkeSgke3RoaXMuZ2V0SW5wdXRWYWx1ZSgwKX0pKTtgO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==