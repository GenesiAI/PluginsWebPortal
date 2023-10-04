import { UserInfo } from "apis/api";
import { useUnsubscribeToStripe } from "components/Stripe/useUnsubscribeToStripe";
import { pricing } from "const/urls";
import ActionItem from "./ActionItem";
import ActionNavigate from "./ActionNavigate";
type InputProps = {
  handleClose: () => void;
  userInfo: UserInfo;
};

const Subscribe = ({ handleClose, userInfo }: InputProps) => {
  const { openModal, renderUnsubscribe } = useUnsubscribeToStripe({
    onCloseModal: handleClose
  });
  return userInfo.isPremium ? (
    <>
      <ActionItem onClick={openModal}>Unsubscribe</ActionItem>
      {renderUnsubscribe}
    </>
  ) : (
    <ActionNavigate text="Upgrade" to={`/${pricing}`} onClick={handleClose} />
  );
};

export default Subscribe;
