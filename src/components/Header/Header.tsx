import AppBar from "@mui/material/AppBar";
import { memo } from "react";
import HeaderXs from "./HeaderXs";
import LoginSection from "./LoginSection";
import PrintLinks from "./PrintLinks";
import Title from "./Title";
import useHeader from "./useHeader";

const Header = () => {
  const props = useHeader();
  return (
    <AppBar className="sticky top-0 grid w-screen grid-cols-2 grid-rows-1 items-center whitespace-nowrap bg-white px-12 py-3 shadow-[0_2px_8px_0px_rgba(0,0,0,0.3)] md:grid-cols-12">
      <Title {...props} />
      <HeaderXs {...props} />
      <div className="col-span-8 hidden justify-center gap-4 md:flex">
        <PrintLinks handleCloseNavMenu={props.handleCloseNavMenu} />
      </div>
      <div className="col-span-2 hidden justify-self-end md:block">
        <LoginSection {...props} />
      </div>
    </AppBar>
  );
};

export default memo(Header);
