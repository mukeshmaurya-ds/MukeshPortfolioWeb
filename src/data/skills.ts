import {
  Code2,
  Database,
  BarChart3,
  BrainCircuit,
  Bot,
  Wrench,
} from "lucide-react";

import type { SkillCategory } from "@/types";


export const skillCategories: SkillCategory[] = [

  {
    title: "Programming & Data Foundations",

    description:
      "Strong programming fundamentals with Python, JavaScript, and mathematical foundations.",

    icon: Code2,

    skills:[
      "Python",
      "JavaScript",
      "Data Structures",
      "Statistics",
      "Probability",
      "Problem Solving",
    ],
  },


  {
    title:"Data Science",

    description:
      "Analyzing data, extracting insights, and preparing datasets for machine learning.",

    icon:BarChart3,

    skills:[
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Data Visualization",
    ],
  },


  {
    title:"Machine Learning",

    description:
      "Building, evaluating, and improving machine learning models.",

    icon:BrainCircuit,

    skills:[
      "Scikit-learn",
      "Supervised Learning",
      "Feature Engineering",
      "Model Evaluation",
      "ML Pipelines",
      "Cross Validation",
    ],
  },


  {
    title:"AI & Automation",

    description:
      "Developing intelligent applications and automation systems.",

    icon:Bot,

    skills:[
      "OpenCV",
      "Speech Recognition",
      "AI APIs",
      "Automation",
      "Computer Vision",
      "AI Assistants",
    ],
  },


  {
    title:"Full Stack Development",

    description:
      "Building modern web applications with scalable frontend and backend systems.",

    icon:Database,

    skills:[
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
    ],
  },


  {
    title:"Tools & Workflow",

    description:
      "Using modern tools for development, deployment, and collaboration.",

    icon:Wrench,

    skills:[
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Vercel",
      "npm",
    ],
  },

];