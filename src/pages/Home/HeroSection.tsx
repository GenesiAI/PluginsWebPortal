import { Box, Button, Typography } from "@mui/material";
import { useUserInfoCtx } from "components/UserInfo/UserInfo";
import React from "react";

const youTubeVideo =
  "https://www.youtube.com/embed/_awRHFcAS2k?si=Ywk8rQa15Dle3Z9Z";
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
  const { handleLogin } = useUserInfoCtx();

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
          <span style={{ fontWeight: "soft" }}>Build ChatGPT plugins</span>
          <br></br>
          in
          <span style={{ color: "#6360FF", fontWeight: "bold" }}>
            &nbsp;2 minutes.
          </span>
        </Typography>
      </Box>
      {/* <Box
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
      </Box> */}
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
      <Box className="px-10 max-w-4xl block m-auto">
        <div
          className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden"
          style={{
            boxShadow:
              "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #6360FF, 0 0 25px #6360FF, 0 0 30px #6360FF, 0 0 35px #6360FF, 0 0 40px #6360FF"
          }}
        >
          <iframe
            src={`${youTubeVideo}&autoplay=1&mute=1&cc_load_policy=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            className="w-full h-full absolute top-0 left-0 "
            allowFullScreen
          ></iframe>
        </div>
      </Box>
    </>
  );
};

export default HeroSection;
