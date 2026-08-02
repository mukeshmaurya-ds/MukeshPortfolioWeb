"use client";

import Link from "next/link";
import { navigationLinks } from "@/data/navigation";

export default function NavigationLinks() {
  return (
    <nav
      className="hidden items-center gap-8 md:flex"
      aria-label="Primary Navigation"
    >
      {navigationLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-zinc-700 transition-colors duration-300 hover:text-cyan-500 dark:text-zinc-300 dark:hover:text-cyan-400"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}