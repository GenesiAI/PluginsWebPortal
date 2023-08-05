import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const GoToPlugins = () => {
  const navigate = useNavigate();
  return (
    <Button
      type="button"
      variant="contained"
      color="primary"
      onClick={() => navigate("/your-plugins", { replace: true })}
    >
      Go to your plugins
    </Button>
  );
};

export default GoToPlugins;
