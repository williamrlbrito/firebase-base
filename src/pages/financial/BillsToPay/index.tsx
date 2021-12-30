import React from 'react';
import { Box, Breadcrumbs, Typography } from '@material-ui/core';

const BillsToPay: React.FC = () => {
  return (
    <Box>
      <Breadcrumbs>
        <Typography>Financeiro</Typography>
        <Typography>Contas a pagar</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default BillsToPay;
