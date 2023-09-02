import { Container } from "@mui/material";
import ProtectedRoute from "components/ProtectedRoute";
import { useUserInfoCtx } from "components/UserInfo/UserInfo";
import {
  checkout,
  contacts,
  home,
  plugin,
  support,
  yourPlugins
} from "const/urls";
import Contact from "pages/Contact";
import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import LoadingSpinner from "./components/LoadingSpinner";

import Support from "pages/Support";
import Home from "./pages/Home";

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
        <Route path={checkout.base}>
          <Route index element={<Navigate to={home} replace />} />
          <Route
            path={checkout.success}
            element={
              <ProtectedRoute>
                <StripeSuccessLazy />
              </ProtectedRoute>
            }
          />
          <Route
            path={checkout.cancelled}
            element={
              <ProtectedRoute>
                <StripeCancelledLazy />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to={home} replace />} />
        </Route>
        <Route path="*" element={<Navigate to={home} replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
