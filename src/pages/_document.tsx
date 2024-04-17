import { useTheme } from "@emotion/react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const { background } = useTheme();

  return (
    <Html lang="ko">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1,  maximum-scale=1, user-scalable=no"
        />
      </Head>
      <meta name="theme-color" content={background} />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
