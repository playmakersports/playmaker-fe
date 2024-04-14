import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "jotai";
import { ThemeProvider } from "styled-components";
import { DEFAULT_THEME } from "@/styles/theme";
import Layout from "@/components/layouts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <ThemeProvider theme={DEFAULT_THEME}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}
