"use client";

import React from "react";
import { Provider } from "jotai";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import GlobalStyle from "@/styles/global";
import GlobalComponents from "@/components/common/global";

function GlobalProviders({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // throwOnError: true,
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });

  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <GlobalComponents>{children}</GlobalComponents>
      </QueryClientProvider>
    </Provider>
  );
}

export default GlobalProviders;
