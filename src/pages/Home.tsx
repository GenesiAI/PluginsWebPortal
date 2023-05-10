import React, { useState } from 'react';
import {
  Button,
  Typography,
  Box,
  Container,
  Grid,
  Paper,
  useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const colors = [
  '#df66da',
  '#d773ec',
  '#cf81fe',
  '#c48fff',
  '#b99ef0',
  '#aeade1',
  '#a3bcd2',
  '#98cbc3',
  '#8ddab4',
  '#82e9a5',
  '#77f896',
  '#6cff87',
  '#62f678',
  '#58ed69',
  '#67ea7a',
  '#76e78b',
  '#85e49c',
  '#94e1ad',
  '#a3debe',
  '#b2dbcf',
  '#c1d8e0',
  '#d0d5f1',
  '#dfcffc',
  '#eec8fd',
  '#eebaef',
  '#eeacdf',
  '#ee9ece',
  '#ee90bd',
  '#ee82ac',
  '#ee749b',
  '#ee668a',
  '#f73da4',
  '#ef4bb6',
  '#e758c8',
];

const Home: React.FC = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const navigate = useNavigate();
  const theme = useTheme();

  React.useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 150);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const GoToLogin = async () => {
    navigate('/login');
  };

  const steps = [
    {
      step: 1,
      title: 'Enter Your Data',
      icon: '📝',
      description:
        'Provide the necessary data to create your custom ChatGPT plugin.',
    },
    {
      step: 2,
      title: 'Edit the Plugin',
      icon: '✏️',
      description:
        'With our intuitive interface, customize your plugin to meet your unique requirements.',
    },
    {
      step: 3,
      title: 'Get the URL',
      icon: '🔗',
      description:
        'Receive the generated URL for your tailored ChatGPT plugin.',
    },
    {
      step: 4,
      title: 'Paste the URL',
      icon: '📎',
      description:
        'Simply paste the URL into ChatGPT and watch your custom plugin come to life.',
    },
  ];


  return (
    <>
      <Box margin={6}>
        <Typography variant="h2" align="center" gutterBottom>
          Build your ChatGPT plugin in less than{' '}
          <span style={{ color: colors[colorIndex] }}>2 minutes</span>
        </Typography>
      </Box>
      <Box my={4} textAlign="center">
        <Button
          variant="contained"
          sx={{
            backgroundColor: colors[colorIndex],
            color: 'white',
            '&:hover': {
              backgroundColor: colors[(colorIndex + 1) % colors.length],
            },
          }}
          onClick={GoToLogin}
        >
          START 🧩
        </Button>
      </Box>
      <Grid container spacing={4}>
        {steps.map(({ step, title, icon, description }) => (
          <Grid item key={step} xs={12} sm={6} md={3}>
            <Paper elevation={3} sx={{ padding: 2, minHeight: '100%' }}>
              <Box textAlign="center">
                <Typography variant="h4">{step}</Typography>
                <Typography variant="h6">{title}</Typography>
                <Box my={2}>
                  <Typography variant="h3">{icon}</Typography>
                </Box>
                <Typography>{description}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;