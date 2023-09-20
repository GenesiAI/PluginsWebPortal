import { Avatar, IconButton, Menu, Tooltip } from "@mui/material";
import LogoFallback from "img/UserWithoutImage.svg";
import { ComponentProps } from "react";
import useActions from "./useActions";

type TyMenu = ComponentProps<typeof Menu>;
const PopoverClassesPaperStyle: TyMenu["PopoverClasses"] = {
  paper: "bg-primary"
};
const TransformOriginStyle: TyMenu["transformOrigin"] = {
  vertical: "bottom",
  horizontal: "right"
};
const AnchorOriginStyle: TyMenu["anchorOrigin"] = {
  vertical: "top",
  horizontal: "right"
};
const TransformOriginStyleXs: TyMenu["transformOrigin"] = {
  vertical: "top",
  horizontal: "center"
};
const AnchorOriginStyleXs: TyMenu["anchorOrigin"] = {
  vertical: "bottom",
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
    isMd
  } = useActions();

  return (
    <>
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
        anchorOrigin={isMd ? TransformOriginStyle : TransformOriginStyleXs}
        transformOrigin={isMd ? AnchorOriginStyle : AnchorOriginStyleXs}
        open={Boolean(anchorElUser)}
        onClose={handleClose}
        disableScrollLock
        PopoverClasses={PopoverClassesPaperStyle}
        MenuListProps={MenuListPropsStyle}
      >
        {actions}
      </Menu>
    </>
  );
};

export default AfterLogin;
