"use client";

import FloatingBadge from "@/components/ui/FloatingBadge";

import { heroData } from "@/data/hero";

export default function TechCloud() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {heroData.technologies.map((tech, index) => (
        <FloatingBadge
          key={tech}
          text={tech}
          delay={index * 0.25}
        />
      ))}
    </div>
  );
}