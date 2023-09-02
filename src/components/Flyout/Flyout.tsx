import SpeedDial from "@mui/material/SpeedDial";
import LogoFallback from "img/Logo.png";
import useActions from "./useActions";

const sx = { position: "absolute", bottom: 16, right: 16 };

const Flyout = () => {
  const { actions, photoUrl, handleClose, handleOpen, open, activeFlyout } =
    useActions();
  return (
    <>
      <SpeedDial
        ariaLabel="User info tooltip"
        sx={sx}
        icon={
          <img
            className="aspect-square bg-no-repeat bg-contain w-full rounded-full animate-pulse"
            src={photoUrl || LogoFallback}
            srcSet={photoUrl || LogoFallback}
            referrerPolicy="no-referrer"
            alt=""
            loading="lazy"
            aria-hidden="true"
          ></img>
        }
        hidden={!activeFlyout}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions}
      </SpeedDial>
    </>
  );
};

export default Flyout;
