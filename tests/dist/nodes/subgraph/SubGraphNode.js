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
        this.concretePrecisionType = base_1.ConcretePrecisionType.Fixed;
        let name = this.data.m_Name;
        let subgraphPath = path_1.default.join(shadergraph_1.ShaderGraph.subgraphPath, `**/${name}.*`).replace(/\\/g, '/');
        let paths = globby_1.default.sync(subgraphPath);
        paths = paths.filter(p => path_1.default.extname(p).toLowerCase() === '.shadersubgraph');
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
                subgraphSlot.connectSlots.length = 0;
            }
        }
        return outputNode;
    }
    exchangeSubGraphInputNodes() {
        let inputSlots = this.inputSlots;
        let propertyNodes = this.nodes.filter(n => n instanceof PropertyNode_1.default);
        propertyNodes.forEach(node => {
            let propertySlot = node.outputSlots[0];
            let propertyName = propertySlot.displayName;
            let inputSlot = inputSlots.find(slot => slot.displayName === propertyName);
            if (inputSlot) {
                let outputSlot = inputSlot.connectSlot;
                if (outputSlot) {
                    propertySlot.connectSlots.forEach(inputSlotInSubGraph => {
                        var _a;
                        inputSlotInSubGraph.connectSlot = outputSlot;
                        outputSlot.connectSlots = outputSlot.connectSlots.filter(slot => slot === inputSlot);
                        if (outputSlot.node) {
                            (_a = inputSlotInSubGraph.node) === null || _a === void 0 ? void 0 : _a.addDependency(outputSlot.node);
                            //@ts-ignore
                            outputSlot.node.setPriority(inputSlotInSubGraph.node.priority + 1);
                        }
                    });
                    //@ts-ignore
                    inputSlot.connectSlot = null;
                }
                else {
                    propertySlot.connectSlots.forEach(inputSlotInSubGraph => {
                        var _a;
                        inputSlotInSubGraph.connectSlot = inputSlot;
                        // inputSlot.connectSlots.push(inputSlotInSubGraph);
                        if (inputSlot.node) {
                            (_a = inputSlotInSubGraph.node) === null || _a === void 0 ? void 0 : _a.addDependency(this);
                            //@ts-ignore
                            this.setPriority(inputSlotInSubGraph.node.priority + 1);
                        }
                    });
                }
            }
        });
    }
    generateCode() {
        let code = '';
        let inputSlots = this.inputSlots;
        for (let i = 0; i < inputSlots.length; i++) {
            // if (!inputSlots[i].connectSlot) continue;
            code += `${inputSlots[i].varDefine} = ${inputSlots[i].defaultValue};\n`;
        }
        return code;
    }
}
exports.default = SubGraphNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3ViR3JhcGhOb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL25vZGVzL3N1YmdyYXBoL1N1YkdyYXBoTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUEwRztBQUMxRyxvREFBMkI7QUFDM0IsZ0RBQXVCO0FBQ3ZCLG1EQUFnRDtBQUNoRCw4RUFBc0Q7QUFDdEQseUVBQWlEO0FBRWpELE1BQXFCLFlBQWEsU0FBUSxpQkFBVTtJQVNoRCxZQUFhLElBQUk7UUFDYixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFUZixVQUFLLEdBQWlCLEVBQUUsQ0FBQTtRQUN4QixZQUFPLEdBQTRCLElBQUksR0FBRyxDQUFBO1FBQzFDLGVBQVUsR0FBb0IsRUFBRSxDQUFBO1FBRWhDLG9CQUFlLEdBQThCLElBQUksQ0FBQztRQUVsRCwwQkFBcUIsR0FBRyw0QkFBcUIsQ0FBQyxLQUFLLENBQUM7UUFLaEQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUIsSUFBSSxZQUFZLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyx5QkFBVyxDQUFDLFlBQVksRUFBRSxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMzRixJQUFJLEtBQUssR0FBRyxnQkFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUNyQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGNBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEtBQUssaUJBQWlCLENBQUMsQ0FBQTtRQUM5RSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsSUFBSSxHQUFHLENBQUMsQ0FBQTtZQUMzRCxPQUFP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Q0FBQztDQUNKO0FBcEhELCtCQW9IQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoYWRlck5vZGUsIFNoYWRlclNsb3QsIFNoYWRlclByb3BlcnksIFNoYWRlckVkZ2VTbG90LCBDb25jcmV0ZVByZWNpc2lvblR5cGUgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xyXG5pbXBvcnQgZ2xvYmJ5IGZyb20gJ2dsb2JieSdcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuaW1wb3J0IHsgU2hhZGVyR3JhcGggfSBmcm9tIFwiLi4vLi4vc2hhZGVyZ3JhcGhcIjtcclxuaW1wb3J0IFN1YkdyYXBoT3V0cHV0Tm9kZSBmcm9tIFwiLi9TdWJHcmFwaE91dHB1dE5vZGVcIjtcclxuaW1wb3J0IFByb3BlcnR5Tm9kZSBmcm9tIFwiLi4vaW5wdXQvUHJvcGVydHlOb2RlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJHcmFwaE5vZGUgZXh0ZW5kcyBTaGFkZXJOb2RlIHtcclxuICAgIG5vZGVzOiBTaGFkZXJOb2RlW10gPSBbXVxyXG4gICAgbm9kZU1hcDogTWFwPHN0cmluZywgU2hhZGVyTm9kZT4gPSBuZXcgTWFwXHJcbiAgICBwcm9wZXJ0aWVzOiBTaGFkZXJQcm9wZXJ5W10gPSBbXVxyXG5cclxuICAgIHN1YmdyYXBoT3V0Tm9kZTogU3ViR3JhcGhPdXRwdXROb2RlIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgY29uY3JldGVQcmVjaXNpb25UeXBlID0gQ29uY3JldGVQcmVjaXNpb25UeXBlLkZpeGVkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChkYXRhKSB7XHJcbiAgICAgICAgc3VwZXIoZGF0YSlcclxuXHJcbiAgICAgICAgbGV0IG5hbWUgPSB0aGlzLmRhdGEubV9OYW1lO1xyXG4gICAgICAgIGxldCBzdWJncmFwaFBhdGggPSBwYXRoLmpvaW4oU2hhZGVyR3JhcGguc3ViZ3JhcGhQYXRoLCBgKiovJHtuYW1lfS4qYCkucmVwbGFjZSgvXFxcXC9nLCAnLycpO1xyXG4gICAgICAgIGxldCBwYXRocyA9IGdsb2JieS5zeW5jKHN1YmdyYXBoUGF0aClcclxuICAgICAgICBwYXRocyA9IHBhdGhzLmZpbHRlcihwID0+IHBhdGguZXh0bmFtZShwKS50b0xvd2VyQ2FzZSgpID09PSAnLnNoYWRlcnN1YmdyYXBoJylcclxuICAgICAgICBpZiAoIXBhdGhzWzBdKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYENhbiBub3QgZmluZCBzdWIgZ3JhcGggd2l0aCBuYW1lIFske25hbWV9XWApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByZXMgPSBTaGFkZXJHcmFwaC5zZWFyY2hOb2RlcyhwYXRoc1swXSk7XHJcbiAgICAgICAgaWYgKCFyZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHsgcHJvcGVydGllcywgbm9kZU1hcCwgbm9kZXMsIGVkZ2VzIH0gPSByZXM7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZXMgPSBub2RlcztcclxuICAgICAgICB0aGlzLm5vZGVNYXAgPSBub2RlTWFwO1xyXG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XHJcblxyXG4gICAgICAgIGxldCBzdWJncmFwaE91dE5vZGUgPSBub2Rlcy5maW5kKG4gPT4gbiBpbnN0YW5jZW9mIFN1YkdyYXBoT3V0cHV0Tm9kZSlcclxuICAgICAgICBpZiAoIXN1YmdyYXBoT3V0Tm9kZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBDYW4gbm90IGZpbmQgU3ViR3JhcGhPdXRwdXROb2RlIGZvciBbJHtuYW1lfV1gKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN1YmdyYXBoT3V0Tm9kZSA9IHN1YmdyYXBoT3V0Tm9kZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZXhjYWhuZ2VTdWJHcmFwaE91dE5vZGUgKG91dHB1dEVkZ2VTbG90OiBTaGFkZXJFZGdlU2xvdCkge1xyXG4gICAgICAgIGxldCBvdXRwdXROb2RlID0gdGhpcyBhcyBTaGFkZXJOb2RlO1xyXG5cclxuICAgICAgICBsZXQgb3V0cHV0U2xvdCA9IHRoaXMuc2xvdHNNYXAuZ2V0KG91dHB1dEVkZ2VTbG90LmlkKTtcclxuICAgICAgICBsZXQgc3ViZ3JhcGhTbG90ID0gdGhpcy5zdWJncmFwaE91dE5vZGU/LmdldFNsb3RXaXRoU2xvdE5hbWUob3V0cHV0U2xvdD8uZGlzcGxheU5hbWUpO1xyXG5cclxuICAgICAgICBpZiAoc3ViZ3JhcGhTbG90ICYmIHN1YmdyYXBoU2xvdC5jb25uZWN0U2xvdCkge1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgb3V0cHV0Tm9kZSA9IHN1YmdyYXBoU2xvdC5jb25uZWN0U2xvdC5ub2RlO1xyXG4gICAgICAgICAgICBvdXRwdXRFZGdlU2xvdC5pZCA9IHN1YmdyYXBoU2xvdC5jb25uZWN0U2xvdC5pZDtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIG91dHB1dEVkZ2VTbG90Lm5vZGVVdWlkID0gc3ViZ3JhcGhTbG90LmNvbm5lY3RTbG90Lm5vZGU/LnV1aWQ7XHJcbiAgICAgICAgICAgIGlmIChvdXRwdXROb2RlICYmIHN1YmdyYXBoU2xvdCkge1xyXG4gICAgICAgICAgICAgICAgc3ViZ3JhcGhTbG90LmNvbm5lY3RTbG90cy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gb3V0cHV0Tm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBleGNoYW5nZVN1YkdyYXBoSW5wdXROb2RlcyAoKSB7XHJcbiAgICAgICAgbGV0IGlucHV0U2xvdHMgPSB0aGlzLmlucHV0U2xvdHM7XHJcblxyXG4gICAgICAgIGxldCBwcm9wZXJ0eU5vZGVzID0gdGhpcy5ub2Rlcy5maWx0ZXIobiA9PiBuIGluc3RhbmNlb2YgUHJvcGVydHlOb2RlKTtcclxuICAgICAgICBwcm9wZXJ0eU5vZGVzLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0eVNsb3QgPSBub2RlLm91dHB1dFNsb3RzWzBdO1xyXG4gICAgICAgICAgICBsZXQgcHJvcGVydHlOYW1lID0gcHJvcGVydHlTbG90LmRpc3BsYXlOYW1lO1xyXG5cclxuICAgICAgICAgICAgbGV0IGlucHV0U2xvdCA9IGlucHV0U2xvdHMuZmluZChzbG90ID0+IHNsb3QuZGlzcGxheU5hbWUgPT09IHByb3BlcnR5TmFtZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5wdXRTbG90KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3V0cHV0U2xvdCA9IGlucHV0U2xvdC5jb25uZWN0U2xvdDtcclxuICAgICAgICAgICAgICAgIGlmIChvdXRwdXRTbG90KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlTbG90LmNvbm5lY3RTbG90cy5mb3JFYWNoKGlucHV0U2xvdEluU3ViR3JhcGggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFNsb3RJblN1YkdyYXBoLmNvbm5lY3RTbG90ID0gb3V0cHV0U2xvdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0U2xvdC5jb25uZWN0U2xvdHMgPSBvdXRwdXRTbG90LmNvbm5lY3RTbG90cy5maWx0ZXIoc2xvdCA9PiBzbG90ID09PSBpbnB1dFNsb3QpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvdXRwdXRTbG90Lm5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0U2xvdEluU3ViR3JhcGgubm9kZT8uYWRkRGVwZW5kZW5jeShvdXRwdXRTbG90Lm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRTbG90Lm5vZGUuc2V0UHJpb3JpdHkoaW5wdXRTbG90SW5TdWJHcmFwaC5ub2RlLnByaW9yaXR5ICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0U2xvdC5jb25uZWN0U2xvdCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVNsb3QuY29ubmVjdFNsb3RzLmZvckVhY2goaW5wdXRTbG90SW5TdWJHcmFwaCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0U2xvdEluU3ViR3JhcGguY29ubmVjdFNsb3QgPSBpbnB1dFNsb3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlucHV0U2xvdC5jb25uZWN0U2xvdHMucHVzaChpbnB1dFNsb3RJblN1YkdyYXBoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dFNsb3Qubm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRTbG90SW5TdWJHcmFwaC5ub2RlPy5hZGREZXBlbmRlbmN5KHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFByaW9yaXR5KGlucHV0U2xvdEluU3ViR3JhcGgubm9kZS5wcmlvcml0eSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVDb2RlICgpIHtcclxuICAgICAgICBsZXQgY29kZSA9ICcnO1xyXG4gICAgICAgIGxldCBpbnB1dFNsb3RzID0gdGhpcy5pbnB1dFNsb3RzO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRTbG90cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAvLyBpZiAoIWlucHV0U2xvdHNbaV0uY29ubmVjdFNsb3QpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBjb2RlICs9IGAke2lucHV0U2xvdHNbaV0udmFyRGVmaW5lfSA9ICR7aW5wdXRTbG90c1tpXS5kZWZhdWx0VmFsdWV9O1xcbmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb2RlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==