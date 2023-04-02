import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF8800', // Reddit orange
    },
    background: {
      default: '#ffffff', // White background
    },
  },
  shape: {
    borderRadius: 8, // Rounded corners
  },
});

export default theme;