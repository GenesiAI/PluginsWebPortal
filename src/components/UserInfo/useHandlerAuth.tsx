import { UserApi, UserInfo } from "apis/api";
import { yourPlugins } from "const/urls";
import { User, onAuthStateChanged } from "firebase/auth";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, login, logout } from "security/firebase";
import { debugConsole } from "../util";

const useHandlerAuth = () => {
  const [isLoadingUser, setIsLoadingUser] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo>({});
  const userInfoRef = useRef(userInfo);
  userInfoRef.current = userInfo;

  const navigate = useNavigate();

  const getUserData = useCallback(async () => {
    try {
      const userApi = new UserApi();
      const response = await userApi.apiUserGet();
      setUserInfo(response.data);
      return response.data;
    } catch (error) {
      debugConsole("Error fetching users:", error);
    }
  }, []);

  const afterLogin = useCallback(
    async (noRedirect?: boolean | ((user: UserInfo) => boolean)) => {
      try {
        if (!userInfoRef.current) {
          userInfoRef.current = (await getUserData()) || {};
        }

        if (typeof noRedirect === "function") {
          !noRedirect(userInfoRef.current) && navigate(`/${yourPlugins}`);
        } else !noRedirect && navigate(`/${yourPlugins}`);
      } catch (error) {
        debugConsole("Error fetching users:", error);
      }
      setIsLoadingUser(false);
      return userInfoRef.current;
    },
    []
  );

  const manualLogin = useCallback(
    (noRedirect?: boolean | ((user: UserInfo) => boolean)) => {
      return login().then(async (userFirebase) => {
        const userInfo = await afterLogin(noRedirect);
        return { userInfo, userFirebase };
      });
    },
    []
  );
  const handleLogin = useCallback(() => {
    return manualLogin();
  }, [manualLogin]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user != null) {
        afterLogin(true);
      } else {
        setIsLoadingUser(false);
      }
    });
    return unsubscribe;
  }, []);

  return {
    handleLogin,
    manualLogin,
    handleLogout: logout,
    isLoadingUser,
    getUserData,
    user,
    userInfo
  };
};

export default useHandlerAuth;
