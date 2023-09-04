import Footer from "components/Footer";
import Header from "components/Header";

import { memo } from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import "./Tailwind.css";

const App = () => {
  return (
    <>
      <Header />
      <div className="flex justify-between flex-col min-h-screen">
        <AppRouter />
        <Footer />
      </div>
    </>
  );
};

export default memo(App);
