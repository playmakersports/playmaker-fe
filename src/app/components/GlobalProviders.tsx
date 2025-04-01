"use client";

import React, { Suspense } from "react";
import { Toaster as SoonerToaster, toast } from "sonner";
import { Provider } from "jotai";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PopupProvider from "@/components/common/global/PopupProvider";
import Loading from "@/components/common/Loading";

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
      <SoonerToaster
        position="bottom-center"
        duration={1970}
        mobileOffset={{
          top: 16,
          right: 16,
          left: 16,
          bottom: "calc(var(--safe-bottom) + 20px)",
        }}
      />
      <QueryClientProvider client={queryClient}>
        <PopupProvider>
          <Suspense fallback={<Loading page />}>{children}</Suspense>
        </PopupProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default GlobalProviders;
