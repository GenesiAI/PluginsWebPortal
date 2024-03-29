import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Plugin, PluginApi, PluginUpdateRequest } from "apis/api";
import { yourPlugins } from "const/urls";
import React, { useCallback, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const defaultValue: Plugin = {
  sections: [{}]
};

const usePluginEditor = () => {
  const navigate = useNavigate();
  const navigateRef = useRef(navigate);
  navigateRef.current = navigate;

  const { guid } = useParams<{ guid: string }>();
  const isNewPlugin = guid === "new";
  const [defaultData, setDefaultData] = useState<Plugin>(defaultValue);
  const [isLoadingPlugin, setIsLoadingPlugin] = useState(!isNewPlugin);

  const [error, setError] = useState<React.ReactNode>(null);
  const [deleteInProgress, setDeleteInProgress] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const fetchData = useCallback(() => {
    setError(null);
    const navigate = navigateRef.current;
    const fetchPlugin = async () => {
      const pluginApi = new PluginApi();
      try {
        const response = await pluginApi.apiPluginsPluginIdGet(guid!);
        if (!response.data) {
          setError("Something went wrong, please retry!");
          return;
        }
        setDefaultData(response?.data || {});
        setIsLoadingPlugin(false);
      } catch (error) {
        setError("Something went wrong, please retry!");
      }
    };

    if (isNewPlugin) {
      return;
    }

    //get it back if the guid is not a valid Guid except if the value is 'new'
    if (
      guid &&
      !guid.match(/^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$/)
    ) {
      setError(
        "What are you doing here? 👀, getting you back to your plugins."
      );
      navigate(`/${yourPlugins}`);
      return;
    }
    fetchPlugin();
  }, [isNewPlugin, setError, guid]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const savePlugin = useCallback(
    async (data: Plugin) => {
      setError(null);
      const navigate = navigateRef.current;
      const pluginApi = new PluginApi();
      try {
        const pluginUpdate: PluginUpdateRequest = data;
        if (isNewPlugin) {
          // In case of new plugin, take the id and update the param
          await pluginApi
            .apiPluginsPost(pluginUpdate)
            .then(({ data: { id } }) => {
              navigate(`/${yourPlugins}`);
            });
          return;
        }

        await pluginApi.apiPluginsPluginIdPut(guid!, pluginUpdate);
      } catch (error) {
        setError(
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">Something went wrong, please retry!</Alert>
          </Stack>
        );
        // Error: you can show an error message or perform any other action here
      }
    },
    [guid, isNewPlugin]
  );

  const deletePlugin = useCallback(async () => {
    setError(null);
    const navigate = navigateRef.current;
    setShowDeleteDialog(false);
    setDeleteInProgress(true);
    const pluginApi = new PluginApi();
    try {
      await pluginApi.apiPluginsPluginIdDelete(guid!);
      navigate(`/${yourPlugins}`);
    } catch (error) {
      // Error: you can show an error message or perform any other action here
      setError(
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error">Something went wrong, please retry!</Alert>
        </Stack>
      );
    } finally {
      setDeleteInProgress(false);
    }
  }, [guid]);

  // Encapsulate on useMemo for avoid recreating object
  return {
    savePlugin,
    deletePlugin,
    setShowDeleteDialog,
    error,
    defaultData,
    deleteInProgress,
    showDeleteDialog,
    isNewPlugin,
    isLoadingPlugin,
    fetchData
  };
};

export default usePluginEditor;
