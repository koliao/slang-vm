import Instruction, { IInstruction } from "../Instruction/Instruction"
import { observer } from "mobx-react-lite"
import { useStyles } from "./style"
import Editable from "../Editable/Editable"

interface IAddOne extends IInstruction {
    variable: string,
}

const AddOne = ( {
    variable,
    number,
    isSelected,
    onClick,
}: IAddOne ) => {
    const {classes} = useStyles()

    return (
        <Instruction
            number={number}
            isSelected={isSelected}
            onClick={onClick}
        >
            <Editable name={variable} /> {'<-'} <Editable name={variable}/> + 1
        </Instruction>
    )
}

export default observer( AddOne )
