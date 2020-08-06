import fs from 'fs';
import path from 'path';
import MasterNode from "./MasterNode";
import { shaderTemplatesDir } from '../../utils';

export default class PBRMasterNode extends MasterNode {
    vsSlotIndices = ['Vertex Position', 'Vertex Normal', 'Vertex Tangent'];
    fsSlotIndices = ['Albedo', 'Normal', 'Emission', 'Metallic', 'Smoothness', 'Occlusion', 'Alpha', 'AlphaClipThreshold'];

    templatePath = path.join(shaderTemplatesDir, 'master/PBRMasterNode.effect');

    constructor (data) {
        super(data)
    }
}
