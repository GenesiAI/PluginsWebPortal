import { Button } from "@mui/material";
import { yourPlugins } from "const/urls";
import { useNavigate } from "react-router-dom";

const GoToPlugins = () => {
  const navigate = useNavigate();
  return (
    <Button
      type="button"
      variant="contained"
      color="primary"
      onClick={() => navigate(`/${yourPlugins}`, { replace: true })}
    >
      Go to your plugins
    </Button>
  );
};

export default GoToPlugins;
