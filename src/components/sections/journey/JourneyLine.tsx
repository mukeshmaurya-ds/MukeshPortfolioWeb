"use client";

import { motion } from "framer-motion";
import { journey } from "@/content/journey";
import JourneyCard from "./JourneyCard";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut" as const,
    },
  },
};

export default function JourneyLine() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="relative mx-auto max-w-6xl"
    >
      {/* Timeline Line */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute left-5 top-0 w-1 rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-violet-500 md:left-1/2 md:-translate-x-1/2"
      />

      <ol
        className="space-y-12 lg:space-y-16"
        aria-label="Education and learning timeline"
      >
        {journey.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.li
              key={`${item.year}-${item.title}`}
              variants={itemVariants}
              className={`relative flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
              <div className="ml-14 w-full md:ml-0 md:w-1/2 md:px-10">
                <JourneyCard item={item} />
              </div>

              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
                className="absolute left-5 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-4 border-slate-950 bg-cyan-400 md:left-1/2"
              >
                <span className="absolute h-full w-full animate-ping rounded-full bg-cyan-400 opacity-30" />

                <span className="relative h-2.5 w-2.5 rounded-full bg-white" />
              </motion.div>
            </motion.li>
          );
        })}
      </ol>
    </motion.div>
  );
}