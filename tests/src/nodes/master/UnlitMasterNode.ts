import fs from 'fs';
import path from 'path';
import MasterNode from "./MasterNode";

export default class UnlitMasterNode extends MasterNode {
    vsSlotIndices = ['Vertex Position', 'Vertex Normal', 'Vertex Tangent'];
    fsSlotIndices = ['Color', 'Alpha', 'AlphaClipThreshold'];

    templatePath = path.join(__dirname, '../../../templates/master/UnlitMasterNode.effect')
}
