import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import theme from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
