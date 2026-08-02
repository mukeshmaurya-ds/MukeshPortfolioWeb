"use client";

import { motion } from "framer-motion";

interface Props {
  text: string;
  delay?: number;
}

export default function FloatingBadge({
  text,
  delay = 0,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: [0, -8, 0],
      }}
      transition={{
        delay,
        duration: 4,
        repeat: Infinity,
      }}
      className="
        rounded-full
        border
        border-zinc-200
        bg-white/70
        backdrop-blur-xl
        px-5
        py-2
        text-sm
        shadow-lg

        dark:border-zinc-700
        dark:bg-zinc-900/70
      "
    >
      {text}
    </motion.div>
  );
}