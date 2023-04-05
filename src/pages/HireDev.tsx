import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, IconButton, Button } from '@mui/material';
import { Twitter, Email, Instagram, Language } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingTop: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  joinTitle: {
    marginTop: theme.spacing(6),
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gridGap: theme.spacing(4),
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  iconButton: {
    marginLeft: theme.spacing(1),
  },
  joinButton: {
    marginTop: theme.spacing(2),
  },
}));


interface Developer {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  twitterUrl?: string;
  email?: string;
  instagramUrl?: string;
  websiteUrl?: string;
}


const developers: Developer[] = [
  {
    id: 1,
    name: 'John Doe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'https://via.placeholder.com/150',
    twitterUrl: 'https://twitter.com',
    email: 'Jhon@entecorlantech.com',
    instagramUrl: 'https://instagram.com',
    websiteUrl: 'https://entecorlantech.com',
  },
  {
    id: 2,
    name: 'smith len',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'https://via.placeholder.com/150',
    twitterUrl: 'https://twitter.com',
    email: 'smith@entecorlantech.com',
    instagramUrl: 'https://instagram.com',
    websiteUrl: 'https://entecorlantech.com',
  }
];

const HireDev: React.FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        Hire a Dev
      </Typography>
      <div className={classes.cardGrid}>
        {developers.map((dev) => (
          <Card key={dev.id} className={classes.card}>
            <CardMedia className={classes.media} image={dev.imageUrl} title={dev.name} />
            <CardContent className={classes.cardContent}>
              <Typography variant="h6">{dev.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                {dev.description}
              </Typography>
            </CardContent>
            <div>
              {dev.twitterUrl && (
                <IconButton
                  className={classes.iconButton}
                  color="primary"
                  href={dev.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter />
                </IconButton>
              )}
              {dev.email && (
                <IconButton className={classes.iconButton} color="primary" href={`mailto:${dev.email}`}>
                  <Email />
                </IconButton>
              )}
              {dev.instagramUrl && (
                <IconButton
                  className={classes.iconButton}
                  color="primary"
                  href={dev.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </IconButton>
              )}
              {dev.websiteUrl && (
                <IconButton
                  className={classes.iconButton}
                  color="primary"
                  href={dev.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Language />
                </IconButton>
              )}
            </div>
          </Card>
        ))}
      </div>
      <Typography variant="body1" className={classes.joinTitle}>
        Interested in joining our list of developers? We'd love to have you! Click the button below to get in touch and join our developer network.
      </Typography>
      <Button
        component={Link}
        to="/contacts"
        variant="contained"
        color="primary"
        className={classes.joinButton}
      >
        Join Developer Network
      </Button>
    </Container >
  );
};

export default HireDev;