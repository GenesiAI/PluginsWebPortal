import { useNavigate } from "react-router-dom";
import ActionItem from "./ActionItem";

type InputProps = {
  text: string;
  to: string;
};
const ActionNavigate = ({ text, to }: InputProps) => {
  const navigate = useNavigate();

  return <ActionItem onClick={() => navigate(to)}>{text}</ActionItem>;
};

export default ActionNavigate;
