"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
class SineNode extends base_1.ShaderNode {
    generateCode() {
        let In = this.getInputValue(0);
        return `${this.getOutputVarDefine(0)} = sin(${In});`;
    }
}
exports.default = SineNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2luZU5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbm9kZXMvbWF0aC90cmlnb25vbWV0cnkvU2luZU5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBdUU7QUFFdkUsTUFBcUIsUUFBUyxTQUFRLGlCQUFVO0lBQzVDLFlBQVk7UUFDUixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLE9BQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7SUFDekQsQ0FBQztDQUNKO0FBTEQsMkJBS0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFkZXJOb2RlLCBTaGFkZXJTbG90VHlwZSwgU2hhZGVyU2xvdCB9IGZyb20gXCIuLi8uLi8uLi9iYXNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW5lTm9kZSBleHRlbmRzIFNoYWRlck5vZGUge1xyXG4gICAgZ2VuZXJhdGVDb2RlICgpIHtcclxuICAgICAgICBsZXQgSW4gPSB0aGlzLmdldElucHV0VmFsdWUoMCk7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZ2V0T3V0cHV0VmFyRGVmaW5lKDApfSA9IHNpbigke0lufSk7YDtcclxuICAgIH1cclxufVxyXG4iXX0=