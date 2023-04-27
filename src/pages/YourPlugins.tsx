import React from 'react';
import { Plugin } from '../models/Plugin';
import { List, ListItem, ListItemText, ListItemSecondaryAction, ListItemAvatar, Avatar, IconButton, Typography, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const YourPlugins: React.FC<{ plugins: Plugin[] }> = (props) => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 800,
        backgroundColor: 'background.default',
        margin: 'auto',
        marginTop: (theme) => theme.spacing(4),
      }}
    >

      <List
        sx={{
          backgroundColor: '#111111', // Updated backgroundColor
          borderRadius: 0.5,
          padding: 1
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
        {props.plugins.map((plugin) => (
          <ListItem
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
              <IconButton edge="end" aria-label="copy" >
                <FontAwesomeIcon icon={faCopy} color='white' />
              </IconButton>
              <IconButton edge="end" aria-label="modify">
                <FontAwesomeIcon icon={faPencilAlt} color='white' />
              </IconButton>
              <IconButton edge="end" aria-label="delete">
                <FontAwesomeIcon icon={faTrashAlt} color='white' />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};


export default YourPlugins;