import { Box, CircularProgress } from "@mui/material";
import classNames from "classnames";
import Typography from "./Typography";
type InputProps = {
  removeText?: boolean;
  fullScreen?: boolean;
  className?: string;
};
const LoadingSpinner = ({ removeText, fullScreen, className }: InputProps) => (
  <Box
    className={classNames(
      "flex flex-col items-center justify-center",
      fullScreen && "h-screen",
      className
    )}
  >
    <CircularProgress />
    {!removeText && (
      <Typography className="text-primary">Loading...</Typography>
    )}
  </Box>
);
export default LoadingSpinner;
