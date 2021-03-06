import React from 'react';
import { Box, Breadcrumbs, Typography } from '@material-ui/core';

const Home: React.FC = () => {
  return (
    <Box>
      <Breadcrumbs>
        <Typography>Home</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default Home;
