import { createStyles } from '@mantine/core';

export const useStyles = createStyles( () => ( {
    root: {
        display: "flex",
        flexDirection: "row",
        gap: 20,
        flex: 1,
    },
    code: {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
    },
    controls: {
        display: "flex",
        flexDirection: "row",
        gap: 4,
    },
}));
