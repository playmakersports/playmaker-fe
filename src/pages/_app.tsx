import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "jotai";
import dynamic from "next/dynamic";
import Head from "next/head";

import Layout from "@/components/layouts";
import GlobalComponents from "@/components/common/global";
import TokenRoute from "@/components/layouts/TokenRoute";
import { DEFAULT_HEAD_CONTENTS } from "@/constants/baseTag";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <EmotionProvider>
        <GlobalComponents>
          <Head>
            <title>{DEFAULT_HEAD_CONTENTS.title}</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, minimum-scale=1,  maximum-scale=1, user-scalable=no, viewport-fit=cover"
            />
          </Head>
          <Layout>
            <TokenRoute>
              <Component {...pageProps} />
            </TokenRoute>
          </Layout>
        </GlobalComponents>
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
