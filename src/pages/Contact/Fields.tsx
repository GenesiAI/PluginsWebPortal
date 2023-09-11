import SendIcon from "@mui/icons-material/Send";
import { Grid } from "@mui/material";
import ButtonLoading from "components/ButtonLoading";
import LayoutItemGrid from "components/LayoutItemGrid";
import Typography from "components/Typography";
import { memo } from "react";
import { useFormState } from "react-hook-form";
import Field from "../../components/Field";
import {
  validationForEmail,
  validationMessage,
  validationName
} from "./FieldsRules";

const Fields = () => {
  const { isSubmitting } = useFormState();

  return (
    <Grid container spacing={2}>
      <LayoutItemGrid>
        <Field name="name" label="Name" validation={validationName} />
      </LayoutItemGrid>
      <LayoutItemGrid>
        <Field name="email" label="Email" validation={validationForEmail} />
      </LayoutItemGrid>
      <LayoutItemGrid full>
        <Field
          name="message"
          label="Message"
          multiline
          resizeStyle="vertical"
          rows={3}
          validation={validationMessage}
        />
      </LayoutItemGrid>
      <LayoutItemGrid full className="text-right">
        <ButtonLoading
          color="primary"
          startIcon={!isSubmitting && <SendIcon />}
          type="submit"
          isLoading={isSubmitting}
        >
          <Typography variant="t5" className="text-inherit">
            Send Message
          </Typography>
        </ButtonLoading>
      </LayoutItemGrid>
    </Grid>
  );
};

export default memo(Fields);
