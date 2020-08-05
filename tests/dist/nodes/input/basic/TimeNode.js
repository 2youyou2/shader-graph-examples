"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InputNode_1 = __importDefault(require("../InputNode"));
class TimeNode extends InputNode_1.default {
    generateCode() {
        let Time = this.getOutputSlotWithSlotName('Time');
        let SineTime = this.getOutputSlotWithSlotName('Sine Time');
        let CosineTime = this.getOutputSlotWithSlotName('Cosine Time');
        let DeltaTime = this.getOutputSlotWithSlotName('Delta Time');
        let SmoothDelta = this.getOutputSlotWithSlotName('Smooth Delta');
        let code = '';
        if (Time === null || Time === void 0 ? void 0 : Time.connectSlot) {
            code += `float ${Time.varName} = cc_time.x;`;
        }
        if (SineTime === null || SineTime === void 0 ? void 0 : SineTime.connectSlot) {
            code += `float ${SineTime.varName} = sin(cc_time.x);`;
        }
        if (CosineTime === null || CosineTime === void 0 ? void 0 : CosineTime.connectSlot) {
            code += `float ${CosineTime.varName} = cos(cc_time.x);`;
        }
        if (DeltaTime === null || DeltaTime === void 0 ? void 0 : DeltaTime.connectSlot) {
            code += `float ${DeltaTime.varName} = cc_time.y;`;
        }
        if (SmoothDelta === null || SmoothDelta === void 0 ? void 0 : SmoothDelta.connectSlot) {
            console.warn('Not support smooth delta time');
            code += `float ${SmoothDelta.varName} = cc_time.y;`;
        }
        return code;
    }
}
exports.default = TimeNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZU5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbm9kZXMvaW5wdXQvYmFzaWMvVGltZU5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2REFBcUM7QUFFckMsTUFBcUIsUUFBUyxTQUFRLG1CQUFTO0lBQzNDLFlBQVk7UUFDUixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEQsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzNELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMvRCxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0QsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWpFLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQTtRQUNiLElBQUksSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLFdBQVcsRUFBRTtZQUNuQixJQUFJLElBQUksU0FBUyxJQUFJLENBQUMsT0FBTyxlQUFlLENBQUE7U0FDL0M7UUFDRCxJQUFJLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxXQUFXLEVBQUU7WUFDdkIsSUFBSSxJQUFJLFNBQVMsUUFBUSxDQUFDLE9BQU8sb0JBQW9CLENBQUE7U0FDeEQ7UUFDRCxJQUFJLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxXQUFXLEVBQUU7WUFDekIsSUFBSSxJQUFJLFNBQVMsVUFBVSxDQUFDLE9BQU8sb0JBQW9CLENBQUE7U0FDMUQ7UUFDRCxJQUFJLFNBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxXQUFXLEVBQUU7WUFDeEIsSUFBSSxJQUFJLFNBQVMsU0FBUyxDQUFDLE9BQU8sZUFBZSxDQUFBO1NBQ3BEO1FBQ0QsSUFBSSxXQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsV0FBVyxFQUFFO1lBQzFCLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQztZQUM5QyxJQUFJLElBQUksU0FBUyxXQUFXLENBQUMsT0FBTyxlQUFlLENBQUE7U0FDdEQ7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0NBQ0o7QUE1QkQsMkJBNEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElucHV0Tm9kZSBmcm9tIFwiLi4vSW5wdXROb2RlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lTm9kZSBleHRlbmRzIElucHV0Tm9kZSB7XHJcbiAgICBnZW5lcmF0ZUNvZGUgKCkge1xyXG4gICAgICAgIGxldCBUaW1lID0gdGhpcy5nZXRPdXRwdXRTbG90V2l0aFNsb3ROYW1lKCdUaW1lJyk7XHJcbiAgICAgICAgbGV0IFNpbmVUaW1lID0gdGhpcy5nZXRPdXRwdXRTbG90V2l0aFNsb3ROYW1lKCdTaW5lIFRpbWUnKTtcclxuICAgICAgICBsZXQgQ29zaW5lVGltZSA9IHRoaXMuZ2V0T3V0cHV0U2xvdFdpdGhTbG90TmFtZSgnQ29zaW5lIFRpbWUnKTtcclxuICAgICAgICBsZXQgRGVsdGFUaW1lID0gdGhpcy5nZXRPdXRwdXRTbG90V2l0aFNsb3ROYW1lKCdEZWx0YSBUaW1lJyk7XHJcbiAgICAgICAgbGV0IFNtb290aERlbHRhID0gdGhpcy5nZXRPdXRwdXRTbG90V2l0aFNsb3ROYW1lKCdTbW9vdGggRGVsdGEnKTtcclxuXHJcbiAgICAgICAgbGV0IGNvZGUgPSAnJ1xyXG4gICAgICAgIGlmIChUaW1lPy5jb25uZWN0U2xvdCkge1xyXG4gICAgICAgICAgICBjb2RlICs9IGBmbG9hdCAke1RpbWUudmFyTmFtZX0gPSBjY190aW1lLng7YFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoU2luZVRpbWU/LmNvbm5lY3RTbG90KSB7XHJcbiAgICAgICAgICAgIGNvZGUgKz0gYGZsb2F0ICR7U2luZVRpbWUudmFyTmFtZX0gPSBzaW4oY2NfdGltZS54KTtgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChDb3NpbmVUaW1lPy5jb25uZWN0U2xvdCkge1xyXG4gICAgICAgICAgICBjb2RlICs9IGBmbG9hdCAke0Nvc2luZVRpbWUudmFyTmFtZX0gPSBjb3MoY2NfdGltZS54KTtgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChEZWx0YVRpbWU/LmNvbm5lY3RTbG90KSB7XHJcbiAgICAgICAgICAgIGNvZGUgKz0gYGZsb2F0ICR7RGVsdGFUaW1lLnZhck5hbWV9ID0gY2NfdGltZS55O2BcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFNtb290aERlbHRhPy5jb25uZWN0U2xvdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05vdCBzdXBwb3J0IHNtb290aCBkZWx0YSB0aW1lJyk7XHJcbiAgICAgICAgICAgIGNvZGUgKz0gYGZsb2F0ICR7U21vb3RoRGVsdGEudmFyTmFtZX0gPSBjY190aW1lLnk7YFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvZGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==