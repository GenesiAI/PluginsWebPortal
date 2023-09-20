import { ThemeProvider } from "@mui/material";
import UserInfo from "components/UserInfo/UserInfo";
import { baseName } from "const/urls";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import theme from "theme";
import App from "./App";

// eslint-disable-next-line no-console
console.log(
  "%c Genesi AI",
  "font-size: 80px; color: #6360FF; font-weight: bold; text-shadow: 2px 2px 4px #672B83;"
);
// eslint-disable-next-line no-console
console.log(
  "%c Build ChatGPT plugins in 2 minutes.",
  "font-size: 40px; color: #6360FF; font-weight: bold; text-shadow: 2px 2px 4px #672B83;"
);

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
