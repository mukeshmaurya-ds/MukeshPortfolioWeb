import { achievements } from "@/content/achievements";
import AchievementCard from "./AchievementCard";

export default function AchievementGrid() {
  return (
    <div
      className="
        grid
        gap-8
        sm:grid-cols-2
        xl:grid-cols-3
      "
    >
      {achievements.map((achievement) => (
        <AchievementCard
          key={achievement.id}
          achievement={achievement}
        />
      ))}
    </div>
  );
}