import { useScreenCtx } from "components/Screen/ScreenCtx";
import { useUserInfoCtx } from "components/UserInfo/UserInfo";
import React, { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useHeader = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const { pathname } = useLocation();

  const { handleLogin, handleLogout, isLogged, isLoadingUser } =
    useUserInfoCtx();
  const { isMd } = useScreenCtx();

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
  useEffect(() => {
    handleCloseNavMenu();
  }, [pathname]);

  return {
    handleLogin,
    handleLogout,
    handleCloseNavMenu,
    handleOpenNavMenu,
    anchorElNav,
    isLogged,
    isLoadingUser
  };
};

export default useHeader;
