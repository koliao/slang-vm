import Instruction, { IInstruction } from "../Instruction/Instruction"

interface ISubOne extends IInstruction {
    variable: string,
}

const SubOne = ( {
    variable,
    number,
    isSelected = false,
    onClick,
}: ISubOne ) => {
    return (
        <Instruction
            number={number}
            isSelected={isSelected}
            onClick={onClick}
        >
            {`${variable} <- ${variable} - 1`}
        </Instruction>
    )
}

export default SubOne