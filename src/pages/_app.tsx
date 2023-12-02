import "../styles/globals.css";
import { Provider } from "jotai";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Layout from "../components/Layouts";

export default function App({ Component, pageProps }: AppProps) {
    const queryClient = new QueryClient();
    return (
        <Provider>
            <QueryClientProvider client={queryClient}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </QueryClientProvider>
        </Provider>
    );
}
