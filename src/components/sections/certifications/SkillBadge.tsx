interface SkillBadgeProps {
  skill: string;
}

export default function SkillBadge({
  skill,
}: SkillBadgeProps) {
  return (
    <span
      className="
        rounded-full
        border
        border-cyan-500/20
        bg-cyan-500/10
        px-3
        py-1
        text-xs
        font-medium
        text-cyan-300
        transition-all
        duration-300
        hover:border-cyan-400
        hover:bg-cyan-500/20
      "
    >
      {skill}
    </span>
  );
}