"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShaderGraph = void 0;
const base_1 = require("./base");
const utils_1 = require("./utils");
const nodes_1 = require("./nodes");
const MasterNode_1 = __importDefault(require("./nodes/master/MasterNode"));
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
        let nodes = content.m_SerializableNodes.map(d => {
            let node = nodes_1.createNode(d);
            if (node instanceof PropertyNode_1.default) {
                node.searchProperties(properties);
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
            if (inputNodeSlot) {
                inputNodeSlot.connectSlot = outputNodeSlot;
                // inputNodeSlot.type = ShaderSlotType.Input;
            }
            if (outputNodeSlot) {
                outputNodeSlot.connectSlot = inputNodeSlot;
                // outputNodeSlot.type = ShaderSlotType.Output;
            }
        }
        return {
            properties,
            nodeMap,
            nodes,
            edges
        };
    }
    static decode(path) {
        base_1.resetGlobalShaderSlotID();
        let res = this.searchNodes(path);
        if (!res) {
            return;
        }
        let { properties, nodeMap, nodes, edges } = res;
        nodes.sort((a, b) => b.priority - a.priority);
        nodes.forEach(node => {
            node.calcConcretePrecision();
        });
        let masterNode = nodes.find(n => n instanceof MasterNode_1.default);
        if (!masterNode) {
            console.error('Can not find master node.');
            return;
        }
        masterNode.properties = properties;
        // for (let i = 0; i < nodes.length; i++) {
        //     let node = nodes[i];
        //     let code = node.generateCode();
        // }
        let code = masterNode.generateCode();
        return code;
    }
}
exports.ShaderGraph = ShaderGraph;
ShaderGraph.subgraphPath = '';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhZGVyZ3JhcGguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc2hhZGVyZ3JhcGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsaUNBQXdHO0FBQ3hHLG1DQUF3QztBQUN4QyxtQ0FBcUM7QUFDckMsMkVBQW1EO0FBSW5ELDRDQUFtQjtBQUVuQiw4RUFBc0Q7QUFFdEQsTUFBYSxXQUFXO0lBR3BCLE1BQU0sQ0FBQyxXQUFXLENBQUUsU0FBaUI7UUFDakMsSUFBSSxVQUFVLEdBQUcsWUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDckQsSUFBSSxPQUFPLEdBQUcscUJBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFFckIsSUFBSSxVQUFVLEdBQW9CLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLG9CQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRyxJQUFJLE9BQU8sR0FBNEIsSUFBSSxHQUFHLENBQUM7UUFFL0MsSUFBSSxLQUFLLEdBQWlCLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDMUQsSUFBSSxJQUFJLEdBQUcsa0JBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV6QixJQUFJLElBQUksWUFBWSxzQkFBWSxFQUFFO2dCQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDckM7WUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDN0IsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLEtBQUssR0FBaUIsT0FBTyxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFB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Q0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNyQyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOztBQW5HTCxrQ0FvR0M7QUFuR1Usd0JBQVksR0FBRyxFQUFFLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFkZXJQcm9wZXJ5LCBTaGFkZXJOb2RlLCBTaGFkZXJFZGdlLCByZXNldEdsb2JhbFNoYWRlclNsb3RJRCwgU2hhZGVyU2xvdFR5cGUgfSBmcm9tIFwiLi9iYXNlXCI7XHJcbmltcG9ydCB7IGdldEpzb25PYmplY3QgfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVOb2RlIH0gZnJvbSBcIi4vbm9kZXNcIjtcclxuaW1wb3J0IE1hc3Rlck5vZGUgZnJvbSBcIi4vbm9kZXMvbWFzdGVyL01hc3Rlck5vZGVcIjtcclxuaW1wb3J0IFN1YkdyYXBoTm9kZSBmcm9tIFwiLi9ub2Rlcy9zdWJncmFwaC9TdWJHcmFwaE5vZGVcIjtcclxuXHJcbmltcG9ydCBnbG9iYnkgZnJvbSAnZ2xvYmJ5J1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMnXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcbmltcG9ydCBQcm9wZXJ0eU5vZGUgZnJvbSBcIi4vbm9kZXMvaW5wdXQvUHJvcGVydHlOb2RlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2hhZGVyR3JhcGgge1xyXG4gICAgc3RhdGljIHN1YmdyYXBoUGF0aCA9ICcnXHJcblxyXG4gICAgc3RhdGljIHNlYXJjaE5vZGVzIChncmFwaFBhdGg6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBjb250ZW50U3RyID0gZnMucmVhZEZpbGVTeW5jKGdyYXBoUGF0aCwgJ3V0Zi04Jyk7XHJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBnZXRKc29uT2JqZWN0KGNvbnRlbnRTdHIpO1xyXG4gICAgICAgIGlmICghY29udGVudCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgcHJvcGVydGllczogU2hhZGVyUHJvcGVyeVtdID0gY29udGVudC5tX1NlcmlhbGl6ZWRQcm9wZXJ0aWVzLm1hcChkID0+IG5ldyBTaGFkZXJQcm9wZXJ5KGQpKTtcclxuICAgICAgICBsZXQgbm9kZU1hcDogTWFwPHN0cmluZywgU2hhZGVyTm9kZT4gPSBuZXcgTWFwO1xyXG5cclxuICAgICAgICBsZXQgbm9kZXM6IFNoYWRlck5vZGVbXSA9IGNvbnRlbnQubV9TZXJpYWxpemFibGVOb2Rlcy5tYXAoZCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gY3JlYXRlTm9kZShkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgUHJvcGVydHlOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNlYXJjaFByb3BlcnRpZXMocHJvcGVydGllcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5vZGVNYXAuc2V0KG5vZGUudXVpZCwgbm9kZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgZWRnZXM6IFNoYWRlckVkZ2VbXSA9IGNvbnRlbnQubV9TZXJpYWxpemFibGVFZGdlcy5tYXAoZCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2hhZGVyRWRnZShkKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWRnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGVkZ2UgPSBlZGdlc1tpXTtcclxuICAgICAgICAgICAgbGV0IGlucHV0U2xvdCA9IGVkZ2UuaW5wdXQ7XHJcbiAgICAgICAgICAgIGxldCBvdXRwdXRTbG90ID0gZWRnZS5vdXRwdXQ7XHJcblxyXG4gICAgICAgICAgICBsZXQgaW5wdXROb2RlID0gbm9kZU1hcC5nZXQoaW5wdXRTbG90Lm5vZGVVdWlkKTtcclxuICAgICAgICAgICAgbGV0IG91dHB1dE5vZGUgPSBub2RlTWFwLmdldChvdXRwdXRTbG90Lm5vZGVVdWlkKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghaW5wdXROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYENhbiBub3QgZmluZCBpbnB1dCBbJHtpbnB1dFNsb3Qubm9kZVV1aWR9XSBmb3IgZWRnZS5gKVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFvdXRwdXROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYENhbiBub3QgZmluZCBpbnB1dCBbJHtvdXRwdXRTbG90Lm5vZGVVdWlkfV0gZm9yIGVkZ2UuYClcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dE5vZGUuYWRkRGVwZW5kZW5jeShvdXRwdXROb2RlKTtcclxuICAgICAgICAgICAgb3V0cHV0Tm9kZS5zZXRQcmlvcml0eShpbnB1dE5vZGUucHJpb3JpdHkgKyAxKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpbnB1dE5vZGVTbG90ID0gaW5wdXROb2RlLnNsb3RzTWFwLmdldChpbnB1dFNsb3QuaWQpO1xyXG4gICAgICAgICAgICBsZXQgb3V0cHV0Tm9kZVNsb3QgPSBvdXRwdXROb2RlLnNsb3RzTWFwLmdldChvdXRwdXRTbG90LmlkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbnB1dE5vZGVTbG90KSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dE5vZGVTbG90LmNvbm5lY3RTbG90ID0gb3V0cHV0Tm9kZVNsb3Q7XHJcbiAgICAgICAgICAgICAgICAvLyBpbnB1dE5vZGVTbG90LnR5cGUgPSBTaGFkZXJTbG90VHlwZS5JbnB1dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAob3V0cHV0Tm9kZVNsb3QpIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dE5vZGVTbG90LmNvbm5lY3RTbG90ID0gaW5wdXROb2RlU2xvdDtcclxuICAgICAgICAgICAgICAgIC8vIG91dHB1dE5vZGVTbG90LnR5cGUgPSBTaGFkZXJTbG90VHlwZS5PdXRwdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXMsXHJcbiAgICAgICAgICAgIG5vZGVNYXAsXHJcbiAgICAgICAgICAgIG5vZGVzLFxyXG4gICAgICAgICAgICBlZGdlc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVjb2RlIChwYXRoOiBzdHJpbmcpIHtcclxuICAgICAgICBcclxuICAgICAgICByZXNldEdsb2JhbFNoYWRlclNsb3RJRCgpO1xyXG5cclxuICAgICAgICBsZXQgcmVzID0gdGhpcy5zZWFyY2hOb2RlcyhwYXRoKTtcclxuICAgICAgICBpZiAoIXJlcykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgeyBwcm9wZXJ0aWVzLCBub2RlTWFwLCBub2RlcywgZWRnZXMgfSA9IHJlcztcclxuXHJcbiAgICAgICAgbm9kZXMuc29ydCgoYSwgYikgPT4gYi5wcmlvcml0eSAtIGEucHJpb3JpdHkpO1xyXG5cclxuICAgICAgICBub2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICAgICAgICBub2RlLmNhbGNDb25jcmV0ZVByZWNpc2lvbigpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCBtYXN0ZXJOb2RlID0gbm9kZXMuZmluZChuID0+IG4gaW5zdGFuY2VvZiBNYXN0ZXJOb2RlKTtcclxuICAgICAgICBpZiAoIW1hc3Rlck5vZGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ2FuIG5vdCBmaW5kIG1hc3RlciBub2RlLicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAobWFzdGVyTm9kZSBhcyBNYXN0ZXJOb2RlKS5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcclxuXHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vICAgICBsZXQgbm9kZSA9IG5vZGVzW2ldO1xyXG4gICAgICAgIC8vICAgICBsZXQgY29kZSA9IG5vZGUuZ2VuZXJhdGVDb2RlKCk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBsZXQgY29kZSA9IG1hc3Rlck5vZGUuZ2VuZXJhdGVDb2RlKCk7XHJcbiAgICAgICAgcmV0dXJuIGNvZGU7XHJcbiAgICB9XHJcbn1cclxuIl19