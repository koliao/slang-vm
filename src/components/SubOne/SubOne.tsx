import Editable from "../Editable/Editable"
import Instruction, { IInstruction } from "../Instruction/Instruction"

interface ISubOne extends IInstruction {
    instructionProps: IInstruction,
    variable: string,
}

const SubOne = ( {
    variable,
    instructionProps,
}: ISubOne ) => {
    return (
        <Instruction
            {...instructionProps}
        >
            <Editable name={variable} /> {'<-'} <Editable name={variable} /> - 1
        </Instruction>
    )
}

export default SubOne
