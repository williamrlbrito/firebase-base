import React from 'react';
import { Box, Breadcrumbs, Typography } from '@material-ui/core';

const Dashboard: React.FC = () => {
  return (
    <Box>
      <Breadcrumbs>
        <Typography>Financeiro</Typography>
        <Typography>Dashboard</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default Dashboard;
