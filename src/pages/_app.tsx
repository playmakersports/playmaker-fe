import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "jotai";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@emotion/react";

import { BASIC_THEME } from "@/styles/theme";
import Layout from "@/components/layouts";
import GlobalComponents from "@/components/common/global";
import TokenRoute from "@/components/layouts/TokenRoute";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <EmotionProvider>
        <GlobalComponents>
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
    <ThemeProvider theme={BASIC_THEME}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
