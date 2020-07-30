import { ShaderNode, ShaderSlot, ShaderPropery, ShaderEdgeSlot } from "../../base";
import globby from 'globby'
import path from 'path'
import { ShaderGraph } from "../../shadergraph";
import SubGraphOutputNode from "./SubGraphOutputNode";
import PropertyNode from "../input/PropertyNode";

export default class SubGraphNode extends ShaderNode {
    nodes: ShaderNode[] = []
    nodeMap: Map<string, ShaderNode> = new Map
    properties: ShaderPropery[] = []

    subgraphOutNode: SubGraphOutputNode | null = null;

    fixedConcretePrecision = true;

    constructor (data) {
        super(data)

        let name = this.data.m_Name;
        let paths = globby.sync(path.join(ShaderGraph.subgraphPath, `**/${name}.ShaderSubGraph`).replace(/\\/g, '/'))
        if (!paths[0]) {
            console.error(`Can not find sub graph with name [${name}]`)
            return;
        }

        let res = ShaderGraph.searchNodes(paths[0]);
        if (!res) {
            return;
        }

        let { properties, nodeMap, nodes, edges } = res;

        this.nodes = nodes;
        this.nodeMap = nodeMap;
        this.properties = properties;

        let subgraphOutNode = nodes.find(n => n instanceof SubGraphOutputNode)
        if (!subgraphOutNode) {
            console.error(`Can not find SubGraphOutputNode for [${name}]`)
            return;
        }

        this.subgraphOutNode = subgraphOutNode;

        // let outSlot = this.outputSlots[0];
        // if (outSlot.data.m_DisplayName !== 'Out') {
        //     console.warn(`SubGraphNode [${name}] last slot name is not Out, may be wrong.`)
        // }

        let inputSlots = this.inputSlots;

        let propertyNodes = nodes.filter(n => n instanceof PropertyNode);
        propertyNodes.forEach(node => {
            let propertySlot = node.outputSlots[0];
            let propertyName = propertySlot.displayName;
            let inputSlotInSubGraph = propertySlot.connectSlot;
            if (!inputSlotInSubGraph) return;
            let inputSlot = inputSlots.find(slot => slot.displayName === propertyName);

            if (inputSlot) {
                let outputSlot = inputSlot.connectSlot;
                if (outputSlot) {
                    inputSlotInSubGraph.connectSlot = outputSlot;

                    if (outputSlot.node) {
                        inputSlotInSubGraph.node?.addDependency(outputSlot.node);
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
                        inputSlotInSubGraph.node?.addDependency(this);
                        //@ts-ignore
                        this.setPriority(inputSlotInSubGraph.node.priority + 1);
                    }
                }
            }

        })
    }

    excahngeSubGraphOutNode (outputEdgeSlot: ShaderEdgeSlot) {
        let outputNode = this as ShaderNode;

        let outputSlot = this.slotsMap.get(outputEdgeSlot.id);
        let subgraphSlot = this.subgraphOutNode?.getSlotWithSlotName(outputSlot?.displayName);

        if (subgraphSlot && subgraphSlot.connectSlot) {
            //@ts-ignore
            outputNode = subgraphSlot.connectSlot.node;
            outputEdgeSlot.id = subgraphSlot.connectSlot.id;
            //@ts-ignore
            outputEdgeSlot.nodeUuid = subgraphSlot.connectSlot.node?.uuid;
            if (outputNode && subgraphSlot) {
                subgraphSlot.connectSlot = undefined;
            }
        }

        return outputNode;
    }

    exchangeSubGraphInputNode (inputSlot: ShaderEdgeSlot) {

    }

    generateCode () {
        let code = '';
        let inputSlots = this.inputSlots;
        for (let i = 0; i < inputSlots.length; i++) {
            if (!inputSlots[i].connectSlot) continue;
            code += `${inputSlots[i].varDefine} = ${inputSlots[i].defaultValue};\n`;
        }
        return code;
    }
}
