import { observer } from "mobx-react-lite"
import { useStyles } from "./style"
import VM from "../../vm"

export interface IWatchWindow {
 vm: VM,
}

const WatchWindow = ( {
    vm,
} : IWatchWindow ) => {
    const { classes } = useStyles()

    return (
        <table className={classes.watchWindow}>
            {Object.entries(vm.state).map( ( [ key, value ] ) => (
                <tr className={classes.row}>
                    <td>{key}</td>
                    <td>{value}</td>
                </tr>
            ) ) }
        </table>
    )
}

export default observer( WatchWindow )
