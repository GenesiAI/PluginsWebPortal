import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";
import { Plugin, PluginApi } from "apis/api";
import React, { ComponentProps, memo, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButtonTheme } from "theme";
import PluginItem from "./PluginItem";
import PluginSkeleton from "./PluginSkeleton";

// Do that for avoid recreate object and static function in case of rerender
const sxTypography: ComponentProps<typeof Typography>["sx"] = {
  fontWeight: "bold",
  color: (theme) => theme.palette.primary.main
};

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
      const onClick = () => navigate("/plugin/" + plugin.id);
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
        <>
          <ListItem>
            <ListItemText>
              <Typography className="text-center" sx={sxTypography}>
                Nothing to see here 👀
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem className="!pr-0">
            <ListItemText className="justify-end">
              <Typography className="text-end" sx={sxTypography}>
                Create your plugin here
              </Typography>
            </ListItemText>
            <ListItemIcon className="justify-end me-1">
              <IconButton
                sx={IconButtonTheme}
                className="motion-safe:animate-bounce delay-1000"
              >
                <FontAwesomeIcon icon={faShare} rotation={90} size="xs" />
              </IconButton>
            </ListItemIcon>
          </ListItem>
        </>
      ) : (
        plugins
      )}
    </>
  );
};

export default memo(Plugins);
