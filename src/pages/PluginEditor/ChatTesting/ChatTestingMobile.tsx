import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { Drawer } from "@mui/material";
import Button from "components/Button";
import { memo, useState } from "react";
import ChatContainer from "./ChatContainer";

const ChatTestingMobile = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Button onClick={handleOpenNavMenu} className="float-right">
        OPEN CHAT
      </Button>
      <Drawer
        anchor="right"
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        PaperProps={{ className: "w-[80vw]" }}
        disableScrollLock
      >
        <div className="mt-[4rem] overflow-y-hidden">
          <Button
            startIcon={<KeyboardDoubleArrowLeftIcon />}
            onClick={handleCloseNavMenu}
            className="m-0 me-1 sm:mt-4 px-0 py-1 shadow-none absolute right-0"
          />
          <div className="h-[calc(100vh-4rem)] pt-8">
            <ChatContainer />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default memo(ChatTestingMobile);
