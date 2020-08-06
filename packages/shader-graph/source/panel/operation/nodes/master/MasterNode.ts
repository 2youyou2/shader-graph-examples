import { ShaderNode, ShaderSlot, ShaderPropery } from "../../base";
import fs from 'fs';
import path from 'path';
import ShaderGraph from "../../shadergraph";
import { ConcretePrecisionType, TextureConcretePrecision } from "../../type";
import { shaderTemplatesDir } from "../../utils";

function findConnectNodes (slot: ShaderSlot, nodes: ShaderNode[]) {
    if (!slot.connectSlot) return;

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
        })
    }
}

export default class MasterNode extends ShaderNode {

    vsSlotIndices: string[] = [];
    fsSlotIndices: string[] = [];

    templatePath = '';

    isMasterNode = true;
    concretePrecisionType = ConcretePrecisionType.Fixed;

    properties: ShaderPropery[] = [];

    getConnectNodes (slotIndices: string[]) {
        let inputSlots: ShaderSlot[] = [];
        slotIndices.forEach(name => {
            let slot = this.getSlotWithSlotName(name)
            if (slot) {
                inputSlots.push(slot)
            }
        });

        let nodes: ShaderNode[] = [];
        inputSlots.forEach(slot => {
            findConnectNodes(slot, nodes);
        })

        nodes.sort((a, b) => b.priority - a.priority);
        return nodes;
    }

    generateVsCode () {
        let code: string[] = ['\n'];

        let nodes = this.getConnectNodes(this.vsSlotIndices);
        nodes.forEach(node => {
            node.generateCode().split('\n').forEach(c => {
                code.push('    ' + c);
            });
        })

        return code.join('\n');
    }

    generateFsCode () {
        let code: string[] = ['\n'];

        let nodes = this.getConnectNodes(this.fsSlotIndices);
        nodes.forEach(node => {
            node.generateCode().split('\n').forEach(c => {
                c += ` // ${node.constructor.name}`
                code.push('    ' + c);
            });
        })

        return code.join('\n');
    }

    generatePropertiesCode () {
        let uniform = '\n';
        let mtl = '\n'
        let uniformSampler = '';

        let properties = this.properties;
        properties.sort((a, b) => {
            return b.concretePrecision - a.concretePrecision;
        })

        let blockUniformCount = 0;

        properties.forEach(p => {
            let precision = '';
            let mtlValue = '';

            let value = p.defaultValue;
            let isColor = value.r !== undefined;
            let x = isColor ? value.r : value.x;
            let y = isColor ? value.g : value.y;
            let z = isColor ? value.b : value.z;
            let w = isColor ? value.a : value.w;

            let concretePrecision = p.node?.outputSlots[0].concretePrecision;

            if (concretePrecision === 1) {
                precision = 'float';
                mtlValue = `${value}`
            }
            else if (concretePrecision === 2) {
                precision = 'vec2';
                mtlValue = `[${x}, ${y}]`
            }
            else if (concretePrecision === 3) {
                precision = 'vec4';
                mtlValue = `[${x}, ${y}, ${z}, 0]`
            }
            else if (concretePrecision === 4) {
                precision = 'vec4';
                mtlValue = `[${x}, ${y}, ${z},  ${w}]`
            }
            else if (concretePrecision === TextureConcretePrecision.Texture2D) {
                precision = 'sampler2D'
                mtlValue = 'white'
            }

            let editorStr = isColor ? `, editor: { type: color }` : ''

            if (concretePrecision < TextureConcretePrecision.Texture2D) {
                uniform += `    ${precision} ${p.name};\n`;
                blockUniformCount++;
            }
            else {
                uniformSampler += `  uniform ${precision} ${p.name};\n`;
            }
            mtl += `        ${p.name}: { value: ${mtlValue} ${editorStr}}\n`
        })

        if (blockUniformCount === 0) {
            uniform += '    vec4 empty_value;\n'
        }

        return {
            uniform,
            uniformSampler,
            mtl,
        };
    }

    replaceChunks (code) {
        let depChunks: string[] = ['common'];
        let allNodes = ShaderGraph.allNodes;
        for (let i = 0; i < allNodes.length; i++) {
            for (let j = 0; j < allNodes[i].length; j++) {
                let node = allNodes[i][j];
                for (let k = 0; k < node.depChunks.length; k++) {
                    if (!depChunks.includes(node.depChunks[k])) {
                        depChunks.push(node.depChunks[k])
                    }
                }
            }
        }

        let chunkIncludes = '\n';
        let chunks = '\n';
        depChunks.forEach(chunkName => {
            let chunkPath = path.join(shaderTemplatesDir, `chunks/${chunkName}.chunk`);
            let chunk = fs.readFileSync(chunkPath, 'utf-8');
            if (!chunk) {
                console.error(`Can not find chunk with path [${chunkPath}]`)
                return;
            }
            chunks += chunk + '\n';
            chunkIncludes += `  #include <shader_graph_${chunkName}>\n`;
        })

        code = code.replace('{{chunks}}', chunks);
        code = code.replace('{{vs_chunks}}', chunkIncludes);
        code = code.replace('{{fs_chunks}}', chunkIncludes);

        return code;
    }

    generateCode () {
        let code = fs.readFileSync(this.templatePath, 'utf-8');

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
        })
        
        vertexSlotNames.forEach(name => {
            var tempName = `slot_${name.replace(/ /g, '_')}`;
            let value = '';
            let reg = new RegExp(`{{${tempName} *=* *(.*)}}`);
            let res = reg.exec(code);
            if (res) {
                value = res[1];
            }
            code = code.replace(reg, value);
        })

        return code;
    }
}
