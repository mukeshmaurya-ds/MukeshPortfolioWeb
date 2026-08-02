import type { Metadata } from "next";

import { seoConfig } from "./seo";

export const metadata: Metadata = {
  title: seoConfig.title,

  description: seoConfig.description,

  keywords: seoConfig.keywords,

  authors: seoConfig.authors,

  creator: seoConfig.creator,

  metadataBase: seoConfig.metadataBase,

  openGraph: seoConfig.openGraph,

  twitter: seoConfig.twitter,
};