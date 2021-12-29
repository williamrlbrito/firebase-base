import React from 'react';

import { Box, Button } from '@material-ui/core';
import { useAuth } from '../../hooks/auth';

const Home: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Box>
      <h1>Firebase</h1>

      <Button variant="contained" color="secondary" onClick={() => signOut()}>
        Sair
      </Button>
    </Box>
  );
};

export default Home;
