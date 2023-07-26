import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQsection: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const faqs = [
    {
      question: "Who can use GenesiAI?      ",
      answer:
        " Everyone's invited to the party! Whether you're a tech whiz or a total newbie, GenesiAI is designed to be user-friendly for anyone. It doesn't matter if you're a coding guru or a business owner looking to level up – our intuitive interface makes plugin building a breeze."
    },
    {
      question: "Do I need to write code to create a plugin on GenesiAI?",
      answer:
        "No way! With GenesiAI, you don't need to write a single line of code. Just enter your data section by section, tell us what they're about, and boom! You'll have a professional plugin ready to go. Our editor is super easy to use, quick, and intuitive. In just a few simple steps, you can use your plugin directly in ChatGPT. "
    },
    {
      question:
        "Do I have to deal with all the hosting stuff for my ChatGPT plugins?",
      answer:
        "Nope! We've got you covered. You don't need to worry about hosting or managing any technical infrastructure for your ChatGPT plugins. We take care of all that behind the scenes, so you can focus on creating awesome plugins. "
    },

    {
      question: "How many plugins can I create with my profile?",
      answer: ""
    },
    {
      question: "Can GenesiAI support my business as it grows?  ",
      answer:
        "Absolutely! GenesiAI is here to grow with you. Whether you're just starting out as a small business or you're a big shot enterprise, our platform is built to scale and handle your growing needs. You focus on your business, and we'll handle the tech side of things!"
    },
    {
      question:
        "How do I install my plugin in the ChatGPT Plugin Store?        ",
      answer:
        "Easy-peasy lemon squeezy! Once you follow the instructions and complete the four steps, we'll generate a link that fits ChatGPT's requirements. Just copy and paste that bad boy into the Plugin Store, and voila! It'll go through OpenAI's approval process. But hey, even if it's not verified yet, you can start using it right away!"
    },
    {
      question: "How much does it cost to create a plugin?",
      answer:
        "We've got different plans to suit your needs. You can find all the juicy details right here. Oh, and by the way, if you want to try creating a test plugin, it's totally free! Just give it a whirl and let us know how it goes 😄"
    },
    {
      question: "Can I invite people to try my plugin?",
      answer:
        "Absolutely! While your plugin is waiting to be verified, you can share it with up to 100 lucky users who have plugin access. Once it's available in the Plugin Store, all ChatGPT Plus customers will be able to get their hands on it. "
    },
    {
      question: "Can I charge people for my plugin?",
      answer:
        "Not at the moment, but fear not! Charging for plugins is a feature that ChatGPT will roll out soon. So stay tuned for that! "
    },
    {
      question: "Can I make updates to my plugin after it's live?",
      answer:
        "Absolutely! You're the boss of your plugin. You can make updates and changes anytime you want using our plugin builder. Any modifications you make in the OpenAI builder will be reflected in the deployed plugin endpoint.Just keep in mind that OpenAI may remove your plugin from the store if there are certain configuration changes. For example, if you change the name from 'Billy Joe' to 'Adidas', OpenAI might have to pull the plug on your plugin (brand violation alert!).  "
    },
    {
      question: "Is my data safe with GenesiAI?",
      answer:
        "Absolutely! We've got your back when it comes to data security and privacy. Our platform is built with rock-solid security measures to ensure your data stays locked up tight.  "
    },
    {
      question:
        " What if I run into issues while building or deploying my plugin?",
      answer:
        "We hope you won't run into any snags, but if you do, don't fret! You can check out our documentation for some guidance or shoot us an email at info@genesi.ai. Our awesome team will be ready to lend you a hand. Just a heads up, though: We can't assist with getting your plugin tested and approved by OpenAI. The review process for the Plugin Store is in your hands. Make sure to follow OpenAI's review process listed here: https://platform.openai.com/docs/plugins/review "
    }
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(#6360FF, white)",
        backgroundSize: "1% 100%", // adjust the second value to increase the height of the white background
        padding: { xs: "2rem", sm: "1rem" },
        borderRadius: 2,
        maxWidth: { xs: "100%", sm: "80%", md: "1200px", lg: "100%" },
        justifyContent: "center",
        fontSize: { xs: "1.5rem", sm: "2rem" },
        margin: { xs: "0.5rem", sm: "0rem", md: "6rem 7rem", lg: "auto" },
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
