import { siteConfig } from "@/config/site";
import type { HeroData } from "@/types";

export const heroData: HeroData = {
  greeting: "Hello, I'm",

  name: siteConfig.name,

  title: "Full Stack Developer",

  subtitle: "Future Data Scientist",

  description:
    "I build responsive web applications using modern technologies while continuously learning Data Science, Machine Learning and Artificial Intelligence.",

  technologies: [
    "React",

    "Next.js",

    "TypeScript",

    "Tailwind CSS",

    "Node.js",

    "Express.js",

    "MySQL",

    "Python",

    "Pandas",

    "Machine Learning",
  ],

  social: {
    github: siteConfig.github,

    linkedin: siteConfig.linkedin,

    email: `mailto:${siteConfig.email}`,
  },
};