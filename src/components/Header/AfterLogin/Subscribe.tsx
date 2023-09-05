import { CircularProgress } from "@mui/material";
import { UserInfo } from "apis/api";
import { useRedirectToStripe } from "components/Stripe/useRedirectToStripe";
import { TransitionGroup } from "react-transition-group";
import ActionItem from "./ActionItem";
type InputProps = {
  handleClose: () => void;
  userInfo: UserInfo;
};

const Subscribe = ({ handleClose, userInfo }: InputProps) => {
  const { redirectToStripe, isLoading, modalError } = useRedirectToStripe();
  return userInfo.isPremium ? (
    <ActionItem onClick={handleClose}>Unsubscribe</ActionItem>
  ) : (
    <ActionItem onClick={redirectToStripe}>
      {modalError}
      <TransitionGroup>
        {isLoading && (
          <CircularProgress
            key="progress"
            size="1.2rem"
            className="text-white align-middle mr-2"
          />
        )}
        Upgrade
      </TransitionGroup>
    </ActionItem>
  );
};

export default Subscribe;
