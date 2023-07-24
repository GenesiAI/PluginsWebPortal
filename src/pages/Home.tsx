import React, { useState } from "react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
import PluginEditor from "../img/PluginEditor.png";
import PluginsList from "../img/PluginsList.png";
import TestPlugin from "../img/TestPlugin.png";
import faqs from "./faqs.json";
// import step2 from "../img/Screen4.png";
// import { useTheme } from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useHandlerAuth from "components/Header/useHandlerAuth";
import { Link as RouterLink } from "react-router-dom";
>>>>>>> dev
import "slick-carousel/slick/slick.css";
import HeroSection from "../components/HeroSection";
import FAQsection from "../components/FAQsection";
import WhatSection from "../components/WhatSection";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import UseCases from "../components/UseCases";

const Home: React.FC = () => {
<<<<<<< HEAD
  const navigate = useNavigate();

  const GoToLogin = async () => {
    navigate("/login");
  };
=======
  const [colorIndex, setColorIndex] = useState(0);
  // const theme = useTheme();
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  // const [autoPlay, setAutoPlay] = useState(true);

  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 5,
  //     slidesToSlide: 5,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 3,
  //     slidesToSlide: 3,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1,
  //   },
  // };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 150);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const { handleLogin } = useHandlerAuth();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
>>>>>>> dev

  return (
    <>
      <HeroSection />
<<<<<<< HEAD
      <WhatSection />
      <FeatureSection />
      <UseCases />
      <FAQsection />
      <Footer />
=======
      {/* //info catch line */}
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
            fontSize: { xs: "1.2rem", sm: "3rem", md: "4rem" },
            margin: { xs: "1rem 0", sm: "2rem 0", md: "2rem" } // adjust the margin here
          }}
        >
          <span style={{ fontWeight: "bold" }}>What is Genesi AI?</span>
        </Typography>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          sx={{
            color: "black",
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.4rem" },
            lineHeight: { xs: "1.5", sm: "1.2", md: "1.4" },
            maxWidth: { xs: "90%", sm: "80%", md: "76%" },
            margin: "auto"
          }}
        >
          GenesiAI is a tool that allows you to create your ChatGPT custom
          plugin in a couple of clicks, without any coding experience or
          technical expertise. <br /> <br />
          Consider your custom plugin like the personal assistant you’ve always
          been looking for, for you and your company. The AI collects the data,
          reads it and put it all together in a unique ecosystem. You just have
          to ask the right questions, GenesiAI and ChatGPT will give you all the
          answers.
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
                Genesi AI Is Easy
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
                Genesi AI Is Fast
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

      {/* //add a sliding carousel of images here */}
      {/* <Box
        maxWidth="1400px"
        sx={{
          margin: "0 auto", // center horizontally
          textAlign: "center", // center vertically
          paddingBottom: "4rem",
        }}
      >
        <Slider {...sliderSettings}>
          {logos.map((logo) => (
            <div key={logo.src}>
              <img
                src={logo.src}
                alt={logo.alt}
                // style={{ width: "100%", height: "100%" }}
              />
            </div>
          ))}
        </Slider>
      </Box> */}
      {/* // FEATURES SECTION */}
      <Box
        sx={{
          backgroundColor: "#6360FF",
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
          Make the most of the potential of AI by creating your own custom
          plugin that best meets the needs of your company. Facilitates the
          interaction with your private company data, create a new channel of
          customer acquisition or a product presentation and more.
        </Typography>
        <Box my={5} mt={3} textAlign="center" padding={2}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: colors[(colorIndex + 1) % colors.length],
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
            <span style={{ color: "black", fontWeight: "bold" }}>
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
                  sx={{ fontSize: { xs: "1rem", sm: "1.5rem", md: "1.9rem" } }}
                >
                  <span style={{ fontWeight: "bold" }}> 1 - START</span>
                </Typography>
                <Typography
                  variant="h4"
                  align="left"
                  gutterBottom
                  sx={{ fontSize: { xs: "2rem", sm: "1.5rem", md: "2.9rem" } }}
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
                      Provide the data to GenesiAI in order to create your
                      custom plugin
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "left", mb: 2, ml: -2 }}
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
                    <CheckCircleOutlineIcon
                      sx={{ color: "white", size: 1000 }}
                    />
                    <Typography
                      variant="h5"
                      sx={{
                        ml: 1,
                        fontSize: { xs: "1rem", sm: "1.5rem", md: "1.4rem" }
                      }}
                    >
                      The more accurate you are at this stage, the more
                      effective your plugin will be
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
                  color: "black",
                  "&:hover": {
                    backgroundColor: colors[(colorIndex + 1) % colors.length]
                  },
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  textColor: "black",
                  textWeight: "strong",

                  padding: { xs: "1rem 2rem", md: "1rem 1.5rem" }
                }}
                onClick={handleLogin}
              >
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
                  sx={{ fontSize: { xs: "1rem", sm: "1.5rem", md: "1.9rem" } }}
                >
                  <span style={{ fontWeight: "bold" }}> 2 - EDIT</span>
                </Typography>
                <Typography
                  variant="h4"
                  align="left"
                  gutterBottom
                  sx={{ fontSize: { xs: "2rem", sm: "1.5rem", md: "2.9rem" } }}
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
                    sx={{ display: "flex", alignItems: "left", mb: 2, ml: -10 }}
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
                    <CheckCircleOutlineIcon
                      sx={{ color: "white", size: 1000 }}
                    />
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
                      ml: -7,
                      mt: 2
                    }}
                  >
                    <CheckCircleOutlineIcon
                      sx={{ color: "white", size: 1000 }}
                    />
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
                  color: "white",
                  "&:hover": {
                    backgroundColor: colors[(colorIndex + 1) % colors.length]
                  },
                  fontSize: { xs: "1rem", md: "1.2rem" },
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
                  sx={{ fontSize: { xs: "1rem", sm: "1.5rem", md: "1.9rem" } }}
                >
                  <span style={{ fontWeight: "bold" }}> 3 - CREATE</span>
                </Typography>
                <Typography
                  variant="h4"
                  align="left"
                  gutterBottom
                  sx={{ fontSize: { xs: "2rem", sm: "1.5rem", md: "2.9rem" } }}
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
                      With our intuitive interface, customize your plugin to
                      meet your unique requirements
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
                      Add sections and new informations whenever you want
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 2,
                      ml: -16
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
                  color: "white",
                  "&:hover": {
                    backgroundColor: colors[(colorIndex + 1) % colors.length]
                  },
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  padding: { xs: "1rem 2rem", md: "1rem 1.5rem" }
                }}
                onClick={handleLogin}
              >
                Start creating now
              </Button>
            </Box>
          </Box>
        </Box>
        {/* //fourth step */}
      </Box>
      {/* //carosoul added here */}
      {/* <Box margin={6} alignItems="center">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            color: "black",
            fontWeight: "bold",
            fontSize: { xs: "1.2rem", sm: "3rem", md: "3rem" },
            margin: { xs: "0rem 0", sm: "2rem 0", md: "6rem 9rem" }
          }}
        >
          <span style={{ fontWeight: "bold" }}>
            Discover the companies that have trusted us and be inspired by their
            business cases.
          </span>
        </Typography>
      </Box>
      <Box
        maxWidth={{ xs: "20%", md: "1900px" }}
        sx={{
          margin: "0 auto", // center horizontally
          textAlign: "center", // center vertically
          paddingBottom: "4rem"
        }}
      >
        <Slider {...sliderSettings2}>
          {logos2.map((logo) => (
            <div key={logo.src}>
              <img src={logo.src} alt={logo.alt} style={{ maxWidth: "100%" }} />
            </div>
          ))}
        </Slider>
      </Box> */}
      {/* //faq section */}

      {/* FAQ section */}
      <Box margin={6} alignItems="center">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            color: "black",
            fontWeight: "bold",
            fontSize: { xs: "1.3rem", sm: "1.5rem", md: "3rem" },
            margin: { xs: "0rem 0", sm: "2rem 0", md: "4rem 5rem" }
          }}
        >
          <span style={{ fontWeight: "bold" }}>Frequently Asked Questions</span>
        </Typography>
      </Box>
      <Box
        maxWidth="1200px"
        sx={{
          margin: "0 auto", // center horizontally
          textAlign: "left", // align text to left
          paddingBottom: "4rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          width: "100%",
          "@media (min-width: 600px)": {
            paddingLeft: "2rem",
            paddingRight: "2rem"
          },
          "@media (min-width: 960px)": {
            paddingLeft: "4rem",
            paddingRight: "4rem"
          },
          "@media (min-width: 1280px)": {
            paddingLeft: "6rem",
            paddingRight: "6rem"
          }
        }}
      >
        {faqs.map(({ answer, question }, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{
              marginBottom: "1rem",
              boxShadow: "none",
              border: "1px solid #e0e0e0",
              borderRadius: "0.5rem",
              "&:before": {
                display: "none"
              },
              "&.Mui-expanded": {
                margin: "0"
              }
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}
              sx={{
                backgroundColor: "#f5f5f5",
                borderBottom: "1px solid #e0e0e0",
                padding: "1rem",
                borderRadius: "0.5rem",
                marginBottom: "0.5rem",
                "& .MuiAccordionSummary-content": {
                  margin: "0"
                }
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "1rem", sm: "1.5rem", md: "1.5rem" }
                }}
              >
                {question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "#f9f9f9",
                padding: "1rem",
                borderRadius: "0.5rem"
              }}
            >
              <Typography
                sx={{ fontSize: { xs: "0.8rem", sm: "1.2rem", md: "1.2rem" } }}
              >
                {answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* // adding a simple footer section */}
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          padding: "2rem",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <RouterLink to="/">
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
        {/* <RouterLink to="/contacts">
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
        </RouterLink> */}
      </Box>
>>>>>>> dev
    </>
  );
};

export default Home;
