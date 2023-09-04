import { useUserInfoCtx } from "components/UserInfo/UserInfo";
import React from "react";

const Pages = ["Support", "Contacts", "Questions", "Pricing"];

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
    links: Pages,
    isLogged
  };
};

export default useHeader;
