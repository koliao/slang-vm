import { createStyles } from '@mantine/core';

export const useStyles = createStyles(( _, { isSelected } : {
    isSelected: boolean,
}  ) => ({
    line: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        padding: "4px 10px",

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
