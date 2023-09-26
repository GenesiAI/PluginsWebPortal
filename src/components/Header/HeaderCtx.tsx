import { createContext, memo, useContext, useMemo } from "react";
import Header from "./Header";
import useHeader from "./useHeader";

type ctx = ReturnType<typeof useHeader>;

const Ctx = createContext<ctx>({
  anchorElNav: null,
  handleCloseNavMenu: () => {},
  handleOpenNavMenu: () => {}
});

const HeaderCtx = () => {
  const { anchorElNav, handleCloseNavMenu, handleOpenNavMenu } = useHeader();

  const memo: ctx = useMemo(
    () => ({
      anchorElNav,
      handleCloseNavMenu,
      handleOpenNavMenu
    }),
    [anchorElNav, handleCloseNavMenu, handleOpenNavMenu]
  );

  return (
    <Ctx.Provider value={memo}>
      <Header />
    </Ctx.Provider>
  );
};

export const useHeaderCtx = () => useContext(Ctx);
export default memo(HeaderCtx);
