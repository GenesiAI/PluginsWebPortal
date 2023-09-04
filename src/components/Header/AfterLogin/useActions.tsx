import { useUserInfoCtx } from "components/UserInfo/UserInfo";
import { pluginBuilder, yourPlugins } from "const/urls";
import { useCallback, useMemo, useState } from "react";
import ActionItem from "./ActionItem";
import ActionNavigate from "./ActionNavigate";
import Subscribe from "./Subscribe";

const useActions = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpen = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
    document.body.style.paddingRight = "17px";
    document.body.style.overflow = "hidden";
  }, []);
  const handleClose = useCallback(() => {
    setAnchorElUser(null);
    document.body.style.paddingRight = "";
    document.body.style.overflow = "";
  }, []);

  const { handleLogout, user, userInfo, isLoadingUser } = useUserInfoCtx();

  const actions = useMemo(() => {
    return [
      <Subscribe
        key="subscribe"
        handleClose={handleClose}
        userInfo={userInfo}
      />,
      <div key="sep1" className="bg-white h-px w-full"></div>,
      <ActionNavigate
        key="NewPlugin"
        text="New Plugins"
        to={`/${pluginBuilder("new")}`}
      />,
      <div key="sep1" className="bg-white h-px w-full"></div>,
      <ActionNavigate
        key="YourPlugins"
        text="Your Plugins"
        to={`/${yourPlugins}`}
      />,
      <div key="sep1" className="bg-white h-px w-full"></div>,
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
  }, [handleClose, handleLogout, userInfo]);

  return {
    actions,
    photoUrl: user?.photoURL,
    displayName: user?.displayName,
    handleOpen,
    handleClose,
    anchorElUser,
    isLoadingUser
  };
};

export default useActions;
