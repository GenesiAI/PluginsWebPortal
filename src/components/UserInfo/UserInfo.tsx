import React, { createContext, memo, useContext, useMemo } from "react";
import useHandlerAuth from "./useHandlerAuth";

type ctxType = {
  isLoadingUser: boolean;
  isLogged: boolean;
  userInfo: ReturnType<typeof useHandlerAuth>["userInfo"];
  user: ReturnType<typeof useHandlerAuth>["user"];
  manualLogin: ReturnType<typeof useHandlerAuth>["manualLogin"];
  handleLogin: ReturnType<typeof useHandlerAuth>["handleLogin"];
  handleLogout: ReturnType<typeof useHandlerAuth>["handleLogout"];
  getUserData: ReturnType<typeof useHandlerAuth>["getUserData"];
};

const Ctx = createContext<ctxType>({
  isLoadingUser: false,
  isLogged: false,
  userInfo: {},
  user: null,
  manualLogin: async () => {
    throw new Error("Outside context");
  },
  handleLogin: async () => {
    throw new Error("Outside context");
  },
  handleLogout: async () => {},
  getUserData: async () => {
    throw new Error("Outside context");
  }
});

type InputProps = {
  children: React.ReactNode;
};
const UserInfo = ({ children }: InputProps) => {
  const {
    handleLogin,
    handleLogout,
    manualLogin,
    isLoadingUser,
    userInfo,
    user,
    getUserData
  } = useHandlerAuth();

  const providerValue: ctxType = useMemo(
    () => ({
      isLoadingUser,
      isLogged: user != null,
      user,
      handleLogin,
      handleLogout,
      userInfo,
      manualLogin,
      getUserData
    }),
    [
      handleLogin,
      handleLogout,
      manualLogin,
      user,
      userInfo,
      isLoadingUser,
      getUserData
    ]
  );

  const memoChildren = useMemo(() => children, [children]); // To avoid unless rerender
  return <Ctx.Provider value={providerValue}>{memoChildren}</Ctx.Provider>;
};

export const useUserInfoCtx = () => useContext(Ctx);
export default memo(UserInfo);
