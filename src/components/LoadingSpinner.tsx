import { Box, CircularProgress } from "@mui/material";
import classNames from "classnames";
import Typography from "./Typography";
type InputProps = {
  removeText?: boolean;
  fullScreen?: boolean;
};
const LoadingSpinner = ({ removeText, fullScreen }: InputProps) => (
  <Box
    className={classNames(
      "flex flex-col justify-center items-center",
      fullScreen && "h-screen"
    )}
  >
    <CircularProgress />
    {!removeText && (
      <Typography className="text-primary">Loading...</Typography>
    )}
  </Box>
);
export default LoadingSpinner;
