import { createStyles } from '@mantine/core';

export const useStyles = createStyles(( _, { isSelected } : {
    isSelected: boolean,
}  ) => ({
    instruction: {
        backgroundColor: isSelected ? "red" : "transparent"
    }
}));