import { getJsonObject } from "./utils";
import { emit } from "process";

export class ShaderPropery {
    type = {};
    data: any = {}
    constructor (obj: any) {
        this.type = obj.type;
        this.data = getJsonObject(obj.JSONnodeData);
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

    constructor (data: any) {
        this.type = data.typeInfo;
        this.data = getJsonObject(data.JSONnodeData);

        this.uuid = this.data.m_GuidSerialized;
        this.slots = this.data.m_SerializableSlots.map(d => {
            let slot = new ShaderSlot(d, this)
            this.slotsMap.set(slot.id, slot);
            return slot;
        });
    }

    addDependency (dep) {
        if (!this.deps.includes(dep)) {
            this.deps.push(dep);
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

        this.node = node;

        this.id = this.data.m_Id;
        this.globalID = _GlobalShaderSlotID_++;
    }

    get varName () {
        return 'var_' + this.globalID;
    }

    get slotValue () {
        if (!this.connectSlot) {
            if (this.node?.isMasterNode) {
                return null;
            }
            let value = this.data.m_Value;
            if (typeof value === 'object') {
                if (value.w !== undefined) {
                    return `vec4(${value.x}, ${value.y}, ${value.z}, ${value.w})`;
                }
                else if (value.z !== undefined) {
                    return `vec3(${value.x}, ${value.y}, ${value.z})`;
                }
                else if (value.y !== undefined) {
                    return `vec2(${value.x}, ${value.y})`;
                }
                return value;
            }
            return value;
        }

        return this.connectSlot.varName;
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