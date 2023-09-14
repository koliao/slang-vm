import { observer } from "mobx-react-lite"
import { useStyles } from "./style"
import VM from "../../vm"
import Button from "../Button/Button"
import Editable from "../Editable/Editable"

export interface IWatchWindow {
 vm: VM,
}

const WatchWindow = ( {
    vm,
} : IWatchWindow ) => {
    const { classes } = useStyles()

    return (
        <div className={classes.watchWindow}>
            <table className={classes.variableTable}>
                {Object.entries(vm.state).map( ( [ key, value ] ) => (
                    <tr className={classes.row}>
                        <td>
                            <Editable
                                name={key}
                                color="white"
                                variant="compact"
                                onChange={(newValue: string) => vm.onVariableValueChange(newValue, value)}
                            />
                        </td>
                        <td>
                            <Editable
                                name={value}
                                color="white"
                                variant="compact"
                                onChange={(newValue: string) => vm.onVariableValueChange(key, Number(newValue))}
                            />
                        </td>
                    </tr>
                ) ) }
            </table>
            <Button
                label="+ Add new variable"
                onClick={vm.addVariable}
            />
        </div>
    )
}

export default observer( WatchWindow )
