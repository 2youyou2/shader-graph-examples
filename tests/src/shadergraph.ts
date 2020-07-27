import { ShaderPropery, ShaderNode, ShaderEdge, resetGlobalShaderSlotID, ShaderSlotType } from "./base";
import { getJsonObject } from "./utils";
import { createNode } from "./nodes";
import MasterNode from "./nodes/master/MasterNode";
import fs from "fs";

export class ShaderGraph {
    static decode (contentStr: string) {
        let content = getJsonObject(contentStr);
        if (!content) return;

        resetGlobalShaderSlotID();

        let nodeMap: Map<string, ShaderNode> = new Map;

        let properties: ShaderPropery[] = content.m_SerializedProperties.map(d => new ShaderPropery(d));
        let nodes: ShaderNode[] = content.m_SerializableNodes.map(d => {
            let node = createNode(d);
            nodeMap.set(node.uuid, node);
            return node;
        });
        let edges: ShaderEdge[] = content.m_SerializableEdges.map(d => new ShaderEdge(d))

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
                inputNodeSlot.type = ShaderSlotType.Input;
            }
            if (outputNodeSlot) {
                outputNodeSlot.connectSlot = inputNodeSlot;
                outputNodeSlot.type = ShaderSlotType.Output;
            }
        }

        nodes.sort((a, b) => b.priority - a.priority);

        let masterNode = nodes.find(n => n instanceof MasterNode);
        if (!masterNode) {
            console.error('Can not find master node.');
            return;
        }

        // for (let i = 0; i < nodes.length; i++) {
        //     let node = nodes[i];
        //     let code = node.generateCode();
        // }

        let code = masterNode.generateCode();
        return code;
    }
}
