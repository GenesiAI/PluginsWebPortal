import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, IconButton, Tooltip } from "@mui/material";
import { useUserInfoCtx } from "components/UserInfo/UserInfo";
import { pluginBuilder, pricing } from "const/urls";

import { useNavigate } from "react-router-dom";
import { IconButtonTheme } from "theme";
import { usePluginsCtx } from "./PluginsCtx";
import useModalMaxPlugins from "./useModalMaxPlugins";

const PluginFooter = () => {
  const navigate = useNavigate();
  const { pluginData, loading } = usePluginsCtx();
  const { userInfo } = useUserInfoCtx();
  const { modalMaxPlugin, openModalMaxPlugin } = useModalMaxPlugins();

  if (loading) return null;
  const canCreateNewPlugin =
    (pluginData?.pluginsCount || 0) < (pluginData?.maxPlugins || 0);

  const toolTipTitle = canCreateNewPlugin
    ? "Create new plugin"
    : !userInfo?.isPremium
    ? "Upgrade to create more!"
    : "You reached the maximum number of plugins!";
  const isGoldButton = !canCreateNewPlugin && !userInfo?.isPremium;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignContent: "center"
      }}
    >
      {modalMaxPlugin}
      <Tooltip title={toolTipTitle} arrow placement="top">
        <span>
          {/* put this on the right, using float it goes out of the div */}
          <IconButton
            className={isGoldButton ? "!bg-amber-600" : ""}
            onClick={
              canCreateNewPlugin
                ? () => navigate(`/${pluginBuilder("new")}`)
                : !userInfo?.isPremium
                ? () => navigate(`/${pricing}`)
                : openModalMaxPlugin
            }
            sx={IconButtonTheme}
          >
            <FontAwesomeIcon
              icon={faPlus}
              className="motion-safe:active:animate-ping"
            />
          </IconButton>
        </span>
      </Tooltip>
    </Box>
  );
};

export default PluginFooter;
