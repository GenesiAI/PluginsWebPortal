import { Container } from "@mui/material";
import ProtectedRoute from "components/ProtectedRoute";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import LoadingSpinner from "./components/LoadingSpinner";
import Home from "./pages/Home";
import PluginEditor from "./pages/PluginEditor";
import Support from "./pages/Support";
import YourPlugins from "./pages/YourPlugins";
import { auth } from "./security/firebase";

const AppRouter: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This function is called when the auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoading(false);
    });
    // Cleanup subscription on unmount
    return unsubscribe;
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const someBasicStyle: any = {
    backgroundColor: (theme: any) => theme.palette.background.paper
  };
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/your-plugins"
          element={
            <ProtectedRoute>
              <Container maxWidth="md" sx={someBasicStyle}>
                <YourPlugins />
              </Container>
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/contacts"
          element={
            <Container maxWidth="md">
              <ContactsPage />
            </Container>
          }
        /> */}
        <Route
          path="/plugin/:guid"
          element={
            <ProtectedRoute>
              <Container maxWidth="md">
                <PluginEditor />
              </Container>
            </ProtectedRoute>
          }
        />
        <Route
          path="/support"
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
