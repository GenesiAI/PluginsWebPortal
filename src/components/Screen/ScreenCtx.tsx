import { useMediaQuery } from "@mui/material";
import { Theme } from "@mui/system";
import React, { createContext, memo, useContext, useMemo } from "react";

type ctxScreen = {
  isMd: boolean;
};

const CtxScreen = createContext<ctxScreen>({
  isMd: false
});

type InputProps = {
  children: React.ReactNode;
};
const ScreenCtx = ({ children }: InputProps) => {
  const isMd = useMediaQuery<Theme>((theme) => theme.breakpoints.up("md"));

  const providerValueScreen: ctxScreen = useMemo(
    () => ({
      isMd
    }),
    [isMd]
  );

  const memoChildren = useMemo(() => children, [children]); // To avoid unless rerender
  return (
    <CtxScreen.Provider value={providerValueScreen}>
      {memoChildren}
    </CtxScreen.Provider>
  );
};

export const useScreenCtx = () => useContext(CtxScreen);
export default memo(ScreenCtx);
