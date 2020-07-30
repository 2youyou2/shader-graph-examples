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
const PropertyNode_1 = __importDefault(require("../input/PropertyNode"));
class SubGraphNode extends base_1.ShaderNode {
    constructor(data) {
        super(data);
        this.nodes = [];
        this.nodeMap = new Map;
        this.properties = [];
        this.subgraphOutNode = null;
        this.fixedConcretePrecision = true;
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
        this.properties = properties;
        let subgraphOutNode = nodes.find(n => n instanceof SubGraphOutputNode_1.default);
        if (!subgraphOutNode) {
            console.error(`Can not find SubGraphOutputNode for [${name}]`);
            return;
        }
        this.subgraphOutNode = subgraphOutNode;
        // let outSlot = this.outputSlots[0];
        // if (outSlot.data.m_DisplayName !== 'Out') {
        //     console.warn(`SubGraphNode [${name}] last slot name is not Out, may be wrong.`)
        // }
        let inputSlots = this.inputSlots;
        let propertyNodes = nodes.filter(n => n instanceof PropertyNode_1.default);
        propertyNodes.forEach(node => {
            var _a, _b;
            let propertySlot = node.outputSlots[0];
            let propertyName = propertySlot.displayName;
            let inputSlotInSubGraph = propertySlot.connectSlot;
            if (!inputSlotInSubGraph)
                return;
            let inputSlot = inputSlots.find(slot => slot.displayName === propertyName);
            if (inputSlot) {
                let outputSlot = inputSlot.connectSlot;
                if (outputSlot) {
                    inputSlotInSubGraph.connectSlot = outputSlot;
                    if (outputSlot.node) {
                        (_a = inputSlotInSubGraph.node) === null || _a === void 0 ? void 0 : _a.addDependency(outputSlot.node);
                        //@ts-ignore
                        outputSlot.node.setPriority(inputSlotInSubGraph.node.priority + 1);
                    }
                    //@ts-ignore
                    inputSlot.connectSlot = null;
                }
                else {
                    inputSlotInSubGraph.connectSlot = inputSlot;
                    inputSlot.connectSlot = inputSlotInSubGraph;
                    if (inputSlot.node) {
                        (_b = inputSlotInSubGraph.node) === null || _b === void 0 ? void 0 : _b.addDependency(this);
                        //@ts-ignore
                        this.setPriority(inputSlotInSubGraph.node.priority + 1);
                    }
                }
            }
        });
    }
    excahngeSubGraphOutNode(outputEdgeSlot) {
        var _a, _b;
        let outputNode = this;
        let outputSlot = this.slotsMap.get(outputEdgeSlot.id);
        let subgraphSlot = (_a = this.subgraphOutNode) === null || _a === void 0 ? void 0 : _a.getSlotWithSlotName(outputSlot === null || outputSlot === void 0 ? void 0 : outputSlot.displayName);
        if (subgraphSlot && subgraphSlot.connectSlot) {
            //@ts-ignore
            outputNode = subgraphSlot.connectSlot.node;
            outputEdgeSlot.id = subgraphSlot.connectSlot.id;
            //@ts-ignore
            outputEdgeSlot.nodeUuid = (_b = subgraphSlot.connectSlot.node) === null || _b === void 0 ? void 0 : _b.uuid;
            if (outputNode && subgraphSlot) {
                subgraphSlot.connectSlot = undefined;
            }
        }
        return outputNode;
    }
    exchangeSubGraphInputNode(inputSlot) {
    }
    generateCode() {
        let code = '';
        let inputSlots = this.inputSlots;
        for (let i = 0; i < inputSlots.length; i++) {
            if (!inputSlots[i].connectSlot)
                continue;
            code += `${inputSlots[i].varDefine} = ${inputSlots[i].defaultValue};\n`;
        }
        return code;
    }
}
exports.default = SubGraphNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3ViR3JhcGhOb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL25vZGVzL3N1YmdyYXBoL1N1YkdyYXBoTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUFtRjtBQUNuRixvREFBMkI7QUFDM0IsZ0RBQXVCO0FBQ3ZCLG1EQUFnRDtBQUNoRCw4RUFBc0Q7QUFDdEQseUVBQWlEO0FBRWpELE1BQXFCLFlBQWEsU0FBUSxpQkFBVTtJQVNoRCxZQUFhLElBQUk7UUFDYixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFUZixVQUFLLEdBQWlCLEVBQUUsQ0FBQTtRQUN4QixZQUFPLEdBQTRCLElBQUksR0FBRyxDQUFBO1FBQzFDLGVBQVUsR0FBb0IsRUFBRSxDQUFBO1FBRWhDLG9CQUFlLEdBQThCLElBQUksQ0FBQztRQUVsRCwyQkFBc0IsR0FBRyxJQUFJLENBQUM7UUFLMUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUIsSUFBSSxLQUFLLEdBQUcsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyx5QkFBVyxDQUFDLFlBQVksRUFBRSxNQUFNLElBQUksaUJBQWlCLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDN0csSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMscUNBQXFDLElBQUksR0FBRyxDQUFDLENBQUE7WUFDM0QsT0FBTztTQUNWO1FBRUQsSUFBSSxHQUFHLEdBQUcseUJBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNOLE9BQU87U0FDVjtRQUVELElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxL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O1lBQ1osVUFBVSxHQUFHLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQzNDLGNBQWMsQ0FBQyxFQUFFLEdBQUcsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7WUFDaEQsWUFBWTtZQUNaLGNBQWMsQ0FBQyxRQUFRLFNBQUcsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLDBDQUFFLElBQUksQ0FBQztZQUM5RCxJQUFJLFVBQVUsSUFBSSxZQUFZLEVBQUU7Z0JBQzVCLFlBQVksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO2FBQ3hDO1NBQ0o7UUFFRCxPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDO0lBRUQseUJBQXlCLENBQUUsU0FBeUI7SUFFcEQsQ0FBQztJQUVELFlBQVk7UUFDUixJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVztnQkFBRSxTQUFTO1lBQ3pDLElBQUksSUFBSSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLE1BQU0sVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksS0FBSyxDQUFDO1NBQzNFO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztDQUNKO0FBbEhELCtCQWtIQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoYWRlck5vZGUsIFNoYWRlclNsb3QsIFNoYWRlclByb3BlcnksIFNoYWRlckVkZ2VTbG90IH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcclxuaW1wb3J0IGdsb2JieSBmcm9tICdnbG9iYnknXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcbmltcG9ydCB7IFNoYWRlckdyYXBoIH0gZnJvbSBcIi4uLy4uL3NoYWRlcmdyYXBoXCI7XHJcbmltcG9ydCBTdWJHcmFwaE91dHB1dE5vZGUgZnJvbSBcIi4vU3ViR3JhcGhPdXRwdXROb2RlXCI7XHJcbmltcG9ydCBQcm9wZXJ0eU5vZGUgZnJvbSBcIi4uL2lucHV0L1Byb3BlcnR5Tm9kZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ViR3JhcGhOb2RlIGV4dGVuZHMgU2hhZGVyTm9kZSB7XHJcbiAgICBub2RlczogU2hhZGVyTm9kZVtdID0gW11cclxuICAgIG5vZGVNYXA6IE1hcDxzdHJpbmcsIFNoYWRlck5vZGU+ID0gbmV3IE1hcFxyXG4gICAgcHJvcGVydGllczogU2hhZGVyUHJvcGVyeVtdID0gW11cclxuXHJcbiAgICBzdWJncmFwaE91dE5vZGU6IFN1YkdyYXBoT3V0cHV0Tm9kZSB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIGZpeGVkQ29uY3JldGVQcmVjaXNpb24gPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChkYXRhKSB7XHJcbiAgICAgICAgc3VwZXIoZGF0YSlcclxuXHJcbiAgICAgICAgbGV0IG5hbWUgPSB0aGlzLmRhdGEubV9OYW1lO1xyXG4gICAgICAgIGxldCBwYXRocyA9IGdsb2JieS5zeW5jKHBhdGguam9pbihTaGFkZXJHcmFwaC5zdWJncmFwaFBhdGgsIGAqKi8ke25hbWV9LlNoYWRlclN1YkdyYXBoYCkucmVwbGFjZSgvXFxcXC9nLCAnLycpKVxyXG4gICAgICAgIGlmICghcGF0aHNbMF0pIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgQ2FuIG5vdCBmaW5kIHN1YiBncmFwaCB3aXRoIG5hbWUgWyR7bmFtZX1dYClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJlcyA9IFNoYWRlckdyYXBoLnNlYXJjaE5vZGVzKHBhdGhzWzBdKTtcclxuICAgICAgICBpZiAoIXJlcykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgeyBwcm9wZXJ0aWVzLCBub2RlTWFwLCBub2RlcywgZWRnZXMgfSA9IHJlcztcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlcyA9IG5vZGVzO1xyXG4gICAgICAgIHRoaXMubm9kZU1hcCA9IG5vZGVNYXA7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcclxuXHJcbiAgICAgICAgbGV0IHN1YmdyYXBoT3V0Tm9kZSA9IG5vZGVzLmZpbmQobiA9PiBuIGluc3RhbmNlb2YgU3ViR3JhcGhPdXRwdXROb2RlKVxyXG4gICAgICAgIGlmICghc3ViZ3JhcGhPdXROb2RlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYENhbiBub3QgZmluZCBTdWJHcmFwaE91dHB1dE5vZGUgZm9yIFske25hbWV9XWApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3ViZ3JhcGhPdXROb2RlID0gc3ViZ3JhcGhPdXROb2RlO1xyXG5cclxuICAgICAgICAvLyBsZXQgb3V0U2xvdCA9IHRoaXMub3V0cHV0U2xvdHNbMF07XHJcbiAgICAgICAgLy8gaWYgKG91dFNsb3QuZGF0YS5tX0Rpc3BsYXlOYW1lICE9PSAnT3V0Jykge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLndhcm4oYFN1YkdyYXBoTm9kZSBbJHtuYW1lfV0gbGFzdCBzbG90IG5hbWUgaXMgbm90IE91dCwgbWF5IGJlIHdyb25nLmApXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBsZXQgaW5wdXRTbG90cyA9IHRoaXMuaW5wdXRTbG90cztcclxuXHJcbiAgICAgICAgbGV0IHByb3BlcnR5Tm9kZXMgPSBub2Rlcy5maWx0ZXIobiA9PiBuIGluc3RhbmNlb2YgUHJvcGVydHlOb2RlKTtcclxuICAgICAgICBwcm9wZXJ0eU5vZGVzLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0eVNsb3QgPSBub2RlLm91dHB1dFNsb3RzWzBdO1xyXG4gICAgICAgICAgICBsZXQgcHJvcGVydHlOYW1lID0gcHJvcGVydHlTbG90LmRpc3BsYXlOYW1lO1xyXG4gICAgICAgICAgICBsZXQgaW5wdXRTbG90SW5TdWJHcmFwaCA9IHByb3BlcnR5U2xvdC5jb25uZWN0U2xvdDtcclxuICAgICAgICAgICAgaWYgKCFpbnB1dFNsb3RJblN1YkdyYXBoKSByZXR1cm47XHJcbiAgICAgICAgICAgIGxldCBpbnB1dFNsb3QgPSBpbnB1dFNsb3RzLmZpbmQoc2xvdCA9PiBzbG90LmRpc3BsYXlOYW1lID09PSBwcm9wZXJ0eU5hbWUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlucHV0U2xvdCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG91dHB1dFNsb3QgPSBpbnB1dFNsb3QuY29ubmVjdFNsb3Q7XHJcbiAgICAgICAgICAgICAgICBpZiAob3V0cHV0U2xvdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0U2xvdEluU3ViR3JhcGguY29ubmVjdFNsb3QgPSBvdXRwdXRTbG90O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3V0cHV0U2xvdC5ub2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0U2xvdEluU3ViR3JhcGgubm9kZT8uYWRkRGVwZW5kZW5jeShvdXRwdXRTbG90Lm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0U2xvdC5ub2RlLnNldFByaW9yaXR5KGlucHV0U2xvdEluU3ViR3JhcGgubm9kZS5wcmlvcml0eSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFNsb3QuY29ubmVjdFNsb3QgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRTbG90SW5TdWJHcmFwaC5jb25uZWN0U2xvdCA9IGlucHV0U2xvdDtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFNsb3QuY29ubmVjdFNsb3QgPSBpbnB1dFNsb3RJblN1YkdyYXBoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXRTbG90Lm5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRTbG90SW5TdWJHcmFwaC5ub2RlPy5hZGREZXBlbmRlbmN5KHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcmlvcml0eShpbnB1dFNsb3RJblN1YkdyYXBoLm5vZGUucHJpb3JpdHkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBleGNhaG5nZVN1YkdyYXBoT3V0Tm9kZSAob3V0cHV0RWRnZVNsb3Q6IFNoYWRlckVkZ2VTbG90KSB7XHJcbiAgICAgICAgbGV0IG91dHB1dE5vZGUgPSB0aGlzIGFzIFNoYWRlck5vZGU7XHJcblxyXG4gICAgICAgIGxldCBvdXRwdXRTbG90ID0gdGhpcy5zbG90c01hcC5nZXQob3V0cHV0RWRnZVNsb3QuaWQpO1xyXG4gICAgICAgIGxldCBzdWJncmFwaFNsb3QgPSB0aGlzLnN1YmdyYXBoT3V0Tm9kZT8uZ2V0U2xvdFdpdGhTbG90TmFtZShvdXRwdXRTbG90Py5kaXNwbGF5TmFtZSk7XHJcblxyXG4gICAgICAgIGlmIChzdWJncmFwaFNsb3QgJiYgc3ViZ3JhcGhTbG90LmNvbm5lY3RTbG90KSB7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBvdXRwdXROb2RlID0gc3ViZ3JhcGhTbG90LmNvbm5lY3RTbG90Lm5vZGU7XHJcbiAgICAgICAgICAgIG91dHB1dEVkZ2VTbG90LmlkID0gc3ViZ3JhcGhTbG90LmNvbm5lY3RTbG90LmlkO1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgb3V0cHV0RWRnZVNsb3Qubm9kZVV1aWQgPSBzdWJncmFwaFNsb3QuY29ubmVjdFNsb3Qubm9kZT8udXVpZDtcclxuICAgICAgICAgICAgaWYgKG91dHB1dE5vZGUgJiYgc3ViZ3JhcGhTbG90KSB7XHJcbiAgICAgICAgICAgICAgICBzdWJncmFwaFNsb3QuY29ubmVjdFNsb3QgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvdXRwdXROb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIGV4Y2hhbmdlU3ViR3JhcGhJbnB1dE5vZGUgKGlucHV0U2xvdDogU2hhZGVyRWRnZVNsb3QpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVDb2RlICgpIHtcclxuICAgICAgICBsZXQgY29kZSA9ICcnO1xyXG4gICAgICAgIGxldCBpbnB1dFNsb3RzID0gdGhpcy5pbnB1dFNsb3RzO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRTbG90cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoIWlucHV0U2xvdHNbaV0uY29ubmVjdFNsb3QpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBjb2RlICs9IGAke2lucHV0U2xvdHNbaV0udmFyRGVmaW5lfSA9ICR7aW5wdXRTbG90c1tpXS5kZWZhdWx0VmFsdWV9O1xcbmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb2RlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==