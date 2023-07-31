// LoadingSpinner.js
import { Box, CircularProgress, Typography } from "@mui/material";

const LoadingSpinner = () => (
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
    <Typography
      sx={{
        textAlign: "center",
        fontSize: 24,
        marginTop: 2,
        fontWeight: "bold",
        color: (theme) => theme.palette.primary.main
      }}
    >
      {" "}
      Loading...
    </Typography>
  </Box>
);
export default LoadingSpinner;
