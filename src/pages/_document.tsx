import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-title" content="플메" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#f7fafc" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#111012" />
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
