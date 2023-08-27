import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Box, Button, Typography } from "@mui/material";
import useHandlerAuth from "components/Header/useHandlerAuth";
import React from "react";
import PluginEditor from "../../img/PluginEditor.png";
import PluginsList from "../../img/PluginsList.png";
import TestPlugin from "../../img/TestPlugin.png";

const FeatureSection: React.FC = () => {
  const { handleLogin } = useHandlerAuth();

  return (
    <Box
      sx={{
        background: "linear-gradient(#6360FF, #C9F0F0)",
        padding: { xs: "2rem", sm: "5rem" },
        borderRadius: 2,
        maxWidth: { xs: "100%", sm: "80%", md: "1200px", lg: "1300px" },
        justifyContent: "center",
        fontSize: { xs: "1.5rem", sm: "2rem" },
        margin: { xs: "0.5rem", sm: "0rem", md: "6rem 7rem", lg: "auto" }
      }}
    >
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          color: "white",
          fontWeight: "bold",
          fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
          margin: { xs: "1rem 0", sm: "2rem 0", md: "3rem 0" }
        }}
      >
        How Genesi Works
      </Typography>
      <Typography
        variant="h6"
        align="center"
        gutterBottom
        sx={{
          color: "white",
          fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.5rem" },
          lineHeight: { xs: "1.5", sm: "1.2", md: "1.5" },
          maxWidth: { xs: "90%", sm: "80%", md: "70%" },
          margin: "auto"
        }}
      >
        Make the most of the potential of AI by creating your own custom plugin
        that best meets the needs of your company. Facilitates the interaction
        with your private company data, create a new channel of customer
        acquisition or a product presentation and more.
      </Typography>
      <Box my={5} mt={3} textAlign="center" padding={2}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "white",
            color: "white",
            "&:hover": {},
            fontSize: { xs: "rem", sm: "1.5rem", md: "1.3rem" },
            fontColor: "black",
            textColor: "black",
            padding: { xs: "0.8rem 1rem", sm: "1rem 1rem" },
            minWidth: { xs: "80%", sm: "auto" }
          }}
          onClick={handleLogin}
        >
          <span style={{ color: "#6360FF", fontWeight: "bold" }}>
            CREATE A PLUGIN
          </span>
        </Button>
      </Box>
      {/* //steps */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          py: { xs: 4, md: 8 }
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: { xs: 4, md: 0 }
          }}
        >
          <img src={PluginEditor} alt="step1" />
        </Box>
        <Box
          sx={{
            flex: 1,
            ml: { xs: 0, md: 20 },
            textAlign: { xs: "center", md: "left" }
          }}
        >
          <Typography variant="subtitle1" align="left" gutterBottom>
            <span style={{ color: "white", fontWeight: "bold" }}>
              <Typography
                variant="h6"
                align="left"
                gutterBottom
                sx={{ fontSize: { xs: "1rem", sm: "1.3rem", md: "1.5rem" } }}
              >
                <span style={{ fontWeight: "bold" }}> 1 - START</span>
              </Typography>
              <Typography
                variant="h4"
                align="left"
                gutterBottom
                sx={{ fontSize: { xs: "2rem", sm: "1.5rem", md: "2.5rem" } }}
              >
                <span style={{ fontWeight: "bold" }}>Enter your data </span>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <Box sx={{ display: "flex", alignItems: "left", mb: 2 }}>
                  <CheckCircleOutlineIcon sx={{ color: "white" }} />
                  <Typography
                    variant="h5"
                    sx={{
                      ml: 1,
                      fontSize: { xs: "1rem", sm: "1.5rem", md: "1.4rem" }
                    }}
                  >
                    Provide the data to GenesiAI in order to create your custom
                    plugin
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "left",
                    mb: 2,
                    ml: { xs: 0, md: -2 }
                  }}
                >
                  <CheckCircleOutlineIcon sx={{ color: "white" }} />
                  <Typography
                    variant="h5"
                    sx={{
                      ml: 1,
                      fontSize: { xs: "1rem", sm: "1.5rem", md: "1.4rem" }
                    }}
                  >
                    Follow the steps and fill all the required fields
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CheckCircleOutlineIcon sx={{ color: "white", size: 1000 }} />
                  <Typography
                    variant="h5"
                    sx={{
                      ml: 1,
                      fontSize: { xs: "1rem", sm: "1.5rem", md: "1.4rem" }
                    }}
                  >
                    The more accurate you are at this stage, the more effective
                    your plugin will be
                  </Typography>
                </Box>
              </Box>
            </span>
          </Typography>
          <Box my={5} mt={3} textAlign="left">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "#6360FF",
                "&:hover": {
                  // backgroundColor: colors[(colorIndex + 1) % colors.length]
                },
                fontSize: { xs: "0.7rem", md: "1rem" },
                textColor: "#6360FF",
                textWeight: "strong",

                padding: { xs: "1rem 2rem", md: "1rem 1.5rem" }
              }}
              onClick={handleLogin}
            >
              {" "}
              READ HOW TO BE MORE EFFECTIVE
            </Button>
          </Box>
        </Box>
      </Box>
      {/* //second step */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row-reverse" },
          justifyContent: "center",
          py: { xs: 4, md: 8 }
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: { xs: 4, md: 0 },
            flexDirection: { xs: "column", md: "row" }
          }}
        >
          <img src={PluginsList} alt="step1" />
        </Box>
        <Box
          sx={{
            flex: 1,
            ml: { xs: 0, md: 10 },
            textAlign: { xs: "center", md: "left" },
            m: { xs: 0, md: 9 }, // adds margin around the box
            p: { xs: 0, md: 4 } // adds padding inside the box
          }}
        >
          <Typography variant="subtitle1" align="left" gutterBottom>
            <span style={{ color: "white", fontWeight: "bold" }}>
              <Typography
                variant="h6"
                align="left"
                gutterBottom
                sx={{ fontSize: { xs: "1rem", sm: "1.3rem", md: "1.5rem" } }}
              >
                <span style={{ fontWeight: "bold" }}> 2 - EDIT</span>
              </Typography>
              <Typography
                variant="h4"
                align="left"
                gutterBottom
                sx={{ fontSize: { xs: "2rem", sm: "1.5rem", md: "2.5rem" } }}
              >
                <span style={{ fontWeight: "bold" }}>
                  Let the magic happen{" "}
                </span>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <CheckCircleOutlineIcon sx={{ color: "white" }} />
                  <Typography
                    variant="h5"
                    sx={{
                      ml: 1,
                      fontSize: { xs: "1rem", sm: "1.5rem", md: "1.4rem" }
                    }}
                  >
                    Receive the generated URL for your custom plugin
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "left",
                    mb: 2,
                    ml: { xs: -3, md: -10 }
                  }}
                >
                  <CheckCircleOutlineIcon sx={{ color: "white" }} />
                  <Typography
                    variant="h5"
                    sx={{
                      ml: 1,
                      fontSize: { xs: "1rem", sm: "1.5rem", md: "1.4rem" }
                    }}
                  >
                    Paste the URL into the Plugin Store
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CheckCircleOutlineIcon sx={{ color: "white", size: 1000 }} />
                  <Typography
                    variant="h5"
                    sx={{
                      ml: 1,
                      fontSize: { xs: "1rem", sm: "1.5rem", md: "1.4rem" }
                    }}
                  >
                    Simply click on the "Deploy" button, follow the
                    instructions, and you are all set
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 2,
                    ml: { xs: -1, md: -7 },
                    mt: 2
                  }}
                >
                  <CheckCircleOutlineIcon sx={{ color: "white", size: 1000 }} />
                  <Typography
                    variant="h5"
                    sx={{
                      ml: 1,
                      fontSize: { xs: "1rem", sm: "1.5rem", md: "1.4rem" }
                    }}
                  >
                    Go live and start using you new plugin
                  </Typography>
                </Box>
              </Box>
            </span>
          </Typography>
          <Box my={5} mt={3} textAlign="left">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "#6360FF",
                "&:hover": {
                  // backgroundColor: "#C9F0F0"
                },
                fontSize: { xs: "0.7rem", md: "1rem" },
                padding: { xs: "1rem 2rem", md: "1rem 1.5rem" }
              }}
              onClick={handleLogin}
            >
              TRY THE MAGIC
            </Button>
          </Box>
        </Box>
      </Box>

      {/* //third step */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          py: { xs: 4, md: 8 }
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: { xs: 4, md: 0 }
          }}
        >
          <img src={TestPlugin} alt="step1" />
        </Box>
        <Box
          sx={{
            flex: 1,
            ml: { xs: 0, md: 20 },
            textAlign: { xs: "center", md: "left" }
          }}
        >
          <Typography variant="subtitle1" align="left" gutterBottom>
            <span style={{ color: "white", fontWeight: "bold" }}>
              <Typography
                variant="h6"
                align="left"
                gutterBottom
                sx={{ fontSize: { xs: "1rem", sm: "1.3rem", md: "1.5rem" } }}
              >
                <span style={{ fontWeight: "bold" }}> 3 - CREATE</span>
              </Typography>
              <Typography
                variant="h4"
                align="left"
                gutterBottom
                sx={{ fontSize: { xs: "2rem", sm: "1.5rem", md: "2.5rem" } }}
              >
                <span style={{ fontWeight: "bold" }}>
                  Edit your plugin whenever you need
                </span>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <CheckCircleOutlineIcon sx={{ color: "white" }} />
                  <Typography
                    variant="h5"
                    sx={{
                      ml: 1,
                      fontSize: { xs: "1rem", sm: "1.5rem", md: "1.4rem" }
                    }}
                  >
                    With our intuitive interface, customize your plugin to meet
                    your unique requirements
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <CheckCircleOutlineIcon sx={{ color: "white" }} />
                  <Typography
                    variant="h5"
                    sx={{
                      ml: 1,
                      fontSize: { xs: "1rem", sm: "1.5rem", md: "1.4rem" }
                    }}
                  >
                    Add sections and new information whenever you want
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 2,
                    ml: { xs: -5, md: -16 }
                  }}
                >
                  <CheckCircleOutlineIcon sx={{ color: "white" }} />
                  <Typography
                    variant="h5"
                    sx={{
                      ml: 1,
                      fontSize: { xs: "1rem", sm: "1.5rem", md: "1.4rem" }
                    }}
                  >
                    Save and update in just one click
                  </Typography>
                </Box>
              </Box>
            </span>
          </Typography>
          <Box my={5} mt={3} textAlign="left">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "#6360FF",
                "&:hover": {
                  backgroundColor: "blue"
                },
                fontSize: { xs: "0.7rem", md: "1rem" },
                padding: { xs: "1rem 2rem", md: "1rem 1.5rem" }
              }}
              onClick={handleLogin}
            >
              {" "}
              Start creating now{" "}
            </Button>
          </Box>
        </Box>
      </Box>
      {/* //fourth step */}
    </Box>
  );
};

export default FeatureSection;
