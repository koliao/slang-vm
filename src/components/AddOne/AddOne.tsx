import Instruction, { IInstruction } from "../Instruction/Instruction"
import { observer } from "mobx-react-lite"
import { useStyles } from "./style"
import Editable from "../Editable/Editable"

interface IAddOne {
    instructionProps: IInstruction,
    variable: string,
    onVariableChange: () => void,
    onLabelChange: () => void,
}

const AddOne = ( {
    variable,
    onVariableChange,
    onLabelChange,
    instructionProps,
}: IAddOne ) => {
    const {classes} = useStyles()

    return (
        <Instruction
            {...instructionProps}
        >
            <Editable
                onChange={(event) => onVariableChange(instructionProps.number, event.target.value)}
                name={variable}
            />
            {'<-'}
            <Editable
                onChange={(event) => onVariableChange(instructionProps.number, event.target.value)}
                name={variable}
            />
            + 1
        </Instruction>
    )
}

export default observer( AddOne )
