import { ShaderNode, ShaderPropery } from "../../base";

export default class PropertyNode extends ShaderNode {
    fixedConcretePrecision = true;

    property: ShaderPropery | null = null;

    searchProperties (properties) {
        this.property = properties.find(p => {
            return p.data.m_Guid.m_GuidSerialized === this.data.m_PropertyGuidSerialized;
        })
    }

    generateCode () {
        return `${this.getOutputVarDefine(0)} = ${this.property?.name};`;
    }
}

