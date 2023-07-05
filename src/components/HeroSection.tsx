import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";

const HeroSection: React.FC = () => {
  const [, setColorIndex] = useState(0);
  const navigate = useNavigate();

  React.useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => prevIndex + 1);
    }, 150);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const GoToLogin = async () => {
    navigate("/login");
  };

  // const colors = [
  //   "#df66da",
  //   "#d773ec",
  //   "#cf81fe",
  //   "#c48fff",
  //   "#b99ef0",
  //   "#aeade1",
  //   "#a3bcd2",
  //   "#98cbc3",
  //   "#8ddab4",
  //   "#82e9a5",
  //   "#77f896",
  //   "#6cff87",
  //   "#62f678",
  //   "#58ed69",
  //   "#67ea7a",
  //   "#76e78b",
  //   "#85e49c",
  //   "#94e1ad",
  //   "#a3debe",
  //   "#b2dbcf",
  //   "#c1d8e0",
  //   "#d0d5f1",
  //   "#dfcffc",
  //   "#eec8fd",
  //   "#eebaef",
  //   "#eeacdf",
  //   "#ee9ece",
  //   "#ee90bd",
  //   "#ee82ac",
  //   "#ee749b",
  //   "#ee668a",
  //   "#f73da4",
  //   "#ef4bb6",
  //   "#e758c8",
  // ];

  return (
    <>
      <Box margin={{ xs: 2, sm: 6 }}>
        <Typography
          variant="h1"
          align="center"
          sx={{
            fontSize: { xs: "2rem", sm: "5rem" },
            margin: { xs: "1rem 0", sm: "2rem 0" },
            fontFamily: "Paytone One",
            fontWeight: "soft",
          }}
        >
          Think <span style={{ fontWeight: "soft" }}>Innovative</span>.<br /> Be
          part of the{" "}
          <span style={{ color: "#6360FF", fontWeight: "bold" }}>Future.</span>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: { xs: "1rem", sm: "2rem" },
        }}
      >
        <Typography
          maxWidth="800px"
          align="center"
          gutterBottom
          sx={{
            fontSize: { xs: "1.2rem", sm: "1.8rem" },
            lineHeight: { xs: "1.5", sm: "1", lg: "1.5" },
            marginBottom: "1rem",
            fontWeight: "bold",
            fontFamily: "Neucha",
          }}
        >
          Build your ChatGPT custom plugin without code, in less than 2 minutes.
        </Typography>
      </Box>
      <Box my={2} textAlign="center">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#6360FF",
            color: "white",
            "&:hover": {
              backgroundColor: "#6360FF",
            },
            fontSize: "1.0rem",
            padding: "1rem 1rem",
          }}
          onClick={GoToLogin}
        >
          CREATE YOUR PLUGIN 🧩
        </Button>
        <Typography variant="body2" color="textSecondary">
          *No credit card required
        </Typography>
      </Box>
      <Box>
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", sm: "80%", md: "1000px", lg: "1200px" },
            margin: "auto",
          }}
        >
          <video
            style={{
              width: "90%", // Set the width to 100% for mobile devices
              display: "block",
              margin: "auto",
            }}
            controls
          >
            <source src="your_video_url_here" type="video/mp4" />
          </video>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
