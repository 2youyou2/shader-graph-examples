import { ShaderNode } from "../../../base";
import { ConcretePrecisionType, NormalSpace } from "../../../type";


export default class NormalVectorNode extends ShaderNode {
    concretePrecisionType = ConcretePrecisionType.Fixed;

    constructor (data) {
        super(data)

        let varing = 'NormalSpace.Object'
        if (this.data.m_Space === NormalSpace.Object) {
            varing = 'NormalSpace.Object';
        }
        else if (this.data.m_Space === NormalSpace.View) {
            varing = 'NormalSpace.View';
        }
        else if (this.data.m_Space === NormalSpace.Tangent) {
            varing = 'NormalSpace.Tangent';
            console.error('Not support Tangent Normal');
        }
        else if (this.data.m_Space === NormalSpace.World) {
            varing = 'NormalSpace.World';
        }

        this.depVarings.push(varing);
    }

    calcConcretePrecision () {
        this.slots.forEach(slot => {
            slot._concretePrecision = 3;
        })
    }

    generateCode () {
        let name = 'v_normal';
        if (this.data.m_Space === NormalSpace.Object) {
            name = 'v_normal';
        }
        else if (this.data.m_Space === NormalSpace.View) {
            name = 'v_viewNormal';
        }
        else if (this.data.m_Space === NormalSpace.Tangent) {
            // name = 'v_tangentNormal';
            name = 'v_worldNormal';
        }
        else if (this.data.m_Space === NormalSpace.World) {
            name = 'v_worldNormal';
        }
        return `${this.getOutputVarDefine(0)} = ${name};`;
    }
}

