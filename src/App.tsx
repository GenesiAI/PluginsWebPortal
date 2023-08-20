import { ThemeProvider } from "@mui/material/styles";
import UserInfo from "components/UserInfo";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./AppRouter";
import theme from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <UserInfo>
          <AppRouter />
        </UserInfo>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
