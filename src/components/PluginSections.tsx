// PluginSections.tsx
import { Box, Grid, TextField } from "@mui/material";
import React from "react";
import { Plugin } from "../apis/api";

interface PluginSectionsProps {
  plugin: Plugin;
  setPlugin: React.Dispatch<React.SetStateAction<Plugin | null>>;
}

const PluginSections: React.FC<PluginSectionsProps> = ({
  plugin,
  setPlugin
}) => {
  return (
    <>
      {plugin.sections?.map((section, index) => (
        <React.Fragment key={index}>
          <Box margin={4}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="filled"
                  fullWidth
                  label="Section Name"
                  value={section.name || ""}
                  onChange={(e) =>
                    setPlugin({
                      ...plugin,
                      sections: plugin.sections!.map((s, i) =>
                        i === index ? { ...s, name: e.target.value } : s
                      )
                    })
                  }
                  error={
                    section.name &&
                    (section.name.length > 50 ||
                      !/^[a-zA-Z0-9]+$/.test(section.name))
                      ? true
                      : false
                  }
                  helperText={
                    section.name &&
                    (section.name.length > 50 ||
                      !/^[a-zA-Z0-9]+$/.test(section.name))
                      ? "Please enter a valid name (up to 50 characters with no spaces and only letters and numbers)"
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant="filled"
                  fullWidth
                  multiline
                  rows={2}
                  label="Section Description"
                  value={section.description || ""}
                  onChange={(e) =>
                    setPlugin({
                      ...plugin,
                      sections: plugin.sections!.map((s, i) =>
                        i === index ? { ...s, description: e.target.value } : s
                      )
                    })
                  }
                  error={
                    section.description &&
                    (section.description.length > 200 ||
                      !/^[a-zA-Z0-9]+$/.test(section.description))
                      ? true
                      : false
                  }
                  helperText={
                    section.description &&
                    (section.description.length > 200 ||
                      !/^[a-zA-Z0-9]+$/.test(section.description))
                      ? "Please enter a valid description (up to 200 characters)"
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant="filled"
                  fullWidth
                  label="Section Content"
                  multiline
                  rows={4}
                  value={section.content || ""}
                  onChange={(e) =>
                    setPlugin({
                      ...plugin,
                      sections: plugin.sections!.map((s, i) =>
                        i === index ? { ...s, content: e.target.value } : s
                      )
                    })
                  }
                  error={
                    section.content && section.content.length > 100000
                      ? true
                      : false
                  }
                  helperText={
                    section.content && section.content.length > 100000
                      ? "Please shorten the description (up to 100.000 characters)"
                      : "Up to 100.000 characters of data, the more the better!"
                  }
                />
              </Grid>
            </Grid>
          </Box>
        </React.Fragment>
      ))}
    </>
  );
};

export default PluginSections;
