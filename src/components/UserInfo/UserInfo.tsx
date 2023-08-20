import { User, onAuthStateChanged } from "firebase/auth";
import React, {
  createContext,
  memo,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import { auth } from "security/firebase";
import useHandlerAuth from "../useHandlerAuth";

type ctxType = {
  isLoadingUser: boolean;
  isLogged: boolean;
  isPremiumUser: boolean;
  user: User | null;
  handleLogin: () => void;
  handleLogout: () => void;
};

const Ctx = createContext<ctxType>({
  isLoadingUser: false,
  isLogged: false,
  isPremiumUser: false,
  user: null,
  handleLogin: () => {},
  handleLogout: () => {}
});

type InputProps = {
  children: React.ReactNode;
};
const UserInfo = ({ children }: InputProps) => {
  const [isLoadingUser, setIsLoadingUser] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);
  const [isPremiumUser, setIsPremiumUser] = useState<boolean>(false);
  useEffect(() => {
    setIsPremiumUser(false);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoadingUser(false);
      setUser(user);
    });
    return unsubscribe;
  }, []);
  const { handleLogin, handleLogout } = useHandlerAuth();

  const providerValue: ctxType = useMemo(
    () => ({
      isLoadingUser,
      isLogged: user != null,
      user,
      handleLogin,
      handleLogout,
      isPremiumUser
    }),
    [handleLogin, handleLogout, user, isLoadingUser]
  );

  const memoChildren = useMemo(() => children, [children]); // To avoid unless rerender
  return <Ctx.Provider value={providerValue}>{memoChildren}</Ctx.Provider>;
};

export const useUserInfoCtx = () => useContext(Ctx);
export default memo(UserInfo);
