interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-14 text-center">

      {subtitle && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          {subtitle}
        </p>
      )}

      <h2 className="text-4xl font-bold tracking-tight">

        {title}

      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}