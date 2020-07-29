import { getJsonObject, getFloatString } from "./utils";
import { emit } from "process";

export class ShaderPropery {
    type = {};
    data: any = {}

    name = '';

    constructor (obj: any) {
        this.type = obj.type;
        this.data = getJsonObject(obj.JSONnodeData);

        this.name = this.data.m_Name;
        this.name = this.name.replace(/ /g, '_');
    }

    get defaultValue () {
        return this.data.m_Value;
    }

    get concretePrecision () {
        let concretePrecision = 1;
            
        let value = this.defaultValue;
        if (typeof value === 'object') {
            if (value.w !== undefined || value.r !== undefined) {
                concretePrecision = 4;
            }
            else if (value.z !== undefined || value.g !== undefined) {
                concretePrecision = 3;
            }
            else if (value.y !== undefined || value.b !== undefined) {
                concretePrecision = 2;
            }
        }

        return concretePrecision;
    }
}

export class ShaderNode {
    type = {};
    data: any = {}

    priority = 0;
    uuid = '';
    slots: ShaderSlot[] = [];
    slotsMap: Map<number, ShaderSlot> = new Map;

    deps: ShaderNode[] = []

    isMasterNode = false;
    fixedConcretePrecision = false;

    constructor (data: any) {
        this.type = data.typeInfo;
        this.data = getJsonObject(data.JSONnodeData);

        this.uuid = this.data.m_GuidSerialized;
        this.slots = this.data.m_SerializableSlots.map(d => {
            let slot = new ShaderSlot(d, this);
            this.slotsMap.set(slot.id, slot);
            return slot;
        });
    }

    addDependency (dep) {
        if (!this.deps.includes(dep)) {
            this.deps.push(dep);
        }
    }

    calcConcretePrecision () {
        if (!this.fixedConcretePrecision) {
            let minConcretePrecision = 999;
            this.inputSlots.forEach(slot => {
                let concretePrecision = slot.concretePrecision;
                if (slot.connectSlot) {
                    concretePrecision = slot.connectSlot.concretePrecision;
                }
                minConcretePrecision = Math.min(minConcretePrecision, concretePrecision);
            })

            this.slots.forEach(slot => {
                slot._concretePrecision = minConcretePrecision;
            })
        }
    }

    setPriority (priority) {
        this.priority = Math.max(priority, this.priority);
        for (let i = 0; i < this.deps.length; i++) {
            this.deps[i].setPriority(this.priority + 1);
        }
    }

    get outputSlots () {
        return this.slots.filter(s => s.type === ShaderSlotType.Output);
    }

    get inputSlots () {
        return this.slots.filter(s => s.type === ShaderSlotType.Input);
    }

    getOutputSlotWithSlotName (name) {
        return this.outputSlots.find(s => s.data.m_DisplayName === name);
    }
    getOutputVarName (idx) {
        return this.outputSlots[idx].varName;
    }
    getOutputVarDefine (idx) {
        return this.outputSlots[idx].varDefine;
    }
    getInputValue (idx) {
        return this.inputSlots[idx].slotValue;
    }

    generateCode () {
        return '';
    }
}

let _GlobalShaderSlotID_ = 0;
export function resetGlobalShaderSlotID () {
    _GlobalShaderSlotID_ = 0;
}

export enum ShaderSlotType {
    Input,
    Output
}

export class ShaderSlot {
    typeInfo = {};
    data: any = {}

    id = 0;

    globalID = 0;

    connectSlot: ShaderSlot | null | undefined = null;
    node: ShaderNode | null | undefined = null;

    type = ShaderSlotType.Input;

    constructor (obj: any, node: ShaderNode) {
        this.typeInfo = obj.typeInfo;
        this.data = getJsonObject(obj.JSONnodeData);

        this.type = this.data.m_SlotType as ShaderSlotType;

        this.node = node;

        this.id = this.data.m_Id;
        this.globalID = _GlobalShaderSlotID_++;
    }

    get varName () {
        return 'var_' + this.globalID;
    }

