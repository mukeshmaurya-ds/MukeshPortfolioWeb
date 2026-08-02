"use client";

import { motion } from "framer-motion";


interface TechBadgeProps {
  tech: string;
}


export default function TechBadge({
  tech,
}: TechBadgeProps) {

  return (

    <motion.span

      layout

      whileHover={{
        y: -2,
        scale: 1.03,
      }}

      transition={{
        duration:0.2,
      }}

      className="
        inline-flex
        items-center
        rounded-full
        border
        border-cyan-500/20
        bg-cyan-500/10
        px-3
        py-1.5
        text-sm
        font-medium
        text-cyan-300
        backdrop-blur-sm
        transition-all
        duration-300
        hover:border-cyan-400/40
        hover:bg-cyan-500/20
        hover:text-white
        hover:shadow-lg
        hover:shadow-cyan-500/20
      "

    >

      {tech}

    </motion.span>

  );

}