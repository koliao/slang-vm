import { makeAutoObservable } from "mobx"

export enum InstructionType {
    AddOne,
    SubOne,
    IfNotZeroGoto,
}

interface Instruction {
    label?: string,
    type: InstructionType,
    variable: string,
    jumpLabel?: string
}

export default class VM {
    state: {

    }
    code: Instruction[]
    pc: number

    constructor() {
       this.state = {} 
       this.code = []
       this.pc = 0

       makeAutoObservable(this)
    }

    addInstruction = (instruction: Instruction) => {
        this.code.push(instruction)
        console.log(this.code.length)
    }
}