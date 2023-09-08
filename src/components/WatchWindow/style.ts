import { createStyles } from '@mantine/core';

export const useStyles = createStyles( () => ( {
    watchWindow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "red",
        width: 200,
        height: 200,
    },
} ) );
