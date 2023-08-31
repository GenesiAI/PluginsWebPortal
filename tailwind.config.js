const {
  BLACK,
  DANGER,
  MAIN,
  MAIN_02_LIGHT,
  MAIN_03_LIGHT,
  WHITE
} = require("./src/const/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: MAIN,
        secondary: MAIN_02_LIGHT,
        tertiary: MAIN_03_LIGHT,
        danger: DANGER,
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
