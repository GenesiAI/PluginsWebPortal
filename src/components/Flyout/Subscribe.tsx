import UnsubscribeIcon from "@mui/icons-material/Unsubscribe";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { UserInfo } from "apis/api";
import { pricing } from "const/urls";
import { useNavigate } from "react-router-dom";

type InputProps = {
  handleClose: () => void;
  userInfo: UserInfo;
};

const Subscribe = ({ handleClose, userInfo }: InputProps) => {
  // if (isLoading) {
  //   return <LoadingSpinner removeText />;
  // }
  const navigate = useNavigate();

  return userInfo.isPremium ? (
    <>
      <UnsubscribeIcon onClick={handleClose} />
    </>
  ) : (
    <>
      <UpgradeIcon onClick={() => navigate(`/${pricing}`)} />
    </>
  );
};

export default Subscribe;
