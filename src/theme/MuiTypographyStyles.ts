import { ThemeOptions } from "@mui/material/styles";
import { BLACK } from "const/colors";
import { defaultTheme } from "./defaultTheme";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    t1: true;
    t2: true;
    t3: true;
    t4: true;
    t5: true;
    t6: true;
  }
}
type MuiTypographyT = NonNullable<ThemeOptions["components"]>["MuiTypography"];

export const MuiTypography: MuiTypographyT = {
  defaultProps: {
    variantMapping: {
      t1: "h1",
      t2: "h2",
      t3: "h3",
      t4: "span",
      t5: "span",
      t6: "span"
    }
  },
  styleOverrides: {},
  variants: [
    {
      props: { variant: "t1" },
      style: {
        color: BLACK,
        fontStyle: "normal",
        fontSize: "4.25rem",
        fontWeight: "700",
        lineHeight: "4.75rem",
        [defaultTheme.breakpoints.down("md")]: {
          fontSize: "3.4375rem",
          lineHeight: "4.0625rem"
        }
      }
    },
    {
      props: { variant: "t2" },
      style: {
        color: BLACK,
        fontStyle: "normal",
        fontSize: "3.125rem",
        fontWeight: "700",
        lineHeight: "3.71875rem",
        [defaultTheme.breakpoints.down("md")]: {
          fontSize: "2.5rem",
          lineHeight: "2.6875rem"
        }
      }
    },
    {
      props: { variant: "t3" },
      style: {
        color: BLACK,
        fontStyle: "normal",
        fontSize: "2.25rem",
        fontWeight: "700",
        lineHeight: "2.6875rem",
        [defaultTheme.breakpoints.down("md")]: {
          fontSize: "1.875rem",
          lineHeight: "1.875rem"
        }
      }
    },
    {
      props: { variant: "t4" },
      style: {
        color: BLACK,
        fontStyle: "normal",
        fontSize: "1.5rem",
        fontWeight: "400",
        lineHeight: "1.71875rem",
        [defaultTheme.breakpoints.down("md")]: {
          fontSize: "1.125rem",
          lineHeight: "1.3125rem"
        }
      }
    },
    {
      props: { variant: "t5" },
      style: {
        color: BLACK,
        fontStyle: "normal",
        fontSize: "1rem",
        fontWeight: "400",
        lineHeight: "1.4375rem",
        [defaultTheme.breakpoints.down("md")]: {
          fontSize: "0.8125rem",
          lineHeight: "1.25rem"
        }
      }
    },
    {
      props: { variant: "t6" },
      style: {
        color: BLACK,
        fontStyle: "normal",
        fontSize: "0.75rem",
        fontWeight: "400",
        lineHeight: "0.875rem",
        [defaultTheme.breakpoints.down("md")]: {
          fontSize: "0.5rem",
          lineHeight: "0.6875rem"
        }
      }
    }
  ]
};
