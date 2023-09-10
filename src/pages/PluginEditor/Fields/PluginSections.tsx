import { Box, Divider, Grid } from "@mui/material";
import { Plugin } from "apis/api";
import { Fragment } from "react";
import { useFieldArray } from "react-hook-form";
import Field from "../../../components/Field";
import LayoutItemGrid from "../../../components/LayoutItemGrid";
import {
  validationSectionContent,
  validationSectionDescription,
  validationSectionName
} from "./FieldsRules";
import PluginAddSections from "./PluginAddSections";
import SectionDelete from "./SectionDelete";

const PluginSections = () => {
  const { fields, remove, append } = useFieldArray<Plugin>({
    name: "sections",
    shouldUnregister: true
  });
  return (
    <Grid item margin="auto">
      {fields?.map(({ id }, index) => (
        <Fragment key={id}>
          <Divider className="!my-4" />
          <Box className="md:p-2 rounded-xl md:hover:bg-gray-200/60">
            <Grid container spacing={4}>
              <LayoutItemGrid className="!pt-1 md:!pt-8">
                <Field
                  name={`sections.${index}.name`}
                  label="Section Name"
                  validation={validationSectionName}
                />
              </LayoutItemGrid>
              {fields.length > 1 && ( // At least one section
                <SectionDelete onClick={() => remove(index)} />
              )}
              <LayoutItemGrid full>
                <Field
                  name={`sections.${index}.description`}
                  label="Section Description"
                  helperText="Explain to the AI what is in the content."
                  validation={validationSectionDescription}
                />
              </LayoutItemGrid>
              <LayoutItemGrid full>
                <Field
                  name={`sections.${index}.content`}
                  label="Section Content"
                  helperText="Insert the data to share with AI."
                  validation={validationSectionContent}
                  multiline
                  rows={4}
                />
              </LayoutItemGrid>
            </Grid>
          </Box>
        </Fragment>
      ))}
      <PluginAddSections
        onClick={() =>
          append({
            id: new Date().toISOString(),
            content: "",
            description: "",
            name: ""
          })
        }
      />
    </Grid>
  );
};

export default PluginSections;
