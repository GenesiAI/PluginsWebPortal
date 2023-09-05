import AppBar from "@mui/material/AppBar";
import { memo } from "react";
import HeaderMd from "./HeaderMd";
// import HeaderXs from "./HeaderXs";
import HeaderXs from "./HeaderXs";
import RightSide from "./RightSide";
import Title from "./Title";
import useHeader from "./useHeader";

const Header = () => {
  const props = useHeader();

  return (
    <AppBar className="sticky h-[4.375rem] bg-white px-12 py-3 grid grid-rows-1 grid-cols-12 items-center shadow-[0_2px_8px_0px_rgba(0,0,0,0.3)] w-screen">
      <Title />
      <HeaderXs {...props} />
      <HeaderMd {...props} />
      <RightSide {...props} />
    </AppBar>
  );
};

export default memo(Header);
