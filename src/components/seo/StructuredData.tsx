import { siteConfig } from "@/config/site";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",

    "@type": "Person",

    name: siteConfig.name,

    url: siteConfig.url,

    image: `${siteConfig.url}/images/profile.webp`,

    jobTitle: "Data Science Student",

    description: siteConfig.description,

    sameAs: [
      siteConfig.github,
      siteConfig.linkedin,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}