"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

import { Achievement } from "@/content/achievements";

interface AchievementCardProps {
  achievement: Achievement;
}

export default function AchievementCard({
  achievement,
}: AchievementCardProps) {
  return (
    <motion.article
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-7
        backdrop-blur-xl
      "
    >
      <div className="flex items-center justify-between">
        <span className="text-4xl">
          {achievement.icon}
        </span>

        {achievement.featured && (
          <div className="flex items-center gap-2 rounded-full bg-yellow-500 px-3 py-1 text-xs font-semibold text-black">
            <Trophy size={14} />
            Featured
          </div>
        )}
      </div>

      <h3 className="mt-6 text-2xl font-bold text-white-400">
        {achievement.title}
      </h3>

      <p className="mt-4 leading-7 text-gray-400">
        {achievement.description}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
          {achievement.category}
        </span>

        <span className="text-sm text-gray-500">
          {achievement.year}
        </span>
      </div>
    </motion.article>
  );
}