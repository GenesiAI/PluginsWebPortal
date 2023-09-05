import UnsubscribeIcon from "@mui/icons-material/Unsubscribe";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { UserInfo } from "apis/api";
import LoadingSpinner from "components/LoadingSpinner";
import { useRedirectToStripe } from "components/Stripe/useRedirectToStripe";

type InputProps = {
  handleClose: () => void;
  userInfo: UserInfo;
};

const Subscribe = ({ handleClose, userInfo }: InputProps) => {
  const { redirectToStripe, isLoading } = useRedirectToStripe();

  if (isLoading) {
    return <LoadingSpinner removeText />;
  }

  return userInfo.isPremium ? (
    <UnsubscribeIcon onClick={handleClose} />
  ) : (
    <UpgradeIcon onClick={redirectToStripe} />
  );
};

export default Subscribe;
