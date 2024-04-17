import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider, useAtom } from "jotai";
import Layout from "@/components/layouts";
import GlobalStyle from "@/styles/global";

import { atomBackgroundGray } from "@/atom/common";
import { LIGHT_THEME_WITH_BG } from "@/styles/theme";
import { ThemeProvider } from "@emotion/react";

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
  const [isBackgroundGray] = useAtom(atomBackgroundGray);
  return (
    <ThemeProvider theme={isBackgroundGray ? LIGHT_THEME_WITH_BG["GRAY"] : LIGHT_THEME_WITH_BG["WHITE"]}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
