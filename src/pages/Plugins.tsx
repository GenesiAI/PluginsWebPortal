import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import PluginCard from '../components/PluginCard';

const Root = styled('div')(({ theme }) => ({
  flexGrow: 1,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(4, 0, 2),
}));

const Plugins: React.FC = () => {
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
    }, {
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
    <Root>
      <Container>
        <SectionTitle variant="h4" >
          Top Plugins
        </SectionTitle>
        <Grid container spacing={4}>
          {samplePluginData.map((plugin, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <PluginCard plugin={plugin} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container>
        <SectionTitle variant="h4">
          New Plugins
        </SectionTitle>
        <Grid container spacing={4}>
          {samplePluginData.map((plugin, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <PluginCard plugin={plugin} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container>
        <SectionTitle variant="h4" >
          Featured Plugins
        </SectionTitle>
        <Grid container spacing={4}>
          {samplePluginData.map((plugin, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <PluginCard plugin={plugin} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Root>
  );
};

export default Plugins;
