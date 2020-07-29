"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
class Vector3Node extends base_1.ShaderNode {
    constructor() {
        super(...arguments);
        this.fixedConcretePrecision = true;
    }
    generateCode() {
        let x = this.getInputValue(0);
        let y = this.getInputValue(1);
        let z = this.getInputValue(2);
        return `vec3 ${this.getOutputVarName(0)} = vec3(${x}, ${y}, ${z});`;
    }
}
exports.default = Vector3Node;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVjdG9yM05vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbm9kZXMvaW5wdXQvYmFzaWMvVmVjdG9yM05vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBdUU7QUFFdkUsTUFBcUIsV0FBWSxTQUFRLGlCQUFVO0lBQW5EOztRQUNJLDJCQUFzQixHQUFHLElBQUksQ0FBQztJQVFsQyxDQUFDO0lBTkcsWUFBWTtRQUNSLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLE9BQU8sUUFBUSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUN4RSxDQUFDO0NBQ0o7QUFURCw4QkFTQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoYWRlck5vZGUsIFNoYWRlclNsb3RUeXBlLCBTaGFkZXJTbG90IH0gZnJvbSBcIi4uLy4uLy4uL2Jhc2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3RvcjNOb2RlIGV4dGVuZHMgU2hhZGVyTm9kZSB7XHJcbiAgICBmaXhlZENvbmNyZXRlUHJlY2lzaW9uID0gdHJ1ZTtcclxuXHJcbiAgICBnZW5lcmF0ZUNvZGUgKCkge1xyXG4gICAgICAgIGxldCB4ID0gdGhpcy5nZXRJbnB1dFZhbHVlKDApO1xyXG4gICAgICAgIGxldCB5ID0gdGhpcy5nZXRJbnB1dFZhbHVlKDEpO1xyXG4gICAgICAgIGxldCB6ID0gdGhpcy5nZXRJbnB1dFZhbHVlKDIpO1xyXG4gICAgICAgIHJldHVybiBgdmVjMyAke3RoaXMuZ2V0T3V0cHV0VmFyTmFtZSgwKX0gPSB2ZWMzKCR7eH0sICR7eX0sICR7en0pO2A7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==