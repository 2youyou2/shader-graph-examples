"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNode = void 0;
const base_1 = require("../base");
var Vector1Node_1 = require("./input/basic/Vector1Node");
Object.defineProperty(exports, "Vector1Node", { enumerable: true, get: function () { return Vector1Node_1.Vector1Node; } });
var UnlitMasterNode_1 = require("./master/UnlitMasterNode");
Object.defineProperty(exports, "UnlitMasterNode", { enumerable: true, get: function () { return UnlitMasterNode_1.UnlitMasterNode; } });
var AddNode_1 = require("./math/basic/AddNode");
Object.defineProperty(exports, "AddNode", { enumerable: true, get: function () { return AddNode_1.AddNode; } });
function createNode(data) {
    let type = data.typeInfo;
    let name = type.fullName;
    name = name.replace('UnityEditor.ShaderGraph.', '');
    let ctor = module.exports[name] || base_1.ShaderNode;
    return ctor && new ctor(data);
}
exports.createNode = createNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbm9kZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsa0NBQXFDO0FBRXJDLHlEQUF1RDtBQUE5QywwR0FBQSxXQUFXLE9BQUE7QUFDcEIsNERBQTBEO0FBQWpELGtIQUFBLGVBQWUsT0FBQTtBQUN4QixnREFBK0M7QUFBdEMsa0dBQUEsT0FBTyxPQUFBO0FBRWhCLFNBQWdCLFVBQVUsQ0FBRSxJQUFTO0lBQ2pDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVwRCxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFVLENBQUM7SUFDOUMsT0FBTyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEMsQ0FBQztBQVBELGdDQU9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hhZGVyTm9kZSB9IGZyb20gXCIuLi9iYXNlXCI7XHJcblxyXG5leHBvcnQgeyBWZWN0b3IxTm9kZSB9IGZyb20gJy4vaW5wdXQvYmFzaWMvVmVjdG9yMU5vZGUnXHJcbmV4cG9ydCB7IFVubGl0TWFzdGVyTm9kZSB9IGZyb20gJy4vbWFzdGVyL1VubGl0TWFzdGVyTm9kZSdcclxuZXhwb3J0IHsgQWRkTm9kZSB9IGZyb20gJy4vbWF0aC9iYXNpYy9BZGROb2RlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2RlIChkYXRhOiBhbnkpIHtcclxuICAgIGxldCB0eXBlID0gZGF0YS50eXBlSW5mbztcclxuICAgIGxldCBuYW1lID0gdHlwZS5mdWxsTmFtZTtcclxuICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoJ1VuaXR5RWRpdG9yLlNoYWRlckdyYXBoLicsICcnKTtcclxuXHJcbiAgICBsZXQgY3RvciA9IG1vZHVsZS5leHBvcnRzW25hbWVdIHx8IFNoYWRlck5vZGU7XHJcbiAgICByZXR1cm4gY3RvciAmJiBuZXcgY3RvcihkYXRhKTtcclxufVxyXG4iXX0=