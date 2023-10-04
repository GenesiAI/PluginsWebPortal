import Button from "components/Button";
import { useUserInfoCtx } from "components/UserInfo/UserInfo";

const GoToPlugins = () => {
  const { handleLogin } = useUserInfoCtx();
  return (
    <Button type="button" color="primary" onClick={handleLogin}>
      Go to your plugins
    </Button>
  );
};

export default GoToPlugins;
