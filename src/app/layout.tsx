import "@/styles/globals.css";
import { Metadata } from "next";
import GlobalProviders from "./components/GlobalProviders";

export const metadata: Metadata = {
  title: { default: "플메 PlayerMaker", template: "%s - 플메 PlayerMaker" },
  manifest: "/manifest.json",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#111012" },
  ],
  appleWebApp: {
    title: "플메",
    statusBarStyle: "black-translucent",
  },
  icons: {
    apple: [
      { rel: "apple-touch-icon", url: "/images/icons/icon-512x512.png" },
      { rel: "icon", url: "/images/icons/icon-512x512.png" },
    ],
    other: [
      {
        url: "/images/icons/icon-512x512.png",
        media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <GlobalProviders>{children}</GlobalProviders>
      </body>
    </html>
  );
}
