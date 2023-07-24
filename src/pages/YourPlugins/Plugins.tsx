import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";
import { ComponentProps, memo, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { IconButtonTheme } from "theme";
import PluginItem from "./PluginItem";
import PluginSkeleton from "./PluginSkeleton";
import { usePluginsCtx } from "./PluginsCtx";

// Do that for avoid recreate object and static function in case of rerender
const sxTypography: ComponentProps<typeof Typography>["sx"] = {
  fontWeight: "bold",
  color: (theme) => theme.palette.primary.main
};

const Plugins = () => {
  const navigate = useNavigate();
  // const [tooltipOpenIndex, setTooltipOpenIndex] = useState(-1);
  // const handleCopyClick = async (url: string, index: number) => {p
  //   await navigator.clipboard.writeText(url);
  //   setTooltipOpenIndex(index);
  //   setTimeout(() => setTooltipOpenIndex(-1), 2000);
  // };
  const { pluginData, loading } = usePluginsCtx();

  const plugins = useMemo(() => {
    return pluginData.plugins?.map((plugin) => {
      const onClick = () => navigate("/plugin/" + plugin.id);
      return <PluginItem key={plugin.id} onClick={onClick} plugin={plugin} />;
    });
  }, [pluginData, navigate]);

  return (
    <>
      {loading ? (
        <>
          <PluginSkeleton />
          <PluginSkeleton />
        </>
      ) : (pluginData.pluginsCount || 0) <= 0 ? (
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
