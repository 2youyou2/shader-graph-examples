import { ShaderNode } from "../../base";
import globby from 'globby'
import path from 'path'
import { ShaderGraph } from "../../shadergraph";
import SubGraphOutputNode from "./SubGraphOutputNode";

export default class SubGraphNode extends ShaderNode {
    nodes: ShaderNode [] = []
    nodeMap: Map<string, ShaderNode> = new Map

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

        let suboutNode = nodes.find(n => n instanceof SubGraphOutputNode)
        if (!suboutNode) {
            console.error(`Can not find SubGraphOutputNode for [${name}]`)
            return;
        }

        let outSlot = this.slots[this.slots.length - 1];
        if (outSlot.data.m_DisplayName !== 'Out') {
            console.warn(`SubGraphNode [${name}] last slot name is not Out, may be wrong.`)
        }

        this.slots[this.slots.length - 1] = suboutNode.slots[0]
    }
}
