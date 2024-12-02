import React from "react";
import Toast from "./Toast";
import ConfirmProvider from "./ConfirmProvider";
import ErrorBoundary from "./QueryErrorBoundary";

function GlobalComponents({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <ConfirmProvider>
        <Toast />
        {children}
      </ConfirmProvider>
    </ErrorBoundary>
  );
}

export default GlobalComponents;
