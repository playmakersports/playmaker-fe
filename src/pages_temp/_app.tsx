import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "jotai";
import dynamic from "next/dynamic";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "@/components/Methods/NotifyFCM";
import Layout from "@/components/layouts";
import GlobalComponents from "@/components/common/global";
import TokenRoute from "@/components/layouts/TokenRoute";
import { DEFAULT_HEAD_CONTENTS } from "@/constants/baseTag";
// import EventNotification from "@/components/Methods/EventNotification";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        throwOnError: true,
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });

  return (
    <Provider>
      <EmotionProvider>
        <Head>
          <title>{DEFAULT_HEAD_CONTENTS.title}</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1,  maximum-scale=1, user-scalable=no, viewport-fit=cover"
          />
        </Head>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <GlobalComponents>
              <TokenRoute>
                <Component {...pageProps} />
              </TokenRoute>
            </GlobalComponents>
          </Layout>
        </QueryClientProvider>
        {/* <EventNotification /> */}
      </EmotionProvider>
    </Provider>
  );
}

function EmotionProvider({ children }: { children: React.ReactNode }) {
  const GlobalStyle = dynamic(() => import("@/styles/global"), { ssr: false });

  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
