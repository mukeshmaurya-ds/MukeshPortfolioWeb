"use client";

import { motion } from "framer-motion";
import AchievementGrid from "./AchievementGrid";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative py-20 sm:py-24 lg:py-32"
    >
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-600/20 bg-cyan-600/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Achievements
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white-400 sm:text-5xl">
            Milestones & Achievements
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            A collection of academic achievements, technical milestones,
            personal growth, and projects that reflect my continuous learning
            journey.
          </p>
        </motion.div>

        <AchievementGrid />
      </div>
    </section>
  );
}