import { Typography } from "@mui/material";
import { ContactFormRequest, PublicPluginApi } from "apis/api";
import React, { useState } from "react";
import { FormContainer } from "react-hook-form-mui";
import { BoxContainer } from "theme";
import { debugConsole } from "../../components/util";
import Fields from "./Fields";
import ModalContactSubmit from "./ModalContactSubmit";

const defaultData: ContactFormRequest = {
  name: "",
  email: "",
  message: ""
};

const ContactForm: React.FC = () => {
  const [error, setError] = useState("");

  const handleSubmit = async (data: ContactFormRequest) => {
    setError("");
    try {
      const publicPlugin = new PublicPluginApi();
      await publicPlugin.contactPost(data);
      // // Handle success, e.g., show a success message.
      debugConsole("Message sent successfully.");
    } catch (error) {
      setError("Something went wrong, please retry!");
      // Handle error, e.g., show an error message.
      debugConsole("Error sending message:", error);
      throw error; //Throw error to avoid setting isSubmitSuccessful to true
    }
  };

  return (
    <BoxContainer>
      <FormContainer
        defaultValues={defaultData}
        onSuccess={handleSubmit}
        mode="onBlur"
        reValidateMode="onChange"
      >
        {error && (
          <Typography
            variant="h6"
            component="h2"
            color="error"
            className="py-2 text-center"
          >
            {error}
          </Typography>
        )}
        <Fields />
        <ModalContactSubmit />
      </FormContainer>
    </BoxContainer>
  );
};

export default ContactForm;
