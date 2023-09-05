// LoadingSpinner.js
import { Box, CircularProgress, Typography } from "@mui/material";
type InputProps = {
  removeText?: boolean;
};
const LoadingSpinner = ({ removeText }: InputProps) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }}
  >
    <CircularProgress />
    {!removeText && (
      <Typography
        sx={{
          textAlign: "center",
          fontSize: 24,
          marginTop: 2,
          fontWeight: "bold",
          color: (theme) => theme.palette.primary.main
        }}
      >
        Loading...
      </Typography>
    )}
  </Box>
);
export default LoadingSpinner;
