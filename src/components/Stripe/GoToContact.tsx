import Button from "components/Button";
import { contacts } from "const/urls";
import { useNavigate } from "react-router-dom";

const GoToContact = () => {
  const navigate = useNavigate();
  return (
    <Button
      type="button"
      color="primary"
      variant="darkBg"
      onClick={() => navigate(`/${contacts}`)}
    >
      CONTACT US
    </Button>
  );
};

export default GoToContact;
