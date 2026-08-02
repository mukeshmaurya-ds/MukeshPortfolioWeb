import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-zinc-200
        bg-white
        text-zinc-900

        p-6

        shadow-sm

        transition-all
        duration-300
        ease-out

        hover:-translate-y-1
        hover:shadow-xl

        dark:border-zinc-800
        dark:bg-zinc-950
        dark:text-white

        ${className}
      `}
    >
      {children}
    </div>
  );
}