import { ShaderNode } from "../../../base";
import { ConcretePrecisionType, PositionSpace } from "../../../type";


export default class PositionNode extends ShaderNode {
    concretePrecisionType = ConcretePrecisionType.Fixed;

    constructor (data) {
        super(data)

        let varing = 'PositionSpace.Object'
        if (this.data.m_Space === PositionSpace.Object) {
            varing = 'PositionSpace.Object';
        }
        else if (this.data.m_Space === PositionSpace.View) {
            varing = 'PositionSpace.View';
        }
        else if (this.data.m_Space === PositionSpace.Tangent) {
            varing = 'PositionSpace.Tangent';
            console.error('Not support Tangent Position');
        }
        else if (this.data.m_Space === PositionSpace.World) {
            varing = 'PositionSpace.World';
        }
        else if (this.data.m_Space === PositionSpace.AbsoluteWorld) {
            varing = 'PositionSpace.AbsoluteWorld';
        }

        this.depVarings.push(varing);
    }

    calcConcretePrecision () {
        this.slots.forEach(slot => {
            slot._concretePrecision = 3;
        })
    }

    generateCode () {
        let name = 'v_pos';
        if (this.data.m_Space === PositionSpace.Object) {
            name = 'v_pos';
        }
        else if (this.data.m_Space === PositionSpace.View) {
            name = 'v_viewPos';
        }
        else if (this.data.m_Space === PositionSpace.Tangent) {
            // name = 'v_tangentPos';
            name = 'v_worldPos';
        }
        else if (this.data.m_Space === PositionSpace.World) {
            name = 'v_worldPos';
        }
        else if (this.data.m_Space === PositionSpace.AbsoluteWorld) {
            name = 'v_worldPos';
        }
        return `${this.getOutputVarDefine(0)} = ${name};`;
    }
}

