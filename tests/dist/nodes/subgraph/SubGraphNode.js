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
const type_1 = require("../../type");
class SubGraphNode extends base_1.ShaderNode {
    constructor(data) {
        super(data);
        this.nodes = [];
        this.nodeMap = new Map;
        this.properties = [];
        this.subgraphOutNode = null;
        this.concretePrecisionType = type_1.ConcretePrecisionType.Fixed;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3ViR3JhcGhOb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL25vZGVzL3N1YmdyYXBoL1N1YkdyYXBoTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUFtRjtBQUNuRixvREFBMkI7QUFDM0IsZ0RBQXVCO0FBQ3ZCLG1EQUFnRDtBQUNoRCw4RUFBc0Q7QUFDdEQseUVBQWlEO0FBQ2pELHFDQUFtRDtBQUVuRCxNQUFxQixZQUFhLFNBQVEsaUJBQVU7SUFTaEQsWUFBYSxJQUFJO1FBQ2IsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBVGYsVUFBSyxHQUFpQixFQUFFLENBQUE7UUFDeEIsWUFBTyxHQUE0QixJQUFJLEdBQUcsQ0FBQTtRQUMxQyxlQUFVLEdBQW9CLEVBQUUsQ0FBQTtRQUVoQyxvQkFBZSxHQUE4QixJQUFJLENBQUM7UUFFbEQsMEJBQXFCLEdBQUcsNEJBQXFCLENBQUMsS0FBSyxDQUFDO1FBS2hELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzVCLElBQUksWUFBWSxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMseUJBQVcsQ0FBQyxZQUFZLEVBQUUsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDM0YsSUFBSSxLQUFLLEdBQUcsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDckMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxjQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLGlCQUFpQixDQUFDLENBQUE7UUFDOUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMscUNBQXFDLElBQUksR0FBRyxDQUFDLENB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SSxDQUFDO0lBQ2hCLENBQUM7Q0FDSjtBQXBIRCwrQkFvSEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFkZXJOb2RlLCBTaGFkZXJTbG90LCBTaGFkZXJQcm9wZXJ5LCBTaGFkZXJFZGdlU2xvdCB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XHJcbmltcG9ydCBnbG9iYnkgZnJvbSAnZ2xvYmJ5J1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgeyBTaGFkZXJHcmFwaCB9IGZyb20gXCIuLi8uLi9zaGFkZXJncmFwaFwiO1xyXG5pbXBvcnQgU3ViR3JhcGhPdXRwdXROb2RlIGZyb20gXCIuL1N1YkdyYXBoT3V0cHV0Tm9kZVwiO1xyXG5pbXBvcnQgUHJvcGVydHlOb2RlIGZyb20gXCIuLi9pbnB1dC9Qcm9wZXJ0eU5vZGVcIjtcclxuaW1wb3J0IHsgQ29uY3JldGVQcmVjaXNpb25UeXBlIH0gZnJvbSBcIi4uLy4uL3R5cGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YkdyYXBoTm9kZSBleHRlbmRzIFNoYWRlck5vZGUge1xyXG4gICAgbm9kZXM6IFNoYWRlck5vZGVbXSA9IFtdXHJcbiAgICBub2RlTWFwOiBNYXA8c3RyaW5nLCBTaGFkZXJOb2RlPiA9IG5ldyBNYXBcclxuICAgIHByb3BlcnRpZXM6IFNoYWRlclByb3BlcnlbXSA9IFtdXHJcblxyXG4gICAgc3ViZ3JhcGhPdXROb2RlOiBTdWJHcmFwaE91dHB1dE5vZGUgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBjb25jcmV0ZVByZWNpc2lvblR5cGUgPSBDb25jcmV0ZVByZWNpc2lvblR5cGUuRml4ZWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKGRhdGEpIHtcclxuICAgICAgICBzdXBlcihkYXRhKVxyXG5cclxuICAgICAgICBsZXQgbmFtZSA9IHRoaXMuZGF0YS5tX05hbWU7XHJcbiAgICAgICAgbGV0IHN1YmdyYXBoUGF0aCA9IHBhdGguam9pbihTaGFkZXJHcmFwaC5zdWJncmFwaFBhdGgsIGAqKi8ke25hbWV9LipgKS5yZXBsYWNlKC9cXFxcL2csICcvJyk7XHJcbiAgICAgICAgbGV0IHBhdGhzID0gZ2xvYmJ5LnN5bmMoc3ViZ3JhcGhQYXRoKVxyXG4gICAgICAgIHBhdGhzID0gcGF0aHMuZmlsdGVyKHAgPT4gcGF0aC5leHRuYW1lKHApLnRvTG93ZXJDYXNlKCkgPT09ICcuc2hhZGVyc3ViZ3JhcGgnKVxyXG4gICAgICAgIGlmICghcGF0aHNbMF0pIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgQ2FuIG5vdCBmaW5kIHN1YiBncmFwaCB3aXRoIG5hbWUgWyR7bmFtZX1dYClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJlcyA9IFNoYWRlckdyYXBoLnNlYXJjaE5vZGVzKHBhdGhzWzBdKTtcclxuICAgICAgICBpZiAoIXJlcykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgeyBwcm9wZXJ0aWVzLCBub2RlTWFwLCBub2RlcywgZWRnZXMgfSA9IHJlcztcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlcyA9IG5vZGVzO1xyXG4gICAgICAgIHRoaXMubm9kZU1hcCA9IG5vZGVNYXA7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcclxuXHJcbiAgICAgICAgbGV0IHN1YmdyYXBoT3V0Tm9kZSA9IG5vZGVzLmZpbmQobiA9PiBuIGluc3RhbmNlb2YgU3ViR3JhcGhPdXRwdXROb2RlKVxyXG4gICAgICAgIGlmICghc3ViZ3JhcGhPdXROb2RlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYENhbiBub3QgZmluZCBTdWJHcmFwaE91dHB1dE5vZGUgZm9yIFske25hbWV9XWApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3ViZ3JhcGhPdXROb2RlID0gc3ViZ3JhcGhPdXROb2RlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBleGNhaG5nZVN1YkdyYXBoT3V0Tm9kZSAob3V0cHV0RWRnZVNsb3Q6IFNoYWRlckVkZ2VTbG90KSB7XHJcbiAgICAgICAgbGV0IG91dHB1dE5vZGUgPSB0aGlzIGFzIFNoYWRlck5vZGU7XHJcblxyXG4gICAgICAgIGxldCBvdXRwdXRTbG90ID0gdGhpcy5zbG90c01hcC5nZXQob3V0cHV0RWRnZVNsb3QuaWQpO1xyXG4gICAgICAgIGxldCBzdWJncmFwaFNsb3QgPSB0aGlzLnN1YmdyYXBoT3V0Tm9kZT8uZ2V0U2xvdFdpdGhTbG90TmFtZShvdXRwdXRTbG90Py5kaXNwbGF5TmFtZSk7XHJcblxyXG4gICAgICAgIGlmIChzdWJncmFwaFNsb3QgJiYgc3ViZ3JhcGhTbG90LmNvbm5lY3RTbG90KSB7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBvdXRwdXROb2RlID0gc3ViZ3JhcGhTbG90LmNvbm5lY3RTbG90Lm5vZGU7XHJcbiAgICAgICAgICAgIG91dHB1dEVkZ2VTbG90LmlkID0gc3ViZ3JhcGhTbG90LmNvbm5lY3RTbG90LmlkO1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgb3V0cHV0RWRnZVNsb3Qubm9kZVV1aWQgPSBzdWJncmFwaFNsb3QuY29ubmVjdFNsb3Qubm9kZT8udXVpZDtcclxuICAgICAgICAgICAgaWYgKG91dHB1dE5vZGUgJiYgc3ViZ3JhcGhTbG90KSB7XHJcbiAgICAgICAgICAgICAgICBzdWJncmFwaFNsb3QuY29ubmVjdFNsb3RzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvdXRwdXROb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIGV4Y2hhbmdlU3ViR3JhcGhJbnB1dE5vZGVzICgpIHtcclxuICAgICAgICBsZXQgaW5wdXRTbG90cyA9IHRoaXMuaW5wdXRTbG90cztcclxuXHJcbiAgICAgICAgbGV0IHByb3BlcnR5Tm9kZXMgPSB0aGlzLm5vZGVzLmZpbHRlcihuID0+IG4gaW5zdGFuY2VvZiBQcm9wZXJ0eU5vZGUpO1xyXG4gICAgICAgIHByb3BlcnR5Tm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICAgICAgbGV0IHByb3BlcnR5U2xvdCA9IG5vZGUub3V0cHV0U2xvdHNbMF07XHJcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eVNsb3QuZGlzcGxheU5hbWU7XHJcblxyXG4gICAgICAgICAgICBsZXQgaW5wdXRTbG90ID0gaW5wdXRTbG90cy5maW5kKHNsb3QgPT4gc2xvdC5kaXNwbGF5TmFtZSA9PT0gcHJvcGVydHlOYW1lKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbnB1dFNsb3QpIHtcclxuICAgICAgICAgICAgICAgIGxldCBvdXRwdXRTbG90ID0gaW5wdXRTbG90LmNvbm5lY3RTbG90O1xyXG4gICAgICAgICAgICAgICAgaWYgKG91dHB1dFNsb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVNsb3QuY29ubmVjdFNsb3RzLmZvckVhY2goaW5wdXRTbG90SW5TdWJHcmFwaCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0U2xvdEluU3ViR3JhcGguY29ubmVjdFNsb3QgPSBvdXRwdXRTbG90O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRTbG90LmNvbm5lY3RTbG90cyA9IG91dHB1dFNsb3QuY29ubmVjdFNsb3RzLmZpbHRlcihzbG90ID0+IHNsb3QgPT09IGlucHV0U2xvdCk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG91dHB1dFNsb3Qubm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRTbG90SW5TdWJHcmFwaC5ub2RlPy5hZGREZXBlbmRlbmN5KG91dHB1dFNsb3Qubm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFNsb3Qubm9kZS5zZXRQcmlvcml0eShpbnB1dFNsb3RJblN1YkdyYXBoLm5vZGUucHJpb3JpdHkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRTbG90LmNvbm5lY3RTbG90ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5U2xvdC5jb25uZWN0U2xvdHMuZm9yRWFjaChpbnB1dFNsb3RJblN1YkdyYXBoID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRTbG90SW5TdWJHcmFwaC5jb25uZWN0U2xvdCA9IGlucHV0U2xvdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5wdXRTbG90LmNvbm5lY3RTbG90cy5wdXNoKGlucHV0U2xvdEluU3ViR3JhcGgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0U2xvdC5ub2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFNsb3RJblN1YkdyYXBoLm5vZGU/LmFkZERlcGVuZGVuY3kodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJpb3JpdHkoaW5wdXRTbG90SW5TdWJHcmFwaC5ub2RlLnByaW9yaXR5ICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZUNvZGUgKCkge1xyXG4gICAgICAgIGxldCBjb2RlID0gJyc7XHJcbiAgICAgICAgbGV0IGlucHV0U2xvdHMgPSB0aGlzLmlucHV0U2xvdHM7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dFNsb3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIGlmICghaW5wdXRTbG90c1tpXS5jb25uZWN0U2xvdCkgY29udGludWU7XHJcbiAgICAgICAgICAgIGNvZGUgKz0gYCR7aW5wdXRTbG90c1tpXS52YXJEZWZpbmV9ID0gJHtpbnB1dFNsb3RzW2ldLmRlZmF1bHRWYWx1ZX07XFxuYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvZGU7XHJcbiAgICB9XHJcbn1cclxuIl19