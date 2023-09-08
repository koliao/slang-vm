import Instruction, { IInstruction } from "../Instruction/Instruction"
import Editable from "../Editable/Editable"

interface IIfNotZeroGoto extends IInstruction{
    variable: string,
    label: string,
}

const IfNotZeroGoto = ( {
    variable,
    label,
    number,
    isSelected = false,
    onClick,
}: IIfNotZeroGoto ) => {
    return (
        <Instruction
            number={number}
            isSelected={isSelected}
            onClick={onClick}
        >
            <Editable name={variable} />
            {"!= 0 GOTO "}
            <Editable name={label}/>
        </Instruction>
    )
}

export default IfNotZeroGoto
