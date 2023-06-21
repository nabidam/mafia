import { Metadata } from "next";

export default function Home() {
  return <h1>Hi :)</h1>;
}

const APP_NAME = "App name";
const APP_DESCRIPTION = "App Description";

export const metadata: Metadata = {
  title: "App",
  description: APP_DESCRIPTION,
  twitter: {
    card: "summary_large_image",
    creator: "@creator",
    images: "https://example.com/og.png",
  },
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  themeColor: "#FFFFFF",
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  manifest: "/manifest.json",
  icons: [
    { rel: "shortcut icon", url: "/favicon.ico" },
  ],
  keywords: ["nextjs", "pwa", "next-pwa"],
};

