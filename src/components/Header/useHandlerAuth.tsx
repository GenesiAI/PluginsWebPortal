import { useNavigate } from "react-router-dom";
import { login, logout } from "security/firebase";

const useHandlerAuth = () => {
  const navigate = useNavigate();

  const handleLogin = () => login().then(() => navigate("/your-plugins"));
  const handleLogout = () =>
    logout().then(() => {
      navigate("/");
    });

  return {
    handleLogin,
    handleLogout
  };
};

export default useHandlerAuth;
