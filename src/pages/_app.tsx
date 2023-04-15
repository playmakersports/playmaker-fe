import "../styles/globals.css";
import { Provider } from "jotai";
import type { AppProps } from "next/app";

import Layout from "../components/Layouts";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}
