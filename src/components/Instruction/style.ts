import { createStyles } from '@mantine/core';

export const useStyles = createStyles(( _, { isSelected, isExecuting } : {
    isSelected: boolean,
    isExecuting: boolean,
}  ) => ({
    line: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        padding: "4px 10px",
        backgroundColor: isExecuting ? "rgba(150.0, 0, 0, 0.1)" : "transparent",
        borderRadius: 8,
        border: isExecuting ? "solid 1px black" : "none",

        "&:hover": {
            backgroundColor: "rgba(0.3, 0.3, 0.3, 0.2)",
            cursor: "pointer",
        },
    },
    instruction: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
    }
}));
