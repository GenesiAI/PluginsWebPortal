import { Button } from "@mui/material";
import { pricing } from "const/urls";
import { useNavigate } from "react-router-dom";

const GoToPricing = () => {
  const navigate = useNavigate();
  return (
    <Button
      type="button"
      variant="contained"
      color="primary"
      onClick={() => navigate(`/${pricing}`)}
    >
      Go to pricing page
    </Button>
  );
};

export default GoToPricing;
