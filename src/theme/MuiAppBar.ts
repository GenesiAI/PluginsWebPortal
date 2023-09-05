import { ThemeOptions } from "@mui/material/styles";
import { defaultTheme } from "./defaultTheme";

type MuiAppBarT = NonNullable<ThemeOptions["components"]>["MuiAppBar"];

export const MuiAppBar: MuiAppBarT = {
  styleOverrides: {
    root: {
      zIndex: defaultTheme.zIndex.drawer + 1
    }
  }
};
