import { QueryClient, QueryClientProvider } from 'react-query';
import * as React from 'react';

export const queryClient = new QueryClient();

export function APIProvider({ children }) {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
