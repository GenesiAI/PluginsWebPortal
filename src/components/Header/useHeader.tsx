import { useUserInfoCtx } from "components/UserInfo/UserInfo";
import React from "react";

const loggedInPages = ["Your Plugins", "Support", "Contacts"];
const loggedOutPages = ["Support", "Contacts"];

const useHeader = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const { handleLogin, handleLogout, isLogged } = useUserInfoCtx();
  return {
    handleLogin,
    handleLogout,
    handleCloseNavMenu,
    handleOpenNavMenu,
    anchorElNav,
    links: isLogged ? loggedInPages : loggedOutPages,
    isLogged
  };
};

export default useHeader;
