import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { motion, Variants } from "framer-motion";
import { ComponentProps } from "react";
import LoginSection from "./LoginSection";
import PrintLinks from "./PrintLinks";
import useHeader from "./useHeader";

const PaperDrawerStyles: ComponentProps<typeof Drawer>["PaperProps"] = {
  className:
    "w-screen h-[100svh] pt-[5rem] pb-5 px-5 flex flex-col justify-between items-center"
};

// Define your animation states
const iconVariants: Variants = {
  open: { rotate: 0 },
  closed: { rotate: 180 }
};

type InputProps = ReturnType<typeof useHeader>;
const HeaderXs = (props: InputProps) => {
  const { anchorElNav, handleCloseNavMenu, handleOpenNavMenu } = props;
  return (
    <Box className="col-span-1 flex justify-end gap-4 md:hidden">
      <IconButton
        size="large"
        aria-label="open drawer"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={anchorElNav ? handleCloseNavMenu : handleOpenNavMenu}
        className="text-black"
      >
        <motion.div
          animate={anchorElNav ? "open" : "closed"}
          variants={iconVariants}
        >
          {anchorElNav ? <CloseIcon /> : <MenuIcon />}
        </motion.div>
      </IconButton>
      <Drawer
        anchor="left"
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        PaperProps={PaperDrawerStyles}
        disableScrollLock
      >
        <div className="flex w-full flex-col gap-4">
          <PrintLinks handleCloseNavMenu={props.handleCloseNavMenu} />
        </div>
        <div className="w-full rounded-xl text-center shadow-[0_20px_25px_0] shadow-primary">
          <LoginSection {...props} />
        </div>
      </Drawer>
    </Box>
  );
};

export default HeaderXs;
