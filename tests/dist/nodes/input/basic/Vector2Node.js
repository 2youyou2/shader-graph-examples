"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
class Vector2Node extends base_1.ShaderNode {
    constructor() {
        super(...arguments);
        this.fixedConcretePrecision = true;
    }
    generateCode() {
        let x = this.getInputValue(0);
        let y = this.getInputValue(1);
        return `vec2 ${this.getOutputVarName(0)} = vec2(${x}, ${y});`;
    }
}
exports.default = Vector2Node;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVjdG9yMk5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbm9kZXMvaW5wdXQvYmFzaWMvVmVjdG9yMk5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBdUU7QUFFdkUsTUFBcUIsV0FBWSxTQUFRLGlCQUFVO0lBQW5EOztRQUNJLDJCQUFzQixHQUFHLElBQUksQ0FBQztJQU9sQyxDQUFDO0lBTEcsWUFBWTtRQUNSLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixPQUFPLFFBQVEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUNsRSxDQUFDO0NBQ0o7QUFSRCw4QkFRQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoYWRlck5vZGUsIFNoYWRlclNsb3RUeXBlLCBTaGFkZXJTbG90IH0gZnJvbSBcIi4uLy4uLy4uL2Jhc2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3RvcjJOb2RlIGV4dGVuZHMgU2hhZGVyTm9kZSB7XHJcbiAgICBmaXhlZENvbmNyZXRlUHJlY2lzaW9uID0gdHJ1ZTtcclxuXHJcbiAgICBnZW5lcmF0ZUNvZGUgKCkge1xyXG4gICAgICAgIGxldCB4ID0gdGhpcy5nZXRJbnB1dFZhbHVlKDApO1xyXG4gICAgICAgIGxldCB5ID0gdGhpcy5nZXRJbnB1dFZhbHVlKDEpO1xyXG4gICAgICAgIHJldHVybiBgdmVjMiAke3RoaXMuZ2V0T3V0cHV0VmFyTmFtZSgwKX0gPSB2ZWMyKCR7eH0sICR7eX0pO2A7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==