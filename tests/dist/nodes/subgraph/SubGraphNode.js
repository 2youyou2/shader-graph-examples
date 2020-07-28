"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const globby_1 = __importDefault(require("globby"));
const path_1 = __importDefault(require("path"));
const shadergraph_1 = require("../../shadergraph");
const SubGraphOutputNode_1 = __importDefault(require("./SubGraphOutputNode"));
class SubGraphNode extends base_1.ShaderNode {
    constructor(data) {
        super(data);
        this.nodes = [];
        this.nodeMap = new Map;
        let name = this.data.m_Name;
        let paths = globby_1.default.sync(path_1.default.join(shadergraph_1.ShaderGraph.subgraphPath, `**/${name}.ShaderSubGraph`).replace(/\\/g, '/'));
        if (!paths[0]) {
            console.error(`Can not find sub graph with name [${name}]`);
            return;
        }
        let res = shadergraph_1.ShaderGraph.searchNodes(paths[0]);
        if (!res) {
            return;
        }
        let { properties, nodeMap, nodes, edges } = res;
        this.nodes = nodes;
        this.nodeMap = nodeMap;
        let suboutNode = nodes.find(n => n instanceof SubGraphOutputNode_1.default);
        if (!suboutNode) {
            console.error(`Can not find SubGraphOutputNode for [${name}]`);
            return;
        }
        let outSlot = this.slots[this.slots.length - 1];
        if (outSlot.data.m_DisplayName !== 'Out') {
            console.warn(`SubGraphNode [${name}] last slot name is not Out, may be wrong.`);
        }
        this.slots[this.slots.length - 1] = suboutNode.slots[0];
    }
}
exports.default = SubGraphNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3ViR3JhcGhOb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL25vZGVzL3N1YmdyYXBoL1N1YkdyYXBoTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUF3QztBQUN4QyxvREFBMkI7QUFDM0IsZ0RBQXVCO0FBQ3ZCLG1EQUFnRDtBQUNoRCw4RUFBc0Q7QUFFdEQsTUFBcUIsWUFBYSxTQUFRLGlCQUFVO0lBSWhELFlBQWEsSUFBSTtRQUNiLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUpmLFVBQUssR0FBa0IsRUFBRSxDQUFBO1FBQ3pCLFlBQU8sR0FBNEIsSUFBSSxHQUFHLENBQUE7UUFLdEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUIsSUFBSSxLQUFLLEdBQUcsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyx5QkFBVyxDQUFDLFlBQVksRUFBRSxNQUFNLElBQUksaUJBQWlCLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDN0csSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMscUNBQXFDLElBQUksR0FBRyxDQUFDLENBQUE7WUFDM0QsT0FBTztTQUNWO1FBRUQsSUFBSSxHQUFHLEdBQUcseUJBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNOLE9BQU87U0FDVjtRQUVELElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFFaEQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFdkIsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSw0QkFBa0IsQ0FBQyxDQUFBO1FBQ2pFLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDYixPQUFPLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxJQUFJLEdBQUcsQ0FBQyxDQUFBO1lBQzlELE9BQU87U0FDVjtRQUVELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsS0FBSyxLQUFLLEVBQUU7WUFDdEMsT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsSUFBSSw0Q0FBNEMsQ0FBQyxDQUFBO1NBQ2xGO1FBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzNELENBQUM7Q0FDSjtBQXJDRCwrQkFxQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFkZXJOb2RlIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcclxuaW1wb3J0IGdsb2JieSBmcm9tICdnbG9iYnknXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcbmltcG9ydCB7IFNoYWRlckdyYXBoIH0gZnJvbSBcIi4uLy4uL3NoYWRlcmdyYXBoXCI7XHJcbmltcG9ydCBTdWJHcmFwaE91dHB1dE5vZGUgZnJvbSBcIi4vU3ViR3JhcGhPdXRwdXROb2RlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJHcmFwaE5vZGUgZXh0ZW5kcyBTaGFkZXJOb2RlIHtcclxuICAgIG5vZGVzOiBTaGFkZXJOb2RlIFtdID0gW11cclxuICAgIG5vZGVNYXA6IE1hcDxzdHJpbmcsIFNoYWRlck5vZGU+ID0gbmV3IE1hcFxyXG5cclxuICAgIGNvbnN0cnVjdG9yIChkYXRhKSB7XHJcbiAgICAgICAgc3VwZXIoZGF0YSlcclxuXHJcbiAgICAgICAgbGV0IG5hbWUgPSB0aGlzLmRhdGEubV9OYW1lO1xyXG4gICAgICAgIGxldCBwYXRocyA9IGdsb2JieS5zeW5jKHBhdGguam9pbihTaGFkZXJHcmFwaC5zdWJncmFwaFBhdGgsIGAqKi8ke25hbWV9LlNoYWRlclN1YkdyYXBoYCkucmVwbGFjZSgvXFxcXC9nLCAnLycpKVxyXG4gICAgICAgIGlmICghcGF0aHNbMF0pIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgQ2FuIG5vdCBmaW5kIHN1YiBncmFwaCB3aXRoIG5hbWUgWyR7bmFtZX1dYClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBsZXQgcmVzID0gU2hhZGVyR3JhcGguc2VhcmNoTm9kZXMocGF0aHNbMF0pO1xyXG4gICAgICAgIGlmICghcmVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB7IHByb3BlcnRpZXMsIG5vZGVNYXAsIG5vZGVzLCBlZGdlcyB9ID0gcmVzO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGVzID0gbm9kZXM7XHJcbiAgICAgICAgdGhpcy5ub2RlTWFwID0gbm9kZU1hcDtcclxuXHJcbiAgICAgICAgbGV0IHN1Ym91dE5vZGUgPSBub2Rlcy5maW5kKG4gPT4gbiBpbnN0YW5jZW9mIFN1YkdyYXBoT3V0cHV0Tm9kZSlcclxuICAgICAgICBpZiAoIXN1Ym91dE5vZGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgQ2FuIG5vdCBmaW5kIFN1YkdyYXBoT3V0cHV0Tm9kZSBmb3IgWyR7bmFtZX1dYClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG91dFNsb3QgPSB0aGlzLnNsb3RzW3RoaXMuc2xvdHMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgaWYgKG91dFNsb3QuZGF0YS5tX0Rpc3BsYXlOYW1lICE9PSAnT3V0Jykge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFN1YkdyYXBoTm9kZSBbJHtuYW1lfV0gbGFzdCBzbG90IG5hbWUgaXMgbm90IE91dCwgbWF5IGJlIHdyb25nLmApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNsb3RzW3RoaXMuc2xvdHMubGVuZ3RoIC0gMV0gPSBzdWJvdXROb2RlLnNsb3RzWzBdXHJcbiAgICB9XHJcbn1cclxuIl19