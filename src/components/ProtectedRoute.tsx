import { home } from "const/urls";
import React from "react";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import { useUserInfoCtx } from "./UserInfo/UserInfo";

type InputProps = {
  children: React.ReactNode;
};
const ProtectedRoute = ({ children }: InputProps) => {
  const { isLogged, isLoadingUser } = useUserInfoCtx();

  if (isLoadingUser) {
    return <LoadingSpinner fullScreen />;
  }
  return isLogged ? <>{children}</> : <Navigate to={home} replace />;
};

export default ProtectedRoute;
