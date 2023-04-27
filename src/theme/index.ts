import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF8800',
    },
    background: {
      default: '#000000',
      paper: '#000000',
    },
    text: {
      primary: '#ffffff', // Set the primary text color to white
      secondary: '#cccccc', // Set the secondary text color to light gray
    },
  },
  shape: {
    borderRadius: 8,
  },
});


export default theme;
