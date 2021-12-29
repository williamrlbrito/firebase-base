import './config/firebase';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { SnackbarProvider } from 'notistack';
import AppProvider from './hooks';
import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <AppProvider>
        <Routes />
      </AppProvider>
    </SnackbarProvider>
    <CssBaseline />
  </Router>
);

export default App;
