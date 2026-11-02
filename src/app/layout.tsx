import type { Metadata, Viewport } from "next";
import "./globals.css";
import PWAInit from "./PWAInit";

export const metadata: Metadata = {
  title: "Excelsus Agency | AI Growth Systems & Automation",
  description:
    "Growth systems for businesses that live on leads. 24/7 AI voice receptionist, Google & Meta ads management, AI booking websites, and customer reactivation campaigns.",
  keywords:
    "AI voice receptionist, AI agency, lead generation, ads management, Google ads, Meta ads, appointment booking, reactivation campaigns, business automation",
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Excelsus Agency",
  },
  openGraph: {
    title: "Excelsus Agency | AI Growth Systems & Automation",
    description:
      "Growth systems for businesses that live on leads. Every call answered. Every lead captured or booked.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0A7F57",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          rel="icon"
          href="/favicon-96x96.png"
          sizes="96x96"
          type="image/png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        {children}
        <PWAInit />
      </body>
    </html>
  );
}
