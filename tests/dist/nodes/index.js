"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNode = void 0;
const base_1 = require("../base");
const globby_1 = __importDefault(require("globby"));
const fire_path_1 = __importDefault(require("fire-path"));
let nodePaths = globby_1.default.sync([
    fire_path_1.default.join(__dirname, './**').replace(/\\/g, '/'),
    fire_path_1.default.join(__dirname, '!./index.*').replace(/\\/g, '/'),
]);
let nodes = {};
for (let i = 0; i < nodePaths.length; i++) {
    let nodePath = nodePaths[i];
    let nodeName = fire_path_1.default.basenameNoExt(nodePath);
    nodes[nodeName] = require(nodePath).default;
}
function createNode(data) {
    let type = data.typeInfo;
    let name = type.fullName;
    name = name.replace('UnityEditor.ShaderGraph.', '');
    let ctor = nodes[name];
    if (!ctor) {
        console.warn(`Can not find Node with Name [${name}]`);
        ctor = base_1.ShaderNode;
    }
    return ctor && new ctor(data);
}
exports.createNode = createNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbm9kZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0NBQXFDO0FBQ3JDLG9EQUE0QjtBQUM1QiwwREFBNkI7QUFHN0IsSUFBSSxTQUFTLEdBQUcsZ0JBQU0sQ0FBQyxJQUFJLENBQUM7SUFDeEIsbUJBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO0lBQ2hELG1CQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztDQUN6RCxDQUFDLENBQUE7QUFDRixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDZixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUN2QyxJQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUIsSUFBSSxRQUFRLEdBQUcsbUJBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUM7Q0FDL0M7QUFFRCxTQUFnQixVQUFVLENBQUUsSUFBUztJQUNqQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsMEJBQTBCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFcEQsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDUCxPQUFPLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxJQUFJLEdBQUcsQ0FBQyxDQUFBO1FBQ3JELElBQUksR0FBRyxpQkFBVSxDQUFBO0tBQ3BCO0lBQ0QsT0FBTyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEMsQ0FBQztBQVhELGdDQVdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hhZGVyTm9kZSB9IGZyb20gXCIuLi9iYXNlXCI7XHJcbmltcG9ydCBnbG9iYnkgZnJvbSAnZ2xvYmJ5JztcclxuaW1wb3J0IHBhdGggZnJvbSAnZmlyZS1wYXRoJztcclxuXHJcblxyXG5sZXQgbm9kZVBhdGhzID0gZ2xvYmJ5LnN5bmMoW1xyXG4gICAgcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vKionKS5yZXBsYWNlKC9cXFxcL2csICcvJyksIFxyXG4gICAgcGF0aC5qb2luKF9fZGlybmFtZSwgJyEuL2luZGV4LionKS5yZXBsYWNlKC9cXFxcL2csICcvJyksIFxyXG5dKVxyXG5sZXQgbm9kZXMgPSB7fTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlUGF0aHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBub2RlUGF0aCA9IG5vZGVQYXRoc1tpXTtcclxuICAgIGxldCBub2RlTmFtZSA9IHBhdGguYmFzZW5hbWVOb0V4dChub2RlUGF0aCk7XHJcbiAgICBub2Rlc1tub2RlTmFtZV0gPSByZXF1aXJlKG5vZGVQYXRoKS5kZWZhdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZSAoZGF0YTogYW55KSB7XHJcbiAgICBsZXQgdHlwZSA9IGRhdGEudHlwZUluZm87XHJcbiAgICBsZXQgbmFtZSA9IHR5cGUuZnVsbE5hbWU7XHJcbiAgICBuYW1lID0gbmFtZS5yZXBsYWNlKCdVbml0eUVkaXRvci5TaGFkZXJHcmFwaC4nLCAnJyk7XHJcblxyXG4gICAgbGV0IGN0b3IgPSBub2Rlc1tuYW1lXTsgXHJcbiAgICBpZiAoIWN0b3IpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oYENhbiBub3QgZmluZCBOb2RlIHdpdGggTmFtZSBbJHtuYW1lfV1gKVxyXG4gICAgICAgIGN0b3IgPSBTaGFkZXJOb2RlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gY3RvciAmJiBuZXcgY3RvcihkYXRhKTtcclxufVxyXG4iXX0=