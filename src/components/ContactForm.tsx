import {
  Box,
  Button,
  Container,
  Grid,
  SxProps,
  TextField
} from "@mui/material";
import { Theme } from "@mui/material/styles";
import axios from "axios";
import React, { useState } from "react";

const container: SxProps<Theme> = {
  padding: (theme) => theme.spacing(2)
};

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      name: name,
      email: email,
      message: message
    };

    try {
      await axios.post(
        "https://prod-250.westeurope.logic.azure.com:443/workflows/884b292e648b4b26beeed8d79e2341cc/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=i52jkLECCaL88AZOQ5lRYd-VQPgLqRr8_1BMw9QrDiQ",
        data
      );
      // Handle success, e.g., show a success message.
      console.log("Message sent successfully.");
    } catch (error) {
      // Handle error, e.g., show an error message.
      console.error("Error sending message:", error);
    }
  };

  return (
    <Container maxWidth="md" sx={container}>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              multiline
              rows={6}
              label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Box mt={2}>
              <Button type="submit" variant="contained" color="primary">
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ContactForm;
