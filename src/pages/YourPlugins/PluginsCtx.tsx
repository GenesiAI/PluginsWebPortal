import { PluginApi } from "apis/api";
import React, { memo, useContext, useState } from "react";

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
  React.useEffect(() => {
    const fetchPlugins = async () => {
      const pluginApi = new PluginApi();
      try {
        const response = await pluginApi.apiPluginsGet();
        setPlugin({ loading: false, pluginData: response.data });
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchPlugins();
  }, []);

  return <Ctx.Provider value={data}>{children}</Ctx.Provider>;
};

export default memo(PluginsCtx);
export const usePluginsCtx = () => useContext(Ctx);
