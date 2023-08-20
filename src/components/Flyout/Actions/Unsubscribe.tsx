import UnsubscribeIcon from "@mui/icons-material/Unsubscribe";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { useCallback } from "react";
import { useNavigate } from "react-router";

const Unsubscribe = () => {
  const navigate = useNavigate();
  const onClick = useCallback(() => {
    navigate("./checkout?unsub=true");
  }, []);
  const isPremium = true;

  return (
    <SpeedDialAction
      icon={<UnsubscribeIcon />}
      tooltipTitle="Unsubscribe"
      tooltipOpen={isPremium}
      onClick={onClick}
    />
  );
};

export default Unsubscribe;
