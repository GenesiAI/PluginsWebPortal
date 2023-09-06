import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, CircularProgress, IconButton, Tooltip } from "@mui/material";
import { useRedirectToStripe } from "components/Stripe/useRedirectToStripe";
import { useUserInfoCtx } from "components/UserInfo/UserInfo";
import { pluginBuilder } from "const/urls";
import { useNavigate } from "react-router-dom";
import { IconButtonTheme } from "theme";
import { usePluginsCtx } from "./PluginsCtx";

const PluginFooter = () => {
  const navigate = useNavigate();
  const { pluginData, loading } = usePluginsCtx();
  const { isLoading, redirectToStripe, modalError } = useRedirectToStripe();
  const { userInfo } = useUserInfoCtx();

  if (loading) return null;
  const canCreateNewPlugin =
    (pluginData?.pluginsCount || 0) < (pluginData?.maxPlugins || 0) &&
    !userInfo?.isPremium;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignContent: "center"
      }}
    >
      {modalError}
      <Tooltip
        title={
          canCreateNewPlugin ? "Create new plugin" : "Upgrade to create more!"
        }
        arrow
        placement="top"
      >
        <span>
          {/* put this on the right, using float it goes out of the div */}
          <IconButton
            className={!canCreateNewPlugin ? "!bg-amber-600" : ""}
            onClick={
              canCreateNewPlugin
                ? () => navigate(`/${pluginBuilder("new")}`)
                : redirectToStripe
            }
            sx={IconButtonTheme}
          >
            {isLoading ? (
              <CircularProgress
                size={24}
                sx={{
                  color: (theme) => theme.palette.success.contrastText
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faPlus}
                className="motion-safe:active:animate-ping"
              />
            )}
          </IconButton>
        </span>
      </Tooltip>
    </Box>
  );
};

export default PluginFooter;
