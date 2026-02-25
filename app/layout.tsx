import type { Metadata } from "next";
import { Manrope, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crescenttracking.com"),
  title: {
    default: "Crescent Tracking | GPS Fleet Management & Asset Protection Pakistan",
    template: "%s | Crescent Tracking",
  },
  description:
    "Pakistan's leading GPS tracking and fleet management company. Real-time vehicle tracking, fuel monitoring, driver behavior analytics, and complete asset protection solutions.",
  keywords: [
    "GPS tracking Pakistan",
    "fleet management",
    "vehicle tracking",
    "asset protection",
    "fuel monitoring",
    "driver behavior",
    "geo-fencing",
  ],
  authors: [{ name: "Crescent Tracking (Pvt) Ltd" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://crescenttracking.com",
    siteName: "Crescent Tracking",
    title: "Crescent Tracking | GPS Fleet Management & Asset Protection",
    description:
      "Pakistan's leading GPS tracking and fleet management company. Real-time tracking, fuel monitoring, and complete asset protection.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Crescent Tracking - GPS Fleet Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crescent Tracking | GPS Fleet Management Pakistan",
    description:
      "Real-time GPS tracking, fleet management, and asset protection solutions across Pakistan.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${syne.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-slate-950 text-white overflow-x-hidden">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
