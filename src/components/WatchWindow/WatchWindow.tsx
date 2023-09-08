import { ReactNode } from "react"
import { observer } from "mobx-react-lite"
import { useStyles } from "./style"
import VM from "../../vm"

export interface IWatchWindow {
 vm: VM,
}

const WatchWindow = ({
    vm,
} : IWatchWindow ) => {
    const { classes } = useStyles()

    return (
        <div
            className={classes.watchWindow}
        >
        </div>
    )
}

export default observer( WatchWindow )
