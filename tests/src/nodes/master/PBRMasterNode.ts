import fs from 'fs';
import path from 'path';
import MasterNode from "./MasterNode";

export default class PBRMasterNode extends MasterNode {
    vsSlotIndices = ['Vertex Position', 'Vertex Normal', 'Vertex Tangent'];
    fsSlotIndices = ['Albedo', 'Normal', 'Emission', 'Metallic', 'Smoothness', 'Occlusion', 'Alpha', 'AlphaClipThreshold'];

    templatePath = path.join(__dirname, '../../../templates/master/PBRMasterNode.effect');

    constructor (data) {
        super(data)
    }
}
