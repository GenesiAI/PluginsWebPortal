import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box
} from "@mui/material";
import Typography from "components/Typography";
import React, { Fragment, useState } from "react";
import { QuestionsData } from "./QuestionsData";
import Title from "./Title";

const Questions = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <Title />
      <Box>
        {QuestionsData.map((faq, index) => (
          <Fragment key={faq.answer}>
            <Accordion
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              className="border-0 shadow-none before:content-none"
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className="text-primary">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails className="border-0 shadow-none">
                <Typography variant="t5">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
            <div className="w-100 h-px bg-[#989898]"></div>
          </Fragment>
        ))}
      </Box>
    </>
  );
};

export default Questions;
