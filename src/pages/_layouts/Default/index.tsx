import React from 'react';
import { Box, Container } from '@material-ui/core';

const Default: React.FC = ({ children }) => {
  return (
    <Container>
      <Box>{children}</Box>
    </Container>
  );
};

export default Default;
