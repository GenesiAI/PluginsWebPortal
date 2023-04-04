import React from 'react';
import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  section: {
    marginBottom: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  content: {
    marginBottom: theme.spacing(1),
  },
}));


const BuildPlugin: React.FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Building a Plugin
      </Typography>

      <div className={classes.section}>
        <Typography variant="h5" className={classes.title}>
          Step 1: Understand the plugin structure
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Explain the basic structure of a plugin, including the ai-plugin.json document, API configuration, and any required files.
        </Typography>
      </div>

      <div className={classes.section}>
        <Typography variant="h5" className={classes.title}>
          Step 2: Choose a plugin type
        </Typography>
        <Typography variant="body1" className={classes.content}>
          Explain the different types of plugins and how to choose the right one for a specific use case.
        </Typography>
      </div>

      {/* Add more steps as necessary */}
    </Container>
  );
};

export default BuildPlugin;
