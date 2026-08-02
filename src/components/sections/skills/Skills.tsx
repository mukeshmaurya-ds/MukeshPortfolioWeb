"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-zinc-200 py-24 dark:border-zinc-800 sm:py-32"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Skills & Technologies
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Tools I use to
            <span className="block text-zinc-400 dark:text-zinc-600">
              turn ideas into reality.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            My technical journey combines full-stack development with a growing
            focus on data science, machine learning, and artificial
            intelligence.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group rounded-3xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 dark:border-zinc-800 dark:bg-zinc-950"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-transform duration-300 group-hover:scale-110 dark:bg-blue-950/50 dark:text-blue-400">
                  <Icon size={26} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="mt-3 min-h-14 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {category.description}
                </p>

                {/* Skills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
                    >
                      <Check
                        size={13}
                        className="text-blue-600 dark:text-blue-400"
                      />

                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-3xl border border-zinc-200 bg-zinc-50 p-8 text-center dark:border-zinc-800 dark:bg-zinc-900/50"
        >
          <p className="text-lg font-medium">
            Always learning. Always building. Always improving.
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            Technology continuously evolves, and so do I. I actively learn new
            concepts and apply them by building real-world projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}