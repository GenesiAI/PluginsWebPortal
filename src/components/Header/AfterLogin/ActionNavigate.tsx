import { useNavigate } from "react-router-dom";
import { useHeaderCtx } from "../HeaderCtx";
import ActionItem from "./ActionItem";

type InputProps = {
  text: string;
  to: string;
  onClick: () => void;
};
const ActionNavigate = ({ text, to, onClick }: InputProps) => {
  const navigate = useNavigate();
  const { handleCloseNavMenu } = useHeaderCtx();

  return (
    <ActionItem
      onClick={() => {
        navigate(to);
        handleCloseNavMenu();
        onClick();
      }}
    >
      {text}
    </ActionItem>
  );
};

export default ActionNavigate;
