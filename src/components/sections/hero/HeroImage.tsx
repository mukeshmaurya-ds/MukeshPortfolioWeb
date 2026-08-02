import Image from "next/image";
import { siteConfig } from "@/config/site";
import GlassCard from "@/components/ui/GlassCard";

export default function HeroImage() {
  if (!siteConfig.profileImage) {
    return null;
  }

  return (
    <div className="relative flex justify-center">
      <GlassCard className="p-8">
        <Image
          src={siteConfig.profileImage}
          alt={siteConfig.name}
          width={360}
          height={360}
          priority
          className="rounded-2xl object-cover"
        />
      </GlassCard>
    </div>
  );
}