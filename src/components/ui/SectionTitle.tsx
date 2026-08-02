interface Props {
  badge: string;
  title: string;
  highlight: string;
  description: string;
}

export default function SectionTitle({
  badge,
  title,
  highlight,
  description,
}: Props) {
  return (
    <div className="mb-16 max-w-3xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
        {badge}
      </p>

      <h2 className="text-4xl font-bold sm:text-5xl">
        {title}

        <span className="block text-zinc-400 dark:text-zinc-600">
          {highlight}
        </span>
      </h2>

      <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </div>
  );
}