import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${siteConfig.url}/#about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${siteConfig.url}/#skills`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${siteConfig.url}/#projects`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${siteConfig.url}/#journey`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteConfig.url}/#contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}