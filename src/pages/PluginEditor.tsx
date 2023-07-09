import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plugin, PluginApi, PluginUpdateRequest } from "../apis/api";
import React from "react";
import { TextField, Button, Grid, Box, Typography } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import PluginSections from "../components/PluginSections";
import { CircularProgress } from "@mui/material";
import AlertDialog from "../components/AlertDialog";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const PluginEditor: React.FC<{}> = () => {
  const navigate = useNavigate();
  const { guid: initialGuid } = useParams<{ guid: string }>();
  const [guid, setGuid] = useState<string>(initialGuid!);
  const [plugin, setPlugin] = useState<Plugin | null>(null);
  const [error, seterror] = useState<string | null>(null);
  const [saveInProgress, setSaveInProgress] = useState(false);
  const [deleteInProgress, setDeleteInProgress] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  React.useEffect(() => {
    const fetchPlugin = async () => {
      const pluginApi = new PluginApi();
      try {
        const response = await pluginApi.apiPluginsPluginIdGet(guid!);
        if (!response.data) {
          seterror("Something went wrong.");
        }
        console.info("response: " + response?.data);
        setPlugin(response?.data);
      } catch (error) {
        seterror("Something went wrong.");
      }
    };

    if (guid === "new") {
      if (!plugin) setPlugin({});
      return;
    }

    //get it back if the guid is not a valid Guid except if the value is 'new'
    if (
      guid &&
      !guid.match(/^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$/)
    ) {
      seterror(
        "What are you doing here? 👀, getting you back to your plugins."
      );
      navigate("/your-plugins");
      return;
    }
    if (!plugin) fetchPlugin();
  }, [guid, navigate, setPlugin, seterror, plugin]);

  const savePlugin = async () => {
    setSaveInProgress(true);
    const pluginApi = new PluginApi();
    try {
      var pluginupdate: PluginUpdateRequest = {
        nameForHuman: plugin?.nameForHuman,
        nameForModel: plugin?.nameForModel,
        descriptionForHuman: plugin?.descriptionForHuman,
        descriptionForModel: plugin?.descriptionForModel,
        logoUrl: plugin?.logoUrl,
        contactEmail: plugin?.contactEmail,
        legalInfoUrl: plugin?.legalInfoUrl,
        sections: plugin?.sections,
      };
      if (guid === "new") {
        var newPlugin = await pluginApi.apiPluginsPost(pluginupdate);
        setGuid(newPlugin.data.id!);
        return;
      }

      await pluginApi.apiPluginsPluginIdPut(guid!, pluginupdate);
    } catch (error) {
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="error">This is an error alert — check it out!</Alert>
      </Stack>;
      // Error: you can show an error message or perform any other action here
    } finally {
      setSaveInProgress(false);
    }
  };

  const deletePlugin = async () => {
    setShowDeleteDialog(false);
    setDeleteInProgress(true);
    const pluginApi = new PluginApi();
    try {
      await pluginApi.apiPluginsPluginIdDelete(guid!);
      navigate("/your-plugins");
    } catch (error) {
      // Error: you can show an error message or perform any other action here
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="error">This is an error alert — check it out!</Alert>
      </Stack>;
    } finally {
      setDeleteInProgress(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    property: keyof Plugin
  ) => {
    setPlugin({ ...plugin!, [property]: e.target.value });
  };

  return (
    <div>
      <h1>{error}</h1>
      {plugin ? (
        <Box
          sx={{
            margin: "16px",
            backgroundColor: "#f7f7f7",
            padding: 3,
            borderRadius: 4,
            marginTop: 3,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: (theme) => theme.palette.primary.main,
              marginBottom: (theme) => theme.spacing(2),
              marginTop: (theme) => theme.spacing(2),
            }}
          >
            Create A Plugin
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="standard"
                fullWidth
                label="Name for Human"
                value={plugin.nameForHuman || ""}
                onChange={(e) => handleInputChange(e, "nameForHuman")}
                error={
                  plugin.nameForHuman &&
                    (plugin.nameForHuman.length > 20 ||
                      !/^[a-zA-Z ]+$/.test(plugin.nameForHuman))
                    ? true
                    : false
                }
                helperText={
                  plugin.nameForHuman &&
                    (plugin.nameForHuman.length > 20 ||
                      !/^[a-zA-Z ]+$/.test(plugin.nameForHuman))
                    ? "Please enter a valid name (up to 20 letters and no numbers or special characters)"
                    : ""
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="standard"
                fullWidth
                label="Name for Model"
                value={plugin.nameForModel || ""}
                onChange={(e) => handleInputChange(e, "nameForModel")}
                error={
                  plugin.nameForModel &&
                    (plugin.nameForModel.length > 50 ||
                      !/^[a-zA-Z0-9]+$/.test(plugin.nameForModel))
                    ? true
                    : false
                }
                helperText={
                  plugin.nameForModel &&
                    (plugin.nameForModel.length > 50 ||
                      !/^[a-zA-Z0-9]+$/.test(plugin.nameForModel))
                    ? "Please enter a valid name (up to 50 characters with no spaces and only letters and numbers)"
                    : ""
                }
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                rows={2}
                label="Description for Human"
                value={plugin.descriptionForHuman || ""}
                onChange={(e) => handleInputChange(e, "descriptionForHuman")}
                error={
                  plugin.descriptionForHuman &&
                    plugin.descriptionForHuman.length > 100
                    ? true
                    : undefined
                }
                helperText={
                  plugin.descriptionForHuman &&
                    plugin.descriptionForHuman.length > 100
                    ? "Please enter a shorter description (up to 100 characters)"
                    : ""
                }
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                rows={2}
                label="Description for Model"
                value={plugin.descriptionForModel || ""}
                onChange={(e) => handleInputChange(e, "descriptionForModel")}
                error={
                  plugin.descriptionForModel &&
                    plugin.descriptionForModel.length > 8000
                    ? true
                    : false
                }
                helperText={
                  plugin.descriptionForModel &&
                    plugin.descriptionForModel.length > 8000
                    ? "Please shorten the description (up to 8000 characters)"
                    : "Include keywords and relevant details to improve plugin prompting"
                }
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="standard"
                fullWidth
                label="Logo URL"
                value={plugin.logoUrl ? plugin.logoUrl : ""}
                onChange={(e) => handleInputChange(e, "logoUrl")}
                error={
                  (plugin.logoUrl &&
                    !/\.(gif|jpe?g|png)$/i.test(plugin.logoUrl)) ||
                    (plugin.logoUrl && plugin.logoUrl.length > 2083)
                    ? true
                    : undefined
                }
                helperText={
                  plugin.logoUrl && !/\.(gif|jpe?g|png)$/i.test(plugin.logoUrl)
                    ? "Please provide a valid image URL (PNG, JPEG or GIF)"
                    : plugin.logoUrl && plugin.logoUrl.length > 2083
                      ? "Please shorten the URL (up to 2083 characters)"
                      : "URL used to fetch the logo. Suggested size: 512 x 512. Transparent backgrounds are supported."
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="standard"
                fullWidth
                label="Contact Email"
                value={plugin.contactEmail || ""}
                onChange={(e) => handleInputChange(e, "contactEmail")}
                error={
                  plugin.contactEmail &&
                    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(plugin.contactEmail)
                    ? true
                    : undefined
                }
                helperText={
                  plugin.contactEmail &&
                    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(plugin.contactEmail)
                    ? "Please provide a valid email address"
                    : "Email address for safety/moderation, support, and deactivation purposes."
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="standard"
                fullWidth
                label="Legal Info URL"
                value={plugin.legalInfoUrl || ""}
                onChange={(e) => handleInputChange(e, "legalInfoUrl")}
                error={
                  plugin.legalInfoUrl &&
                    !/^https?:\/\/.+/.test(plugin.legalInfoUrl)
                    ? true
                    : undefined
                }
                helperText={
                  plugin.legalInfoUrl &&
                    !/^https?:\/\/.+/.test(plugin.legalInfoUrl)
                    ? "Please provide a valid URL starting with http:// or https://"
                    : "Redirect URL for users to view plugin information."
                }
              />
            </Grid>
            <PluginSections plugin={plugin!} setPlugin={setPlugin} />
            <Grid item xs={12} sm={12} container justifyContent="center">
              <Button
                variant="text"
                color="primary"
                startIcon={<AddIcon />}
                onClick={() =>
                  setPlugin({
                    ...plugin,
                    sections: [
                      ...(plugin.sections || []),
                      { name: "", description: "", content: "" },
                    ],
                  })
                }
              >
                Add Section
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} container justifyContent="space-between">
              <Button
                variant="contained"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => setShowDeleteDialog(true)}
              >
                {deleteInProgress ? (
                  <CircularProgress
                    size={24}
                    sx={{ color: (theme) => theme.palette.error.contrastText }}
                  />
                ) : (
                  "Delete"
                )}
              </Button>
              <Button
                variant="contained"
                color="success"
                startIcon={<SaveIcon />}
                onClick={savePlugin}
              >
                {saveInProgress ? (
                  <CircularProgress
                    size={24}
                    sx={{
                      color: (theme) => theme.palette.success.contrastText,
                    }}
                  />
                ) : (
                  "Save"
                )}
              </Button>
            </Grid>
          </Grid>
        </Box>
      ) : null}
      <AlertDialog
        open={showDeleteDialog}
        setOpen={setShowDeleteDialog}
        onConfirm={deletePlugin}
      />
    </div>
  );
};

export default PluginEditor;
