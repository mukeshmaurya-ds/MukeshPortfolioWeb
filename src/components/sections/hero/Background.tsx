"use client";

import GridBackground from "./GridBackground";
import { motion } from "framer-motion";

export default function Background() {
  return (
    <>
      <GridBackground />
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
          className="
        absolute
        left-0
          top-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-500/20
          blur-[120px]
          "
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
          className="
        absolute
        right-0
        bottom-0
        h-[500px]
        w-[500px]
        rounded-full
        bg-purple-500/20
        blur-[120px]
        "
        />
      </div>
    </>
  );
}