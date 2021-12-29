import React from 'react';
import { Box, Button, Container } from '@material-ui/core';
import { useAuth } from '../../hooks/auth';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  return (
    <Container>
      <Box>
        <h1>Login</h1>

        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            signIn({
              email: 'williamrldb@gmail.com',
              password: '123456',
            })
          }
        >
          Acessar
        </Button>
      </Box>
    </Container>
  );
};

export default SignIn;
