import { Box, Typography } from "@mui/material";
import React from "react";

const UseCases: React.FC = () => {
  return (
    <Box
      alignItems="center"
      sx={{
        backgroundColor: "#f0f00",
        padding: { xs: "1rem", sm: "1rem", md: "2rem" },
        justifyContent: "center",
        fontSize: { xs: "1.5rem", sm: "2rem" }
      }}
    >
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          color: "#6360FF",
          fontWeight: "bold",
          fontSize: { xs: "2rem", sm: "3rem", md: "3rem" },
          margin: { xs: "1rem 0", sm: "2rem 0", md: "2rem" }
        }}
      >
        <span style={{ fontWeight: "bold" }}>
          Discover the potential for your business
        </span>
      </Typography>
    </Box>
  );
};

export default UseCases;
