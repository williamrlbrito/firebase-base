import React from 'react';
import { Box, Breadcrumbs, Typography } from '@material-ui/core';

const CostCenters: React.FC = () => {
  return (
    <Box>
      <Breadcrumbs>
        <Typography>Financeiro</Typography>
        <Typography>Centros de custo</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default CostCenters;
