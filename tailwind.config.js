const {
  BLACK,
  DANGER,
  MAIN,
  MAIN_02_LIGHT,
  MAIN_03_LIGHT,
  WHITE,
  WHITE_DARK,
  MAIN_02_DARK,
  MAIN_03_DARK,
  MAIN_04,
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
        secondary: MAIN_02_LIGHT,
        secondaryDark: MAIN_02_DARK,
        tertiary: MAIN_03_LIGHT,
        tertiaryDark: MAIN_03_DARK,
        quaternary: MAIN_04,
        danger: DANGER,
        dangerLight: DANGER_LIGHT,
        white: WHITE,
        whiteDark: WHITE_DARK,
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
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ":root": {
          "--color-primary": theme("colors.primary"),
          "--color-secondary": theme("colors.secondary"),
          "--color-secondary-dark": theme("colors.secondaryDark"),
          "--color-tertiary": theme("colors.tertiary"),
          "--color-tertiary-dark": theme("colors.tertiaryDark"),
          "--color-white": theme("colors.white"),
          "--color-white-dark": theme("colors.whiteDark"),
          "--color-quaternary": theme("colors.quaternary")
        }
      });
    }
  ]
};
