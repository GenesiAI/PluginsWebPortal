const {
  BLACK,
  DANGER,
  MAIN,
  MAIN_02_LIGHT,
  MAIN_03_LIGHT,
  WHITE,
  MAIN_02_DARK,
  MAIN_03_DARK,
  DANGER_LIGHT
} = require("./src/const/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: MAIN,
        primary: MAIN,
        secondary: MAIN_02_LIGHT,
        secondaryDark: MAIN_02_DARK,
        tertiary: MAIN_03_LIGHT,
        tertiaryDark: MAIN_03_DARK,
        danger: DANGER,
        dangerLight: DANGER_LIGHT,
        white: WHITE,
        black: BLACK
      }
    },
    screens: {
      // Get value from MUI https://mui.com/material-ui/customization/breakpoints/#default-breakpoints
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
      "2xl": "1536px"
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
