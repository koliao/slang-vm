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
        this.state[instruction.variable] = 0
    }

    step = () => {
        this.executeCurrentLine()
        this.incrementPC()
        console.table(Object.entries(this.state))
    }

    isLineSelected = (line: number) => {
        return false
    }

    isLineExecuting = (line: number) => {
        return this.pc === line
    }

    onVariableChange = (instructionNumber, value) => {
        // TODO add confirm that only gets executed on blur event
        this.code[instructionNumber].variable = value
        this.state[value] = this.state[value] || 0
    }

    onLabelChange = (instructionNumber, value) => {
        this.code[instructionNumber].label = value
    }

    onJumpLabelChange = (instructionNumber, value) => {
        this.code[instructionNumber].jumpLabel = value
    }

    private executeCurrentLine = () => {
        const instruction = this.code[this.pc]

        const handlers = {
            [InstructionType.AddOne]: this.addOneHandler,
            [InstructionType.SubOne]: this.subOneHandler,
            [InstructionType.IfNotZeroGoto]: this.ifNotZeroGotoHandler,
        }

        handlers[instruction.type]()
    }

    private incrementPC = () => {
        this.pc += 1
        this.pc = Math.min(this.pc, this.code.length - 1)
    }

    private addOneHandler = () => {
        const instruction = this.code[this.pc]
        const variable = this.state[instruction.variable]

        this.state[instruction.variable] = variable + 1
    }

    private subOneHandler = () => {
        const instruction = this.code[this.pc]
        const variable = this.state[instruction.variable]

        this.state[instruction.variable] = Math.max(variable - 1, 0)
    }

    private ifNotZeroGotoHandler = () => {
        const instruction = this.code[this.pc]
        const variable = this.state[instruction.variable]
        const jumpLabel = this.state[instruction.jumpLabel]

        if(this.state[variable] !== 0) {
            const jumpInstruction = this.code.findIndex( inst => inst.label === jumpLabel )
            if(jumpInstruction >= 0) {
                this.pc = this.code.indexOf(jumpInstruction) - 1
            } else {
                this.pc = this.code.length - 1
            }
        }
    }
}
