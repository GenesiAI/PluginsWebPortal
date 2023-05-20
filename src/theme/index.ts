import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6c47ff',
    },
    secondary: {
      main: '#f34971',
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    h2: {
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '3rem',
      },
    },
  },
});

export default theme;