import Instruction, { IInstruction } from "../Instruction/Instruction"

interface IAddOne extends IInstruction {
    variable: string,
}

const AddOne = ( {
    variable,
    number,
    isSelected,
    onClick,
}: IAddOne ) => {
    return (
        <Instruction
            number={number}
            isSelected={isSelected}
            onClick={onClick}
        >
            {`${variable} <- ${variable} + 1`}
        </Instruction>
    )
}

export default AddOne