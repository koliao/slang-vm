import { observer } from "mobx-react-lite"
import { useState } from "react"
import { useStyles } from "./style"
import { TextInput as MantineTextInput } from "@mantine/core"
import { useInputState } from '@mantine/hooks';

interface IEditable {
    name: string,
}

const Editable = ( {
    name,
}: IEditable ) => {
    const [ value, setValue ] = useInputState("X1")
    const { classes } = useStyles()
    
    return (
        <MantineTextInput
            styles={classes}
            variant="unstyled"
            size="sm"
            onChange={setValue}
            value={value}
        />
    )
}

export default observer( Editable )
