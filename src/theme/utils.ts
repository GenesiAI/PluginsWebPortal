import type { SxProps, Theme } from "@mui/material";

export const IconButtonTheme: SxProps<Theme> = {
  backgroundColor: (theme) => theme.palette.primary.main,
  color: (theme) => theme.palette.primary.contrastText,
  "&:hover": {
    backgroundColor: (theme) => theme.palette.primary.dark
  }
};
