import { Container } from "@mui/material";
import Flyout from "components/Flyout";
import ProtectedRoute from "components/ProtectedRoute";
import { useUserInfoCtx } from "components/UserInfo/UserInfo";
import { contacts, home, plugin, support, yourPlugins } from "const/urls";
import Contact from "pages/Contact";
import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import LoadingSpinner from "./components/LoadingSpinner";
import Home from "./pages/Home";
import Support from "./pages/Support";

const PluginEditorLazy = React.lazy(() => import("pages/PluginEditor"));
const YourPluginsLazy = React.lazy(() => import("pages/YourPlugins"));
const StripeSuccessLazy = React.lazy(
  () => import("components/Stripe/StripeSuccess")
);
const StripeCancelledLazy = React.lazy(
  () => import("components/Stripe/StripeCancelled")
);

const someBasicStyle: any = {
  backgroundColor: (theme: any) => theme.palette.background.paper
};
const AppRouter: React.FC = () => {
  const { isLoadingUser } = useUserInfoCtx();

  if (isLoadingUser) {
    return <LoadingSpinner />;
  }

  return (
    <Suspense>
      <Flyout />
      <Header />
      <Routes>
        <Route path={home} element={<Home />} />
        <Route
          path={yourPlugins}
          element={
            <ProtectedRoute>
              <Container maxWidth="md" sx={someBasicStyle}>
                <YourPluginsLazy />
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
                <PluginEditorLazy />
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
        <Route path="/checkout">
          <Route index element={<Navigate to="/" replace />} />
          <Route
            path="success"
            element={
              <ProtectedRoute>
                <StripeSuccessLazy />
              </ProtectedRoute>
            }
          />
          <Route
            path="cancelled"
            element={
              <ProtectedRoute>
                <StripeCancelledLazy />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
