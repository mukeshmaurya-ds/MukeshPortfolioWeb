"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

import { fadeUp } from "@/lib/animations";
import { viewport } from "@/lib/motion";

interface AnimatedSectionProps {
  children: ReactNode;
}

export default function AnimatedSection({
  children,
}: AnimatedSectionProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
}