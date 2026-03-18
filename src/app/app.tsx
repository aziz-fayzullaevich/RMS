import { QueryClientProvider } from '@tanstack/react-query';
import { MantineProvider } from '@mantine/core';
import { theme } from '../shared/theme/theme';
import { Notifications } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
import { RouterProvider } from 'react-router-dom';
import { queryClient } from '../shared/config/query-client/query-client';
import { router } from '../shared/config/router/router';

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <Notifications position='top-center' />
        <ModalsProvider>
          <RouterProvider router={router} />
        </ModalsProvider>
      </MantineProvider>
    </QueryClientProvider>
  )
};