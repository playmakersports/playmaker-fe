import React, { Suspense } from "react";
import Toast from "./Toast";
import ConfirmProvider from "./ConfirmProvider";
import ErrorBoundary from "./QueryErrorBoundary";
import Loading from "../Loading";

function GlobalComponents({ children }: { children: React.ReactNode }) {
  return (
    // <ErrorBoundary>
    <ConfirmProvider>
      <Toast />
      <Suspense fallback={<Loading page />}>{children}</Suspense>
    </ConfirmProvider>
    // </ErrorBoundary>
  );
}

export default GlobalComponents;
