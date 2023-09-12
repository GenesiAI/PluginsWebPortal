import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { ComponentProps } from "react";
import LoginSection from "./LoginSection";
import PrintLinks from "./PrintLinks";
import useHeader from "./useHeader";

const PaperDrawerStyles: ComponentProps<typeof Drawer>["PaperProps"] = {
  className:
    "w-screen h-screen pt-[5rem] pb-5 px-5 flex flex-col justify-between"
};

type InputProps = ReturnType<typeof useHeader>;
const HeaderXs = (props: InputProps) => {
  const { anchorElNav, handleCloseNavMenu, handleOpenNavMenu } = props;
  return (
    <Box className="flex md:hidden gap-4 col-span-1 justify-end">
      <IconButton
        size="large"
        aria-label="open drawer"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={anchorElNav ? handleCloseNavMenu : handleOpenNavMenu}
        className="text-black"
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        PaperProps={PaperDrawerStyles}
        disableScrollLock
      >
        <div className="flex gap-4 flex-col">
          <PrintLinks {...props} />
        </div>
        <LoginSection {...props} />
      </Drawer>
    </Box>
  );
};

export default HeaderXs;
