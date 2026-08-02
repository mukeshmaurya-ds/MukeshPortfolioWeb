"use client";

import { fadeUp } from "@/lib/animations";
import { viewport } from "@/lib/motion";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Database,
  GraduationCap,
  Layers3,
} from "lucide-react";

const stats = [
  {
    value: "10+",
    label: "Technologies",
  },
  {
    value: "5+",
    label: "Projects",
  },
  {
    value: "3",
    label: "Career Focus Areas",
  },
];

const journey = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building responsive and scalable web applications using modern frontend, backend, and database technologies.",
  },
  {
    icon: Database,
    title: "Data Science",
    description:
      "Developing strong foundations in Python, statistics, mathematics, data analysis, and machine learning.",
  },
  {
    icon: BrainCircuit,
    title: "AI / ML Engineering",
    description:
      "My long-term goal is to build intelligent systems using machine learning, deep learning, and artificial intelligence.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-zinc-200 py-24 dark:border-zinc-800 sm:py-32"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Building today.
            <span className="block text-zinc-600 dark:text-zinc-500">
              Preparing for tomorrow.
            </span>
          </h2>
        </motion.div>

        {/* Main About Layout */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-10">
              {/* Decorative Circle */}
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                  <GraduationCap size={30} />
                </div>

                <h3 className="text-2xl font-bold">
                  A developer with a data-driven mindset.
                </h3>

                <div className="mt-6 space-y-5 text-base leading-8 text-zinc-600 dark:text-zinc-400">
                  <p>
                    I am a Full Stack Developer who enjoys building complete
                    digital products, from user interfaces and frontend
                    experiences to backend systems, APIs, and databases.
                  </p>

                  <p>
                    Alongside web development, I am building a strong
                    foundation in Python, mathematics, statistics, data
                    analysis, and machine learning.
                  </p>

                  <p>
                    My long-term goal is to combine software engineering with
                    data and artificial intelligence to build intelligent,
                    useful, and scalable systems.
                  </p>
                </div>

                <a
                  href="#journey"
                  className="group mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 dark:text-blue-400"
                >
                  Explore my journey
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800 sm:p-5"
                >
                  <p className="text-2xl font-bold sm:text-3xl">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8">
              <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                I believe that a strong developer should not only know how to
                write code, but also understand the problem behind the code.
              </p>
            </div>

            <div className="space-y-4">
              {journey.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15,
                    }}
                    className="group rounded-2xl border border-zinc-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 dark:border-zinc-800"
                  >
                    <div className="flex gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                        <Icon size={23} />
                      </div>

                      <div>
                        <h3 className="text-lg font-bold">
                          {item.title}
                        </h3>

                        <p className="mt-2 leading-7 text-zinc-600 dark:text-zinc-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Core Philosophy */}
            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900/50 dark:bg-blue-950/20">
              <Layers3
                size={24}
                className="shrink-0 text-blue-600 dark:text-blue-400"
              />

              <p className="text-sm leading-6 text-blue-900 dark:text-blue-300">
                My goal is to combine software engineering, data science, and
                artificial intelligence to build meaningful technology.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}