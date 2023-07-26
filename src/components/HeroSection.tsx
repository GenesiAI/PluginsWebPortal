import { Box, Button, Typography } from "@mui/material";
import React from "react";
import LandingVideo from "../assets/LandingVideo.mp4";
import useHandlerAuth from "./Header/useHandlerAuth";

const HeroSection: React.FC = () => {
  // const [, setColorIndex] = useState(0);

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     setColorIndex((prevIndex) => prevIndex + 1);
  //   }, 150);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);
  const { handleLogin } = useHandlerAuth();

  return (
    <>
      <Box margin={{ xs: 2, sm: 6 }}>
        <Typography
          variant="h1"
          align="center"
          sx={{
            fontSize: { xs: "2rem", sm: "5rem" },
            margin: { xs: "1rem 0", sm: "2rem 0" },
            fontFamily: "Tahoma",
            fontWeight: "bold"
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
          padding: { xs: "1rem", sm: "2rem" }
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
            fontWeight: "soft",
            fontFamily: "Tahoma"
          }}
        >
          Build your ChatGPT custom plugin without code, <br />
          in less than 2 minutes.
        </Typography>
      </Box>
      <Box my={1} textAlign="center" sx={{ paddingBottom: 7 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#6360FF",
            color: "white",
            "&:hover": {
              backgroundColor: "#6360FF"
            },
            fontSize: "1.0rem",
            padding: "1rem 1rem"
          }}
          onClick={handleLogin}
        >
          CREATE YOUR PLUGIN
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
            margin: "auto"
          }}
        >
          <video
            style={{
              width: "90%", // Set the width to 100% for mobile devices
              display: "block",
              margin: "auto",
              // add rounded corners
              borderRadius: "10px",
              // add glow effect
              boxShadow:
                "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #6360FF, 0 0 25px #6360FF, 0 0 30px #6360FF, 0 0 35px #6360FF, 0 0 40px #6360FF"
            }}
            autoPlay
            loop
            muted
          >
            <source src={LandingVideo} type="video/mp4" />
          </video>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
