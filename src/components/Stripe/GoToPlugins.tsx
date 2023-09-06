import { Button } from "@mui/material";
import { useUserInfoCtx } from "components/UserInfo/UserInfo";

const GoToPlugins = () => {
  const { handleLogin } = useUserInfoCtx();
  return (
    <Button
      type="button"
      variant="contained"
      color="primary"
      onClick={handleLogin}
    >
      Go to your plugins
    </Button>
  );
};

export default GoToPlugins;
