import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";



const Footer: React.FC = () => {
  const navigate = useNavigate();


  const GoToLogin = async () => {
    navigate("/login");
  };

  return (


<Box
        sx={{
          backgroundColor: "#f5f5f5",
          padding: "2rem",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <RouterLink to="/">
          {" "}
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1.2rem",
              paddingLeft: "1rem",
              paddingRight: "1rem"
            }}
          >
            Home
          </Typography>
        </RouterLink>
        <RouterLink to="/support">
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1.2rem",
              paddingLeft: "1rem",
              paddingRight: "1rem"
            }}
          >
            Support
          </Typography>
        </RouterLink>
        <RouterLink to="/contacts">
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1.2rem",
              paddingLeft: "1rem",
              paddingRight: "1rem"
            }}
          >
            Contact{" "}
          </Typography>
        </RouterLink>
      </Box>

  
  );
};

export default Footer;



