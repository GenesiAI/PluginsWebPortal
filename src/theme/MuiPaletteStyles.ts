import { PaletteColorOptions, PaletteOptions } from "@mui/material/styles";
import {
  dangerStyle,
  primaryStyle,
  secondaryStyle,
  tertiaryStyle
} from "const/colors";

declare module "@mui/material/styles" {
  interface Palette {
    tertiary?: PaletteColorOptions;
  }
  interface PaletteOptions {
    tertiary?: PaletteColorOptions;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}

export const MuiPalette: PaletteOptions = {
  primary: {
    main: primaryStyle.bg,
    contrastText: primaryStyle.text
  },
  secondary: {
    main: secondaryStyle.bg,
    contrastText: secondaryStyle.text
  },
  tertiary: {
    main: tertiaryStyle.bg,
    contrastText: tertiaryStyle.text
  },
  error: {
    main: dangerStyle.bg,
    contrastText: dangerStyle.text
  }
};
