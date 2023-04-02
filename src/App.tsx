import React from 'react';
import './App.css';
import AppRouter from './AppRouter';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;