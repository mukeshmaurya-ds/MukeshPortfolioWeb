"use client";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import Availability from "./Availability";
import SocialLinks from "./SocialLinks";
import TypingRole from "./TypingRole";

import { heroData } from "@/data/hero";
import { siteConfig } from "@/config/site";

export default function HeroContent() {
  return (
    <div>
      <Availability />

      <Badge>Open To Opportunities</Badge>

      <p className="mt-8 text-xl text-zinc-400">
        {heroData.greeting}
      </p>

      <h1 className="mt-3 text-6xl font-black leading-tight lg:text-7xl">
        {heroData.name}
      </h1>

      <TypingRole />

      <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-500">
        {heroData.description}
      </p>

      <div className="mt-10 flex flex-wrap gap-5">
        <Button href="#projects">
          View Projects
        </Button>

        {siteConfig.resume && (
          <Button
            href={siteConfig.resume}
            variant="secondary"
          >
            Download Resume
          </Button>
        )}
      </div>

      <SocialLinks />
    </div>
  );
}