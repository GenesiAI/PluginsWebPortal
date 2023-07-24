import { User, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "security/firebase";
import useHandlerAuth from "./useHandlerAuth";

const loggedInPages = ["Your Plugins", "Support" /*"contacts"*/, "Logout"];
const loggedOutPages = [/*"contacts"*/ "Support", "Login"];

const useHeader = () => {
  const [user, setUser] = useState<User | null>(null);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const { handleLogin, handleLogout } = useHandlerAuth();
  return {
    handleLogin,
    handleLogout,
    handleCloseNavMenu,
    handleOpenNavMenu,
    anchorElNav,
    links: user ? loggedInPages : loggedOutPages
  };
};

export default useHeader;
