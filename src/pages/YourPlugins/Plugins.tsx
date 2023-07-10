import { Plugin, PluginApi } from "apis/api";
import React, { memo, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import PluginItem from "./PluginItem";
import PluginSkeleton from "./PluginSkeleton";

type PluginsState = {
  loading: boolean;
  pluginList: Plugin[];
};
const initialData: PluginsState = {
  loading: true,
  pluginList: []
};
const Plugins = () => {
  const navigate = useNavigate();
  // const [tooltipOpenIndex, setTooltipOpenIndex] = useState(-1);
  // const handleCopyClick = async (url: string, index: number) => {p
  //   await navigator.clipboard.writeText(url);
  //   setTooltipOpenIndex(index);
  //   setTimeout(() => setTooltipOpenIndex(-1), 2000);
  // };
  const [{ pluginList, loading }, setPlugin] =
    useState<PluginsState>(initialData);
  React.useEffect(() => {
    const fetchPlugins = async () => {
      const pluginApi = new PluginApi();
      try {
        const response = await pluginApi.apiPluginsGet();
        setPlugin({ loading: false, pluginList: response.data });
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchPlugins();
  }, []);

  const plugins = useMemo(() => {
    return pluginList.map((plugin) => {
      const onClick = () => navigate("Plugin/" + plugin.id);
      return <PluginItem key={plugin.id} onClick={onClick} plugin={plugin} />;
    });
  }, [pluginList, navigate]);

  return (
    <>
      {loading ? (
        <>
          <PluginSkeleton />
          <PluginSkeleton />
        </>
      ) : pluginList.length <= 0 ? (
        <>Nothing to see here 👀</>
      ) : (
        plugins
      )}
    </>
  );
};

export default memo(Plugins);
