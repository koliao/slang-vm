import { observer } from "mobx-react-lite"
import { useStyles } from "./style"
import { TextInput as MantineTextInput } from "@mantine/core"

interface IEditable {
    onChange: ( newValue: string ) => void,
    name?: string,
    color?: string,
    backgroundColor?: string,
}

const Editable = ( {
    onChange,
    name,
    color,
    backgroundColor = "#303030",
}: IEditable ) => {
    const { classes } = useStyles( { backgroundColor, color } )
    
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
