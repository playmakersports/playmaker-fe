import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="ko">
            <Head />
            <meta name="theme-color" media="(prefers-color-scheme: light)" content="#f5f5f5" />
            <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#212121" />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
