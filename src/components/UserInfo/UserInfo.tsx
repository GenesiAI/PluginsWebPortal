import { UserInfo as UserInfoType } from "apis/api";
import { User } from "firebase/auth";
import React, { createContext, memo, useContext, useMemo } from "react";
import useHandlerAuth from "../useHandlerAuth";

type ctxType = {
  isLoadingUser: boolean;
  isLogged: boolean;
  userInfo: UserInfoType;
  user: User | null;
  handleLogin: () => void;
  handleLogout: () => void;
};

const Ctx = createContext<ctxType>({
  isLoadingUser: false,
  isLogged: false,
  userInfo: {},
  user: null,
  handleLogin: () => {},
  handleLogout: () => {}
});

type InputProps = {
  children: React.ReactNode;
};
const UserInfo = ({ children }: InputProps) => {
  const { handleLogin, handleLogout, isLoadingUser, userInfo, user } =
    useHandlerAuth();

  const providerValue: ctxType = useMemo(
    () => ({
      isLoadingUser,
      isLogged: user != null,
      user,
      handleLogin,
      handleLogout,
      userInfo
    }),
    [handleLogin, handleLogout, user, userInfo, isLoadingUser]
  );

  const memoChildren = useMemo(() => children, [children]); // To avoid unless rerender
  return <Ctx.Provider value={providerValue}>{memoChildren}</Ctx.Provider>;
};

export const useUserInfoCtx = () => useContext(Ctx);
export default memo(UserInfo);
