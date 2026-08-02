"use client";

import { motion } from "framer-motion";
import JourneyLine from "./JourneyLine";

export default function Journey() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute left-0 top-1/2 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center lg:mb-24"
        >
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-400">
            My Journey
          </span>

          <h2
            id="journey-heading"
            className="mt-6 text-3xl font-bold tracking-tight text-white-400 sm:text-4xl lg:text-5xl"
          >
            Education & Learning Journey
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Every milestone represents a step in my growth—from learning the
            fundamentals of web development to building modern full-stack
            applications while preparing for a career in Data Science and
            Artificial Intelligence.
          </p>
        </motion.div>

        <JourneyLine />
      </div>
    </section>
  );
}