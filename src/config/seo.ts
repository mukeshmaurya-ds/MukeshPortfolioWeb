import { siteConfig } from "./site";

export const seoConfig = {
  title: siteConfig.title,

  description: siteConfig.description,

  keywords: [...siteConfig.keywords],

  authors: [
    {
      name: siteConfig.author,
    },
  ],

  creator: siteConfig.author,

  metadataBase: new URL(siteConfig.url),

  openGraph: {
    title: siteConfig.title,

    description: siteConfig.description,

    url: siteConfig.url,

    siteName: siteConfig.name,

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: siteConfig.profileImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: siteConfig.title,

    description: siteConfig.description,

    images: [siteConfig.profileImage],
  },
};