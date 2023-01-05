import React from 'react';

import { AuthRoutes } from '@routes/auth-routes';
import { AppRoutes } from '@routes/app-routes';

import { useAuth } from '@hooks/useAuth';

export function Routes() {
  const { isAuthenticated } = useAuth();

  return (
    isAuthenticated ? <AppRoutes /> : <AuthRoutes />
  );
}
