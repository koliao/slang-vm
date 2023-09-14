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
    state: Record<string, number>
    code: Instruction[]
    pc: number

    constructor() {
       this.state = {} 
       this.code = []
       this.pc = 0

       this.createInitialVariables()

       makeAutoObservable(this)
    }

    addInstruction = (instruction: Instruction) => {
        this.code.push(instruction)
        this.state[instruction.variable] = this.state[instruction.variable] || 0
    }

    addVariable = () => {
        const inputVariables = Object.keys(this.state).filter(
            i => i[0] === "X"
        ).map( v => Number( v.slice(1) ) )
        const maxInputVariable = inputVariables.length === 0 ? 0 : Math.max(...inputVariables)
        if(maxInputVariable >= 0) {
            const newVariable = `X${maxInputVariable + 1}`
            this.state[newVariable] = 0
        }
    }

    step = () => {
        this.executeCurrentLine()
        this.incrementPC()
        console.table(Object.entries(this.state))
    }

    isLineSelected = (_: number) => {
        return false
    }

    isLineExecuting = (line: number) => {
        return this.pc === line
    }

    onVariableNameChange = (instructionNumber: number, value: string) => {
        // TODO add confirm that only gets executed on blur event
        this.code[instructionNumber].variable = value
        this.state[value] = this.state[value] || 0
    }

    onVariableValueChange = (variableName: string, newValue: number) => {
        if(newValue >= 0)
            this.state[variableName] = newValue
    }

    onLabelChange = (instructionNumber: number, value: string) => {
        this.code[instructionNumber].label = value
    }

    onJumpLabelChange = (instructionNumber: number, value: string) => {
        this.code[instructionNumber].jumpLabel = value
    }

    private createInitialVariables() {
        this.state["Y"] = 0
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
        const currentInstruction = this.code[this.pc]
        const variable = this.state[currentInstruction.variable]

        if(variable !== 0) {
            const jumpInstructionIndex = this.code.findIndex( inst => inst.label === currentInstruction.jumpLabel )
            if(jumpInstructionIndex >= 0) {
                this.pc = jumpInstructionIndex - 1
            } else {
                this.pc = this.code.length - 1
            }
        }
    }
}
