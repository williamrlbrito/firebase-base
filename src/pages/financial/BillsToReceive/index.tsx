import React from 'react';
import { Box, Breadcrumbs, Typography } from '@material-ui/core';

const BillsToReceive: React.FC = () => {
  return (
    <Box>
      <Breadcrumbs>
        <Typography>Financeiro</Typography>
        <Typography>Contas a receber</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default BillsToReceive;
