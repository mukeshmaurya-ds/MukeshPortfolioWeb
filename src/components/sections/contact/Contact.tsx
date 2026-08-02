"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-20 sm:py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-600/20 bg-cyan-600/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Contact
          </span>

          <h2
            id="contact-heading"
            className="mt-6 text-4xl font-bold text-white-400 sm:text-5xl"
          >
            Let&apos;s Work Together
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Whether you have a project, internship opportunity, or just want to
            connect, I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}