import { useStyles } from "./style"
import { Button as MantineButton } from "@mantine/core"

interface IButton {
    label: string,
    onClick?: () => void,
}

const Button = ( {
    label,
    onClick,
} : IButton ) => {
    const { classes } = useStyles()

    return (
        <MantineButton
            styles={classes}
            onClick={onClick}
            color="gray"
            variant="light"
        >
            {label}
        </MantineButton>
    )
}

export default Button
