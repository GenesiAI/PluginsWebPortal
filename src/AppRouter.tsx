import { Container } from "@mui/material";
import Flyout from "components/Flyout";
import ProtectedRoute from "components/ProtectedRoute";
import { useUserInfoCtx } from "components/UserInfo/UserInfo";
import {
  baseName,
  contacts,
  home,
  plugin,
  support,
  yourPlugins
} from "const/urls";
import Contact from "pages/Contact";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import LoadingSpinner from "./components/LoadingSpinner";
import Home from "./pages/Home";
import PluginEditor from "./pages/PluginEditor";
import Support from "./pages/Support";
import YourPlugins from "./pages/YourPlugins";

const someBasicStyle: any = {
  backgroundColor: (theme: any) => theme.palette.background.paper
};

const AppRouter: React.FC = () => {
  const { isLoadingUser } = useUserInfoCtx();

  if (isLoadingUser) {
    return <LoadingSpinner />;
  }

  return (
    <Router basename={baseName}>
      <Flyout />
      <Header />
      <Routes>
        <Route path={home} element={<Home />} />
        <Route
          path={yourPlugins}
          element={
            <ProtectedRoute>
              <Container maxWidth="md" sx={someBasicStyle}>
                <YourPlugins />
              </Container>
            </ProtectedRoute>
          }
        />
        <Route
          path={contacts}
          element={
            <Container maxWidth="md">
              <Contact />
            </Container>
          }
        />
        <Route
          path={plugin}
          element={
            <ProtectedRoute>
              <Container maxWidth="md">
                <PluginEditor />
              </Container>
            </ProtectedRoute>
          }
        />
        <Route
          path={support}
          element={
            <Container maxWidth="md" sx={someBasicStyle}>
              <Support />
            </Container>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
