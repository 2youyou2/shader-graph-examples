"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function findConnectNodes(slot, nodes) {
    if (!slot.connectSlot)
        return;
    let connectNode = slot.connectSlot.node;
    if (connectNode) {
        if (!nodes.includes(connectNode)) {
            nodes.push(connectNode);
        }
        connectNode.inputSlots.forEach(slot => {
            findConnectNodes(slot, nodes);
        });
    }
}
class MasterNode extends base_1.ShaderNode {
    constructor() {
        super(...arguments);
        this.vsSlotIndices = [];
        this.fsSlotIndices = [];
        this.templatePath = '';
        this.isMasterNode = true;
    }
    getConnectNodes(slotIndices) {
        let inputSlots = slotIndices.map(i => this.slots[i]);
        let nodes = [];
        inputSlots.forEach(slot => {
            findConnectNodes(slot, nodes);
        });
        nodes.sort((a, b) => b.priority - a.priority);
        return nodes;
    }
    generateVsCode() {
        let code = ['\n'];
        let nodes = this.getConnectNodes(this.vsSlotIndices);
        nodes.forEach(node => {
            node.generateCode().split('\n').forEach(c => {
                code.push('    ' + c);
            });
        });
        return code.join('\n');
    }
    generateFsCode() {
        let code = ['\n'];
        let nodes = this.getConnectNodes(this.fsSlotIndices);
        nodes.forEach(node => {
            node.generateCode().split('\n').forEach(c => {
                code.push('    ' + c);
            });
        });
        return code.join('\n');
    }
    generateCode() {
        let code = fs_1.default.readFileSync(this.templatePath, 'utf-8');
        let commonChunk = fs_1.default.readFileSync(path_1.default.join(__dirname, '../../../templates/chunks/common.chunk'), 'utf-8');
        const vsCode = this.generateVsCode();
        const fsCode = this.generateFsCode();
        code = code.replace('{{chunks}}', commonChunk);
        let chunkIncludes = `
  #include<shader_graph_common>
        `;
        code = code.replace('{{vs_chunks}}', chunkIncludes);
        code = code.replace('{{fs_chunks}}', chunkIncludes);
        code = code.replace('{{vs}}', vsCode);
        code = code.replace('{{fs}}', fsCode);
        this.inputSlots.forEach((slot, index) => {
            var tempName = `slot_${index}`;
            let value = slot.slotValue;
            let reg = new RegExp(`{{${tempName} *=* *(.*)}}`);
            if (!value) {
                let res = reg.exec(code);
                if (res) {
                    value = res[1];
                }
            }
            code = code.replace(reg, value);
        });
        return code;
    }
}
exports.default = MasterNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFzdGVyTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2Rlcy9tYXN0ZXIvTWFzdGVyTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUFvRDtBQUNwRCw0Q0FBb0I7QUFDcEIsZ0RBQXdCO0FBRXhCLFNBQVMsZ0JBQWdCLENBQUUsSUFBZ0IsRUFBRSxLQUFtQjtJQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7UUFBRSxPQUFPO0lBRTlCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ3hDLElBQUksV0FBVyxFQUFFO1FBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDOUIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMzQjtRQUVELFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xDLGdCQUFnQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQTtLQUNMO0FBQ0wsQ0FBQztBQUVELE1BQXFCLFVBQVcsU0FBUSxpQkFBVTtJQUFsRDs7UUFDSSxrQkFBYSxHQUFhLEVBQUUsQ0FBQztRQUM3QixrQkFBYSxHQUFhLEVBQUUsQ0FBQztRQUU3QixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUVsQixpQkFBWSxHQUFHLElBQUksQ0FBQztJQTBFeEIsQ0FBQztJQXhFRyxlQUFlLENBQUUsV0FBcUI7UUFDbEMsSUFBSSxVQUFVLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLEtBQUssR0FBaUIsRUFBRSxDQUFDO1FBQzdCLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7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O1lBQ2xELElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1IsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsSUFBSSxHQUFHLEVBQUU7b0JBQ0wsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDbEI7YUFDSjtZQUNELElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQTtRQUVGLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Q0FDSjtBQWhGRCw2QkFnRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFkZXJOb2RlLCBTaGFkZXJTbG90IH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG5mdW5jdGlvbiBmaW5kQ29ubmVjdE5vZGVzIChzbG90OiBTaGFkZXJTbG90LCBub2RlczogU2hhZGVyTm9kZVtdKSB7XHJcbiAgICBpZiAoIXNsb3QuY29ubmVjdFNsb3QpIHJldHVybjtcclxuXHJcbiAgICBsZXQgY29ubmVjdE5vZGUgPSBzbG90LmNvbm5lY3RTbG90Lm5vZGU7XHJcbiAgICBpZiAoY29ubmVjdE5vZGUpIHtcclxuICAgICAgICBpZiAoIW5vZGVzLmluY2x1ZGVzKGNvbm5lY3ROb2RlKSkge1xyXG4gICAgICAgICAgICBub2Rlcy5wdXNoKGNvbm5lY3ROb2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbm5lY3ROb2RlLmlucHV0U2xvdHMuZm9yRWFjaChzbG90ID0+IHtcclxuICAgICAgICAgICAgZmluZENvbm5lY3ROb2RlcyhzbG90LCBub2Rlcyk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFzdGVyTm9kZSBleHRlbmRzIFNoYWRlck5vZGUge1xyXG4gICAgdnNTbG90SW5kaWNlczogbnVtYmVyW10gPSBbXTtcclxuICAgIGZzU2xvdEluZGljZXM6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgdGVtcGxhdGVQYXRoID0gJyc7XHJcblxyXG4gICAgaXNNYXN0ZXJOb2RlID0gdHJ1ZTtcclxuXHJcbiAgICBnZXRDb25uZWN0Tm9kZXMgKHNsb3RJbmRpY2VzOiBudW1iZXJbXSkge1xyXG4gICAgICAgIGxldCBpbnB1dFNsb3RzID0gc2xvdEluZGljZXMubWFwKGkgPT4gdGhpcy5zbG90c1tpXSk7XHJcbiAgICAgICAgbGV0IG5vZGVzOiBTaGFkZXJOb2RlW10gPSBbXTtcclxuICAgICAgICBpbnB1dFNsb3RzLmZvckVhY2goc2xvdCA9PiB7XHJcbiAgICAgICAgICAgIGZpbmRDb25uZWN0Tm9kZXMoc2xvdCwgbm9kZXMpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIG5vZGVzLnNvcnQoKGEsIGIpID0+IGIucHJpb3JpdHkgLSBhLnByaW9yaXR5KTtcclxuICAgICAgICByZXR1cm4gbm9kZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVWc0NvZGUgKCkge1xyXG4gICAgICAgIGxldCBjb2RlOiBzdHJpbmdbXSA9IFsnXFxuJ107XHJcblxyXG4gICAgICAgIGxldCBub2RlcyA9IHRoaXMuZ2V0Q29ubmVjdE5vZGVzKHRoaXMudnNTbG90SW5kaWNlcyk7XHJcbiAgICAgICAgbm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICAgICAgbm9kZS5nZW5lcmF0ZUNvZGUoKS5zcGxpdCgnXFxuJykuZm9yRWFjaChjID0+IHtcclxuICAgICAgICAgICAgICAgIGNvZGUucHVzaCgnICAgICcgKyBjKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvZGUuam9pbignXFxuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVGc0NvZGUgKCkge1xyXG4gICAgICAgIGxldCBjb2RlOiBzdHJpbmdbXSA9IFsnXFxuJ107XHJcblxyXG4gICAgICAgIGxldCBub2RlcyA9IHRoaXMuZ2V0Q29ubmVjdE5vZGVzKHRoaXMuZnNTbG90SW5kaWNlcyk7XHJcbiAgICAgICAgbm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICAgICAgbm9kZS5nZW5lcmF0ZUNvZGUoKS5zcGxpdCgnXFxuJykuZm9yRWFjaChjID0+IHtcclxuICAgICAgICAgICAgICAgIGNvZGUucHVzaCgnICAgICcgKyBjKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvZGUuam9pbignXFxuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVDb2RlICgpIHtcclxuICAgICAgICBsZXQgY29kZSA9IGZzLnJlYWRGaWxlU3luYyh0aGlzLnRlbXBsYXRlUGF0aCwgJ3V0Zi04Jyk7XHJcblxyXG4gICAgICAgIGxldCBjb21tb25DaHVuayA9IGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vLi4vLi4vdGVtcGxhdGVzL2NodW5rcy9jb21tb24uY2h1bmsnKSwgJ3V0Zi04Jyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHZzQ29kZSA9IHRoaXMuZ2VuZXJhdGVWc0NvZGUoKTtcclxuICAgICAgICBjb25zdCBmc0NvZGUgPSB0aGlzLmdlbmVyYXRlRnNDb2RlKCk7XHJcblxyXG4gICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UoJ3t7Y2h1bmtzfX0nLCBjb21tb25DaHVuayk7XHJcblxyXG4gICAgICAgIGxldCBjaHVua0luY2x1ZGVzID0gYFxyXG4gICNpbmNsdWRlPHNoYWRlcl9ncmFwaF9jb21tb24+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZSgne3t2c19jaHVua3N9fScsIGNodW5rSW5jbHVkZXMpO1xyXG4gICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UoJ3t7ZnNfY2h1bmtzfX0nLCBjaHVua0luY2x1ZGVzKTtcclxuXHJcbiAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZSgne3t2c319JywgdnNDb2RlKTtcclxuICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKCd7e2ZzfX0nLCBmc0NvZGUpO1xyXG5cclxuICAgICAgICB0aGlzLmlucHV0U2xvdHMuZm9yRWFjaCgoc2xvdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHRlbXBOYW1lID0gYHNsb3RfJHtpbmRleH1gO1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBzbG90LnNsb3RWYWx1ZTtcclxuICAgICAgICAgICAgbGV0IHJlZyA9IG5ldyBSZWdFeHAoYHt7JHt0ZW1wTmFtZX0gKj0qICooLiopfX1gKTtcclxuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IHJlZy5leGVjKGNvZGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcmVzWzFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UocmVnLCB2YWx1ZSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvZGU7XHJcbiAgICB9XHJcbn1cclxuIl19