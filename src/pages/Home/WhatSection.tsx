import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const WhatSection: React.FC = () => {
  return (
    <Box
      alignItems="center"
      sx={{
        backgroundColor: "#f0f00",
        padding: { xs: "1rem", sm: "1rem", md: "2rem" },
        // maxWidth: { xs: "100%", sm: "80%", md: "1300px", lg: "1400px" },
        justifyContent: "center",
        fontSize: { xs: "1.5rem", sm: "2rem" }

        // margin: {
        //   xs: "0.5rem",
        //   sm: "0.5rem",
        //   md: "2rem",
        //   lg: "2rem auto 2rem",
        // },
      }}
    >
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          color: "#6360FF",
          fontWeight: "bold",
          fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
          margin: { xs: "1rem 0", sm: "2rem 0", md: "2rem" } // adjust the margin here
        }}
      >
        <span style={{ fontWeight: "bold" }}>What is GenesiAI?</span>
      </Typography>
      <Typography
        variant="h6"
        align="center"
        gutterBottom
        sx={{
          color: "black",
          fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.4rem" },
          lineHeight: { xs: "1.5", sm: "1.2", md: "1.4" },
          maxWidth: { xs: "90%", sm: "80%", md: "60%" },
          margin: "auto"
        }}
      >
        GenesiAI is a tool that allows you to create your ChatGPT custom plugin
        in a couple of clicks, without any coding experience or technical
        expertise. <br /> <br />
        Consider your custom plugin like the personal assistant you’ve always
        been looking for, for you and your company. The AI collects the data,
        reads it and put it all together in a unique ecosystem.
        <br /> <br />
      </Typography>

      <Box
        alignItems="center"
        sx={{
          backgroundColor: "#fff",
          padding: "1rem",
          margin: "auto",
          maxWidth: { xs: "90%", sm: "90%", md: "70%", lg: "70%" },
          justifyContent: "center",
          textAlign: "center",
          border: "3px solid #ccc",
          borderColor: "#6360FF",
          borderRadius: "6px"
        }}
      >
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              borderRight: { xs: "none", md: "2px solid #6360FF" },
              padding: { xs: "0.5rem", md: "1rem" },
              borderBottom: { xs: "2px solid #6360FF", md: "none" }
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "soft",
                // borderBottom: { xs: "none", md: "2px solid #6360FF" },
                fontSize: { xs: "1.5rem", sm: "2rem", md: "1.5rem" },
                fontFamily: "Paytone One"
              }}
            >
              GenesiAI Is Easy
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                display: "flex-wrap", // add this line
                padding: { xs: "0.5rem", md: "1rem" },
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1rem" },
                fontWeight: "bold"
              }}
            >
              <CheckCircleOutlineIcon
                sx={{ color: "#6360FF", margin: "0.5rem" }}
              />
              Intuitive interface <br />{" "}
              <CheckCircleOutlineIcon
                sx={{ color: "#6360FF", margin: "0.5rem" }}
              />
              No code <br />{" "}
              <CheckCircleOutlineIcon
                sx={{ color: "#6360FF", margin: "0.5rem" }}
              />
              No technical expertise required
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              borderRight: { md: "2px solid #6360FF " },
              padding: { xs: "0.5rem", md: "1rem" },
              borderBottom: { xs: "2px solid #6360FF", md: "none" }
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "soft",
                // borderBottom: { xs: "none", md: "2px solid #6360FF " },
                fontSize: { xs: "1.5rem", sm: "2rem", md: "1.5rem" },
                fontFamily: "Paytone One"
              }}
            >
              Make Work Life Simple
            </Typography>
            <Typography
              variant="h6"
              sx={{
                padding: { xs: "0.5rem", md: "1rem" },
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1rem" },
                fontWeight: "bold"
              }}
            >
              <CheckCircleOutlineIcon
                sx={{ color: "#6360FF", margin: "0.5rem" }}
              />
              All your data in one ecosystem
              <br />
              <CheckCircleOutlineIcon
                sx={{ color: "#6360FF", margin: "0.5rem" }}
              />
              One question, all the answers
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              padding: { xs: "0.5rem", md: "1rem" }
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "soft",
                // borderBottom: { xs: "none", md: "2px solid #6360FF" },
                fontSize: { xs: "1.5rem", sm: "2rem", md: "1.5rem" },
                fontFamily: "Paytone One"
              }}
            >
              GenesiAI Is Fast
            </Typography>
            <Typography
              variant="h6"
              sx={{
                padding: { xs: "0.5rem", md: "1rem" },
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1rem" },
                fontWeight: "bold"
              }}
            >
              <CheckCircleOutlineIcon
                sx={{ color: "#6360FF", margin: "0.5rem" }}
              />
              Easy integration between your data and the plugin <br />
              <CheckCircleOutlineIcon
                sx={{ color: "#6360FF", margin: "0.5rem" }}
              />
              Just 2 minutes to create your plugin
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default WhatSection;
