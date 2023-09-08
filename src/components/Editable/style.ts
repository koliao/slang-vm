import { createStyles } from '@mantine/core';

export const useStyles = createStyles( () => ( {
	root: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
        minWidth: 30,
        maxWidth: 30,
        flexGrow: 0,
        flexShrink: 1,
        paddingLeft: 8,
        "&:hover": {
            backgroundColor: "rgba(255, 150, 0, 0.1)",
            borderRadius: 4,
        },
	},
    input: {
        color: "orange",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
} ) );
