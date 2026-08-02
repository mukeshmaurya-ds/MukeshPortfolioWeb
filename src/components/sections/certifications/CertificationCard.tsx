"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";

import { Certification } from "@/content/certifications";
import SkillBadge from "./SkillBadge";

interface CertificationCardProps {
  certification: Certification;
}

export default function CertificationCard({
  certification,
}: CertificationCardProps) {
  return (
    <motion.article
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
      "
    >
      {/* Image */}

      <div className="relative aspect-video overflow-hidden">
        <Image
          src={certification.image}
          alt={certification.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {certification.featured && (
          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-yellow-500 px-3 py-1 text-xs font-semibold text-black">
            <Award size={14} />
            Featured
          </div>
        )}
      </div>

      {/* Content */}

      <div className="space-y-5 p-6">
        <div>
          <h3 className="text-xl font-bold text-white-400">
            {certification.title}
          </h3>

          <p className="mt-2 text-cyan-300">
            {certification.issuer}
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Calendar size={16} />

          {certification.issueDate}
        </div>

        <div className="flex flex-wrap gap-2">
          {certification.skills.map((skill) => (
            <SkillBadge
              key={skill}
              skill={skill}
            />
          ))}
        </div>

        {certification.credentialUrl && (
          <a
            href={certification.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-cyan-500
              px-5
              py-3
              font-semibold
              text-black
              transition-all
              duration-300
              hover:scale-105
              hover:bg-cyan-400
            "
          >
            View Certificate

            <ExternalLink size={18} />
          </a>
        )}
      </div>
    </motion.article>
  );
}