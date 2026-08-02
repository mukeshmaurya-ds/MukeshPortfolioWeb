"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

import { fadeUp } from "@/lib/animations";
import { viewport } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
}

export default function Reveal({
  children,
  delay = 0,
}: RevealProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}