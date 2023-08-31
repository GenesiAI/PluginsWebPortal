import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import theme from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <div className="p-4">
        <Button color="primary" variant="lightBg" />
        <Button color="secondary" variant="lightBg" />
        <Button color="tertiary" variant="lightBg" />
        <Button color="error" variant="lightBg" />
        <Button color="primary" variant="darkBg" />
        <Button color="secondary" variant="darkBg" />
        <Button color="error" variant="darkBg" />
      </div> */}
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
