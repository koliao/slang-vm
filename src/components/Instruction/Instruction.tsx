import { ReactNode } from "react"
import { observer } from "mobx-react-lite"
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
            className={classes.line}
        >
            {number}
            <div className={classes.instruction}>
                {children}
            </div>
        </div>
    )
}

export default observer( Instruction )
