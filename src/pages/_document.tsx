import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1,  maximum-scale=1, user-scalable=no"
        />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0e0e0e" />
        <link rel="apple-touch-icon" sizes="192x192" href="/images/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/images/icons/icon-512x512.png" />
        <link
          href="/images/icons/icon-512x512.png"
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
