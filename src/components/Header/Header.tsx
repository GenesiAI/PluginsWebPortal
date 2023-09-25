import AppBar from "@mui/material/AppBar";
import { memo } from "react";
import HeaderXs from "./HeaderXs";
import LoginSection from "./LoginSection";
import PrintLinks from "./PrintLinks";
import Title from "./Title";

const Header = () => {
  return (
    <AppBar className="sticky top-0 grid w-screen grid-cols-[auto_auto] grid-rows-1 items-center whitespace-nowrap bg-white px-12 py-3 shadow-[0_2px_8px_0px_rgba(0,0,0,0.3)] md:grid-cols-[auto_minmax(0,1fr)_auto]">
      <Title />
      <HeaderXs />
      <div className="col-span-1 col-start-2 hidden justify-center gap-4 md:flex">
        <PrintLinks />
      </div>
      <div className="col-span-1 col-start-3 hidden justify-self-end md:block">
        <LoginSection />
      </div>
    </AppBar>
  );
};

export default memo(Header);
