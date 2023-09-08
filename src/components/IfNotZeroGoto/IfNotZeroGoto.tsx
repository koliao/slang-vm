import Instruction, { IInstruction } from "../Instruction/Instruction"
import Editable from "../Editable/Editable"

interface IIfNotZeroGoto extends IInstruction{
    instructionProps: IInstruction,
    variable: string,
    label: string,
}

const IfNotZeroGoto = ( {
    variable,
    label,
    instructionProps,
}: IIfNotZeroGoto ) => {
    return (
        <Instruction
            {...instructionProps}
        >
            <Editable name={variable} />
            {"!= 0 GOTO "}
            <Editable name={label}/>
        </Instruction>
    )
}

export default IfNotZeroGoto
