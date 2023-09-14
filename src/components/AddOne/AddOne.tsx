import Instruction, { IInstruction } from "../Instruction/Instruction"
import { observer } from "mobx-react-lite"
import Editable from "../Editable/Editable"

interface IAddOne {
    instructionProps: IInstruction,
    variable: string,
    onVariableChange: (instructionNumber: number, variable: string) => void,
}

const AddOne = ( {
    variable,
    onVariableChange,
    instructionProps,
}: IAddOne ) => {
    return (
        <Instruction
            {...instructionProps}
        >
            <Editable
                onChange={( newValue: string ) => onVariableChange(instructionProps.number, newValue)}
                name={variable}
            />
            {'<-'}
            <Editable
                onChange={( newValue: string ) => onVariableChange(instructionProps.number, newValue)}
                name={variable}
            />
            + 1
        </Instruction>
    )
}

export default observer( AddOne )
