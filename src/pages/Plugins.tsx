import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PluginCard from '../components/PluginCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  sectionTitle: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const Plugins: React.FC = () => {
  const classes = useStyles();

  // You can replace this with data from your data.json file.
  const samplePluginData = [
    {
      iconUrl: 'https://via.placeholder.com/50',
      category: 'Top Plugins',
      categoryLink: '#',
      title: 'Sample Plugin',
      description: 'This is a sample plugin.',
      link: 'https://example.com',
    },
    {
      iconUrl: 'https://via.placeholder.com/50',
      category: 'Top Plugins',
      categoryLink: '#',
      title: 'Sample Plugin',
      description: 'This is a sample plugin.',
      link: 'https://example.com',
    }, 
    {
      iconUrl: 'https://via.placeholder.com/50',
      category: 'Top Plugins',
      categoryLink: '#',
      title: 'Sample Plugin',
      description: 'This is a sample plugin.',
      link: 'https://example.com',
    },
    {
      iconUrl: 'https://via.placeholder.com/50',
      category: 'Top Plugins',
      categoryLink: '#',
      title: 'Sample Plugin',
      description: 'This is a sample plugin.',
      link: 'https://example.com',
    },
    // Add more plugin objects here.
  ];

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h4" component="h2" className={classes.sectionTitle}>
          Top Plugins
        </Typography>
        <Grid container spacing={4}>
          {samplePluginData.map((plugin, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <PluginCard plugin={plugin} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container>
        <Typography variant="h4" component="h2" className={classes.sectionTitle}>
          New Plugins
        </Typography>
        <Grid container spacing={4}>
          {samplePluginData.map((plugin, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <PluginCard plugin={plugin} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container>
        <Typography variant="h4" component="h2" className={classes.sectionTitle}>
          Featured Plugins
        </Typography>
        <Grid container spacing={4}>
          {samplePluginData.map((plugin, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <PluginCard plugin={plugin} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Plugins;
