import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import { faqs } from "./FAQ";

const FAQsection: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box
      sx={{
        background: "linear-gradient(#6360FF, white)",
        backgroundSize: "1% 100%", // adjust the second value to increase the height of the white background
        padding: { xs: "2rem", sm: "1rem" },
        borderRadius: 2,
        maxWidth: { xs: "100%", sm: "80%", md: "1300px", lg: "1300px" },
        justifyContent: "center",
        fontSize: { xs: "1.5rem", sm: "2rem" },
        margin: { xs: "0.5rem", sm: "auto" },
        marginBottom: "4rem"
      }}
    >
      <Box margin={6} alignItems="center">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: { xs: "2rem", sm: "1.5rem", md: "3rem" },
            margin: { xs: "0rem 0", sm: "2rem 0", md: "4rem 5rem" }
          }}
        >
          <span style={{ fontWeight: "bold" }}>Frequently Asked Questions</span>
        </Typography>
      </Box>
      <Box
        maxWidth="900px"
        sx={{
          margin: "0 auto", // center horizontally
          textAlign: "left", // align text to left
          //   paddingBottom: "1rem",
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
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{
              marginBottom: "rem",
              boxShadow: "none",
              border: "1px solid #e0e0e0",
              backgroundColor: "",
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
                borderBottom: "1px solid #e0e0e0",
                padding: "rem",
                borderRadius: "0.5rem",
                "& .MuiAccordionSummary-content": {
                  margin: "0"
                }
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "0.8rem", sm: "1.2rem", md: "1.2rem" }
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "white",
                padding: "0.5rem",
                borderRadius: "0.5rem"
              }}
            >
              <Typography
                sx={{ fontSize: { xs: "0.7rem", sm: "1rem", md: "1rem" } }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQsection;
