import { Grid } from "@mui/material";
import React, { memo } from "react";
import Field from "../../../components/Field";
import LayoutItemGrid from "../../../components/LayoutItemGrid";
import {
  validationDescriptionForHuman,
  validationDescriptionForModel,
  validationForEmail,
  validationForLegalUrl,
  validationForLogo,
  validationModel,
  validationName
} from "./FieldsRules";

type inputProps = {
  children: React.ReactNode;
};

const FieldsContainer = ({ children }: inputProps) => (
  <Grid container spacing={2}>
    <LayoutItemGrid>
      <Field
        name="nameForHuman"
        label="Name for Human"
        validation={validationName}
      />
    </LayoutItemGrid>
    <LayoutItemGrid>
      <Field
        name="nameForModel"
        label="Name for Model"
        validation={validationModel}
      />
    </LayoutItemGrid>
    <LayoutItemGrid full>
      <Field
        name="descriptionForHuman"
        label="Description for Human"
        validation={validationDescriptionForHuman}
        multiline
        rows={2}
      />
    </LayoutItemGrid>
    <LayoutItemGrid full>
      <Field
        name="descriptionForModel"
        label="Description for Model"
        validation={validationDescriptionForModel}
        multiline
        rows={2}
        helperText={
          "Include keywords and relevant details to improve plugin prompting"
        }
      />
    </LayoutItemGrid>
    <LayoutItemGrid full>
      <Field
        name="logoUrl"
        label="Logo URL"
        validation={validationForLogo}
        helperText={
          "Set URL to fetch the logo. Suggested size: 512 x 512. Transparent backgrounds are supported."
        }
      />
    </LayoutItemGrid>
    <LayoutItemGrid>
      <Field
        name="contactEmail"
        label="Contact Email"
        validation={validationForEmail}
        helperText={
          "Email address for safety/moderation, support, and deactivation purposes."
        }
      />
    </LayoutItemGrid>
    <LayoutItemGrid>
      <Field
        name="legalInfoUrl"
        label="Legal Info URL"
        validation={validationForLegalUrl}
        helperText={"Redirect URL for users to view plugin information."}
      />
    </LayoutItemGrid>
    {children}
  </Grid>
);

export default memo(FieldsContainer);
