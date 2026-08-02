"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Star,
  CircleCheck,
} from "lucide-react";

import type { Project } from "@/content/projects";
import TechBadge from "./TechBadge";
import ProjectStats from "./ProjectStats";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  // Convert metrics object into the array expected by ProjectStats
  const stats = [
    {
      label: "Year",
      value: project.metrics.year,
    },
    {
      label: "Duration",
      value: project.metrics.duration,
    },
    {
      label: "Team",
      value: project.metrics.team,
    },
    {
      label: "Status",
      value: project.metrics.status,
    },
  ];

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        transition
      "
    >
      {/* Project Image */}

      <div className="relative aspect-video overflow-hidden bg-zinc-900">
        <Image
          src={project.image}
          alt={`${project.title} project screenshot`}
          fill
          sizes="(max-width:768px) 100vw, 50vw"
          className="
            object-cover
            transition
            duration-700
            group-hover:scale-105
          "
        />

        {project.featured && (
          <div
            className="
              absolute
              left-5
              top-5
              flex
              items-center
              gap-2
              rounded-full
              bg-yellow-500
              px-4
              py-2
              text-sm
              font-semibold
              text-black
            "
          >
            <Star className="h-4 w-4 fill-current" />
            Featured
          </div>
        )}
      </div>

      {/* Content */}

      <div className="space-y-8 p-8">
        <div>
          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-wider
              text-cyan-400
            "
          >
            {project.category}
          </span>

          <h3 className="mt-2 text-3xl font-bold text-white-200">
            {project.title}
          </h3>

          <p className="mt-4 leading-8 text-gray-400">
            {project.description}
          </p>
        </div>

        {/* FIXED */}
        <ProjectStats metrics={stats} />

        <div>
          <h4 className="mb-2 text-lg font-semibold text-white-400">
            Problem
          </h4>

          <p className="leading-7 text-gray-400">
            {project.problem}
          </p>
        </div>

        <div>
          <h4 className="mb-2 text-lg font-semibold text-white-400">
            Solution
          </h4>

          <p className="leading-7 text-gray-400">
            {project.solution}
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-lg font-semibold text-white-400">
            Tech Stack
          </h4>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <TechBadge
                key={tech}
                tech={tech}
              />
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-lg font-semibold text-white-400">
            Features
          </h4>

          <ul className="grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="
                  flex
                  items-center
                  gap-3
                  text-gray-300
                "
              >
                <CircleCheck
                  className="
                    h-5
                    w-5
                    text-cyan-400
                  "
                />

                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 pt-2">
          {project.github?.trim() && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-white/10
                px-5
                py-3
                text-white-400
                transition
                hover:border-cyan-400
                hover:bg-cyan-500/10
              "
            >
              <Code2 className="h-5 w-5" />
              GitHub
            </Link>
          )}

          {project.live?.trim() && (
            <Link
              href={project.live}
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
                font-medium
                text-black
                transition
                hover:bg-cyan-400
              "
            >
              Live Demo
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}