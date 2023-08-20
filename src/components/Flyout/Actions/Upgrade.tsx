import UpgradeIcon from "@mui/icons-material/Upgrade";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { useCallback } from "react";
import { useNavigate } from "react-router";

const Upgrade = () => {
  const navigate = useNavigate();
  const onClick = useCallback(() => {
    navigate("./checkout");
  }, []);
  const isPremium = false;

  return (
    <SpeedDialAction
      icon={<UpgradeIcon />}
      tooltipTitle="Upgrade"
      tooltipOpen={isPremium}
      onClick={onClick}
    />
  );
};

export default Upgrade;
