import { createTheme } from "@mui/material/styles";
import { dangerStyle, primaryStyle, secondaryStyle } from "const/colors";
import { MuiButton } from "./MuiButtonStyles";
import { MuiTypography } from "./MuiTypographyStyles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: primaryStyle.bg,
      contrastText: primaryStyle.text
    },
    secondary: {
      main: secondaryStyle.bg,
      contrastText: secondaryStyle.text
    },
    error: {
      main: dangerStyle.bg,
      contrastText: dangerStyle.text
    }
  },
  shape: {
    borderRadius: 8
  },
  typography: {
    h2: {
      fontSize: "2rem",
      "@media (min-width:600px)": {
        fontSize: "3rem"
      }
    }
  },
  components: {
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
