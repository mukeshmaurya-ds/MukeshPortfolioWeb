export interface JourneyItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  status: "completed" | "current" | "future";
}

export const journey: JourneyItem[] = [
  {
    year: "2024",
    title: "Started Bachelor of Computer Applications (BCA)",
    subtitle: "University Journey",
    description:
      "Began my BCA program while building a strong foundation in programming, problem solving, and computer science fundamentals.",
    status: "completed",
  },
  {
    year: "2024",
    title: "Frontend Development",
    subtitle: "HTML • CSS • JavaScript",
    description:
      "Learned the fundamentals of modern web development and built responsive user interfaces from scratch.",
    status: "completed",
  },
  {
    year: "2025",
    title: "React & Next.js",
    subtitle: "Modern Frontend",
    description:
      "Built scalable applications using React, Next.js, reusable components, animations, and modern UI practices.",
    status: "completed",
  },
  {
    year: "2026",
    title: "Full Stack Development",
    subtitle: "Node.js • Express • Databases",
    description:
      "Expanded into backend development, APIs, authentication, and database integration while creating complete web applications.",
    status: "current",
  },
  {
    year: "Future",
    title: "Data Science & AI",
    subtitle: "Career Goal",
    description:
      "Preparing for MCA through NIMCET and working toward becoming a Data Scientist and AI/ML Engineer.",
    status: "future",
  },
];