import React from "react";
import ContactForm from "../components/ContactForm";
import { Box, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import SocialsBox from "../components/SocialsBox";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(3)
  },
  icon: {
    margin: theme.spacing(1)
  }
}));

const Contacts: React.FC = () => {
  const classes = useStyles();

  return (
    <Container>
      <Box className={classes.header}>
        <Typography variant="h4" align="center" gutterBottom>
          Get in touch
        </Typography>
        <Typography variant="subtitle1" align="center">
          At AI Plugin, we are passionate about creating a community-driven
          platform for AI-powered chatbot plugins. We appreciate your thoughts,
          feedback, and innovative ideas to help us grow and improve. Whether
          you have a plugin suggestion, need assistance, want to collaborate as
          a developer, or have any other inquiries, feel free to reach out.
          Together, let's make AI Plugin the go-to destination to build and
          discover plugins.
        </Typography>
      </Box>
      <ContactForm />
      <SocialsBox />
    </Container>
  );
};

export default Contacts;
