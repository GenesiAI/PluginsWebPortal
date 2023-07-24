import type { SxProps, Theme } from "@mui/material";

export const IconButtonTheme: SxProps<Theme> = {
  backgroundColor: (theme) => theme.palette.primary.main,
  color: (theme) => theme.palette.primary.contrastText,
  "&:hover": {
    backgroundColor: (theme) => theme.palette.primary.dark
  }
};
export const TitleTheme: SxProps<Theme> = {
  textAlign: "center",
  fontWeight: "bold",
  color: (theme) => theme.palette.primary.main,
  marginBottom: (theme) => theme.spacing(2),
  marginTop: (theme) => theme.spacing(2)
};
