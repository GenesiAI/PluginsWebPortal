import { useScreenCtx } from "components/Screen/ScreenCtx";
import { useUserInfoCtx } from "components/UserInfo/UserInfo";
import { pluginBuilder, yourPlugins } from "const/urls";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useHeaderCtx } from "../HeaderCtx";
import ActionItem from "./ActionItem";
import ActionNavigate from "./ActionNavigate";
import Subscribe from "./Subscribe";

const useActions = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const { handleCloseNavMenu } = useHeaderCtx();
  const { handleLogout, user, userInfo } = useUserInfoCtx();
  const { isMd } = useScreenCtx();
  const isMdOldValueRef = useRef(isMd);

  const handleOpen = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  }, []);
  const handleClose = useCallback(() => {
    setAnchorElUser(null);
    handleCloseNavMenu();
  }, [handleCloseNavMenu]);

  useEffect(() => {
    if (isMd !== isMdOldValueRef.current && anchorElUser) {
      isMdOldValueRef.current = isMd;
      handleClose();
    }
  }, [isMd, anchorElUser]);

  const actions = useMemo(() => {
    return [
      <Subscribe
        key="subscribe"
        handleClose={handleClose}
        userInfo={userInfo}
      />,
      <div key="sep1" className="h-px w-full bg-white"></div>,
      <ActionNavigate
        key="NewPlugin"
        text="New Plugins"
        to={`/${pluginBuilder("new")}`}
      />,
      <div key="sep2" className="h-px w-full bg-white"></div>,
      <ActionNavigate
        key="YourPlugins"
        text="Your Plugins"
        to={`/${yourPlugins}`}
      />,
      <div key="sep3" className="h-px w-full bg-white"></div>,
      <ActionItem
        key="logout"
        onClick={() => {
          handleClose();
          handleLogout();
        }}
        colorStyle="text-dangerLight"
      >
        Log Out
      </ActionItem>
    ];
  }, [handleClose, handleLogout, handleCloseNavMenu, userInfo]);

  return {
    actions,
    photoUrl: user?.photoURL,
    displayName: user?.displayName,
    handleOpen,
    handleClose,
    anchorElUser,
    isMd
  };
};

export default useActions;
