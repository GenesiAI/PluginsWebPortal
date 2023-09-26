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
      <main className="flex flex-col justify-between overflow-y-auto">
        <AppRouter />
        <Footer />
      </main>
    </>
  );
};

export default memo(App);
