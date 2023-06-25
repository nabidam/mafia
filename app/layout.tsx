import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import { Metadata } from "next";
import "./globals.css";

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
  icons: [{ rel: "shortcut icon", url: "/favicon.ico" }],
  keywords: ["nextjs", "pwa", "next-pwa"],
};

export const Vazir = localFont({
  src: [
    // {
    //   path: '../public/fonts/Vazir-FD-WOL.woff2',
    //   weight: '400',
    //   style: 'normal',
    // },
    {
      path: "../public/fonts/Vazir-Thin-FD-WOL.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/Vazir-Light-FD-WOL.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Vazir-Medium-FD-WOL.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/Vazir-Bold-FD-WOL.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="fa" dir="rtl" suppressHydrationWarning>
        <head />
        <body className={Vazir.className}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <div className="container mx-auto h-screen">{children}</div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
