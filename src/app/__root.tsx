import globalCss from "./globals.css?url";
import React, { Suspense, lazy } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router"

import GlobalProviders from "./components/GlobalProviders";
import StyledComponentsRegistry from "../../lib/styledRegistry";
import Loading from "@/components/common/Loading";

const MobileLayout = lazy(() => import("./mobileLayout"));

// const pretendard = localFont({
//   src: "./fonts/PretendardVariable.woff2",
//   display: "swap",
//   weight: "45 920",
// });

// export const viewport: Viewport = {
//   width: "device-width",
//   initialScale: 1.0,
//   maximumScale: 1.0,
//   userScalable: false,
//   viewportFit: "cover",
//   themeColor: [
//     { media: "(prefers-color-scheme: light)", color: "#f7fafc" },
//     { media: "(prefers-color-scheme: dark)", color: "#111012" },
//   ],
// };
// export const metadata: Metadata = {
//   title: { default: "플메 PlayerMaker", template: "%s - 플메 PlayerMaker" },
//   manifest: "/manifest.json",
//   appleWebApp: {
//     title: "플메",
//     statusBarStyle: "black-translucent",
//   },
//   icons: {
//     apple: [
//       { rel: "apple-touch-icon", url: "/images/icons/icon-512x512.png" },
//       { rel: "icon", url: "/images/icons/icon-512x512.png" },
//     ],
//     other: [
//       {
//         url: "/images/icons/icon-512x512.png",
//         media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
//         rel: "apple-touch-startup-image",
//       },
//     ],
//   },
// };

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=false",
      },
      { title: "플메 PLAYER MAKER" }
    ],
    links: [
      {
        rel: 'stylesheet',
        href: globalCss,
      },
    ],
  }),
  component: RootLayout,
})


export default function RootLayout() {
  return (
      <html lang="ko">
      <head>
        <HeadContent />
      </head>
      <body>
      <StyledComponentsRegistry>
        <GlobalProviders>
          <Suspense fallback={<Loading page />}>
            <MobileLayout>
              <Outlet />
            </MobileLayout>
          </Suspense>
        </GlobalProviders>
      </StyledComponentsRegistry>
      <Scripts />
      </body>
      </html>
  );
}
