"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle, Home, RotateCcw } from "lucide-react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({
  error,
  reset,
}: ErrorPageProps) {
  useEffect(() => {
    // Log the error for debugging.
    // Replace this with your logging service (e.g. Sentry) in production.
    console.error(error);
  }, [error]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl" />

        <div className="absolute left-10 bottom-10 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="absolute right-10 top-20 h-64 w-64 rounded-full bg-yellow-500/10 blur-3xl" />
      </div>

      <motion.section
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="relative z-10 w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-2xl backdrop-blur-xl"
      >
        {/* Icon */}
        <motion.div
          animate={{
            rotate: [0, 8, -8, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
          className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10"
        >
          <AlertTriangle className="h-12 w-12 text-red-400" />
        </motion.div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-foreground">
          Something Went Wrong
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-xl leading-8 text-muted-foreground">
          An unexpected error occurred while loading this page.
          Please try again. If the problem continues,
          you can return to the homepage.
        </p>

        {/* Development Info */}
        {process.env.NODE_ENV === "development" && (
          <div className="mt-8 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-left">
            <p className="mb-2 text-sm font-semibold text-red-400">
              Development Error
            </p>

            <pre className="overflow-auto whitespace-pre-wrap break-words text-xs text-red-300">
              {error.message}
            </pre>
          </div>
        )}

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-red-400"
          >
            <RotateCcw className="h-5 w-5" />
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-foreground transition-all duration-300 hover:scale-105 hover:border-cyan-400/40 hover:bg-white/10"
          >
            <Home className="h-5 w-5" />
            Back to Home
          </Link>
        </div>
      </motion.section>
    </main>
  );
}