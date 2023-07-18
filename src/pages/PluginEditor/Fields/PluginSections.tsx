import { Box, Divider, Grid } from "@mui/material";
import { Plugin } from "apis/api";
import { useFieldArray } from "react-hook-form";
import Field from "./Field";
import {
  validationSectionContent,
  validationSectionDescription,
  validationSectionName
} from "./FieldsRules";
import LayoutItemGrid from "./LayoutItemGrid";
import PluginAddSections from "./PluginAddSections";
import SectionDelete from "./SectionDelete";

const PluginSections = () => {
  const { fields, remove, append } = useFieldArray<Plugin>({
    name: "sections",
    shouldUnregister: true
  });
  return (
    <Grid item>
      {fields?.map(({ id }, index) => (
        <>
          <Divider key={id} className="!my-4" />
          <Box key={id} className="md:p-2 rounded-xl md:hover:bg-gray-200/60">
            <Grid container spacing={4}>
              <LayoutItemGrid className="!pt-1 md:!pt-8">
                <Field
                  name={`sections.${index}.name`}
                  label="Section Name"
                  validation={validationSectionName}
                />
              </LayoutItemGrid>
              <SectionDelete onClick={() => remove(index)} />
              <LayoutItemGrid full>
                <Field
                  name={`sections.${index}.description`}
                  label="Section Description"
                  validation={validationSectionDescription}
                />
              </LayoutItemGrid>
              <LayoutItemGrid full>
                <Field
                  name={`sections.${index}.content`}
                  label="Section Content"
                  validation={validationSectionContent}
                  multiline
                  rows={4}
                />
              </LayoutItemGrid>
            </Grid>
          </Box>
        </>
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
