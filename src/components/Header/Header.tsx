import { Box } from "@mui/material";
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
    <AppBar className="sticky top-0 h-[4.375rem] bg-white px-12 py-3 grid grid-rows-1 grid-cols-2 md:grid-cols-12 items-center shadow-[0_2px_8px_0px_rgba(0,0,0,0.3)] w-screen whitespace-nowrap">
      <Title {...props} />
      <HeaderXs {...props} />
      <div className="md:flex gap-4 hidden col-span-8 justify-center">
        <PrintLinks {...props} />
      </div>
      <Box className="justify-self-end col-span-2 hidden md:block">
        <LoginSection {...props} />
      </Box>
    </AppBar>
  );
};

export default memo(Header);
