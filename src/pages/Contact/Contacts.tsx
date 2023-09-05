import { Box, Container, SxProps, Theme, Typography } from "@mui/material";
import ContactForm from "pages/Contact/ContactForm";
import React from "react";

const header: SxProps<Theme> = {
  marginTop: (theme) => theme.spacing(4),
  marginBottom: (theme) => theme.spacing(4)
};

const Contacts: React.FC = () => (
  <Container>
    <Box sx={header}>
      <Typography variant="h4" align="center" gutterBottom>
        Get in touch
      </Typography>
      <Typography variant="subtitle1" align="center">
        At AI Plugin, we are passionate about creating a community-driven
        platform for AI-powered chatbot plugins. We appreciate your thoughts,
        feedback, and innovative ideas to help us grow and improve. Whether you
        have a plugin suggestion, need assistance, want to collaborate as a
        developer, or have any other inquiries, feel free to reach out.
        Together, let's make AI Plugin the go-to destination to build and
        discover plugins.
      </Typography>
    </Box>
    <ContactForm />
  </Container>
);

export default Contacts;
