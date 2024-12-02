import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import React, { Suspense } from "react";
import Loading from "../Loading";
import ErrorFallback from "./ErrorFallback";

function QueryErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          FallbackComponent={({ error, resetErrorBoundary }) => {
            console.log(error);
            return (
              <ErrorFallback
                status={error.response.status}
                message={error.message}
                retry={() => resetErrorBoundary()}
              />
            );
          }}
          onReset={reset}
        >
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}

export default QueryErrorBoundary;
