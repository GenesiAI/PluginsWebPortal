import { Box, Container, Typography } from "@mui/material";
import React, { ComponentProps } from "react";
import ContactForm from "../components/ContactForm";
import SocialsBox from "../components/SocialsBox";
const Contacts: React.FC = () => {
  const sxObject: ComponentProps<typeof Typography>["sx"] = {
    textAlign: "center",
    fontWeight: "bold",
    color: (theme) => theme.palette.primary.main,
    marginBottom: (theme) => theme.spacing(2),
    marginTop: (theme) => theme.spacing(2)
  };
  return (
    <Container>
      <Box margin={4}>
        <Typography variant="h2" sx={sxObject}>
          Get in touch
        </Typography>
        <Typography variant="subtitle1" align="center">
          We appreciate your thoughts, feedback, and innovative ideas
        </Typography>
      </Box>
      <ContactForm />
      <SocialsBox />
    </Container>
  );
};

export default Contacts;
