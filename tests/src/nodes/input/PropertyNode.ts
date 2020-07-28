import { ShaderNode, ShaderPropery } from "../../base";

export default class PropertyNode extends ShaderNode {
    property: ShaderPropery | null = null;

    searchProperties (properties) {
        this.property = properties.find(p => {
            return p.data.m_Guid.m_GuidSerialized;
        })
    }

    generateCode () {
        return `${this.getOutputVarName(0)} = ${this.property?.data.m_Name};`;
    }
}

