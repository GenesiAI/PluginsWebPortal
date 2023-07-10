import React, { useState } from "react";
import { Button, Typography, Box, Grid, Paper, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import step1 from "../img/Screen.png";
import screen1 from "../img/Screen2.png";
import screen2 from "../img/Screen3.png";

const colors = [
  "#df66da",
  "#d773ec",
  "#cf81fe",
  "#c48fff",
  "#b99ef0",
  "#aeade1",
  "#a3bcd2",
  "#98cbc3",
  "#8ddab4",
  "#82e9a5",
  "#77f896",
  "#6cff87",
  "#62f678",
  "#58ed69",
  "#67ea7a",
  "#76e78b",
  "#85e49c",
  "#94e1ad",
  "#a3debe",
  "#b2dbcf",
  "#c1d8e0",
  "#d0d5f1",
  "#dfcffc",
  "#eec8fd",
  "#eebaef",
  "#eeacdf",
  "#ee9ece",
  "#ee90bd",
  "#ee82ac",
  "#ee749b",
  "#ee668a",
  "#f73da4",
  "#ef4bb6",
  "#e758c8"
];

const Home: React.FC = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const navigate = useNavigate();

  React.useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 150);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const GoToLogin = async () => {
    navigate("/login");
  };

  const steps = [
    {
      step: 1,
      title: "Enter Your Data",
      icon: "📝",
      description:
        "Provide the necessary data to create your custom ChatGPT plugin."
    },
    {
      step: 2,
      title: "Edit the Plugin",
      icon: "✏️",
      description:
        "With our intuitive interface, customize your plugin to meet your unique requirements."
    },
    {
      step: 3,
      title: "Get the URL",
      icon: "🔗",
      description: "Receive the generated URL for your tailored ChatGPT plugin."
    },
    {
      step: 4,
      title: "Paste the URL",
      icon: "📎",
      description:
        "Simply paste the URL into ChatGPT and watch your custom plugin come to life."
    }
  ];

  return (
    <Container sx={{ width: "auto", xs: 12 }}>
      <Grid xs={12} sm={6} md={3}>
        <Box margin={6} padding={5} width="auto">
          <Typography variant="h1" align="center" gutterBottom>
            Think <span style={{ fontWeight: "bold" }}>Innovative</span>.<br />{" "}
            Be part of the{" "}
            <span style={{ color: colors[colorIndex], fontWeight: "bold" }}>
              Future.
            </span>
          </Typography>
          <Box
            padding={2}
            borderRadius={4}
            width="10"
            display="flex"
            justifyContent="center"
            margin="auto"
          >
            <Typography variant="h4" align="center" gutterBottom>
              With GenesiAI you can create your ChatGPT custom plugins in less
              than 2 minutes, without any coding experience or technical
              expertise.
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Box my={0} mt={-7} textAlign="center">
        <Button
          variant="contained"
          sx={{
            backgroundColor: colors[colorIndex],
            color: "white",
            "&:hover": {
              backgroundColor: colors[(colorIndex + 1) % colors.length]
            },
            fontSize: "1.0rem",
            padding: "1rem 1rem"
          }}
          onClick={GoToLogin}
        >
          CREATE YOUR PLUGIN 🧩
        </Button>
        <Typography variant="body2" color="textSecondary">
          *No credit card required
        </Typography>
      </Box>
      <Box margin={6}>
        <video
          style={{
            width: "60%", // Change the width as per your preference
            display: "block",
            margin: "auto"
          }}
          controls
        >
          <source src="your_video_url_here" type="video/mp4" />
        </video>
      </Box>
      <Box margin={6}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          style={{ color: "#524FFF " }}
        >
          <span style={{ fontWeight: "bold" }}>
            Genesi AI is the easiest way for you and <br /> your company to work
            smarter.
          </span>
        </Typography>
        <Box
          padding={2}
          borderRadius={4}
          display="flex"
          justifyContent="center"
          margin="auto"
        >
          <Typography variant="h5" align="center" gutterBottom>
            Genesi empowers entire companies to create a new communication
            channel and a new economic opportunity by facilitating the creation
            of custom plugins.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#524FFF",
          padding: "5rem",
          maxWidth: 1400,
          justifyContent: "center",
          borderRadius: 1.75,
          margin: "auto"
        }}
      >
        <Typography variant="h3" align="center" gutterBottom>
          <span style={{ fontWeight: "bold", color: "white" }}>
            How Genesi Works
          </span>
        </Typography>
        <Box
          sx={{
            maxWidth: 1000,
            justifyContent: "center",
            margin: "auto",
            padding: "1rem"
          }}
        >
          <Typography variant="h6" align="center" gutterBottom>
            <span style={{ color: "white" }}>
              Make the most of the potential of AI by creating your own custom
              plugin that best meets the needs of your company. Facilitates the
              interaction with your private company data, create a new channel
              of customer acquisition or a product presentation and more.
            </span>
          </Typography>
          <Box my={5} mt={3} textAlign="center" padding={2}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "white",
                "&:hover": {
                  backgroundColor: colors[(colorIndex + 1) % colors.length]
                },
                fontSize: "1.0rem",
                fontColor: "black",
                textColor: "black",
                padding: "1rem 1rem"
              }}
              onClick={GoToLogin}
            >
              <span style={{ color: "black", fontWeight: "bold" }}>
                CREATE A PLUGIN 🧩
              </span>
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            maxWidth: 1200,
            justifyContent: "center",
            margin: "auto"
          }}
        >
          <Box sx={{ flex: 1 }}>
            <img src={step1} alt="step1" />
          </Box>
          <Box sx={{ flex: 1, ml: 20 }}>
            <Typography variant="subtitle1" align="left" gutterBottom>
              <span style={{ color: "white" }}>
                <Typography variant="h6" align="left" gutterBottom>
                  1 - START{" "}
                </Typography>
                <Typography variant="h4" align="left" gutterBottom>
                  <span style={{ fontWeight: "bold" }}>Enter your data </span>
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CheckCircleOutlineIcon sx={{ color: "white" }} />
                  <Typography variant="h5" sx={{ ml: 1 }}>
                    Provide your necessary data to GenesiAI in order to create
                    your custom plugin
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CheckCircleOutlineIcon sx={{ color: "white" }} />
                  <Typography variant="h5" sx={{ ml: 1 }}>
                    You don’t need coding experience or technical expertise
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CheckCircleOutlineIcon sx={{ color: "white", size: 1000 }} />
                  <Typography variant="h5" sx={{ ml: 1 }}>
                    The more accurate you are at this stage, the more effective
                    your plugin will be
                  </Typography>
                </Box>
              </span>
            </Typography>
            <Box my={5} mt={3} textAlign="left">
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  "&:hover": {
                    backgroundColor: colors[(colorIndex + 1) % colors.length]
                  },
                  fontSize: "1.0rem",
                  padding: "1rem 1rem"
                }}
                onClick={GoToLogin}
              >
                {" "}
                CREATE A PLUGIN 🧩
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            maxWidth: 1200,
            justifyContent: "center",
            margin: "auto"
          }}
        >
          <Box sx={{ flex: 1, ml: 20 }}>
            <Typography variant="subtitle1" align="left" gutterBottom>
              <span style={{ color: "white" }}>
                <Typography variant="h6" align="left" gutterBottom>
                  2 - EDIT{" "}
                </Typography>
                <Typography variant="h4" align="left" gutterBottom>
                  <span style={{ fontWeight: "bold" }}>Edit your Plugin</span>
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CheckCircleOutlineIcon sx={{ color: "white" }} />
                  <Typography variant="h5" sx={{ ml: 1 }}>
                    With our intuitive interface, customize your plugin to meet
                    your unique requirements.
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CheckCircleOutlineIcon sx={{ color: "white" }} />
                  <Typography variant="h5" sx={{ ml: 1 }}>
                    Add sections and enter new informations whenever you want
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CheckCircleOutlineIcon sx={{ color: "white", size: 1000 }} />
                  <Typography variant="h5" sx={{ ml: 1 }}>
                    Save and in just one click your plugin is updated
                  </Typography>
                </Box>
              </span>
            </Typography>
            <Box my={5} mt={3} textAlign="left">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: "white",
                  "&:hover": {
                    backgroundColor: colors[(colorIndex + 1) % colors.length]
                  },
                  fontSize: "1.0rem",
                  padding: "1rem 1rem"
                }}
                onClick={GoToLogin}
              >
                <span style={{ color: "black", fontWeight: "bold" }}>
                  START CREATING NOW 🧩
                </span>
              </Button>
            </Box>
          </Box>
          <Box sx={{ flex: 1 }}>
            <img src={step1} alt="step1" />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            maxWidth: 1200,
            justifyContent: "center",
            margin: "auto"
          }}
        >
          <Box sx={{ flex: 1 }}>
            <img src={step1} alt="step1" />
          </Box>
          <Box sx={{ flex: 1, ml: 20 }}>
            <Typography variant="subtitle1" align="left" gutterBottom>
              <span style={{ color: "white" }}>
                <Typography variant="h6" align="left" gutterBottom>
                  3 - CREATE{" "}
                </Typography>
                <Typography variant="h4" align="left" gutterBottom>
                  <span style={{ fontWeight: "bold" }}>
                    Let the magic happen{" "}
                  </span>
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CheckCircleOutlineIcon sx={{ color: "white" }} />
                  <Typography variant="h5" sx={{ ml: 1 }}>
                    Receive the generated URL for your tailored plugin.
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CheckCircleOutlineIcon sx={{ color: "white" }} />
                  <Typography variant="h5" sx={{ ml: 1 }}>
                    Again no coding or technical expertise are needed
                  </Typography>
                </Box>
              </span>
            </Typography>
            <Box my={5} mt={3} textAlign="left">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: colors[colorIndex],
                  color: "white",
                  "&:hover": {
                    backgroundColor: colors[(colorIndex + 1) % colors.length]
                  },
                  fontSize: "1.0rem",
                  padding: "1rem 1rem"
                }}
                onClick={GoToLogin}
              >
                TRY THE MAGIC 🧩
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            maxWidth: 1200,
            justifyContent: "center",
            margin: "auto"
          }}
        >
          <Box sx={{ flex: 1, ml: 20 }}>
            <Typography variant="subtitle1" align="left" gutterBottom>
              <span style={{ color: "white" }}>
                <Typography variant="h6" align="left" gutterBottom>
                  4 - GO LIVE{" "}
                </Typography>
                <Typography variant="h4" align="left" gutterBottom>
                  <span style={{ fontWeight: "bold" }}>
                    Paste the URL in ChatGPT
                  </span>
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CheckCircleOutlineIcon sx={{ color: "white" }} />
                  <Typography variant="h5" sx={{ ml: 1 }}>
                    Simply paste the URL into the Plugin Store
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CheckCircleOutlineIcon sx={{ color: "white" }} />
                  <Typography variant="h5" sx={{ ml: 1 }}>
                    Watch your plugin come to life{" "}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CheckCircleOutlineIcon sx={{ color: "white", size: 1000 }} />
                  <Typography variant="h5" sx={{ ml: 1 }}>
                    Start using it and go live
                  </Typography>
                </Box>
              </span>
            </Typography>
            <Box my={5} mt={3} textAlign="left">
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  "&:hover": {
                    backgroundColor: colors[(colorIndex + 1) % colors.length]
                  },
                  fontSize: "1.0rem",
                  padding: "1rem 1rem"
                }}
                onClick={GoToLogin}
              >
                START CREATING NOW 🧩
              </Button>
            </Box>
          </Box>
          <Box sx={{ flex: 1 }}>
            <img src={step1} alt="step1" />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            maxWidth: 1200,
            justifyContent: "center",
            margin: "auto"
          }}
        ></Box>
      </Box>
      <Box margin={6}>
        <Typography variant="h3" align="center" gutterBottom>
          <span style={{ fontWeight: "bold" }}> Created by Genesi</span>
        </Typography>
        <Box
          padding={2}
          borderRadius={4}
          display="flex-wrap"
          justifyContent="center"
          margin="auto"
          sx={{ xs: 12, sm: 6, md: 3 }}
        >
          <Typography variant="h5" align="center" gutterBottom>
            Discover the companies that have trusted us and be inspired by their
            business cases.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={4} padding={4}>
        {steps.map(({ step, title, icon, description }) => (
          <Grid item key={step} xs={12} sm={6} md={3}>
            <Paper elevation={3} sx={{ padding: 2, minHeight: "100%" }}>
              <Box textAlign="center">
                <Typography variant="h4">{step}</Typography>
                <Typography variant="h6">{title}</Typography>
                <Box my={2}>
                  <Typography variant="h3">{icon}</Typography>
                </Box>
                <Typography>{description}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
