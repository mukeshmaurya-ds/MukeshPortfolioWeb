import type { SocialItem } from "@/types";

import { siteConfig } from "@/config/site";

export const socialData: SocialItem[] = [
  {
    platform: "GitHub",
    url: siteConfig.github,
  },

  {
    platform: "LinkedIn",
    url: siteConfig.linkedin,
  },

  {
    platform: "Email",
    url: `mailto:${siteConfig.email}`,
  },
];