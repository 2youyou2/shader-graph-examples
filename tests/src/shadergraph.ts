import { ShaderPropery, ShaderNode, ShaderEdge, resetGlobalShaderSlotID, ShaderSlotType } from "./base";
import { getJsonObject } from "./utils";
import { createNode } from "./nodes";
import MasterNode from "./nodes/master/MasterNode";
import SubGraphNode from "./nodes/subgraph/SubGraphNode";

import globby from 'globby'
import fs from 'fs'
import path from 'path'
import PropertyNode from "./nodes/input/PropertyNode";

export class ShaderGraph {
    static subgraphPath = ''

    static searchNodes (graphPath: string) {
        let contentStr = fs.readFileSync(graphPath, 'utf-8');
        let content = getJsonObject(contentStr);
        if (!content) return;

        let properties: ShaderPropery[] = content.m_SerializedProperties.map(d => new ShaderPropery(d));
        let nodeMap: Map<string, ShaderNode> = new Map;

        let nodes: ShaderNode[] = content.m_SerializableNodes.map(d => {
            let node = createNode(d);

            if (node instanceof PropertyNode) {
                node.searchProperties(properties);
            }

            nodeMap.set(node.uuid, node);
            return node;
        });

        let edges: ShaderEdge[] = content.m_SerializableEdges.map(d => {
            return new ShaderEdge(d)
        })

        for (let i = 0; i < edges.length; i++) {
            let edge = edges[i];
            let inputSlot = edge.input;
            let outputSlot = edge.output;

            let inputNode = nodeMap.get(inputSlot.nodeUuid);
            let outputNode = nodeMap.get(outputSlot.nodeUuid);

            if (!inputNode) {
                console.warn(`Can not find input [${inputSlot.nodeUuid}] for edge.`)
                continue;
            }
            if (!outputNode) {
                console.warn(`Can not find input [${outputSlot.nodeUuid}] for edge.`)
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
        }
    }

    static decode (path: string) {
        
        resetGlobalShaderSlotID();

        let res = this.searchNodes(path);
        if (!res) {
            return;
        }

        let { properties, nodeMap, nodes, edges } = res;

        nodes.sort((a, b) => b.priority - a.priority);

        nodes.forEach(node => {
            node.calcConcretePrecision();
        })

        let masterNode = nodes.find(n => n instanceof MasterNode);
        if (!masterNode) {
            console.error('Can not find master node.');
            return;
        }

        (masterNode as MasterNode).properties = properties;

        // for (let i = 0; i < nodes.length; i++) {
        //     let node = nodes[i];
        //     let code = node.generateCode();
        // }

        let code = masterNode.generateCode();
        return code;
    }
}
