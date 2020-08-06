"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const utils_1 = require("./utils");
const nodes_1 = require("./nodes");
const MasterNode_1 = __importDefault(require("./nodes/master/MasterNode"));
const SubGraphNode_1 = __importDefault(require("./nodes/subgraph/SubGraphNode"));
const fs_1 = __importDefault(require("fs"));
const PropertyNode_1 = __importDefault(require("./nodes/input/PropertyNode"));
class ShaderGraph {
    static searchNodes(graphPath) {
        let contentStr = fs_1.default.readFileSync(graphPath, 'utf-8');
        let content = utils_1.getJsonObject(contentStr);
        if (!content)
            return;
        let properties = content.m_SerializedProperties.map(d => new base_1.ShaderPropery(d));
        let nodeMap = new Map;
        let propertyNodeMap = new Map;
        let nodes = content.m_SerializableNodes.map(d => {
            let node = nodes_1.createNode(d);
            if (node instanceof PropertyNode_1.default) {
                node.searchProperties(properties);
                let propertyNode = propertyNodeMap.get(node.property);
                if (propertyNode) {
                    nodeMap.set(node.uuid, propertyNode);
                    return propertyNode;
                }
                propertyNodeMap.set(node.property, node);
            }
            nodeMap.set(node.uuid, node);
            return node;
        });
        let edges = content.m_SerializableEdges.map(d => {
            return new base_1.ShaderEdge(d);
        });
        for (let i = 0; i < edges.length; i++) {
            let edge = edges[i];
            let inputSlot = edge.input;
            let outputSlot = edge.output;
            let inputNode = nodeMap.get(inputSlot.nodeUuid);
            let outputNode = nodeMap.get(outputSlot.nodeUuid);
            if (outputNode instanceof SubGraphNode_1.default) {
                outputNode = outputNode.excahngeSubGraphOutNode(outputSlot);
            }
            if (!inputNode) {
                console.warn(`Can not find input [${inputSlot.nodeUuid}] for edge.`);
                continue;
            }
            if (!outputNode) {
                console.warn(`Can not find input [${outputSlot.nodeUuid}] for edge.`);
                continue;
            }
            inputNode.addDependency(outputNode);
            outputNode.setPriority(inputNode.priority + 1);
            let inputNodeSlot = inputNode.slotsMap.get(inputSlot.id);
            let outputNodeSlot = outputNode.slotsMap.get(outputSlot.id);
            if (inputNodeSlot && outputNodeSlot) {
                inputNodeSlot.connectSlots.push(outputNodeSlot);
                outputNodeSlot.connectSlots.push(inputNodeSlot);
            }
        }
        nodes.sort((a, b) => b.priority - a.priority);
        nodes.forEach(node => {
            if (node instanceof SubGraphNode_1.default) {
                node.exchangeSubGraphInputNodes();
            }
            node.calcConcretePrecision();
        });
        this.allNodes.push(nodes);
        return {
            properties,
            nodeMap,
            nodes,
            edges
        };
    }
    static decode(path) {
        base_1.resetGlobalShaderSlotID();
        this.allNodes.length = 0;
        let res = this.searchNodes(path);
        if (!res) {
            return;
        }
        let { properties, nodeMap, nodes, edges } = res;
        let masterNode = nodes.find(n => n instanceof MasterNode_1.default);
        if (!masterNode) {
            console.error('Can not find master node.');
            return;
        }
        masterNode.properties = properties;
        let code = masterNode.generateCode();
        return code;
    }
}
exports.default = ShaderGraph;
ShaderGraph.subgraphPath = '';
ShaderGraph.allNodes = [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhZGVyZ3JhcGguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zb3VyY2UvcGFuZWwvb3BlcmF0aW9uL3NoYWRlcmdyYXBoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsaUNBQXdGO0FBQ3hGLG1DQUF3QztBQUN4QyxtQ0FBcUM7QUFDckMsMkVBQW1EO0FBQ25ELGlGQUF5RDtBQUV6RCw0Q0FBbUI7QUFDbkIsOEVBQXNEO0FBRXRELE1BQXFCLFdBQVc7SUFLNUIsTUFBTSxDQUFDLFdBQVcsQ0FBRSxTQUFpQjtRQUNqQyxJQUFJLFVBQVUsR0FBRyxZQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNyRCxJQUFJLE9BQU8sR0FBRyxxQkFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUVyQixJQUFJLFVBQVUsR0FBb0IsT0FBTyxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksb0JBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksT0FBTyxHQUE0QixJQUFJLEdBQUcsQ0FBQztRQUUvQyxJQUFJLGVBQWUsR0FBcUMsSUFBSSxHQUFHLENBQUM7UUFFaEUsSUFBSSxLQUFLLEdBQWlCLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDMUQsSUFBSSxJQUFJLEdBQUcsa0JBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV6QixJQUFJLElBQUksWUFBWSxzQkFBWSxFQUFFO2dCQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBRWxDLElBQUksWUFBWSxHQUFHLGVBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLFlBQVksRUFBRTtvQkFDZCxPQUFP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QUE7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBRSxJQUFZO1FBRXZCLDhCQUF1QixFQUFFLENBQUM7UUFFMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRXpCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNOLE9BQU87U0FDVjtRQUVELElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFFaEQsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxvQkFBVSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUMzQyxPQUFPO1NBQ1Y7UUFFQSxVQUF5QixDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFFbkQsSUFBSSxJQUFJLEdBQUcsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7O0FBbkhMLDhCQW9IQztBQW5IVSx3QkFBWSxHQUFHLEVBQUUsQ0FBQTtBQUVqQixvQkFBUSxHQUFtQixFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFkZXJQcm9wZXJ5LCBTaGFkZXJOb2RlLCBTaGFkZXJFZGdlLCByZXNldEdsb2JhbFNoYWRlclNsb3RJRCB9IGZyb20gXCIuL2Jhc2VcIjtcclxuaW1wb3J0IHsgZ2V0SnNvbk9iamVjdCB9IGZyb20gXCIuL3V0aWxzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZU5vZGUgfSBmcm9tIFwiLi9ub2Rlc1wiO1xyXG5pbXBvcnQgTWFzdGVyTm9kZSBmcm9tIFwiLi9ub2Rlcy9tYXN0ZXIvTWFzdGVyTm9kZVwiO1xyXG5pbXBvcnQgU3ViR3JhcGhOb2RlIGZyb20gXCIuL25vZGVzL3N1YmdyYXBoL1N1YkdyYXBoTm9kZVwiO1xyXG5cclxuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xyXG5pbXBvcnQgUHJvcGVydHlOb2RlIGZyb20gXCIuL25vZGVzL2lucHV0L1Byb3BlcnR5Tm9kZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhZGVyR3JhcGgge1xyXG4gICAgc3RhdGljIHN1YmdyYXBoUGF0aCA9ICcnXHJcblxyXG4gICAgc3RhdGljIGFsbE5vZGVzOiBTaGFkZXJOb2RlW11bXSA9IFtdO1xyXG5cclxuICAgIHN0YXRpYyBzZWFyY2hOb2RlcyAoZ3JhcGhQYXRoOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgY29udGVudFN0ciA9IGZzLnJlYWRGaWxlU3luYyhncmFwaFBhdGgsICd1dGYtOCcpO1xyXG4gICAgICAgIGxldCBjb250ZW50ID0gZ2V0SnNvbk9iamVjdChjb250ZW50U3RyKTtcclxuICAgICAgICBpZiAoIWNvbnRlbnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHByb3BlcnRpZXM6IFNoYWRlclByb3BlcnlbXSA9IGNvbnRlbnQubV9TZXJpYWxpemVkUHJvcGVydGllcy5tYXAoZCA9PiBuZXcgU2hhZGVyUHJvcGVyeShkKSk7XHJcbiAgICAgICAgbGV0IG5vZGVNYXA6IE1hcDxzdHJpbmcsIFNoYWRlck5vZGU+ID0gbmV3IE1hcDtcclxuXHJcbiAgICAgICAgbGV0IHByb3BlcnR5Tm9kZU1hcDogTWFwPFNoYWRlclByb3BlcnksIFByb3BlcnR5Tm9kZT4gPSBuZXcgTWFwO1xyXG5cclxuICAgICAgICBsZXQgbm9kZXM6IFNoYWRlck5vZGVbXSA9IGNvbnRlbnQubV9TZXJpYWxpemFibGVOb2Rlcy5tYXAoZCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gY3JlYXRlTm9kZShkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgUHJvcGVydHlOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNlYXJjaFByb3BlcnRpZXMocHJvcGVydGllcyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0eU5vZGUgPSBwcm9wZXJ0eU5vZGVNYXAuZ2V0KG5vZGUucHJvcGVydHkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVNYXAuc2V0KG5vZGUudXVpZCwgcHJvcGVydHlOb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvcGVydHlOb2RlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHByb3BlcnR5Tm9kZU1hcC5zZXQobm9kZS5wcm9wZXJ0eSwgbm9kZSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBub2RlTWFwLnNldChub2RlLnV1aWQsIG5vZGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGVkZ2VzOiBTaGFkZXJFZGdlW10gPSBjb250ZW50Lm1fU2VyaWFsaXphYmxlRWRnZXMubWFwKGQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNoYWRlckVkZ2UoZClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVkZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBlZGdlID0gZWRnZXNbaV07XHJcbiAgICAgICAgICAgIGxldCBpbnB1dFNsb3QgPSBlZGdlLmlucHV0O1xyXG4gICAgICAgICAgICBsZXQgb3V0cHV0U2xvdCA9IGVkZ2Uub3V0cHV0O1xyXG5cclxuICAgICAgICAgICAgbGV0IGlucHV0Tm9kZSA9IG5vZGVNYXAuZ2V0KGlucHV0U2xvdC5ub2RlVXVpZCk7XHJcbiAgICAgICAgICAgIGxldCBvdXRwdXROb2RlID0gbm9kZU1hcC5nZXQob3V0cHV0U2xvdC5ub2RlVXVpZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAob3V0cHV0Tm9kZSBpbnN0YW5jZW9mIFN1YkdyYXBoTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0Tm9kZSA9IG91dHB1dE5vZGUuZXhjYWhuZ2VTdWJHcmFwaE91dE5vZGUob3V0cHV0U2xvdCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghaW5wdXROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYENhbiBub3QgZmluZCBpbnB1dCBbJHtpbnB1dFNsb3Qubm9kZVV1aWR9XSBmb3IgZWRnZS5gKVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFvdXRwdXROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYENhbiBub3QgZmluZCBpbnB1dCBbJHtvdXRwdXRTbG90Lm5vZGVVdWlkfV0gZm9yIGVkZ2UuYClcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dE5vZGUuYWRkRGVwZW5kZW5jeShvdXRwdXROb2RlKTtcclxuICAgICAgICAgICAgb3V0cHV0Tm9kZS5zZXRQcmlvcml0eShpbnB1dE5vZGUucHJpb3JpdHkgKyAxKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpbnB1dE5vZGVTbG90ID0gaW5wdXROb2RlLnNsb3RzTWFwLmdldChpbnB1dFNsb3QuaWQpO1xyXG4gICAgICAgICAgICBsZXQgb3V0cHV0Tm9kZVNsb3QgPSBvdXRwdXROb2RlLnNsb3RzTWFwLmdldChvdXRwdXRTbG90LmlkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbnB1dE5vZGVTbG90ICYmIG91dHB1dE5vZGVTbG90KSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dE5vZGVTbG90LmNvbm5lY3RTbG90cy5wdXNoKG91dHB1dE5vZGVTbG90KTtcclxuICAgICAgICAgICAgICAgIG91dHB1dE5vZGVTbG90LmNvbm5lY3RTbG90cy5wdXNoKGlucHV0Tm9kZVNsb3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBub2Rlcy5zb3J0KChhLCBiKSA9PiBiLnByaW9yaXR5IC0gYS5wcmlvcml0eSk7XHJcblxyXG4gICAgICAgIG5vZGVzLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgU3ViR3JhcGhOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmV4Y2hhbmdlU3ViR3JhcGhJbnB1dE5vZGVzKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5vZGUuY2FsY0NvbmNyZXRlUHJlY2lzaW9uKCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5hbGxOb2Rlcy5wdXNoKG5vZGVzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcGVydGllcyxcclxuICAgICAgICAgICAgbm9kZU1hcCxcclxuICAgICAgICAgICAgbm9kZXMsXHJcbiAgICAgICAgICAgIGVkZ2VzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZWNvZGUgKHBhdGg6IHN0cmluZykge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc2V0R2xvYmFsU2hhZGVyU2xvdElEKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYWxsTm9kZXMubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgbGV0IHJlcyA9IHRoaXMuc2VhcmNoTm9kZXMocGF0aCk7XHJcbiAgICAgICAgaWYgKCFyZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHsgcHJvcGVydGllcywgbm9kZU1hcCwgbm9kZXMsIGVkZ2VzIH0gPSByZXM7XHJcblxyXG4gICAgICAgIGxldCBtYXN0ZXJOb2RlID0gbm9kZXMuZmluZChuID0+IG4gaW5zdGFuY2VvZiBNYXN0ZXJOb2RlKTtcclxuICAgICAgICBpZiAoIW1hc3Rlck5vZGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ2FuIG5vdCBmaW5kIG1hc3RlciBub2RlLicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAobWFzdGVyTm9kZSBhcyBNYXN0ZXJOb2RlKS5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcclxuXHJcbiAgICAgICAgbGV0IGNvZGUgPSBtYXN0ZXJOb2RlLmdlbmVyYXRlQ29kZSgpO1xyXG4gICAgICAgIHJldHVybiBjb2RlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==