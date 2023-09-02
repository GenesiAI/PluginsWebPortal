import { ThemeProvider } from "@mui/material/styles";
import UserInfo from "components/UserInfo";
import { baseName } from "const/urls";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./AppRouter";
import theme from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={baseName}>
        <UserInfo>
          <AppRouter />
        </UserInfo>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
