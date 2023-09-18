import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Drawer } from "@mui/material";
import Button from "components/Button";
import { memo, useEffect, useState } from "react";
import ChatContainer from "./ChatContainer";

const ChatLayoutMobile = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
    document.body.classList.add("overflow-y-hidden");
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    document.body.classList.remove("overflow-y-hidden");
  };

  useEffect(() => {
    if (anchorElNav) {
      return () => document.body.classList.remove("overflow-y-hidden");
    }
  }, [anchorElNav]);

  return (
    <>
      <Button onClick={handleOpenNavMenu} className="float-right">
        OPEN CHAT
      </Button>
      <Drawer
        anchor="right"
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        PaperProps={{ className: "w-screen" }}
        disableScrollLock
      >
        <div className="mt-[4rem] overflow-y-hidden">
          <Button
            onClick={handleCloseNavMenu}
            className="m-0 sm:mt-4 px-0 py-1 absolute right-2"
          >
            <KeyboardDoubleArrowRightIcon className="m-0" />
          </Button>
          <ChatContainer />
        </div>
      </Drawer>
    </>
  );
};

export default memo(ChatLayoutMobile);
