import "./globals.css";

import ThemeProvider from "@/components/providers/ThemeProvider";
import { Toaster } from "sonner";
import ScrollProgress from "@/components/common/ScrollProgress";
import ScrollToTop from "@/components/common/ScrollToTop";
import StructuredData from "@/components/seo/StructuredData";
import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

import { Analytics } from "@vercel/analytics/react";

import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: [...siteConfig.keywords],

  authors: [
    {
      name: siteConfig.author,
    },
  ],

  creator: siteConfig.author,

  applicationName: siteConfig.name,

  alternates: {
    canonical: siteConfig.url,
  },

  openGraph: {
    type: "website",

    url: siteConfig.url,

    title: siteConfig.title,

    description: siteConfig.description,

    siteName: siteConfig.name,

    images: [
      {
        url: "/images/og-image.png",

        width: 1200,

        height: 630,

        alt: siteConfig.title,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: siteConfig.title,

    description: siteConfig.description,

    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#06b6d4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <body className="min-h-screen bg-background font-sans antialiased">
      
        <a
          href="#main-content"
          className="
    sr-only
    focus:not-sr-only
    focus:absolute
    focus:left-4
    focus:top-4
    focus:z-[9999]
    rounded-lg
    bg-cyan-500
    px-4
    py-2
    font-semibold
    text-black
  "
        >
          Skip to main content
      
        </a>
      
        <StructuredData />

        <ScrollProgress />
        
        <ThemeProvider>{children}</ThemeProvider>
        
        <ScrollToTop />
        
        <GoogleAnalytics />
        
        <Analytics />
        
        <SpeedInsights />
        
        <Toaster
          position="top-right"
          richColors
          closeButton
        />
      
      </body>
    </html>
  );
}