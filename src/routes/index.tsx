import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Box, CircularProgress } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';
import { useAuth } from '../hooks/auth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
  const { loading, user } = useAuth();

  const darkTheme = false;

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: darkTheme ? 'dark' : 'light',
          primary: blueGrey,
        },
      }),
    [darkTheme],
  );

  if (loading) {
    return (
      <Box
        bgcolor={theme.palette.background.default}
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress color="secondary" />
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      {user.id ? <AppRoutes /> : <AuthRoutes />}
    </ThemeProvider>
  );
};

export default Routes;
