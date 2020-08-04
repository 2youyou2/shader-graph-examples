"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const type_1 = require("../../type");
class PolarCoordinatesNode extends base_1.ShaderNode {
    constructor() {
        super(...arguments);
        this.concretePrecisionType = type_1.ConcretePrecisionType.Fixed;
        this.depChunks = ['uv'];
    }
    generateCode() {
        let UV;
        if (!this.inputSlots[0].connectSlot) {
            UV = 'v_uv';
        }
        else {
            UV = this.getInputValue(0);
        }
        let Center = this.getInputValue(1);
        let RadialScale = this.getInputValue(2);
        let LengthScale = this.getInputValue(2);
        return `vec2 ${this.getOutputVarName(0)} = polarCoordinates(${UV}, ${Center}, ${RadialScale}, ${LengthScale});`;
    }
}
exports.default = PolarCoordinatesNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9sYXJDb29yZGluYXRlc05vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbm9kZXMvdXYvUG9sYXJDb29yZGluYXRlc05vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBd0M7QUFDeEMscUNBQW1EO0FBRW5ELE1BQXFCLG9CQUFxQixTQUFRLGlCQUFVO0lBQTVEOztRQUNJLDBCQUFxQixHQUFHLDRCQUFxQixDQUFDLEtBQUssQ0FBQztRQUNwRCxjQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQWV0QixDQUFDO0lBYkcsWUFBWTtRQUNSLElBQUksRUFBRSxDQUFDO1FBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFO1lBQ2pDLEVBQUUsR0FBRyxNQUFNLENBQUM7U0FDZjthQUNJO1lBQ0QsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUI7UUFDRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxPQUFPLFFBQVEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssV0FBVyxJQUFJLENBQUM7SUFDcEgsQ0FBQztDQUNKO0FBakJELHVDQWlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoYWRlck5vZGUgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xyXG5pbXBvcnQgeyBDb25jcmV0ZVByZWNpc2lvblR5cGUgfSBmcm9tIFwiLi4vLi4vdHlwZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9sYXJDb29yZGluYXRlc05vZGUgZXh0ZW5kcyBTaGFkZXJOb2RlIHtcclxuICAgIGNvbmNyZXRlUHJlY2lzaW9uVHlwZSA9IENvbmNyZXRlUHJlY2lzaW9uVHlwZS5GaXhlZDtcclxuICAgIGRlcENodW5rcyA9IFsndXYnXVxyXG5cclxuICAgIGdlbmVyYXRlQ29kZSAoKSB7XHJcbiAgICAgICAgbGV0IFVWO1xyXG4gICAgICAgIGlmICghdGhpcy5pbnB1dFNsb3RzWzBdLmNvbm5lY3RTbG90KSB7XHJcbiAgICAgICAgICAgIFVWID0gJ3ZfdXYnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgVVYgPSB0aGlzLmdldElucHV0VmFsdWUoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBDZW50ZXIgPSB0aGlzLmdldElucHV0VmFsdWUoMSk7XHJcbiAgICAgICAgbGV0IFJhZGlhbFNjYWxlID0gdGhpcy5nZXRJbnB1dFZhbHVlKDIpO1xyXG4gICAgICAgIGxldCBMZW5ndGhTY2FsZSA9IHRoaXMuZ2V0SW5wdXRWYWx1ZSgyKTtcclxuICAgICAgICByZXR1cm4gYHZlYzIgJHt0aGlzLmdldE91dHB1dFZhck5hbWUoMCl9ID0gcG9sYXJDb29yZGluYXRlcygke1VWfSwgJHtDZW50ZXJ9LCAke1JhZGlhbFNjYWxlfSwgJHtMZW5ndGhTY2FsZX0pO2A7XHJcbiAgICB9XHJcbn1cclxuIl19