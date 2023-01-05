import React from 'react';
import { Box, Spinner } from 'native-base';

export function Loading() {
  return (
    <Box flex={1} alignItems="center" justifyContent="center" bg="gray.700">
      <Spinner size="lg" color="lightBlue.600" />
    </Box>
  );
}
