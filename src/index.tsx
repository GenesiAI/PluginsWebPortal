import { ThemeProvider } from "@mui/material";
import UserInfo from "components/UserInfo/UserInfo";
import { baseName } from "const/urls";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import theme from "theme";
import App from "./App";

const container = document.getElementById("root")!;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={baseName}>
        <UserInfo>
          <App />
        </UserInfo>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
