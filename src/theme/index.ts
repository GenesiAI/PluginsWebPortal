import { createTheme } from "@mui/material/styles";
import { MuiAppBar } from "./MuiAppBar";
import { MuiButton } from "./MuiButtonStyles";
import { MuiPalette } from "./MuiPaletteStyles";
import { MuiTypography } from "./MuiTypographyStyles";

const theme = createTheme({
  palette: MuiPalette,
  shape: {
    borderRadius: 8
  },
  typography: {
    fontFamily: "",
    h2: {
      fontSize: "2rem",
      "@media (min-width:600px)": {
        fontSize: "3rem"
      }
    }
  },
  components: {
    MuiAppBar,
    MuiTypography,
    MuiButton,
    MuiFilledInput: {
      styleOverrides: {
        root: {
          "::before": {
            border: "none !important"
          },
          borderRadius: "16px"
        }
      }
    }
  }
});

export * from "./BoxContainer";
export * from "./utils";
export default theme;
