import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { SpeedDialAction } from "@mui/material";
import { useUserInfoCtx } from "components/UserInfo/UserInfo";
import { plugin, yourPlugins } from "const/urls";
import { useCallback, useMemo, useState } from "react";
import { useMatch } from "react-router";
import Subscribe from "./Subscribe";

const useActions = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = useCallback(() => setOpen(false), []);
  const { handleLogout, user, userInfo } = useUserInfoCtx();
  const match1 = !!useMatch(yourPlugins);
  const match2 = !!useMatch(plugin);

  const actions = useMemo(() => {
    return [
      <SpeedDialAction
        key="logout"
        icon={<ExitToAppIcon />}
        tooltipTitle="Logout"
        tooltipOpen
        onClick={() => {
          handleClose();
          handleLogout();
        }}
      />,
      <SpeedDialAction
        key="subscribe"
        icon={<Subscribe handleClose={handleClose} userInfo={userInfo} />}
        tooltipTitle={userInfo.isPremium ? "Unsubscribe" : "Subscribe"}
        tooltipOpen
        onClick={handleClose}
      />
    ];
  }, [handleClose, handleLogout, userInfo]);

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
