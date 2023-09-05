import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import useHeader from "./useHeader";

type InputProps = ReturnType<typeof useHeader>;
const HeaderXs = ({
  anchorElNav,
  handleCloseNavMenu,
  handleLogin,
  handleLogout,
  handleOpenNavMenu,
  links
}: InputProps) => {
  return (
    <Box className="flex md:hidden gap-4 col-span-2 justify-center">
      <IconButton
        size="large"
        aria-label="open drawer"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={anchorElNav ? handleCloseNavMenu : handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        PaperProps={{ className: "w-screen" }}
        disableScrollLock
      >
        aaaaa
      </Drawer>
    </Box>
  );
};

export default HeaderXs;
