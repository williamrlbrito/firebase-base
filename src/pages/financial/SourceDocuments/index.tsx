import React from 'react';
import { Box, Breadcrumbs, Typography } from '@material-ui/core';

const SourceDocuments: React.FC = () => {
  return (
    <Box>
      <Breadcrumbs>
        <Typography>Financeiro</Typography>
        <Typography>Documentos de origem</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default SourceDocuments;
