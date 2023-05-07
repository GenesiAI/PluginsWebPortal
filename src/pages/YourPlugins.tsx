import React, { useState } from 'react';
import { Plugin } from '../models/Plugin';
import { List, ListItem, ListItemText, ListItemSecondaryAction, ListItemAvatar, Avatar, IconButton, Typography, Box, Tooltip } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const YourPlugins: React.FC<{}> = () => {
  const navigate = useNavigate();

  const [tooltipOpenIndex, setTooltipOpenIndex] = useState(-1);

  const handleCopyClick = async (url: string, index: number) => {
    await navigator.clipboard.writeText(url);
    setTooltipOpenIndex(index);
    setTimeout(() => setTooltipOpenIndex(-1), 2000);
  };
  React.useEffect(() => {
    if (!localStorage.getItem('X')) {
      navigate("/")
    }
  });

  const plugins: Plugin[] = [
    {
      aiPlugin: 'Plugin 1',
      name: 'Awesome Plugin 1',
      url: 'https://www.example.com/plugin1',
      iconUrl: 'https://thumbs.dreamstime.com/t/hi-tech-circuit-style-round-yggdrasil-tree-cyberpunk-futuristic-design-progress-symbol-styled-frame-elements-borders-blue-deep-115165758.jpg',
      userId: 'user1',
    },
    {
      aiPlugin: 'Plugin 2',
      name: 'Awesome Plugin 2',
      url: 'https://www.example.com/plugin2',
      iconUrl: 'https://cyberpunk2077.wiki.fextralife.com/file/Cyberpunk-2077/arasaka-corpo-logo-cyberpunk-2077-wiki-guide.png',
      userId: 'user1',
    },
    {
      aiPlugin: 'Plugin 3',
      name: 'Awesome Plugin 3',
      url: 'https://www.example.com/plugin3',
      iconUrl: 'https://img.rankedboost.com/wp-content/plugins/cyberpunk-2077/assets/icons/Intelligence.png',
      userId: 'user1',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-grow items-center px-4 bg-black text-white">
      <List
        sx={{

          // backgroundColor: '#111111', // Updated backgroundColor
          borderRadius: 0.5,
          padding: 1,
          width: '100%',
          maxWidth: 800,
        }}>
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: 24,
            fontWeight: 'bold',
            color: '#df66da',
            marginBottom: (theme) => theme.spacing(2),
          }}
        >
          Your Plugins
        </Typography>
        {plugins.map((plugin, index) => (
          <ListItem
            onClick={() => navigate(`/plugin/${plugin.aiPlugin}`)}
            key={plugin.aiPlugin}
            sx={{
              backgroundColor: '#1f1f1f', // Updated backgroundColor
              borderRadius: 2,
              marginBottom: (theme) => theme.spacing(1),
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <ListItemAvatar>
              <Avatar src={plugin.iconUrl} />
            </ListItemAvatar>
            <ListItemText primary={plugin.name} secondary={plugin.url} sx={{ color: 'text.primary', secondary: 'text.secondary' }} />
            <ListItemSecondaryAction>
              <Tooltip
                open={tooltipOpenIndex === index}
                title="URL copied to clipboard"
                arrow
                placement="top">
                <IconButton
                  onClick={() => handleCopyClick(plugin.url, index)}
                  edge="end"
                  aria-label="copy">
                  <FontAwesomeIcon icon={faCopy} color="white" />
                </IconButton>
              </Tooltip>
              <IconButton
                onClick={() => navigate(`/plugin/${plugin.aiPlugin}`)}
                edge="end" aria-label="modify">
                <FontAwesomeIcon icon={faPencilAlt} color='white' />
              </IconButton>
              {/* <IconButton disabled edge="end" aria-label="delete">
                <FontAwesomeIcon icon={faTrashAlt} color='white' />
              </IconButton> */}
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};


export default YourPlugins;