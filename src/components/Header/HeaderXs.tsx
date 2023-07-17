import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
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
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="open drawer"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{ display: { xs: "block", md: "flex" } }}
      >
        {links.map((link) => {
          if (
            link.toLowerCase() === "login" ||
            link.toLowerCase() === "logout"
          ) {
            return (
              <MenuItem
                key={link}
                onClick={
                  link.toLowerCase() === "login" ? handleLogin : handleLogout
                }
              >
                <Typography textAlign="center">{link}</Typography>
              </MenuItem>
            );
          }
          return (
            <MenuItem
              key={link}
              onClick={handleCloseNavMenu}
              component={Link}
              to={`/${link.toLowerCase().replace(" ", "-")}`}
            >
              <Typography textAlign="center">{link}</Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};

export default HeaderXs;
