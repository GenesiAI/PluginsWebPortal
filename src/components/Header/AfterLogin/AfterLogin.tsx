import { Avatar, Box, IconButton, Menu, Tooltip } from "@mui/material";
import LoadingSpinner from "components/LoadingSpinner";
import LogoFallback from "img/UserWithoutImage.svg";
import { ComponentProps } from "react";
import useActions from "./useActions";

type TyMenu = ComponentProps<typeof Menu>;
const PopoverClassesPaperStyle: TyMenu["PopoverClasses"] = {
  paper: "bg-primary"
};
const TransformOriginStyle: TyMenu["transformOrigin"] = {
  vertical: "bottom",
  horizontal: "left"
};
const AnchorOriginStyle: TyMenu["anchorOrigin"] = {
  vertical: "top",
  horizontal: "center"
};
const MenuListPropsStyle: TyMenu["MenuListProps"] = {
  className: "px-2"
};
const AfterLogin = () => {
  const {
    actions,
    photoUrl,
    handleClose,
    handleOpen,
    anchorElUser,
    displayName,
    isLoadingUser
  } = useActions();

  if (isLoadingUser) {
    return (
      <Box className="w-min justify-self-end col-span-2">
        <LoadingSpinner removeText />
      </Box>
    );
  }
  return (
    <Box className="w-min justify-self-end col-span-2">
      <Tooltip title="Open menu">
        <IconButton onClick={handleOpen}>
          <Avatar
            className="bg-primary text-white"
            alt={displayName || "user img"}
            src={photoUrl || LogoFallback}
          />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorElUser}
        anchorOrigin={TransformOriginStyle}
        transformOrigin={AnchorOriginStyle}
        open={Boolean(anchorElUser)}
        onClose={handleClose}
        disableScrollLock
        PopoverClasses={PopoverClassesPaperStyle}
        MenuListProps={MenuListPropsStyle}
      >
        {actions}
      </Menu>
    </Box>
  );
};

export default AfterLogin;
