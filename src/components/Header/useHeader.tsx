import { useMediaQuery } from "@mui/material";
import { Theme } from "@mui/system";
import { useUserInfoCtx } from "components/UserInfo/UserInfo";
import React, { useCallback, useEffect } from "react";

const Pages = ["Support", "Contacts", "Questions", "Pricing"];

const useHeader = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const isMd = useMediaQuery<Theme>((theme) => theme.breakpoints.up("md"));

  const handleOpenNavMenu = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    },
    []
  );
  const handleCloseNavMenu = useCallback(() => {
    setAnchorElNav(null);
  }, []);

  useEffect(() => {
    if (isMd && anchorElNav) {
      handleCloseNavMenu();
    }
  }, [isMd, anchorElNav]);

  const { handleLogin, handleLogout, isLogged, isLoadingUser } =
    useUserInfoCtx();
  return {
    handleLogin,
    handleLogout,
    handleCloseNavMenu,
    handleOpenNavMenu,
    anchorElNav,
    links: Pages,
    isLogged,
    isLoadingUser
  };
};

export default useHeader;
