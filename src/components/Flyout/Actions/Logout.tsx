import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { useUserInfoCtx } from "components/UserInfo/UserInfo";

const Logout = () => {
  const { handleLogout } = useUserInfoCtx();

  return (
    <SpeedDialAction
      icon={<ExitToAppIcon />}
      tooltipTitle="Logout"
      tooltipOpen
      onClick={handleLogout}
    />
  );
};

export default Logout;
