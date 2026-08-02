import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Mukki AI Assistant",
    category: "Artificial Intelligence",
    description:
      "An intelligent desktop assistant capable of voice interaction, automation, AI conversation, and productivity features.",

    image: "/images/projects/mukki-assistant.png",

    technologies: [
      "Python",
      "OpenAI",
      "Speech Recognition",
      "Automation",
    ],

    github: "#",
    live: "#",

    featured: true,
  },

  {
    id: 2,

    title: "Business Dashboard",

    category: "Full Stack",

    description:
      "Modern dashboard for business analytics with authentication, charts, APIs and database integration.",

    image: "/images/projects/business-dashboard.png",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
    ],

    github: "#",

    live: "#",

    featured: true,
  },

  {
    id: 3,

    title: "Customer Churn Prediction",

    category: "Data Science",

    description:
      "Machine Learning model for predicting customer churn using Python, Pandas and Scikit-learn.",

    image: "/images/projects/customer-churn.png",

    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Machine Learning",
    ],

    github: "#",

    live: "#",

    featured: false,
  },

  {
    id: 4,

    title: "E-Commerce Platform",

    category: "Full Stack",

    description:
      "Responsive online shopping application with secure authentication, cart, payment integration and admin panel.",

    image: "/images/projects/ecommerce.png",

    technologies: [
      "Next.js",
      "Node.js",
      "Express",
      "MySQL",
    ],

    github: "#",

    live: "#",

    featured: false,
  },
];