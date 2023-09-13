import { observer } from "mobx-react-lite"
import Instruction, { IInstruction } from "../Instruction/Instruction"
import Editable from "../Editable/Editable"

interface IIfNotZeroGoto {
    instructionProps: IInstruction,
    variable: string,
    jumpLabel: string,
    onVariableChange: (instructionNumber: number, variable: string) => void,
    onJumpLabelChange: (instruction: number, jumpLabel: string) => void,
}

const IfNotZeroGoto = ( {
    instructionProps,
    variable,
    jumpLabel,
    onVariableChange,
    onJumpLabelChange,
}: IIfNotZeroGoto ) => {
    return (
        <Instruction
            {...instructionProps}
        >
            <Editable
                name={variable}
                onChange={( newValue ) => onVariableChange(instructionProps.number, newValue)}
            />
            {"!= 0 GOTO "}
            <Editable
                name={jumpLabel}
                onChange={( newValue ) => onJumpLabelChange(instructionProps.number,  newValue)}
            />
        </Instruction>
    )
}

export default observer( IfNotZeroGoto )
