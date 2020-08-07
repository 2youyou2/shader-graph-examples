"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const shadergraph_1 = __importDefault(require("../../shadergraph"));
const type_1 = require("../../type");
const utils_1 = require("../../utils");
function findConnectNodes(slot, nodes) {
    if (!slot.connectSlot)
        return;
    let connectNode = slot.connectSlot.node;
    if (connectNode) {
        if (!nodes.includes(connectNode)) {
            nodes.push(connectNode);
        }
        else {
            return;
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
        this.concretePrecisionType = type_1.ConcretePrecisionType.Fixed;
        this.properties = [];
    }
    getConnectNodes(slotIndices) {
        let inputSlots = [];
        slotIndices.forEach(name => {
            let slot = this.getSlotWithSlotName(name);
            if (slot) {
                inputSlots.push(slot);
            }
        });
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
                c += ` // ${node.constructor.name}`;
                code.push('    ' + c);
            });
        });
        return code.join('\n');
    }
    generatePropertiesCode() {
        let uniform = '\n';
        let mtl = '\n';
        let uniformSampler = '';
        let properties = this.properties;
        properties.sort((a, b) => {
            return b.concretePrecision - a.concretePrecision;
        });
        let blockUniformCount = 0;
        properties.forEach(p => {
            var _a;
            let precision = '';
            let mtlValue = '';
            let value = p.defaultValue;
            let isColor = value.r !== undefined;
            let x = isColor ? value.r : value.x;
            let y = isColor ? value.g : value.y;
            let z = isColor ? value.b : value.z;
            let w = isColor ? value.a : value.w;
            let concretePrecision = (_a = p.node) === null || _a === void 0 ? void 0 : _a.outputSlots[0].concretePrecision;
            if (concretePrecision === 1) {
                precision = 'float';
                mtlValue = `${value}`;
            }
            else if (concretePrecision === 2) {
                precision = 'vec2';
                mtlValue = `[${x}, ${y}]`;
            }
            else if (concretePrecision === 3) {
                precision = 'vec4';
                mtlValue = `[${x}, ${y}, ${z}, 0]`;
            }
            else if (concretePrecision === 4) {
                precision = 'vec4';
                mtlValue = `[${x}, ${y}, ${z},  ${w}]`;
            }
            else if (concretePrecision === type_1.TextureConcretePrecision.Texture2D) {
                precision = 'sampler2D';
                mtlValue = 'white';
            }
            let editorStr = isColor ? `, editor: { type: color }` : '';
            if (concretePrecision < type_1.TextureConcretePrecision.Texture2D) {
                uniform += `    ${precision} ${p.name};\n`;
                blockUniformCount++;
            }
            else {
                uniformSampler += `  uniform ${precision} ${p.name};\n`;
            }
            mtl += `        ${p.name}: { value: ${mtlValue} ${editorStr}}\n`;
        });
        if (blockUniformCount === 0) {
            uniform += '    vec4 empty_value;\n';
        }
        return {
            uniform,
            uniformSampler,
            mtl,
        };
    }
    replaceChunks(code) {
        let depChunks = ['common'];
        let allNodes = shadergraph_1.default.allNodes;
        for (let i = 0; i < allNodes.length; i++) {
            for (let j = 0; j < allNodes[i].length; j++) {
                let node = allNodes[i][j];
                for (let k = 0; k < node.depChunks.length; k++) {
                    if (!depChunks.includes(node.depChunks[k])) {
                        depChunks.push(node.depChunks[k]);
                    }
                }
            }
        }
        let chunkIncludes = '\n';
        let chunks = '\n';
        depChunks.forEach(chunkName => {
            let chunkPath = path_1.default.join(utils_1.shaderTemplatesDir, `chunks/${chunkName}.chunk`);
            let chunk = fs_1.default.readFileSync(chunkPath, 'utf-8');
            if (!chunk) {
                console.error(`Can not find chunk with path [${chunkPath}]`);
                return;
            }
            chunks += chunk + '\n';
            chunkIncludes += `  #include <shader_graph_${chunkName}>\n`;
        });
        code = code.replace('{{chunks}}', chunks);
        code = code.replace('{{vs_chunks}}', chunkIncludes);
        code = code.replace('{{fs_chunks}}', chunkIncludes);
        return code;
    }
    generateVarings(code) {
        let depVarings = [];
        let allNodes = shadergraph_1.default.allNodes;
        allNodes.forEach(nodes => {
            nodes.forEach(node => {
                node.depVarings.forEach(varing => {
                    if (!depVarings.includes(varing)) {
                        depVarings.push(varing);
                    }
                });
            });
        });
        let vs_varing_define = '';
        let vs_varing = '';
        let fs_varing_define = '';
        let fs_varing = '';
        if (depVarings.includes('NormalSpace.World') || depVarings.includes('NormalSpace.View') || depVarings.includes('NormalSpace.Tangent') || depVarings.includes('NormalMap')) {
            vs_varing += 'vec3 worldNormal = normalize((matWorldIT * vec4(normal, 0.0)).xyz);\n';
        }
        if (depVarings.includes('NormalSpace.View')) {
            vs_varing += 'vec3 viewNormal = normalize((cc_matView * vec4(worldNormal, 0.0)).xyz);\n';
        }
        if (depVarings.includes('NormalSpace.Tangent') || depVarings.includes('NormalMap')) {
            vs_varing += 'v_tangent = normalize((matWorld * vec4(tangent.xyz, 0.0)).xyz);';
            vs_varing += 'v_bitangent = cross(worldNormal, v_tangent) * tangent.w;';
            vs_varing_define += 'out vec3 v_tangent;\n';
            vs_varing_define += 'out vec3 v_bitangent;\n';
            fs_varing_define += 'in vec3 v_tangent;\n';
            fs_varing_define += 'in vec3 v_bitangent;\n';
        }
        depVarings.forEach(varing => {
            if (varing === 'PositionSpace.Object') {
                vs_varing_define += 'out vec3 v_pos;\n';
                vs_varing += 'v_pos = position.xyz;\n';
                fs_varing_define += 'in vec3 v_pos;\n';
                fs_varing += 'vec4 position = vec4(v_pos, 1.);\n';
            }
            else if (varing === 'PositionSpace.View') {
                vs_varing_define += 'out vec3 v_viewPos;\n';
                vs_varing += 'v_viewPos = viewPosition.xyz;\n';
                fs_varing_define += 'in vec3 v_viewPos;\n';
                fs_varing += 'vec4 viewPosition = vec4(v_viewPos, 1.);\n';
            }
            else if (varing === 'PositionSpace.World' || varing === 'PositionSpace.AbsoluteWorld') {
                vs_varing_define += 'out vec3 v_worldPos;\n';
                vs_varing += 'v_worldPos = worldPosition.xyz;\n';
                fs_varing_define += 'in vec3 v_worldPos;\n';
                fs_varing += 'vec4 worldPosition = vec4(v_worldPos, 1.);\n';
            }
            else if (varing === 'PositionSpace.Tangent') {
            }
            else if (varing === 'NormalSpace.Object') {
                vs_varing_define += 'out vec3 v_normal;\n';
                vs_varing += 'v_normal = normal;\n';
                fs_varing_define += 'in vec3 v_normal;\n';
                fs_varing += 'vec3 normal = v_normal;\n';
            }
            else if (varing === 'NormalSpace.View') {
                vs_varing_define += 'out vec3 v_viewNormal;\n';
                vs_varing += 'v_viewNormal = viewNormal;\n';
                fs_varing_define += 'in vec3 v_viewNormal;\n';
                fs_varing += 'vec3 viewNormal = v_viewNormal;\n';
            }
            else if (varing === 'NormalSpace.World') {
                vs_varing_define += 'out vec3 v_worldNormal;\n';
                vs_varing += 'v_worldNormal = worldNormal;\n';
                fs_varing_define += 'in vec3 v_worldNormal;\n';
                fs_varing += 'vec3 worldNormal = v_worldNormal;\n';
            }
            else if (varing === 'NormalSpace.Tangent') {
            }
        });
        code = code.replace('{{vs_varing_define}}', vs_varing_define);
        code = code.replace('{{vs_varing}}', vs_varing);
        code = code.replace('{{fs_varing_define}}', fs_varing_define);
        code = code.replace('{{fs_varing}}', fs_varing);
        return code;
    }
    generateCode() {
        let code = fs_1.default.readFileSync(this.templatePath, 'utf-8');
        code = this.generateVarings(code);
        const vsCode = this.generateVsCode();
        const fsCode = this.generateFsCode();
        code = code.replace('{{vs}}', vsCode);
        code = code.replace('{{fs}}', fsCode);
        code = this.replaceChunks(code);
        if (!this.properties || this.properties.length === 0) {
            code = code.replace(/properties: &props/g, '');
            code = code.replace(/properties: \*props/g, '');
        }
        let props = this.generatePropertiesCode();
        code = code.replace('{{properties}}', props.uniform);
        code = code.replace('{{properties_sampler}}', props.uniformSampler);
        code = code.replace('{{properties_mtl}}', props.mtl);
        // old shader graph version do not have vertex slots
        let vertexSlotNames = ['Vertex Position', 'Vertex Normal', 'Vertex Tangent', 'Position'];
        this.inputSlots.forEach(slot => {
            var tempName = `slot_${slot.displayName.replace(/ /g, '_')}`;
            let value;
            if (vertexSlotNames.includes(slot.displayName) || slot.displayName === 'Normal') {
                if (slot.connectSlot) {
                    value = slot.slotValue;
                }
            }
            else {
                value = slot.slotValue;
            }
            let reg = new RegExp(`{{${tempName} *=* *(.*)}}`);
            if (value === undefined) {
                let res = reg.exec(code);
                if (res) {
                    value = res[1];
                }
            }
            code = code.replace(reg, value);
        });
        vertexSlotNames.forEach(name => {
            var tempName = `slot_${name.replace(/ /g, '_')}`;
            let value = '';
            let reg = new RegExp(`{{${tempName} *=* *(.*)}}`);
            let res = reg.exec(code);
            if (res) {
                value = res[1];
            }
            code = code.replace(reg, value);
        });
        return code;
    }
}
exports.default = MasterNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFzdGVyTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NvdXJjZS9wYW5lbC9vcGVyYXRpb24vbm9kZXMvbWFzdGVyL01hc3Rlck5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxQ0FBbUU7QUFDbkUsNENBQW9CO0FBQ3BCLGdEQUF3QjtBQUN4QixvRUFBNEM7QUFDNUMscUNBQTZFO0FBQzdFLHVDQUFpRDtBQUVqRCxTQUFTLGdCQUFnQixDQUFFLElBQWdCLEVBQUUsS0FBbUI7SUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXO1FBQUUsT0FBTztJQUU5QixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztJQUN4QyxJQUFJLFdBQVcsRUFBRTtRQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQzlCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDM0I7YUFDSTtZQUNELE9BQU87U0FDVjtRQUVELFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xDLGdCQUFnQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQTtLQUNMO0FBQ0wsQ0FBQztBQUVELE1BQXFCLFVBQVcsU0FBUSxpQkFBVTtJQUFsRDs7UUFFSSxrQkFBYSxHQUFhLEVBQUUsQ0FBQztRQUM3QixrQkFBYSxHQUFhLEVBQUUsQ0FBQztRQUU3QixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUVsQixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQiwwQkFBcUIsR0FBRyw0QkFBcUIsQ0FBQyxLQUFLLENBQUM7UUFFcEQsZUFBVSxHQUFvQixFQUFFLENBQUM7SUErU3JDLENBQUM7SUE3U0csZUFBZSxDQUFFLFdBQXFCO1FBQ2xDLElBQUksVUFBVSxHQUFpQixF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T0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQTtRQUVGLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Q0FDSjtBQXpURCw2QkF5VEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGFkZXJOb2RlLCBTaGFkZXJTbG90LCBTaGFkZXJQcm9wZXJ5IH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCBTaGFkZXJHcmFwaCBmcm9tIFwiLi4vLi4vc2hhZGVyZ3JhcGhcIjtcclxuaW1wb3J0IHsgQ29uY3JldGVQcmVjaXNpb25UeXBlLCBUZXh0dXJlQ29uY3JldGVQcmVjaXNpb24gfSBmcm9tIFwiLi4vLi4vdHlwZVwiO1xyXG5pbXBvcnQgeyBzaGFkZXJUZW1wbGF0ZXNEaXIgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcclxuXHJcbmZ1bmN0aW9uIGZpbmRDb25uZWN0Tm9kZXMgKHNsb3Q6IFNoYWRlclNsb3QsIG5vZGVzOiBTaGFkZXJOb2RlW10pIHtcclxuICAgIGlmICghc2xvdC5jb25uZWN0U2xvdCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBjb25uZWN0Tm9kZSA9IHNsb3QuY29ubmVjdFNsb3Qubm9kZTtcclxuICAgIGlmIChjb25uZWN0Tm9kZSkge1xyXG4gICAgICAgIGlmICghbm9kZXMuaW5jbHVkZXMoY29ubmVjdE5vZGUpKSB7XHJcbiAgICAgICAgICAgIG5vZGVzLnB1c2goY29ubmVjdE5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29ubmVjdE5vZGUuaW5wdXRTbG90cy5mb3JFYWNoKHNsb3QgPT4ge1xyXG4gICAgICAgICAgICBmaW5kQ29ubmVjdE5vZGVzKHNsb3QsIG5vZGVzKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXN0ZXJOb2RlIGV4dGVuZHMgU2hhZGVyTm9kZSB7XHJcblxyXG4gICAgdnNTbG90SW5kaWNlczogc3RyaW5nW10gPSBbXTtcclxuICAgIGZzU2xvdEluZGljZXM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgdGVtcGxhdGVQYXRoID0gJyc7XHJcblxyXG4gICAgaXNNYXN0ZXJOb2RlID0gdHJ1ZTtcclxuICAgIGNvbmNyZXRlUHJlY2lzaW9uVHlwZSA9IENvbmNyZXRlUHJlY2lzaW9uVHlwZS5GaXhlZDtcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiBTaGFkZXJQcm9wZXJ5W10gPSBbXTtcclxuXHJcbiAgICBnZXRDb25uZWN0Tm9kZXMgKHNsb3RJbmRpY2VzOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIGxldCBpbnB1dFNsb3RzOiBTaGFkZXJTbG90W10gPSBbXTtcclxuICAgICAgICBzbG90SW5kaWNlcy5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc2xvdCA9IHRoaXMuZ2V0U2xvdFdpdGhTbG90TmFtZShuYW1lKVxyXG4gICAgICAgICAgICBpZiAoc2xvdCkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXRTbG90cy5wdXNoKHNsb3QpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IG5vZGVzOiBTaGFkZXJOb2RlW10gPSBbXTtcclxuICAgICAgICBpbnB1dFNsb3RzLmZvckVhY2goc2xvdCA9PiB7XHJcbiAgICAgICAgICAgIGZpbmRDb25uZWN0Tm9kZXMoc2xvdCwgbm9kZXMpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIG5vZGVzLnNvcnQoKGEsIGIpID0+IGIucHJpb3JpdHkgLSBhLnByaW9yaXR5KTtcclxuICAgICAgICByZXR1cm4gbm9kZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVWc0NvZGUgKCkge1xyXG4gICAgICAgIGxldCBjb2RlOiBzdHJpbmdbXSA9IFsnXFxuJ107XHJcblxyXG4gICAgICAgIGxldCBub2RlcyA9IHRoaXMuZ2V0Q29ubmVjdE5vZGVzKHRoaXMudnNTbG90SW5kaWNlcyk7XHJcbiAgICAgICAgbm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICAgICAgbm9kZS5nZW5lcmF0ZUNvZGUoKS5zcGxpdCgnXFxuJykuZm9yRWFjaChjID0+IHtcclxuICAgICAgICAgICAgICAgIGNvZGUucHVzaCgnICAgICcgKyBjKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBjb2RlLmpvaW4oJ1xcbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlRnNDb2RlICgpIHtcclxuICAgICAgICBsZXQgY29kZTogc3RyaW5nW10gPSBbJ1xcbiddO1xyXG5cclxuICAgICAgICBsZXQgbm9kZXMgPSB0aGlzLmdldENvbm5lY3ROb2Rlcyh0aGlzLmZzU2xvdEluZGljZXMpO1xyXG4gICAgICAgIG5vZGVzLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgICAgIG5vZGUuZ2VuZXJhdGVDb2RlKCkuc3BsaXQoJ1xcbicpLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjICs9IGAgLy8gJHtub2RlLmNvbnN0cnVjdG9yLm5hbWV9YFxyXG4gICAgICAgICAgICAgICAgY29kZS5wdXNoKCcgICAgJyArIGMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gY29kZS5qb2luKCdcXG4nKTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZVByb3BlcnRpZXNDb2RlICgpIHtcclxuICAgICAgICBsZXQgdW5pZm9ybSA9ICdcXG4nO1xyXG4gICAgICAgIGxldCBtdGwgPSAnXFxuJ1xyXG4gICAgICAgIGxldCB1bmlmb3JtU2FtcGxlciA9ICcnO1xyXG5cclxuICAgICAgICBsZXQgcHJvcGVydGllcyA9IHRoaXMucHJvcGVydGllcztcclxuICAgICAgICBwcm9wZXJ0aWVzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGIuY29uY3JldGVQcmVjaXNpb24gLSBhLmNvbmNyZXRlUHJlY2lzaW9uO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCBibG9ja1VuaWZvcm1Db3VudCA9IDA7XHJcblxyXG4gICAgICAgIHByb3BlcnRpZXMuZm9yRWFjaChwID0+IHtcclxuICAgICAgICAgICAgbGV0IHByZWNpc2lvbiA9ICcnO1xyXG4gICAgICAgICAgICBsZXQgbXRsVmFsdWUgPSAnJztcclxuXHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHAuZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgaXNDb2xvciA9IHZhbHVlLnIgIT09IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgbGV0IHggPSBpc0NvbG9yID8gdmFsdWUuciA6IHZhbHVlLng7XHJcbiAgICAgICAgICAgIGxldCB5ID0gaXNDb2xvciA/IHZhbHVlLmcgOiB2YWx1ZS55O1xyXG4gICAgICAgICAgICBsZXQgeiA9IGlzQ29sb3IgPyB2YWx1ZS5iIDogdmFsdWUuejtcclxuICAgICAgICAgICAgbGV0IHcgPSBpc0NvbG9yID8gdmFsdWUuYSA6IHZhbHVlLnc7XHJcblxyXG4gICAgICAgICAgICBsZXQgY29uY3JldGVQcmVjaXNpb24gPSBwLm5vZGU/Lm91dHB1dFNsb3RzWzBdLmNvbmNyZXRlUHJlY2lzaW9uO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbmNyZXRlUHJlY2lzaW9uID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBwcmVjaXNpb24gPSAnZmxvYXQnO1xyXG4gICAgICAgICAgICAgICAgbXRsVmFsdWUgPSBgJHt2YWx1ZX1gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY29uY3JldGVQcmVjaXNpb24gPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIHByZWNpc2lvbiA9ICd2ZWMyJztcclxuICAgICAgICAgICAgICAgIG10bFZhbHVlID0gYFske3h9LCAke3l9XWBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjb25jcmV0ZVByZWNpc2lvbiA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uID0gJ3ZlYzQnO1xyXG4gICAgICAgICAgICAgICAgbXRsVmFsdWUgPSBgWyR7eH0sICR7eX0sICR7en0sIDBdYFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbmNyZXRlUHJlY2lzaW9uID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBwcmVjaXNpb24gPSAndmVjNCc7XHJcbiAgICAgICAgICAgICAgICBtdGxWYWx1ZSA9IGBbJHt4fSwgJHt5fSwgJHt6fSwgICR7d31dYFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbmNyZXRlUHJlY2lzaW9uID09PSBUZXh0dXJlQ29uY3JldGVQcmVjaXNpb24uVGV4dHVyZTJEKSB7XHJcbiAgICAgICAgICAgICAgICBwcmVjaXNpb24gPSAnc2FtcGxlcjJEJ1xyXG4gICAgICAgICAgICAgICAgbXRsVmFsdWUgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBlZGl0b3JTdHIgPSBpc0NvbG9yID8gYCwgZWRpdG9yOiB7IHR5cGU6IGNvbG9yIH1gIDogJydcclxuXHJcbiAgICAgICAgICAgIGlmIChjb25jcmV0ZVByZWNpc2lvbiA8IFRleHR1cmVDb25jcmV0ZVByZWNpc2lvbi5UZXh0dXJlMkQpIHtcclxuICAgICAgICAgICAgICAgIHVuaWZvcm0gKz0gYCAgICAke3ByZWNpc2lvbn0gJHtwLm5hbWV9O1xcbmA7XHJcbiAgICAgICAgICAgICAgICBibG9ja1VuaWZvcm1Db3VudCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdW5pZm9ybVNhbXBsZXIgKz0gYCAgdW5pZm9ybSAke3ByZWNpc2lvbn0gJHtwLm5hbWV9O1xcbmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbXRsICs9IGAgICAgICAgICR7cC5uYW1lfTogeyB2YWx1ZTogJHttdGxWYWx1ZX0gJHtlZGl0b3JTdHJ9fVxcbmBcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAoYmxvY2tVbmlmb3JtQ291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgdW5pZm9ybSArPSAnICAgIHZlYzQgZW1wdHlfdmFsdWU7XFxuJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdW5pZm9ybSxcclxuICAgICAgICAgICAgdW5pZm9ybVNhbXBsZXIsXHJcbiAgICAgICAgICAgIG10bCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlcGxhY2VDaHVua3MgKGNvZGUpIHtcclxuICAgICAgICBsZXQgZGVwQ2h1bmtzOiBzdHJpbmdbXSA9IFsnY29tbW9uJ107XHJcbiAgICAgICAgbGV0IGFsbE5vZGVzID0gU2hhZGVyR3JhcGguYWxsTm9kZXM7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxOb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFsbE5vZGVzW2ldLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGFsbE5vZGVzW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBub2RlLmRlcENodW5rcy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZGVwQ2h1bmtzLmluY2x1ZGVzKG5vZGUuZGVwQ2h1bmtzW2tdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXBDaHVua3MucHVzaChub2RlLmRlcENodW5rc1trXSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjaHVua0luY2x1ZGVzID0gJ1xcbic7XHJcbiAgICAgICAgbGV0IGNodW5rcyA9ICdcXG4nO1xyXG4gICAgICAgIGRlcENodW5rcy5mb3JFYWNoKGNodW5rTmFtZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjaHVua1BhdGggPSBwYXRoLmpvaW4oc2hhZGVyVGVtcGxhdGVzRGlyLCBgY2h1bmtzLyR7Y2h1bmtOYW1lfS5jaHVua2ApO1xyXG4gICAgICAgICAgICBsZXQgY2h1bmsgPSBmcy5yZWFkRmlsZVN5bmMoY2h1bmtQYXRoLCAndXRmLTgnKTtcclxuICAgICAgICAgICAgaWYgKCFjaHVuaykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgQ2FuIG5vdCBmaW5kIGNodW5rIHdpdGggcGF0aCBbJHtjaHVua1BhdGh9XWApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2h1bmtzICs9IGNodW5rICsgJ1xcbic7XHJcbiAgICAgICAgICAgIGNodW5rSW5jbHVkZXMgKz0gYCAgI2luY2x1ZGUgPHNoYWRlcl9ncmFwaF8ke2NodW5rTmFtZX0+XFxuYDtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKCd7e2NodW5rc319JywgY2h1bmtzKTtcclxuICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKCd7e3ZzX2NodW5rc319JywgY2h1bmtJbmNsdWRlcyk7XHJcbiAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZSgne3tmc19jaHVua3N9fScsIGNodW5rSW5jbHVkZXMpO1xyXG5cclxuICAgICAgICByZXR1cm4gY29kZTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZVZhcmluZ3MgKGNvZGUpIHtcclxuICAgICAgICBsZXQgZGVwVmFyaW5nczogc3RyaW5nW10gPSBbXVxyXG4gICAgICAgIGxldCBhbGxOb2RlcyA9IFNoYWRlckdyYXBoLmFsbE5vZGVzO1xyXG4gICAgICAgIGFsbE5vZGVzLmZvckVhY2gobm9kZXMgPT4ge1xyXG4gICAgICAgICAgICBub2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5kZXBWYXJpbmdzLmZvckVhY2godmFyaW5nID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRlcFZhcmluZ3MuaW5jbHVkZXModmFyaW5nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXBWYXJpbmdzLnB1c2godmFyaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCB2c192YXJpbmdfZGVmaW5lID0gJydcclxuICAgICAgICBsZXQgdnNfdmFyaW5nID0gJydcclxuICAgICAgICBsZXQgZnNfdmFyaW5nX2RlZmluZSA9ICcnXHJcbiAgICAgICAgbGV0IGZzX3ZhcmluZyA9ICcnXHJcblxyXG5cclxuICAgICAgICBpZiAoZGVwVmFyaW5ncy5pbmNsdWRlcygnTm9ybWFsU3BhY2UuV29ybGQnKSB8fCBkZXBWYXJpbmdzLmluY2x1ZGVzKCdOb3JtYWxTcGFjZS5WaWV3JykgfHwgZGVwVmFyaW5ncy5pbmNsdWRlcygnTm9ybWFsU3BhY2UuVGFuZ2VudCcpIHx8IGRlcFZhcmluZ3MuaW5jbHVkZXMoJ05vcm1hbE1hcCcpKSB7XHJcbiAgICAgICAgICAgIHZzX3ZhcmluZyArPSAndmVjMyB3b3JsZE5vcm1hbCA9IG5vcm1hbGl6ZSgobWF0V29ybGRJVCAqIHZlYzQobm9ybWFsLCAwLjApKS54eXopO1xcbic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkZXBWYXJpbmdzLmluY2x1ZGVzKCdOb3JtYWxTcGFjZS5WaWV3JykpIHtcclxuICAgICAgICAgICAgdnNfdmFyaW5nICs9ICd2ZWMzIHZpZXdOb3JtYWwgPSBub3JtYWxpemUoKGNjX21hdFZpZXcgKiB2ZWM0KHdvcmxkTm9ybWFsLCAwLjApKS54eXopO1xcbic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkZXBWYXJpbmdzLmluY2x1ZGVzKCdOb3JtYWxTcGFjZS5UYW5nZW50JykgfHwgZGVwVmFyaW5ncy5pbmNsdWRlcygnTm9ybWFsTWFwJykpIHtcclxuICAgICAgICAgICAgdnNfdmFyaW5nICs9ICd2X3RhbmdlbnQgPSBub3JtYWxpemUoKG1hdFdvcmxkICogdmVjNCh0YW5nZW50Lnh5eiwgMC4wKSkueHl6KTsnXHJcbiAgICAgICAgICAgIHZzX3ZhcmluZyArPSAndl9iaXRhbmdlbnQgPSBjcm9zcyh3b3JsZE5vcm1hbCwgdl90YW5nZW50KSAqIHRhbmdlbnQudzsnXHJcblxyXG4gICAgICAgICAgICB2c192YXJpbmdfZGVmaW5lICs9ICdvdXQgdmVjMyB2X3RhbmdlbnQ7XFxuJ1xyXG4gICAgICAgICAgICB2c192YXJpbmdfZGVmaW5lICs9ICdvdXQgdmVjMyB2X2JpdGFuZ2VudDtcXG4nXHJcblxyXG4gICAgICAgICAgICBmc192YXJpbmdfZGVmaW5lICs9ICdpbiB2ZWMzIHZfdGFuZ2VudDtcXG4nXHJcbiAgICAgICAgICAgIGZzX3ZhcmluZ19kZWZpbmUgKz0gJ2luIHZlYzMgdl9iaXRhbmdlbnQ7XFxuJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVwVmFyaW5ncy5mb3JFYWNoKHZhcmluZyA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YXJpbmcgPT09ICdQb3NpdGlvblNwYWNlLk9iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIHZzX3ZhcmluZ19kZWZpbmUgKz0gJ291dCB2ZWMzIHZfcG9zO1xcbidcclxuICAgICAgICAgICAgICAgIHZzX3ZhcmluZyArPSAndl9wb3MgPSBwb3NpdGlvbi54eXo7XFxuJztcclxuICAgICAgICAgICAgICAgIGZzX3ZhcmluZ19kZWZpbmUgKz0gJ2luIHZlYzMgdl9wb3M7XFxuJztcclxuICAgICAgICAgICAgICAgIGZzX3ZhcmluZyArPSAndmVjNCBwb3NpdGlvbiA9IHZlYzQodl9wb3MsIDEuKTtcXG4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHZhcmluZyA9PT0gJ1Bvc2l0aW9uU3BhY2UuVmlldycpIHtcclxuICAgICAgICAgICAgICAgIHZzX3ZhcmluZ19kZWZpbmUgKz0gJ291dCB2ZWMzIHZfdmlld1BvcztcXG4nXHJcbiAgICAgICAgICAgICAgICB2c192YXJpbmcgKz0gJ3Zfdmlld1BvcyA9IHZpZXdQb3NpdGlvbi54eXo7XFxuJztcclxuICAgICAgICAgICAgICAgIGZzX3ZhcmluZ19kZWZpbmUgKz0gJ2luIHZlYzMgdl92aWV3UG9zO1xcbic7XHJcbiAgICAgICAgICAgICAgICBmc192YXJpbmcgKz0gJ3ZlYzQgdmlld1Bvc2l0aW9uID0gdmVjNCh2X3ZpZXdQb3MsIDEuKTtcXG4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHZhcmluZyA9PT0gJ1Bvc2l0aW9uU3BhY2UuV29ybGQnIHx8IHZhcmluZyA9PT0gJ1Bvc2l0aW9uU3BhY2UuQWJzb2x1dGVXb3JsZCcpIHtcclxuICAgICAgICAgICAgICAgIHZzX3ZhcmluZ19kZWZpbmUgKz0gJ291dCB2ZWMzIHZfd29ybGRQb3M7XFxuJ1xyXG4gICAgICAgICAgICAgICAgdnNfdmFyaW5nICs9ICd2X3dvcmxkUG9zID0gd29ybGRQb3NpdGlvbi54eXo7XFxuJztcclxuICAgICAgICAgICAgICAgIGZzX3ZhcmluZ19kZWZpbmUgKz0gJ2luIHZlYzMgdl93b3JsZFBvcztcXG4nO1xyXG4gICAgICAgICAgICAgICAgZnNfdmFyaW5nICs9ICd2ZWM0IHdvcmxkUG9zaXRpb24gPSB2ZWM0KHZfd29ybGRQb3MsIDEuKTtcXG4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHZhcmluZyA9PT0gJ1Bvc2l0aW9uU3BhY2UuVGFuZ2VudCcpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHZhcmluZyA9PT0gJ05vcm1hbFNwYWNlLk9iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIHZzX3ZhcmluZ19kZWZpbmUgKz0gJ291dCB2ZWMzIHZfbm9ybWFsO1xcbidcclxuICAgICAgICAgICAgICAgIHZzX3ZhcmluZyArPSAndl9ub3JtYWwgPSBub3JtYWw7XFxuJztcclxuICAgICAgICAgICAgICAgIGZzX3ZhcmluZ19kZWZpbmUgKz0gJ2luIHZlYzMgdl9ub3JtYWw7XFxuJztcclxuICAgICAgICAgICAgICAgIGZzX3ZhcmluZyArPSAndmVjMyBub3JtYWwgPSB2X25vcm1hbDtcXG4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHZhcmluZyA9PT0gJ05vcm1hbFNwYWNlLlZpZXcnKSB7XHJcbiAgICAgICAgICAgICAgICB2c192YXJpbmdfZGVmaW5lICs9ICdvdXQgdmVjMyB2X3ZpZXdOb3JtYWw7XFxuJ1xyXG4gICAgICAgICAgICAgICAgdnNfdmFyaW5nICs9ICd2X3ZpZXdOb3JtYWwgPSB2aWV3Tm9ybWFsO1xcbic7XHJcbiAgICAgICAgICAgICAgICBmc192YXJpbmdfZGVmaW5lICs9ICdpbiB2ZWMzIHZfdmlld05vcm1hbDtcXG4nO1xyXG4gICAgICAgICAgICAgICAgZnNfdmFyaW5nICs9ICd2ZWMzIHZpZXdOb3JtYWwgPSB2X3ZpZXdOb3JtYWw7XFxuJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh2YXJpbmcgPT09ICdOb3JtYWxTcGFjZS5Xb3JsZCcpIHtcclxuICAgICAgICAgICAgICAgIHZzX3ZhcmluZ19kZWZpbmUgKz0gJ291dCB2ZWMzIHZfd29ybGROb3JtYWw7XFxuJ1xyXG4gICAgICAgICAgICAgICAgdnNfdmFyaW5nICs9ICd2X3dvcmxkTm9ybWFsID0gd29ybGROb3JtYWw7XFxuJztcclxuICAgICAgICAgICAgICAgIGZzX3ZhcmluZ19kZWZpbmUgKz0gJ2luIHZlYzMgdl93b3JsZE5vcm1hbDtcXG4nO1xyXG4gICAgICAgICAgICAgICAgZnNfdmFyaW5nICs9ICd2ZWMzIHdvcmxkTm9ybWFsID0gdl93b3JsZE5vcm1hbDtcXG4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHZhcmluZyA9PT0gJ05vcm1hbFNwYWNlLlRhbmdlbnQnKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UoJ3t7dnNfdmFyaW5nX2RlZmluZX19JywgdnNfdmFyaW5nX2RlZmluZSlcclxuICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKCd7e3ZzX3ZhcmluZ319JywgdnNfdmFyaW5nKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UoJ3t7ZnNfdmFyaW5nX2RlZmluZX19JywgZnNfdmFyaW5nX2RlZmluZSlcclxuICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKCd7e2ZzX3ZhcmluZ319JywgZnNfdmFyaW5nKVxyXG5cclxuICAgICAgICByZXR1cm4gY29kZTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZUNvZGUgKCkge1xyXG4gICAgICAgIGxldCBjb2RlID0gZnMucmVhZEZpbGVTeW5jKHRoaXMudGVtcGxhdGVQYXRoLCAndXRmLTgnKTtcclxuXHJcbiAgICAgICAgY29kZSA9IHRoaXMuZ2VuZXJhdGVWYXJpbmdzKGNvZGUpO1xyXG5cclxuICAgICAgICBjb25zdCB2c0NvZGUgPSB0aGlzLmdlbmVyYXRlVnNDb2RlKCk7XHJcbiAgICAgICAgY29uc3QgZnNDb2RlID0gdGhpcy5nZW5lcmF0ZUZzQ29kZSgpO1xyXG5cclxuICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKCd7e3ZzfX0nLCB2c0NvZGUpO1xyXG4gICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UoJ3t7ZnN9fScsIGZzQ29kZSk7XHJcblxyXG4gICAgICAgIGNvZGUgPSB0aGlzLnJlcGxhY2VDaHVua3MoY29kZSk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5wcm9wZXJ0aWVzIHx8IHRoaXMucHJvcGVydGllcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZSgvcHJvcGVydGllczogJnByb3BzL2csICcnKTtcclxuICAgICAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZSgvcHJvcGVydGllczogXFwqcHJvcHMvZywgJycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHByb3BzID0gdGhpcy5nZW5lcmF0ZVByb3BlcnRpZXNDb2RlKCk7XHJcbiAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZSgne3twcm9wZXJ0aWVzfX0nLCBwcm9wcy51bmlmb3JtKTtcclxuICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKCd7e3Byb3BlcnRpZXNfc2FtcGxlcn19JywgcHJvcHMudW5pZm9ybVNhbXBsZXIpO1xyXG4gICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UoJ3t7cHJvcGVydGllc19tdGx9fScsIHByb3BzLm10bCk7IFxyXG5cclxuICAgICAgICBcclxuICAgICAgICAvLyBvbGQgc2hhZGVyIGdyYXBoIHZlcnNpb24gZG8gbm90IGhhdmUgdmVydGV4IHNsb3RzXHJcbiAgICAgICAgbGV0IHZlcnRleFNsb3ROYW1lcyA9IFsnVmVydGV4IFBvc2l0aW9uJywgJ1ZlcnRleCBOb3JtYWwnLCAnVmVydGV4IFRhbmdlbnQnLCAnUG9zaXRpb24nXTtcclxuXHJcbiAgICAgICAgdGhpcy5pbnB1dFNsb3RzLmZvckVhY2goc2xvdCA9PiB7XHJcbiAgICAgICAgICAgIHZhciB0ZW1wTmFtZSA9IGBzbG90XyR7c2xvdC5kaXNwbGF5TmFtZS5yZXBsYWNlKC8gL2csICdfJyl9YDtcclxuICAgICAgICAgICAgbGV0IHZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodmVydGV4U2xvdE5hbWVzLmluY2x1ZGVzKHNsb3QuZGlzcGxheU5hbWUpIHx8IHNsb3QuZGlzcGxheU5hbWUgPT09ICdOb3JtYWwnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2xvdC5jb25uZWN0U2xvdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gc2xvdC5zbG90VmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHNsb3Quc2xvdFZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgcmVnID0gbmV3IFJlZ0V4cChge3ske3RlbXBOYW1lfSAqPSogKiguKil9fWApO1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IHJlZy5leGVjKGNvZGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcmVzWzFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UocmVnLCB2YWx1ZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICB2ZXJ0ZXhTbG90TmFtZXMuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICAgICAgdmFyIHRlbXBOYW1lID0gYHNsb3RfJHtuYW1lLnJlcGxhY2UoLyAvZywgJ18nKX1gO1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSAnJztcclxuICAgICAgICAgICAgbGV0IHJlZyA9IG5ldyBSZWdFeHAoYHt7JHt0ZW1wTmFtZX0gKj0qICooLiopfX1gKTtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IHJlZy5leGVjKGNvZGUpO1xyXG4gICAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHJlc1sxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKHJlZywgdmFsdWUpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiBjb2RlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==