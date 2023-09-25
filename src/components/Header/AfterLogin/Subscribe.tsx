import { UserInfo } from "apis/api";
import { pricing } from "const/urls";
import ActionItem from "./ActionItem";
import ActionNavigate from "./ActionNavigate";
type InputProps = {
  handleClose: () => void;
  userInfo: UserInfo;
};

const Subscribe = ({ handleClose, userInfo }: InputProps) => {
  return userInfo.isPremium ? (
    <ActionItem onClick={handleClose}>Unsubscribe</ActionItem>
  ) : (
    <ActionNavigate text="Upgrade" to={`/${pricing}`} />
  );
};

export default Subscribe;
