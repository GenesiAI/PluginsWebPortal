import React from "react";
import { Navigate } from "react-router-dom";
import { useUserInfoCtx } from "./UserInfo/UserInfo";

type InputProps = {
  children: React.ReactNode;
};
const ProtectedRoute = ({ children }: InputProps) => {
  const { isLogged } = useUserInfoCtx();
  return isLogged ? <>{children}</> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
