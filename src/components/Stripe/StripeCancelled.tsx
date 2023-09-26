import { Typography } from "@mui/material";
import GoToPlugins from "./GoToPlugins";
import GoToPricing from "./GoToPricing";

const StripeCancelled = () => {
  return (
    <>
      {/* <BoxContainer> */}
      <Typography variant="h3" color="error" className="text-center !mt-6">
        {"Something went wrong, please retry."}
      </Typography>
      {/* </BoxContainer> */}
      <div className="mt-24 flex justify-center gap-4">
        <GoToPricing />
        <GoToPlugins />
      </div>
    </>
  );
};

export default StripeCancelled;
