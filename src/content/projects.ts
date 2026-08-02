export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  github: string;
  live: string;
  image: string;
  featured: boolean;

  metrics: {
    year: string;
    duration: string;
    team: string;
    status: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Personal Portfolio",
    category: "Frontend",
    description:
      "A modern and responsive portfolio website showcasing my skills, projects, education, and development journey.",

    problem:
      "Most portfolios only display projects without highlighting the development process, technologies, or professional presentation.",

    solution:
      "Built a premium portfolio using Next.js, TypeScript, Tailwind CSS, and Framer Motion with reusable components and modern UI/UX.",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],

    features: [
      "Responsive Design",
      "Dark Mode",
      "Animations",
      "SEO Optimized",
      "Reusable Components",
    ],

    github: "https://github.com/yourusername/portfolio",

    live: "https://yourportfolio.vercel.app",

    image: "/images/projects/portfolio.png",

    featured: true,

    metrics: {
      year: "2026",
      duration: "2 Months",
      team: "Solo",
      status: "Completed",
    },
  },

  {
    id: 2,

    title: "Business Dashboard",

    category: "Full Stack",

    description:
      "Business dashboard for managing analytics, customers, and business operations.",

    problem:
      "Businesses require one centralized place to manage operations and analytics.",

    solution:
      "Created a dashboard using React, Express, MongoDB, and REST APIs with responsive design.",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Chart.js",
    ],

    features: [
      "Authentication",
      "Analytics",
      "REST API",
      "Dashboard UI",
    ],

    github: "https://github.com/yourusername/dashboard",

    live: "",

    image: "/images/projects/dashboard.png",

    featured: false,

    metrics: {
      year: "2026",
      duration: "3 Months",
      team: "Solo",
      status: "In Progress",
    },
  },

  {
    id: 3,

    title: "Mukki Assistant",

    category: "Python AI",

    description:
      "Personal desktop assistant supporting voice commands and automation.",

    problem:
      "Desktop tasks are repetitive and consume valuable time.",

    solution:
      "Developed an AI-powered desktop assistant capable of automation and voice interaction.",

    technologies: [
      "Python",
      "SpeechRecognition",
      "OpenCV",
      "Flask",
      "PyAutoGUI",
    ],

    features: [
      "Voice Commands",
      "Desktop Automation",
      "OpenCV",
      "Modular Architecture",
    ],

    github: "https://github.com/yourusername/mukki-assistant",

    live: "",

    image: "/images/projects/mukki.png",

    featured: true,

    metrics: {
      year: "2026",
      duration: "Ongoing",
      team: "Solo",
      status: "Active",
    },
  },
];