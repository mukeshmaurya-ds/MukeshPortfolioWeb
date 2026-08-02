"use client";

import { motion } from "framer-motion";
import CertificationGrid from "./CertificationGrid";

export default function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="relative py-20 sm:py-24 lg:py-32"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-10 top-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute right-10 bottom-10 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-600/20 bg-cyan-700/10 px-4 py-2 text-sm font-medium text-cyan-500">
            Certifications
          </span>

          <h2
            id="certifications-heading"
            className="mt-6 text-4xl font-bold text-white-400 sm:text-5xl"
          >
            Certifications & Learning
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Every certification represents another milestone in my continuous
            learning journey toward becoming a Data Scientist and AI Engineer.
            I believe in constantly improving my technical knowledge through
            practical learning and hands-on projects.
          </p>
        </motion.div>

        <CertificationGrid />
      </div>
    </section>
  );
}