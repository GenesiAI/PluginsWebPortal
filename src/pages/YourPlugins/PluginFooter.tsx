import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, IconButton, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IconButtonTheme } from "theme";
import { usePluginsCtx } from "./PluginsCtx";

const PluginFooter = () => {
  const navigate = useNavigate();
  const { pluginData, loading } = usePluginsCtx();
  if (loading) return null;
  const canCreateNewPlugin =
    (pluginData.pluginsCount || 0) < (pluginData.maxPlugins || 0);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignContent: "center"
      }}
    >
      <Tooltip
        title={
          canCreateNewPlugin
            ? "Create new plugin"
            : "You have reach the max number"
        }
        arrow
        placement="top"
      >
        {/* put this on the right, using float it goes out of the div */}
        <IconButton
          disabled={!canCreateNewPlugin}
          onClick={
            canCreateNewPlugin ? () => navigate("/plugin/new") : undefined
          }
          sx={IconButtonTheme}
        >
          <FontAwesomeIcon
            icon={faPlus}
            className="motion-safe:active:animate-ping"
          />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default PluginFooter;
