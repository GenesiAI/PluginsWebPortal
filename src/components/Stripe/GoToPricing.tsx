import Button from "components/Button";
import { pricing } from "const/urls";
import { useNavigate } from "react-router-dom";

const GoToPricing = () => {
  const navigate = useNavigate();
  return (
    <Button
      type="button"
      color="primary"
      onClick={() => navigate(`/${pricing}`)}
    >
      Go to pricing page
    </Button>
  );
};

export default GoToPricing;
