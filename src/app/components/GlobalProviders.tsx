"use client";

import React, { Suspense } from "react";
import { Toaster as SoonerToaster } from "sonner";
import { Provider } from "jotai";

import PopupProvider from "@/components/common/global/PopupProvider";
import Loading from "@/components/common/Loading";
import QueryProvider from "./QueryProvider";

function GlobalProviders({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      <SoonerToaster
        position="bottom-center"
        duration={1800}
        offset={{ bottom: "calc(var(--navigation-height) + 10px)" }}
        mobileOffset={{
          top: 16,
          right: 12,
          left: 12,
          bottom: "calc(var(--navigation-height) + 10px)",
        }}
      />
      <PopupProvider>
        <QueryProvider>
          <Suspense fallback={<Loading page />}>{children}</Suspense>
          <div id="portal"></div>
        </QueryProvider>
      </PopupProvider>
    </Provider>
  );
}

export default GlobalProviders;
