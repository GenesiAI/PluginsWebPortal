import { Interpolation, Theme, ThemeOptions } from "@mui/material/styles";
import {
  MAIN,
  MAIN_02_LIGHT,
  WHITE,
  dangerStyle,
  primaryStyle,
  secondaryStyle,
  tertiaryStyle
} from "const/colors";
import { defaultTheme } from "./defaultTheme";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    lightBg: true;
    darkBg: true;
  }
}
type MuiButtonT = NonNullable<ThemeOptions["components"]>["MuiButton"];

type baseStyleT = Interpolation<Theme>;

const baseStyle: baseStyleT = {
  borderRadius: "3.125rem",
  boxShadow: "0px 0px 10px 3px rgba(0, 0, 0, 0.25);",
  fontSize: "1.5rem",
  fontWeight: "700",
  lineHeight: "1.71875rem",
  [defaultTheme.breakpoints.down("md")]: {
    fontSize: "1.25rem",
    lineHeight: "1.3125rem"
  }
};
export const MuiButton: MuiButtonT = {
  variants: [
    {
      props: { variant: "lightBg" },
      style: baseStyle
    },
    {
      props: { variant: "lightBg", color: "primary" },
      style: {
        color: primaryStyle.text,
        background: primaryStyle.bg,
        ":hover": {
          background: primaryStyle.hoverBg,
          color: primaryStyle.hoverText
        }
      }
    },
    {
      props: { variant: "lightBg", color: "secondary" },
      style: {
        color: secondaryStyle.text,
        background: secondaryStyle.bg,
        ":hover": {
          background: secondaryStyle.hoverBg,
          color: secondaryStyle.hoverText
        }
      }
    },
    {
      props: { variant: "lightBg", color: "tertiary" },
      style: {
        color: tertiaryStyle.text,
        background: tertiaryStyle.bg,
        ":hover": {
          background: tertiaryStyle.hoverBg,
          color: tertiaryStyle.hoverText
        }
      }
    },
    {
      props: { variant: "lightBg", color: "error" },
      style: {
        color: dangerStyle.text,
        background: dangerStyle.bg,
        ":hover": {
          background: dangerStyle.hoverBg,
          color: dangerStyle.hoverText
        }
      }
    },
    {
      props: { variant: "darkBg" },
      style: {
        ...baseStyle,
        color: MAIN,
        background: WHITE,
        ":hover": {
          background: MAIN_02_LIGHT,
          color: WHITE
        }
      }
    }
  ]
};
