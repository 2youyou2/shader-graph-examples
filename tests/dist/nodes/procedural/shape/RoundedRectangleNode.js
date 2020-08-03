"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ShapeNode_1 = __importDefault(require("./ShapeNode"));
class RectangleNode extends ShapeNode_1.default {
    generateCode() {
        let uv = this.getInputValue(0);
        let width = this.getInputValue(1);
        let height = this.getInputValue(2);
        let radius = this.getInputValue(3);
        return `${this.getOutputVarDefine(0)} = reoundRect(${uv}, ${width}, ${height}, ${radius});`;
    }
}
exports.default = RectangleNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm91bmRlZFJlY3RhbmdsZU5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbm9kZXMvcHJvY2VkdXJhbC9zaGFwZS9Sb3VuZGVkUmVjdGFuZ2xlTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDREQUFvQztBQUVwQyxNQUFxQixhQUFjLFNBQVEsbUJBQVM7SUFDaEQsWUFBWTtRQUNSLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxLQUFLLEtBQUssTUFBTSxLQUFLLE1BQU0sSUFBSSxDQUFDO0lBQ2hHLENBQUM7Q0FDSjtBQVJELGdDQVFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNoYXBlTm9kZSBmcm9tIFwiLi9TaGFwZU5vZGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZU5vZGUgZXh0ZW5kcyBTaGFwZU5vZGUge1xyXG4gICAgZ2VuZXJhdGVDb2RlICgpIHtcclxuICAgICAgICBsZXQgdXYgPSB0aGlzLmdldElucHV0VmFsdWUoMCk7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gdGhpcy5nZXRJbnB1dFZhbHVlKDEpO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLmdldElucHV0VmFsdWUoMik7XHJcbiAgICAgICAgbGV0IHJhZGl1cyA9IHRoaXMuZ2V0SW5wdXRWYWx1ZSgzKTtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5nZXRPdXRwdXRWYXJEZWZpbmUoMCl9ID0gcmVvdW5kUmVjdCgke3V2fSwgJHt3aWR0aH0sICR7aGVpZ2h0fSwgJHtyYWRpdXN9KTtgO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==