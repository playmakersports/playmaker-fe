import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePopup } from "@/components/common/global/PopupProvider";
import { formatDate } from "date-fns";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

function QueryProvider({ children }: { children: React.ReactNode }) {
  const popup = usePopup();
  const router = useRouter();
  const now = formatDate(new Date(), "yyyy-MM-dd HH:mm:ss");

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: (failureCount: number, error: unknown) => {
          const axiosError = error as AxiosError;
          if (axiosError.status === 401) {
            popup?.alert("", { title: "만료된 로그인 정보입니다.\n다시 로그인해주세요." });
            router.replace("/user/logout");
            return false;
          }

          if (failureCount === 1) {
            popup?.alert(`${axiosError.message}\nOccurred Time ${now}`, {
              title: `서버와의 통신 중 문제가 발생했습니다`,
            });
          }

          return failureCount < 2;
        },
      },
    },
  });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export default QueryProvider;
