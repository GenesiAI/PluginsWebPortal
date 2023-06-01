import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, ListItemAvatar, Avatar, IconButton, Typography, Tooltip, Box, Skeleton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { /*faCopy,*/ faPencilAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Plugin, PluginApi } from '../apis/api';

const YourPlugins: React.FC<{}> = () => {
  const navigate = useNavigate();
  // const [tooltipOpenIndex, setTooltipOpenIndex] = useState(-1);
  // const handleCopyClick = async (url: string, index: number) => {
  //   await navigator.clipboard.writeText(url);
  //   setTooltipOpenIndex(index);
  //   setTimeout(() => setTooltipOpenIndex(-1), 2000);
  // };
  const [plugins, setPlugin] = useState<Plugin[] | null>(null);
  React.useEffect(() => {
    const fetchPlugins = async () => {
      const pluginApi = new PluginApi();
      try {
        const response = await pluginApi.apiPluginsGet();
        setPlugin(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    if (!plugins)
      fetchPlugins();
  });

  return (
    <>
      <List>
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: 24,
            fontWeight: 'bold',
            color: (theme) => theme.palette.primary.main,
            marginBottom: (theme) => theme.spacing(2),
          }}
        >
          Your Plugins
        </Typography>
        {plugins == null ? (
          <div>
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
          </div>
        ) : plugins.map((plugin, index) => (
          <ListItem
            onClick={() => navigate(`/plugin/${plugin.id}`)}
            key={plugin.id}
            sx={{
              backgroundColor: (theme) => theme.palette.background.paper,
              borderRadius: 2,
              marginBottom: (theme) => theme.spacing(1),
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <ListItemAvatar>
              <Avatar src={plugin.logoUrl ?? "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"} />
            </ListItemAvatar>
            <ListItemText primary={plugin.nameForHuman}
              secondary={"Plugin/" + plugin.id}
              sx={{ color: 'text.primary', secondary: 'text.secondary' }} />
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
                edge="end" aria-label="modify">
                <FontAwesomeIcon icon={faPencilAlt} />
              </IconButton>
              {/* <IconButton disabled edge="end" aria-label="delete">
                <FontAwesomeIcon icon={faTrashAlt} color='white' />
              </IconButton> */}
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <Box sx={{
        display: 'flex', justifyContent: 'flex-end'
      }}>
        < Tooltip title="Create new plugin" arrow placement="top" >
          {/* put this on the righ, using float it goes out of the div */}
          < IconButton
            onClick={() => navigate("/plugin/new")}
            sx={{
              backgroundColor: (theme) => theme.palette.primary.main,
              color: (theme) => theme.palette.primary.contrastText,
              '&:hover': {
                backgroundColor: (theme) => theme.palette.primary.dark,
              },
            }}
          >
            <FontAwesomeIcon icon={faPlus} />
          </IconButton >
        </Tooltip >
      </Box >
    </>
  );
};

export default YourPlugins;