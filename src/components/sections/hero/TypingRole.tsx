"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypingRole() {
  return (
    <div className="mt-5 text-3xl font-semibold text-blue-600 dark:text-blue-400">
      <TypeAnimation
        sequence={[
          "Full Stack Developer",
          3000,

          "Data Science Enthusiast",
          3000,

          "Machine Learning Learner",
          3000,

          "Future AI/ML Engineer",
          3000,
        ]}
        speed={50}
        repeat={Infinity}
      />
    </div>
  );
}