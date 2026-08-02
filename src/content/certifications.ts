export interface Certification {
  id: number;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  image: string;
  featured: boolean;
  skills: string[];
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Python for Data Science",
    issuer: "IBM SkillsBuild",
    issueDate: "2026",
    credentialUrl: "#",
    image: "/images/certificates/python-ds.webp",
    featured: true,
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Data Analysis",
    ],
  },

  {
    id: 2,
    title: "Machine Learning Fundamentals",
    issuer: "Coursera",
    issueDate: "2026",
    credentialUrl: "#",
    image: "/images/certificates/ml.webp",
    featured: true,
    skills: [
      "Machine Learning",
      "Scikit-Learn",
      "Regression",
      "Classification",
    ],
  },

  {
    id: 3,
    title: "Web Development",
    issuer: "Udemy",
    issueDate: "2025",
    credentialUrl: "#",
    image: "/images/certificates/web.webp",
    featured: false,
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
];