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
                        inputSlot.connectSlots.push(inputSlotInSubGraph);
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
            if (!inputSlots[i].connectSlot)
                continue;
            code += `${inputSlots[i].varDefine} = ${inputSlots[i].defaultValue};\n`;
        }
        return code;
    }
}
exports.default = SubGraphNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3ViR3JhcGhOb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL25vZGVzL3N1YmdyYXBoL1N1YkdyYXBoTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUFtRjtBQUNuRixvREFBMkI7QUFDM0IsZ0RBQXVCO0FBQ3ZCLG1EQUFnRDtBQUNoRCw4RUFBc0Q7QUFDdEQseUVBQWlEO0FBRWpELE1BQXFCLFlBQWEsU0FBUSxpQkFBVTtJQVNoRCxZQUFhLElBQUk7UUFDYixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFUZixVQUFLLEdBQWlCLEVBQUUsQ0FBQTtRQUN4QixZQUFPLEdBQTRCLElBQUksR0FBRyxDQUFBO1FBQzFDLGVBQVUsR0FBb0IsRUFBRSxDQUFBO1FBRWhDLG9CQUFlLEdBQThCLElBQUksQ0FBQztRQUVsRCwyQkFBc0IsR0FBRyxJQUFJLENBQUM7UUFLMUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUIsSUFBSSxLQUFLLEdBQUcsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyx5QkFBVyxDQUFDLFlBQVksRUFBRSxNQUFNLElBQUksaUJBQWlCLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDN0csSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMscUNBQXFDLElBQUksR0FBRyxDQUFDLENBQUE7WUFDM0QsT0FBTztTQUNWO1FBRUQsSUFBSSxHQUFHLEdBQUcseUJBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNOLE9BQU87U0FDVjtRQUVELElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFFaEQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFFN0IsSUFBSSxlQUFlLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSw0QkFBa0IsQ0FBQyxDQUFBO1FBQ3RFLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDbEIsT0FBTyxDQUFDLEtBQUssQ0FBQyx3Q0FBd0MsSUFBSSxHQUFHLENBQUMsQ0FBQTtZQUM5RCxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztJQUUzQyxDQUFDO0lBRUQsdUJBQXVCLENBQUUsY0FBOEI7O1FBQ25ELElBQUksVUFBVSxHQUFHLElBQWtCLENBQUM7UUFFcEMsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELElBQUksWUFBWSxTQUFHLElBQUksQ0FBQyxlQUFlLDBDQUFFLG1CQUFtQixDQUFDLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxXQUFXLENBQUMsQ0FBQztRQUV0RixJQUFJLFlBQVksSUFBSSxZQUFZLENBQUMsV0FBVyxFQUFFO1lBQzFDLFlBQVk7WUFDWixVQUFVLEdBQUcsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDM0MsY0FBYyxDQUFDLEVBQUUsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztZQUNoRCxZQUFZO1lBQ1osY0FBYyxDQUFDLFFBQVEsU0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksMENBQUUsSUFBSSxDQUFDO1lBQzlELElBQUksVUFBVSxJQUFJLFlBQVksRUFBRTtnQkFDNUIsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2FBQ3hDO1NBQ0o7UUFFRCxPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDO0lBRUQsMEJBQTBCO1FBQ3RCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFakMsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksc0JBQVksQ0FBQyxDQUFDO1FBQ3RFLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDekIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLFlBQVksR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDO1lBRTVDLElBQUksU0FBUyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxLQUFLLFlBQVksQ0FBQyxDQUFDO1lBRTNFLElBQUksU0FBUyxFQUFFO2dCQUNYLElBQUksVUFBVSxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUM7Z0JBQ3ZDLElBQUksVUFBVSxFQUFFO29CQUNaLFlBQVksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLEVBQUU7O3dCQUNwRCxtQkFBbUIsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO3dCQUM3QyxVQUFVLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDO3dCQUVyRixJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUU7NEJBQ2pCLE1BQUEsbUJBQW1CLENBQUMsSUFBSSwwQ0FBRSxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRTs0QkFDekQsWUFBWTs0QkFDWixVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO3lCQUN0RTtvQkFDTCxDQUFDLENBQUMsQ0FBQTtvQkFFRixZQUFZO29CQUNaLFNBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2lCQUNoQztxQkFDSTtvQkFDRCxZQUFZLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFOzt3QkFDcEQsbUJBQW1CLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQzt3QkFDNUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQzt3QkFFakQsSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFOzRCQUNoQixNQUFBLG1CQUFtQixDQUFDLElBQUksMENBQUUsYUFBYSxDQUFDLElBQUksRUFBRTs0QkFDOUMsWUFBWTs0QkFDWixJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7eUJBQzNEO29CQUNMLENBQUMsQ0FBQyxDQUFDO2lCQUNOO2FBQ0o7UUFHTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxZQUFZO1FBQ1IsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNqQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVc7Z0JBQUUsU0FBUztZQUN6QyxJQUFJLElBQUksR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxNQUFNLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEtBQUssQ0FBQztTQUMzRTtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Q0FDSjtBQWxIRCwrQkFrSEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFkZXJOb2RlLCBTaGFkZXJTbG90LCBTaGFkZXJQcm9wZXJ5LCBTaGFkZXJFZGdlU2xvdCB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XHJcbmltcG9ydCBnbG9iYnkgZnJvbSAnZ2xvYmJ5J1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgeyBTaGFkZXJHcmFwaCB9IGZyb20gXCIuLi8uLi9zaGFkZXJncmFwaFwiO1xyXG5pbXBvcnQgU3ViR3JhcGhPdXRwdXROb2RlIGZyb20gXCIuL1N1YkdyYXBoT3V0cHV0Tm9kZVwiO1xyXG5pbXBvcnQgUHJvcGVydHlOb2RlIGZyb20gXCIuLi9pbnB1dC9Qcm9wZXJ0eU5vZGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YkdyYXBoTm9kZSBleHRlbmRzIFNoYWRlck5vZGUge1xyXG4gICAgbm9kZXM6IFNoYWRlck5vZGVbXSA9IFtdXHJcbiAgICBub2RlTWFwOiBNYXA8c3RyaW5nLCBTaGFkZXJOb2RlPiA9IG5ldyBNYXBcclxuICAgIHByb3BlcnRpZXM6IFNoYWRlclByb3BlcnlbXSA9IFtdXHJcblxyXG4gICAgc3ViZ3JhcGhPdXROb2RlOiBTdWJHcmFwaE91dHB1dE5vZGUgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBmaXhlZENvbmNyZXRlUHJlY2lzaW9uID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoZGF0YSkge1xyXG4gICAgICAgIHN1cGVyKGRhdGEpXHJcblxyXG4gICAgICAgIGxldCBuYW1lID0gdGhpcy5kYXRhLm1fTmFtZTtcclxuICAgICAgICBsZXQgcGF0aHMgPSBnbG9iYnkuc3luYyhwYXRoLmpvaW4oU2hhZGVyR3JhcGguc3ViZ3JhcGhQYXRoLCBgKiovJHtuYW1lfS5TaGFkZXJTdWJHcmFwaGApLnJlcGxhY2UoL1xcXFwvZywgJy8nKSlcclxuICAgICAgICBpZiAoIXBhdGhzWzBdKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYENhbiBub3QgZmluZCBzdWIgZ3JhcGggd2l0aCBuYW1lIFske25hbWV9XWApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByZXMgPSBTaGFkZXJHcmFwaC5zZWFyY2hOb2RlcyhwYXRoc1swXSk7XHJcbiAgICAgICAgaWYgKCFyZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHsgcHJvcGVydGllcywgbm9kZU1hcCwgbm9kZXMsIGVkZ2VzIH0gPSByZXM7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZXMgPSBub2RlcztcclxuICAgICAgICB0aGlzLm5vZGVNYXAgPSBub2RlTWFwO1xyXG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XHJcblxyXG4gICAgICAgIGxldCBzdWJncmFwaE91dE5vZGUgPSBub2Rlcy5maW5kKG4gPT4gbiBpbnN0YW5jZW9mIFN1YkdyYXBoT3V0cHV0Tm9kZSlcclxuICAgICAgICBpZiAoIXN1YmdyYXBoT3V0Tm9kZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBDYW4gbm90IGZpbmQgU3ViR3JhcGhPdXRwdXROb2RlIGZvciBbJHtuYW1lfV1gKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN1YmdyYXBoT3V0Tm9kZSA9IHN1YmdyYXBoT3V0Tm9kZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZXhjYWhuZ2VTdWJHcmFwaE91dE5vZGUgKG91dHB1dEVkZ2VTbG90OiBTaGFkZXJFZGdlU2xvdCkge1xyXG4gICAgICAgIGxldCBvdXRwdXROb2RlID0gdGhpcyBhcyBTaGFkZXJOb2RlO1xyXG5cclxuICAgICAgICBsZXQgb3V0cHV0U2xvdCA9IHRoaXMuc2xvdHNNYXAuZ2V0KG91dHB1dEVkZ2VTbG90LmlkKTtcclxuICAgICAgICBsZXQgc3ViZ3JhcGhTbG90ID0gdGhpcy5zdWJncmFwaE91dE5vZGU/LmdldFNsb3RXaXRoU2xvdE5hbWUob3V0cHV0U2xvdD8uZGlzcGxheU5hbWUpO1xyXG5cclxuICAgICAgICBpZiAoc3ViZ3JhcGhTbG90ICYmIHN1YmdyYXBoU2xvdC5jb25uZWN0U2xvdCkge1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgb3V0cHV0Tm9kZSA9IHN1YmdyYXBoU2xvdC5jb25uZWN0U2xvdC5ub2RlO1xyXG4gICAgICAgICAgICBvdXRwdXRFZGdlU2xvdC5pZCA9IHN1YmdyYXBoU2xvdC5jb25uZWN0U2xvdC5pZDtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIG91dHB1dEVkZ2VTbG90Lm5vZGVVdWlkID0gc3ViZ3JhcGhTbG90LmNvbm5lY3RTbG90Lm5vZGU/LnV1aWQ7XHJcbiAgICAgICAgICAgIGlmIChvdXRwdXROb2RlICYmIHN1YmdyYXBoU2xvdCkge1xyXG4gICAgICAgICAgICAgICAgc3ViZ3JhcGhTbG90LmNvbm5lY3RTbG90cy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gb3V0cHV0Tm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBleGNoYW5nZVN1YkdyYXBoSW5wdXROb2RlcyAoKSB7XHJcbiAgICAgICAgbGV0IGlucHV0U2xvdHMgPSB0aGlzLmlucHV0U2xvdHM7XHJcblxyXG4gICAgICAgIGxldCBwcm9wZXJ0eU5vZGVzID0gdGhpcy5ub2Rlcy5maWx0ZXIobiA9PiBuIGluc3RhbmNlb2YgUHJvcGVydHlOb2RlKTtcclxuICAgICAgICBwcm9wZXJ0eU5vZGVzLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0eVNsb3QgPSBub2RlLm91dHB1dFNsb3RzWzBdO1xyXG4gICAgICAgICAgICBsZXQgcHJvcGVydHlOYW1lID0gcHJvcGVydHlTbG90LmRpc3BsYXlOYW1lO1xyXG5cclxuICAgICAgICAgICAgbGV0IGlucHV0U2xvdCA9IGlucHV0U2xvdHMuZmluZChzbG90ID0+IHNsb3QuZGlzcGxheU5hbWUgPT09IHByb3BlcnR5TmFtZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5wdXRTbG90KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3V0cHV0U2xvdCA9IGlucHV0U2xvdC5jb25uZWN0U2xvdDtcclxuICAgICAgICAgICAgICAgIGlmIChvdXRwdXRTbG90KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlTbG90LmNvbm5lY3RTbG90cy5mb3JFYWNoKGlucHV0U2xvdEluU3ViR3JhcGggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFNsb3RJblN1YkdyYXBoLmNvbm5lY3RTbG90ID0gb3V0cHV0U2xvdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0U2xvdC5jb25uZWN0U2xvdHMgPSBvdXRwdXRTbG90LmNvbm5lY3RTbG90cy5maWx0ZXIoc2xvdCA9PiBzbG90ID09PSBpbnB1dFNsb3QpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvdXRwdXRTbG90Lm5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0U2xvdEluU3ViR3JhcGgubm9kZT8uYWRkRGVwZW5kZW5jeShvdXRwdXRTbG90Lm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRTbG90Lm5vZGUuc2V0UHJpb3JpdHkoaW5wdXRTbG90SW5TdWJHcmFwaC5ub2RlLnByaW9yaXR5ICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0U2xvdC5jb25uZWN0U2xvdCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVNsb3QuY29ubmVjdFNsb3RzLmZvckVhY2goaW5wdXRTbG90SW5TdWJHcmFwaCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0U2xvdEluU3ViR3JhcGguY29ubmVjdFNsb3QgPSBpbnB1dFNsb3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0U2xvdC5jb25uZWN0U2xvdHMucHVzaChpbnB1dFNsb3RJblN1YkdyYXBoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dFNsb3Qubm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRTbG90SW5TdWJHcmFwaC5ub2RlPy5hZGREZXBlbmRlbmN5KHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFByaW9yaXR5KGlucHV0U2xvdEluU3ViR3JhcGgubm9kZS5wcmlvcml0eSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVDb2RlICgpIHtcclxuICAgICAgICBsZXQgY29kZSA9ICcnO1xyXG4gICAgICAgIGxldCBpbnB1dFNsb3RzID0gdGhpcy5pbnB1dFNsb3RzO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRTbG90cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoIWlucHV0U2xvdHNbaV0uY29ubmVjdFNsb3QpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBjb2RlICs9IGAke2lucHV0U2xvdHNbaV0udmFyRGVmaW5lfSA9ICR7aW5wdXRTbG90c1tpXS5kZWZhdWx0VmFsdWV9O1xcbmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb2RlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==