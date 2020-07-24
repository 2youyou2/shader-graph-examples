import { ShaderNode } from "../base";

export { Vector1Node } from './input/basic/Vector1Node'
export { UnlitMasterNode } from './master/UnlitMasterNode'
export { AddNode } from './math/basic/AddNode';

export function createNode (data: any) {
    let type = data.typeInfo;
    let name = type.fullName;
    name = name.replace('UnityEditor.ShaderGraph.', '');

    let ctor = module.exports[name] || ShaderNode;
    return ctor && new ctor(data);
}
