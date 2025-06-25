import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import GlobalProviders from "./components/GlobalProviders";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StyledComponentsRegistry from "../../lib/styledRegistry";
import MobileLayout from "./mobileLayout";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#111012" },
  ],
};
export const metadata: Metadata = {
  title: { default: "플메 PlayerMaker", template: "%s - 플메 PlayerMaker" },
  manifest: "/manifest.json",
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
      <body className={pretendard.className}>
        <SpeedInsights />
        <StyledComponentsRegistry>
          <GlobalProviders>
            <MobileLayout>{children}</MobileLayout>
          </GlobalProviders>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
