// import { danger, primary, secondary, tertiary } from "./src/const/colors.ts";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: true,
  theme: {
    // extend: {
    //   colors: {
    //     primary,
    //     secondary,
    //     tertiary,
    //     danger
    //   }
    // },
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
