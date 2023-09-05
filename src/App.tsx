import Footer from "components/Footer";
import Header from "components/Header";

import Flyout from "components/Flyout";
import { memo } from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import "./Tailwind.css";

const App = () => {
  return (
    <div className="flex justify-between flex-col min-h-screen">
      <div>
        <Header />
        <Flyout />
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
};

export default memo(App);
