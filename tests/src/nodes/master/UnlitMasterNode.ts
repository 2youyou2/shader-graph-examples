import fs from 'fs';
import path from 'path';
import MasterNode from "./MasterNode";

export default class UnlitMasterNode extends MasterNode {
    vsSlotIndices = [0, 1, 2];
    fsSlotIndices = [3, 4, 5];

    templatePath = path.join(__dirname, '../../../templates/master/UnlitMasterNode.effect')
}
