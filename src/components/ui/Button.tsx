import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  if (!href) {
    return null;
  }

  const classes =
    variant === "primary"
      ? `
        bg-blue-600
        text-white
        shadow-sm
        hover:bg-blue-700
        hover:shadow-lg
      `
      : `
        border
        border-zinc-300
        bg-white
        text-zinc-900
        hover:bg-zinc-100

        dark:border-zinc-700
        dark:bg-zinc-900
        dark:text-white
        dark:hover:bg-zinc-800
      `;

  return (
    <Link
      href={href}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-full
        px-6
        py-3
        font-medium

        transition-all
        duration-300

        hover:-translate-y-0.5

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-blue-500
        focus-visible:ring-offset-2
        focus-visible:ring-offset-white
        dark:focus-visible:ring-offset-zinc-950

        ${classes}
      `}
    >
      {children}
    </Link>
  );
}