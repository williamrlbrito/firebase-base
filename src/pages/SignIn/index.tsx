import React from 'react';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import { useAuth } from '../../hooks/auth';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignIn = () => {
    signIn({ email, password });
  };

  return (
    <Box
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        style={{
          height: '500px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          style={{
            width: '480px',
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 4rem',
            borderRight: '1px solid #000',
          }}
        >
          <Typography variant="h4" component="h1">
            Go Finance
          </Typography>
        </Box>

        <Box
          style={{
            width: '480px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '4rem',
            padding: '0 4rem',
            borderLeft: '1px solid #000',
          }}
        >
          <Box
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            <Typography variant="h4" component="h2">
              Welcome
            </Typography>
            <Typography variant="h6" component="p">
              Please login to admin dashboard
            </Typography>
          </Box>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <TextField
              name="email"
              label="E-mail"
              variant="outlined"
              fullWidth
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              name="password"
              label="Password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </Box>
          <Box
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              onClick={handleSignIn}
            >
              login
            </Button>
            <Typography variant="h6" component="p">
              Forgotten your password?
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
