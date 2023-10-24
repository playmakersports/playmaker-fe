import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="ko">
            <Head />
            <link
                href="https://cdn.jsdelivr.net/gh/sun-typeface/SUIT/fonts/variable/woff2/SUIT-Variable.css"
                rel="stylesheet"
            />
            <link
                href="https://cdn.jsdelivr.net/gh/sun-typeface/SUITE/fonts/variable/woff2/SUITE-Variable.css"
                rel="stylesheet"
            />
            <meta name="theme-color" media="(prefers-color-scheme: light)" content="#f5f5f5" />
            <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#212121" />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
