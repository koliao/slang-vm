import { createStyles } from '@mantine/core';

export const useStyles = createStyles( () => ( {
    watchWindow: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: 8,
        border: "solid 1px black",
        padding: 20,

        minHeight: 100,
        height: "auto",
    },
    variableTable: {
        display: "flex",
        flexDirection: "column",
        width: "fit-content",
    },
    row: {
        padding: "4px 16px",
        gap: 20,

        "&:nth-child(even)": {
            backgroundColor: "rgba(0, 0, 0, 0.2)",
        },
    },
} ) );
