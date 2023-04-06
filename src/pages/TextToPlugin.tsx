import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const colors = [
  '#03DAC5',
  '#1BD2BC',
  '#33C8B3',
  '#4BBEAA',
  '#63B4A1',
  '#7BAA98',
  '#93A08F',
  '#AB9686',
  '#C38C7D',
  '#DB8274',
  '#BB86FC',
  '#C27FF1',
  '#C97AE8',
  '#D175DF',
  '#D970D6',
  '#E16BCD',
  '#E966C4',
  '#F161BB',
  '#F95CB2',
  '#FC3F94',
  '#E6408C',
  '#D04184',
  '#B37493',
  '#A57BA0',
  '#9882AD',
  '#8B89BA',
  '#7E90C7',
  '#7197D4',
  '#649EE1',
  '#57A5EE',
];

const TextToPlugin: React.FC = () => {
  const [colorIndex, setColorIndex] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'white',
      }}
    >
      <Box sx={{ flexGrow: 1 }} />
      <Typography variant="h2" align="center">
        Build{' '}
        <span style={{ color: colors[colorIndex] }}>your</span>
        <br />
        ChatGPT{' '}
        <span style={{ color: colors[colorIndex] }}>plugin in</span>
        <br />
        less than <span style={{ color: colors[colorIndex] }}>2 minutes</span>
      </Typography>
      <Box sx={{ flexGrow: 0.5 }} />
      <TextField
        label="Input your text (500-5000)"
        variant="outlined"
        multiline
        minRows={4}
        maxRows={6}
        sx={{
          width: '70%',
          backgroundColor: 'white',
          borderRadius: 1,
          '& .MuiOutlinedInput-root': {
            borderRadius: 1,
          },
        }}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: 2, borderRadius: 1 }}
      >
        Create
      </Button>
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );
};

export default TextToPlugin;
