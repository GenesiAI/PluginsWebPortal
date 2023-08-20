import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import * as React from "react";
import Logout from "./Actions/Logout";
import Unsubscribe from "./Actions/Unsubscribe";
import Upgrade from "./Actions/Upgrade";

const Flyout = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const actions = React.useMemo(
    () => [<Logout />, <Unsubscribe />, <Upgrade />],
    []
  );

  return (
    <>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="User info tooltip"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        hidden={false}
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
