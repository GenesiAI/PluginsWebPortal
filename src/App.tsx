import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";

import Flyout from "components/Flyout";
import "./App.css";
import AppRouter from "./AppRouter";

const App: React.FC = () => (
  <div className="flex justify-between flex-col min-h-screen">
    <div>
      <Header />
      <Flyout />
      <AppRouter />
    </div>
    <Footer />
  </div>
);

export default App;
