import { Typography } from "@mui/material";
import ReactConfetti from "react-confetti";
import { useWindowSize } from "react-use";
import GoToPlugins from "./GoToPlugins";

const StripeSuccess = () => {
  const { width, height } = useWindowSize();
  return (
    <>
      {/* <BoxContainer> */}
      <ReactConfetti width={width} height={height} />
      <Typography variant="h3" color="success" className="text-center !mt-6">
        You are successful subscript the premium plan
      </Typography>
      {/* </BoxContainer> */}
      <div className="mt-24 flex justify-center">
        <GoToPlugins />
      </div>
    </>
  );
};

export default StripeSuccess;
