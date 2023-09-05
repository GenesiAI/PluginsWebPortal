import { Button, Typography } from "@mui/material";
import { PluginApi } from "apis/api";
import { debugConsole } from "components/util";
import React, { memo, useCallback, useContext, useState } from "react";

type PluginsState = {
  loading: boolean;
  pluginData: Awaited<ReturnType<PluginApi["apiPluginsGet"]>>["data"];
};
const initialData: PluginsState = {
  loading: true,
  pluginData: {}
};

const Ctx = React.createContext<PluginsState>(initialData);

type inputProps = {
  children: React.ReactNode;
};

const PluginsCtx = ({ children }: inputProps) => {
  const [data, setPlugin] = useState<PluginsState>(initialData);
  const [errorFetch, setErrorFetch] = useState<React.ReactNode>(null);
  const fetchPlugins = useCallback(async () => {
    const pluginApi = new PluginApi();
    try {
      const response = await pluginApi.apiPluginsGet();
      setPlugin({ loading: false, pluginData: response.data });
    } catch (error) {
      setErrorFetch("Something went wrong, please retry!");
      debugConsole("Error fetching users:", error);
    }
  }, []);

  React.useEffect(() => {
    fetchPlugins();
  }, [fetchPlugins]);

  if (errorFetch) {
    return (
      <>
        <Typography variant="h6" component="h2" color="error">
          {errorFetch}
        </Typography>
        <Button onClick={fetchPlugins} variant="contained" color="error">
          Retry?
        </Button>
      </>
    );
  }

  return <Ctx.Provider value={data}>{children}</Ctx.Provider>;
};

export default memo(PluginsCtx);
export const usePluginsCtx = () => useContext(Ctx);
