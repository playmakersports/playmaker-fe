import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "jotai";
import Layout from "@/components/layouts";

import { BASIC_THEME } from "@/styles/theme";
import { ThemeProvider } from "@emotion/react";
import dynamic from "next/dynamic";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <EmotionProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
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
