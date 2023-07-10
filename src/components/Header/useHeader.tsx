import { User, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, login, logout } from "security/firebase";

const loggedInPages = ["Your Plugins", "Support", "contacts", "Logout"];
const loggedOutPages = ["contacts", "Support", "Login"];

const useHeader = () => {
  const navigate = useNavigate();
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

  const handleLogin = () => login().then(() => navigate("your-plugins"));
  const handleLogout = async () =>
    logout().then(() => {
      setUser(null);
      navigate("/");
    });

  return {
    handleLogin,
    handleLogout,
    handleCloseNavMenu,
    handleOpenNavMenu,
    user,
    anchorElNav,
    links: user ? loggedInPages : loggedOutPages
  };
};

export default useHeader;
