"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import NavigationLinks from "./NavigationLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // setMounted inside a timer to avoid synchronous state update inside effect
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/80">
      <nav className="container-custom flex h-20 items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          className="text-xl font-bold tracking-tight"
        >
          Mukesh<span className="text-blue-600">.</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationLinks />

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {mounted && (
            <button
              type="button"
              onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              className="rounded-full border border-zinc-200 p-2.5 transition hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>
          )}

          <Link
            href="#contact"
            className="hidden rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 sm:block"
          >
            Let&apos;s Talk
          </Link>

          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}