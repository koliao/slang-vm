import Editable from "../Editable/Editable"
import Instruction, { IInstruction } from "../Instruction/Instruction"

interface ISubOne {
    instructionProps: IInstruction,
    variable: string,
    onVariableChange: (instructionNumber: number, variable: string) => void,
}

const SubOne = ( {
    variable,
    onVariableChange,
    instructionProps,
}: ISubOne ) => {
    return (
        <Instruction
            {...instructionProps}
        >
            <Editable
                name={variable}
                onChange={( newValue ) => onVariableChange(instructionProps.number, newValue)}
            />
            {'<-'}
            <Editable
                name={variable}
                onChange={( newValue ) => onVariableChange(instructionProps.number, newValue)}
            />
            - 1
        </Instruction>
    )
}

export default SubOne
