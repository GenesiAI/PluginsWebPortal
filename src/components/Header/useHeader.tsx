import { useScreenCtx } from "components/Screen/ScreenCtx";
import React, { useCallback, useEffect } from "react";

const useHeader = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
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

  return {
    handleCloseNavMenu,
    handleOpenNavMenu,
    anchorElNav
  };
};

export default useHeader;
