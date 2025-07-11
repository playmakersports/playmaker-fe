import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePopup } from "@/components/common/global/PopupProvider";
import { formatDate } from "date-fns";

function QueryProvider({ children }: { children: React.ReactNode }) {
  const popup = usePopup();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: (failureCount, error) => {
          if (failureCount === 1) {
            popup?.alert(
              `${(error as any)?.errorMessage ?? error.message}\nOccurred Time ${formatDate(
                new Date(),
                "yyyy-MM-dd HH:mm:ss"
              )}`,
              {
                title: `서버와의 통신 중 문제가 발생했습니다`,
              }
            );
          }
          return failureCount < 1;
        },
      },
    },
  });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export default QueryProvider;
