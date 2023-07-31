import { UserApi, UserInfo } from "apis/api";
import { User, onAuthStateChanged } from "firebase/auth";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, login, logout } from "security/firebase";
import { debugConsole } from "../util";

const useHandlerAuth = () => {
  const [isLoadingUser, setIsLoadingUser] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo>({});
  const navigate = useNavigate();

  const afterLogin = useCallback(async () => {
    const userApi = new UserApi();
    try {
      const response = await userApi.apiUserGet();
      setUserInfo(response.data);
    } catch (error) {
      debugConsole("Error fetching users:", error);
    }
    setIsLoadingUser(false);
    navigate("your-plugins");
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user != null) {
        afterLogin();
      } else {
        navigate("/");
        setIsLoadingUser(false);
      }
    });
    return unsubscribe;
  }, []);

  return {
    handleLogin: login,
    handleLogout: logout,
    isLoadingUser,
    user,
    userInfo
  };
};

export default useHandlerAuth;