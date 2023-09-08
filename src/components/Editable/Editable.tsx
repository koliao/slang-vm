import { observer } from "mobx-react-lite"
import { useState } from "react"
import { useStyles } from "./style"
import { TextInput as MantineTextInput } from "@mantine/core"
import { useInputState } from '@mantine/hooks';

interface IEditable {
    onChange: () => void,
    name?: string,
}

const Editable = ( {
    onChange,
    name,
}: IEditable ) => {
    const { classes } = useStyles()
    
    return (
        <MantineTextInput
            styles={classes}
            variant="unstyled"
            size="sm"
            onChange={onChange}
            value={name}
        />
    )
}

export default observer( Editable )