    get varDefine () {
        let precision = '';
        if (this.concretePrecision === 1) {
            precision = 'float';
        }
        else if (this.concretePrecision === 2) {
            precision = 'vec2';
        }
        else if (this.concretePrecision === 3) {
            precision = 'vec3';
        }
        else if (this.concretePrecision === 4) {
            precision = 'vec4';
        }
        if (precision) {
            precision += ' ';
        }
        return precision + this.varName;
    }

    get slotValue () {
        let result;
        let valueConretePresition = this.defaultConcretePrecision;
        let defaultValue = this.data.m_Value;
        
        let x = getFloatString(defaultValue.x);
        let y = getFloatString(defaultValue.y);
        let z = getFloatString(defaultValue.z);
        let w = getFloatString(defaultValue.w);

        if (!this.connectSlot) {
            if (this.node?.isMasterNode) {
                return null;
            }
            result = defaultValue;
            if (typeof defaultValue === 'object') {
                if (defaultValue.w !== undefined) {
                    result = `vec4(${x}, ${y}, ${z}, ${w})`;
                }
                else if (defaultValue.z !== undefined) {
                    result = `vec3(${x}, ${y}, ${z})`;
                }
                else if (defaultValue.y !== undefined) {
                    result = `vec2(${x}, ${y})`;
                }
            }
        }
        else {
            result = this.connectSlot.varName;
            valueConretePresition = this.connectSlot.concretePrecision;
        }

        if (this.concretePrecision !== valueConretePresition) {
            if (this.concretePrecision < valueConretePresition) {
                if (this.concretePrecision === 1) {
                    result += '.x';
                }
                else if (this.concretePrecision === 2) {
                    result += '.xy';
                }
                else if (this.concretePrecision === 3) {
                    result += '.xyz';
                }
            }
            else {
                let dif = this.concretePrecision - valueConretePresition;
                let str = '';
                if (dif === 1) {
                    str += `${x}`;
                }
                else if (dif === 2) {
                    str += `${x}, ${y}`;
                }
                else if (dif === 3) {
                    str += `${x}, ${y}, ${z}`;
                }

                if (this.concretePrecision === 2) {
                    result = `vec2(${result}, ${str});`;
                }
                else if (this.concretePrecision === 3) {
                    result = `vec3(${result}, ${str})`;
                }
                else if (this.concretePrecision === 4) {
                    result = `vec4(${result}, ${str})`;
                }
            }
        }
        return result;
    }

    get defaultConcretePrecision () {
        let concretePrecision = 1;
            
        let value = this.data.m_Value;
        if (typeof value === 'object') {
            if (value.w !== undefined) {
                concretePrecision = 4;
            }
            else if (value.z !== undefined) {
                concretePrecision = 3;
            }
            else if (value.y !== undefined) {
                concretePrecision = 2;
            }
        }

        return concretePrecision;
    }

    _concretePrecision = -1;
    get concretePrecision () {
        if (this._concretePrecision === -1) {
            this._concretePrecision = 1;
            
            let value = this.data.m_Value;
            if (typeof value === 'object') {
                if (value.w !== undefined) {
                    this._concretePrecision = 4;
                }
                else if (value.z !== undefined) {
                    this._concretePrecision = 3;
                }
                else if (value.y !== undefined) {
                    this._concretePrecision = 2;
                }
            }
        }
        return this._concretePrecision;
    }
}

export class ShaderEdgeSlot {
    id = 0;
    nodeUuid = '';

    set (data: any) {
        this.id = data.m_SlotId;
        this.nodeUuid = data.m_NodeGUIDSerialized;
    }
}

export class ShaderEdge {
    type = {};
    data: any = {}

    input: ShaderEdgeSlot = new ShaderEdgeSlot;
    output: ShaderEdgeSlot = new ShaderEdgeSlot;

    constructor (data: any) {
        this.type = data.typeInfo;
        this.data = getJsonObject(data.JSONnodeData);

        this.input.set(this.data.m_InputSlot);
        this.output.set(this.data.m_OutputSlot);
    }
}