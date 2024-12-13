import "@/styles/globals.css";
import { Metadata } from "next";
import GlobalProviders from "./components/GlobalProviders";

export const metadata: Metadata = {
  title: { default: "플메 PlayerMaker", template: "%s - 플메 PlayerMaker" },
  manifest: "/manifest.json",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#111012" },
  ],
  appleWebApp: {
    title: "플메",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          href="/images/icons/icon-512x512.png"
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
      </head>
      <body>
        <GlobalProviders>{children}</GlobalProviders>
      </body>
    </html>
  );
}
