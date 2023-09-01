import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import UnsubscribeIcon from "@mui/icons-material/Unsubscribe";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { SpeedDialAction } from "@mui/material";
import { useUserInfoCtx } from "components/UserInfo/UserInfo";
import { plugin, yourPlugins } from "const/urls";
import { useCallback, useMemo, useState } from "react";
import { useMatch, useNavigate } from "react-router";

const useActions = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = useCallback(() => setOpen(false), []);
  const { handleLogout, user, userInfo } = useUserInfoCtx();
  const navigate = useNavigate();
  const match1 = !!useMatch(yourPlugins);
  const match2 = !!useMatch(plugin);

  const actions = useMemo(() => {
    const onClick = (action: "UPGRADE" | "UNSUBSCRIBE" | "LOGOUT") => {
      if (action === "UPGRADE") {
        handleClose();
        navigate("./checkout?unsubscribe=true");
      } else if (action === "LOGOUT") {
        handleClose();
        handleLogout();
      } else if (action === "UNSUBSCRIBE") {
        handleClose();
        navigate("./checkout?unsubscribe=true");
      }
    };

    return [
      <SpeedDialAction
        key="logout"
        icon={<ExitToAppIcon />}
        tooltipTitle="Logout"
        tooltipOpen
        onClick={() => onClick("LOGOUT")}
      />,
      userInfo.isPremium ? (
        <SpeedDialAction
          key="Unsubscribe"
          icon={<UnsubscribeIcon />}
          tooltipTitle="Unsubscribe"
          tooltipOpen
          onClick={() => onClick("UNSUBSCRIBE")}
        />
      ) : (
        <SpeedDialAction
          key="Upgrade"
          icon={<UpgradeIcon />}
          tooltipTitle="Upgrade"
          tooltipOpen
          onClick={() => onClick("UPGRADE")}
        />
      )
    ];
  }, [handleClose, handleLogout]);

  return {
    actions,
    photoUrl: user?.photoURL,
    handleOpen,
    handleClose,
    open,
    activeFlyout: match1 || match2
  };
};

export default useActions;
