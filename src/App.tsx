import Footer from "components/Footer";
import Header from "components/Header";

import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { memo, useEffect, useRef } from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import "./Tailwind.css";

const App = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ps = new PerfectScrollbar(ref.current!);
    return () => ps.destroy();
  }, []);

  return (
    <>
      <Header />
      <div ref={ref} className="h-full relative">
        <div
          // className="flex justify-between flex-col h-full absolute min-h-screen"
          className="h-full absolute"
        >
          <AppRouter />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default memo(App);
