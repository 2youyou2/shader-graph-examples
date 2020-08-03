import { ShaderNode, ShaderPropery, ConcretePrecisionType } from "../../base";

export default class PropertyNode extends ShaderNode {
    concretePrecisionType = ConcretePrecisionType.Fixed;

    property: ShaderPropery | null = null;

    searchProperties (properties) {
        this.property = properties.find(p => {
            return p.data.m_Guid.m_GuidSerialized === this.data.m_PropertyGuidSerialized;
        })

        if (this.property) {
            this.property.node = this;
        }
    }

    generateCode () {
        return `${this.getOutputVarDefine(0)} = ${this.property?.name};`;
    }
}

