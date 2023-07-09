import { faPencilAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Skeleton,
  Tooltip,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plugin, PluginApi } from "../apis/api";

type PluginsState = {
  loading: boolean;
  pluginList: Plugin[];
};
const initialData: PluginsState = {
  loading: true,
  pluginList: []
};
const YourPlugins: React.FC<{}> = () => {
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

  return (
    <>
      <List
        sx={{
          backgroundColor: "#f7f7f7",
          marginTop: 4,
          borderRadius: 3,
          padding: 3
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: (theme) => theme.palette.primary.main,
            marginBottom: (theme) => theme.spacing(2),
            marginTop: (theme) => theme.spacing(2)
          }}
        >
          Your Plugins
        </Typography>
        {loading ? (
          <>
            {[...Array(2)].map((_, index) => (
              <ListItem key={index}>
                <ListItemAvatar>
                  <Skeleton variant="circular">
                    <Avatar />
                  </Skeleton>
                </ListItemAvatar>
                <ListItemText>
                  <Skeleton />
                  <Skeleton width="60%" />
                </ListItemText>
              </ListItem>
            ))}
          </>
        ) : pluginList.length <= 0 ? (
          <>Nothing to see here 👀</>
        ) : (
          pluginList.map((plugin, index) => (
            <ListItem
              onClick={() => navigate(`/plugin/${plugin.id}`)}
              key={plugin.id}
              sx={{
                backgroundColor: (theme) => theme.palette.background.paper,
                borderRadius: 2,
                marginBottom: (theme) => theme.spacing(1),
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
              }}
            >
              <ListItemAvatar>
                <Avatar
                  src={
                    plugin.logoUrl ??
                    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  }
                />
              </ListItemAvatar>
              <ListItemText
                primary={plugin.nameForHuman}
                secondary={"Plugin/" + plugin.id}
                sx={{ color: "text.primary", secondary: "text.secondary" }}
              />
              <ListItemSecondaryAction>
                {/* <Tooltip
                open={tooltipOpenIndex === index}
                title="URL copied to clipboard"
                arrow
                placement="top">
                <IconButton
                  // onClick={() => handleCopyClick("https://aiplugin-api.azurewebsites.net/Plugin/" + mockedUserId + "/" + plugin.id, index)}
                  edge="end"
                  aria-label="copy">
                  <FontAwesomeIcon icon={faCopy} />
                </IconButton>
              </Tooltip> */}
                <IconButton
                  onClick={() => navigate("Plugin/" + plugin.id)}
                  edge="end"
                  aria-label="modify"
                >
                  <FontAwesomeIcon icon={faPencilAlt} />
                </IconButton>
                {/* <IconButton disabled edge="end" aria-label="delete">
                <FontAwesomeIcon icon={faTrashAlt} color='white' />
              </IconButton> */}
              </ListItemSecondaryAction>
            </ListItem>
          ))
        )}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignContent: "center"
          }}
        >
          Create your plugin here
          <Tooltip title="Create new plugin" arrow placement="top">
            {/* put this on the righ, using float it goes out of the div */}
            <IconButton
              onClick={() => navigate("/plugin/new")}
              sx={{
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.primary.dark
                }
              }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </IconButton>
          </Tooltip>
        </Box>
      </List>
    </>
  );
};

export default YourPlugins;
