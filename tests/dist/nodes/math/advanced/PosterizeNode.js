"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
class PosterizeNode extends base_1.ShaderNode {
    generateCode() {
        return `${this.getOutputVarDefine(0)} = floor(${this.getInputValue(0)} / (1. / ${this.getInputValue(1)})) * (1. / ${this.getInputValue(1)});`;
    }
}
exports.default = PosterizeNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9zdGVyaXplTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2Rlcy9tYXRoL2FkdmFuY2VkL1Bvc3Rlcml6ZU5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBMkM7QUFFM0MsTUFBcUIsYUFBYyxTQUFRLGlCQUFVO0lBQ2pELFlBQVk7UUFDUixPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxZQUFZLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFlBQVksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsY0FBYyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbEosQ0FBQztDQUNKO0FBSkQsZ0NBSUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFkZXJOb2RlIH0gZnJvbSBcIi4uLy4uLy4uL2Jhc2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc3Rlcml6ZU5vZGUgZXh0ZW5kcyBTaGFkZXJOb2RlIHtcclxuICAgIGdlbmVyYXRlQ29kZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZ2V0T3V0cHV0VmFyRGVmaW5lKDApfSA9IGZsb29yKCR7dGhpcy5nZXRJbnB1dFZhbHVlKDApfSAvICgxLiAvICR7dGhpcy5nZXRJbnB1dFZhbHVlKDEpfSkpICogKDEuIC8gJHt0aGlzLmdldElucHV0VmFsdWUoMSl9KTtgO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==