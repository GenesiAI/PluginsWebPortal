import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactsPage from "./pages/Contacts";
import Header from "./components/Header";
import YourPlugins from "./pages/YourPlugins";
import LoadingSpinner from "./components/LoadingSpinner";
import PluginEditor from "./pages/PluginEditor";
import Home from "./pages/Home";
import { Container } from "@mui/material";
import Support from "./pages/Support";
import { onAuthStateChanged } from "firebase/auth";
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
            <Container maxWidth="md" sx={someBasicStyle}>
              <YourPlugins />
            </Container>
          }
        />
        <Route
          path="/contacts"
          element={
            <Container maxWidth="md">
              <ContactsPage />
            </Container>
          }
        />
        <Route
          path="/plugin/:guid"
          element={
            <Container maxWidth="md">
              <PluginEditor />
            </Container>
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
