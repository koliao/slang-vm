import { ReactNode } from "react"
import { observer } from "mobx-react-lite"
import { useStyles } from "./style"
import Editable from "../Editable/Editable"

export interface IInstruction {
 number: number,
 label?: string,
 isSelected?: boolean,
 isExecuting?: boolean,
 onClick: () => void,
 onJumpLabelChange: () => void,
 children?: ReactNode,
}

const Instruction = ({
    number,
    label,
    isSelected = false,
    isExecuting = false,
    onClick,
    onJumpLabelChange,
    children,
} : IInstruction ) => {
    const { classes } = useStyles( { isSelected, isExecuting } )

    return (
        <div
            onClick={onClick}
            className={classes.line}
        >
            {number}
            <div>
                <Editable
                    onChange={(event) => onJumpLabelChange(number, event.target.value)}
                    name={label}
                />
            </div>
            <div className={classes.instruction}>
                {children}
            </div>
        </div>
    )
}

export default observer( Instruction )
