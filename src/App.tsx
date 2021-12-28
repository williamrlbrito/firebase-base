import "./config/firebase";

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { SnackbarProvider } from 'notistack';
import Home from "./pages/Home";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical:'top',
          horizontal:'right'
        }}
      >
        <Home />
      </SnackbarProvider>
    </React.Fragment>
  );
}

export default App;
