import React from 'react';
import { Box, Breadcrumbs, Typography } from '@material-ui/core';

const Categories: React.FC = () => {
  return (
    <Box>
      <Breadcrumbs>
        <Typography>Financeiro</Typography>
        <Typography>Categorias</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default Categories;
