import { ReactNode } from "react"
import { useStyles } from "./style"

export interface IInstruction {
 number: number,
 isSelected?: boolean,
 onClick: () => void,
 children?: ReactNode,
}

const Instruction = ({
    number,
    isSelected = false,
    onClick,
    children,
} : IInstruction ) => {
    const { classes } = useStyles( { isSelected } )

    return (
        <div
            onClick={onClick}
            className={classes.instruction}
        >
            {number}
            {children}
        </div>
    )
}

export default Instruction
