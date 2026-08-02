"use client";

import { motion } from "framer-motion";

export default function Availability() {
  return (
    <motion.div
      initial={{
        opacity:0,
        scale:0.8,
      }}
      animate={{
        opacity:1,
        scale:1,
      }}
      className="
      mb-6
      inline-flex
      items-center
      gap-3
      rounded-full
      border
      border-green-300
      bg-green-100
      px-4
      py-2
      text-sm
      font-medium
      text-green-700

      dark:border-green-900
      dark:bg-green-950/30
      dark:text-green-600
      "
    >

      <span
        className="
        h-2.5
        w-2.5
        animate-pulse
        rounded-full
        bg-green-600
        "
      />

      Available for Learning & Collaboration

    </motion.div>
  );
}