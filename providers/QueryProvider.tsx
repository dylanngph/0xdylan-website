'use client'

import React from "react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
  dehydrate
} from "@tanstack/react-query";



const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = React.useState(() => new QueryClient());

  const dehydratedState = dehydrate(queryClient)

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>{children}</Hydrate>
    </QueryClientProvider>
  );
};

export default QueryProvider;
