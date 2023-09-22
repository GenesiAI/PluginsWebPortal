import { useNavigate } from "react-router-dom";
import { useHeaderCtx } from "../HeaderCtx";
import ActionItem from "./ActionItem";

type InputProps = {
  text: string;
  to: string;
};
const ActionNavigate = ({ text, to }: InputProps) => {
  const navigate = useNavigate();
  const { handleCloseNavMenu } = useHeaderCtx();

  return (
    <ActionItem
      onClick={() => {
        navigate(to);
        handleCloseNavMenu();
      }}
    >
      {text}
    </ActionItem>
  );
};

export default ActionNavigate;
