import React from "react";
import { Navigate } from "react-router-dom";
import { isAlreadyLogged } from "security/firebase";

type InputProps = {
  children: React.ReactNode;
};
const ProtectedRoute = ({ children }: InputProps) => {
  const isLogged = isAlreadyLogged();
  return isLogged ? <>{children}</> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
