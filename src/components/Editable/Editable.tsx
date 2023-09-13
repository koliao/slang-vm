import { observer } from "mobx-react-lite"
import { useStyles } from "./style"
import { TextInput as MantineTextInput } from "@mantine/core"

interface IEditable {
    onChange: ( newValue: string ) => void,
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
            onChange={( event ) => onChange( event.target.value )}
            value={name}
        />
    )
}

export default observer( Editable )
