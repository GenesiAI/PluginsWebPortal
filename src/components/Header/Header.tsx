import AppBar from "@mui/material/AppBar";
import { memo } from "react";
import HeaderMd from "./HeaderMd";
// import HeaderXs from "./HeaderXs";
import Title from "./Title";
import useHeader from "./useHeader";

const Header = () => {
  const props = useHeader();

  return (
    <AppBar className="sticky bg-white px-12 py-4 flex shadow-[0_2px_8px_0px_rgba(0,0,0,0.3)]">
      <Title />
      {/* <HeaderXs {...props} /> */}
      <HeaderMd {...props} />
    </AppBar>
  );
};

export default memo(Header);
