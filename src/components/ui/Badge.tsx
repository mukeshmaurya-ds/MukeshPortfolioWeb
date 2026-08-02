interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span
      className="
      inline-flex
      items-center
      rounded-full
      border
      border-blue-200
      bg-blue-50
      px-3
      py-1
      text-xs
      font-semibold
      text-blue-700

      dark:border-blue-900
      dark:bg-blue-950/40
      dark:text-blue-300
    "
    >
      {children}
    </span>
  );
}