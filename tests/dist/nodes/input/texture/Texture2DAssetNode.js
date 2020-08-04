"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TextureAssetNode_1 = __importDefault(require("./TextureAssetNode"));
class Texture2DAssetNode extends TextureAssetNode_1.default {
    generateCode() {
        return `sampler2D ${this.getOutputVarName(0)} = ${this.getInputValue(0)};`;
    }
}
exports.default = Texture2DAssetNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dHVyZTJEQXNzZXROb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL25vZGVzL2lucHV0L3RleHR1cmUvVGV4dHVyZTJEQXNzZXROb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMEVBQWtEO0FBRWxELE1BQXFCLGtCQUFtQixTQUFRLDBCQUFnQjtJQUM1RCxZQUFZO1FBQ1IsT0FBTyxhQUFhLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDL0UsQ0FBQztDQUNKO0FBSkQscUNBSUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGV4dHVyZUFzc2V0Tm9kZSBmcm9tIFwiLi9UZXh0dXJlQXNzZXROb2RlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlMkRBc3NldE5vZGUgZXh0ZW5kcyBUZXh0dXJlQXNzZXROb2RlIHtcclxuICAgIGdlbmVyYXRlQ29kZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBzYW1wbGVyMkQgJHt0aGlzLmdldE91dHB1dFZhck5hbWUoMCl9ID0gJHt0aGlzLmdldElucHV0VmFsdWUoMCl9O2A7XHJcbiAgICB9XHJcbn1cclxuIl19