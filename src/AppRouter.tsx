import { Container } from "@mui/material";
import ProtectedRoute from "components/ProtectedRoute";
import {
  checkout,
  contacts,
  home,
  plugin,
  questions,
  support,
  yourPlugins
} from "const/urls";
import Contact from "pages/Contact";
import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import LoadingSpinner from "./components/LoadingSpinner";

import Home from "pages/Home";
import Questions from "pages/Questions";
import Support from "pages/Support";

const PluginEditorLazy = React.lazy(() => import("pages/PluginEditor"));
const YourPluginsLazy = React.lazy(() => import("pages/YourPlugins"));
const StripeSuccessLazy = React.lazy(
  () => import("components/Stripe/StripeSuccess")
);
const StripeCancelledLazy = React.lazy(
  () => import("components/Stripe/StripeCancelled")
);

const someBasicStyle: any = {};
const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path={home} element={<Home />} />
        <Route
          path={questions}
          element={
            <Container maxWidth="md" sx={someBasicStyle}>
              <Questions />
            </Container>
          }
        />
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
        <Route path={checkout.success} element={<StripeSuccessLazy />} />
        <Route path={checkout.base}>
          <Route index element={<Navigate to={home} replace />} />
          <Route path={checkout.success} element={<StripeSuccessLazy />} />
          <Route path={checkout.cancelled} element={<StripeCancelledLazy />} />
          <Route path="*" element={<Navigate to={home} replace />} />
        </Route>
        <Route path="*" element={<Navigate to={home} replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
