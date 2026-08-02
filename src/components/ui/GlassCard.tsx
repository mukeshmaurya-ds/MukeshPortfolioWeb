import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-white/20
        bg-white/70
        backdrop-blur-xl
        shadow-xl

        dark:border-white/10
        dark:bg-white/5

        ${className}
      `}
    >
      {children}
    </div>
  );
}