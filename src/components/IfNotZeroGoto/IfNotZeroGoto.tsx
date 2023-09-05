import Instruction, { IInstruction } from "../Instruction/Instruction"

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
            {`IF ${variable} != 0 GOTO ${label}`}
        </Instruction>
    )
}

export default IfNotZeroGoto