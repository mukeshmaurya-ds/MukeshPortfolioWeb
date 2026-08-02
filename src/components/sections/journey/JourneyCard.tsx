"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, CircleDot, Rocket } from "lucide-react";
import type { JourneyItem } from "@/content/journey";

interface JourneyCardProps {
  item: JourneyItem;
}

const statusConfig = {
  completed: {
    icon: CheckCircle2,
    badge: "Completed",
    badgeClass:
      "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    iconClass: "text-emerald-400",
  },
  current: {
    icon: CircleDot,
    badge: "Current",
    badgeClass:
      "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    iconClass: "text-blue-400",
  },
  future: {
    icon: Rocket,
    badge: "Future",
    badgeClass:
      "bg-violet-500/10 text-violet-400 border border-violet-500/20",
    iconClass: "text-violet-400",
  },
};

export default function JourneyCard({ item }: JourneyCardProps) {
  const config = statusConfig[item.status];
  const Icon = config.icon;
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 40,
              scale: 0.96,
            }
      }
      whileInView={
        shouldReduceMotion
          ? {}
          : {
              opacity: 1,
              y: 0,
              scale: 1,
            }
      }
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
        scale: 1.015,
        transition: {
          duration: 0.25,
        },
      }}
      whileTap={{
        scale: 0.99,
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)] focus-within:border-cyan-400/50"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100">
        <div className="absolute -top-20 right-0 h-44 w-44 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-36 w-36 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="mb-5 flex items-center justify-between">
          <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-300">
            {item.year}
          </span>

          <span
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${config.badgeClass}`}
          >
            <Icon className={`h-4 w-4 ${config.iconClass}`} />
            {config.badge}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white-400 transition-colors duration-300 group-hover:text-cyan-300">
          {item.title}
        </h3>

        <p className="mt-2 text-sm font-medium text-cyan-400">
          {item.subtitle}
        </p>

        <div className="my-5 h-px bg-gradient-to-r from-cyan-500/40 via-white/10 to-transparent" />

        <p className="leading-7 text-gray-400">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}