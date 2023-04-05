import React from 'react';
import { Typography, Button, Grid, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import PluginCard from '../components/PluginCard';
import SocialsBox from '../components/SocialsBox';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
  hero: {
    padding: theme.spacing(8, 0),
    textAlign: 'center',
  },
  sectionTitle: {
    padding: theme.spacing(4, 0),
  },
  button: {
    margin: theme.spacing(2),
  },
  footer:
  {
    marginTop: theme.spacing(2),
  },
  icon: {
    margin: theme.spacing(1),
  },
}));


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

const HomePage: React.FC = () => {
  const classes = useStyles();
  const categories = ['top', 'new', 'featured'];

  return (
    <Container>
      <div className={classes.hero}>
        <Typography variant="h3">Welcome to AI Plugin</Typography>
        <Typography variant="subtitle1">
          Discover, create and enhance AI chatbot plugins
        </Typography>
        <Button
          component={Link}
          to="/plugins"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Explore Plugins
        </Button>
      </div>

      {categories.map((category) => (
        <div key={category}>
          <Typography variant="h4" align="center" className={classes.sectionTitle}>
            {category.charAt(0).toUpperCase() + category.slice(1)} Plugins
          </Typography>
          <Grid container spacing={4}>
            {samplePluginData.map((plugin) => (
              <Grid item xs={12} sm={6} md={4} key={plugin.title}>
                <PluginCard plugin={plugin} />
              </Grid>
            ))}
          </Grid>
          <div style={{ textAlign: 'center' }}>
            <Button component={Link} to="/plugins" className={classes.button}>
              View more {category} plugins
            </Button>
          </div>
        </div>
      ))}

      <div className={classes.hero}>
        <Typography variant="h4">Build Your Own Plugin</Typography>
        <Typography variant="subtitle1">
          Get started with our comprehensive documentation and create your custom AI chatbot plugins
        </Typography>
        <Button
          component={Link}
          to="/build-plugin"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Learn to build plugins
        </Button> or
        <Button
          component={Link}
          to="/build-plugin"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Hire a developer
        </Button>
      </div>

      <div className={classes.hero}>
        <Typography variant="h4">Get in Touch</Typography>
        <Typography variant="subtitle1">
          At AI Plugin, we are passionate about creating a community-driven platform for AI-powered chatbot plugins. We appreciate your thoughts, feedback, and innovative ideas to help us grow and improve. Whether you have a plugin suggestion, need assistance, want to collaborate as a developer, or have any other inquiries, feel free to reach out. Together, let's make AI Plugin the go-to destination
        </Typography>
        <Button
          component={Link}
          to="/contacts"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Contact Us
        </Button>

        <SocialsBox/>
      </div>
    </Container>
  );
};

export default HomePage;
