export interface Achievement {
  id: number;
  title: string;
  description: string;
  category:
    | "Academic"
    | "Coding"
    | "Internship"
    | "Project"
    | "Learning";

  year: string;

  icon: string;

  featured: boolean;
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "BCA Academic Performance",
    description:
      "Maintained an excellent CGPA throughout the BCA program while continuously improving programming and problem-solving skills.",
    category: "Academic",
    year: "2024–Present",
    icon: "🎓",
    featured: true,
  },

  {
    id: 2,
    title: "Full Stack Portfolio Development",
    description:
      "Designed and developed a modern portfolio using Next.js, TypeScript, Tailwind CSS, Framer Motion, and a secure backend API.",
    category: "Project",
    year: "2026",
    icon: "💻",
    featured: true,
  },

  {
    id: 3,
    title: "Continuous Data Science Learning",
    description:
      "Learning Python, Statistics, Machine Learning, SQL, and AI concepts through practical projects and certifications.",
    category: "Learning",
    year: "2025–Present",
    icon: "📚",
    featured: false,
  },
];