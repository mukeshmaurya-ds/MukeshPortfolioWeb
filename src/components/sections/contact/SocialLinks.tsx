"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

import GitHubIcon from "@/components/icons/GitHubIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";

const links = [
  {
    name: "GitHub",
    href: "https://github.com/mukeshmaurya-ds",
    icon: GitHubIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mukesh-maurya-4b787432a",
    icon: LinkedInIcon,
  },
  {
    name: "Email",
    href: "mailto:mukesh.maurya.dev@email.com",
    icon: Mail,
  },
];

export default function SocialLinks() {
  return (
    <div className="mt-10 flex gap-4">
      {links.map(({ name, href, icon: Icon }) => (
        <Link
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="rounded-full border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-500/10"
        >
          <Icon className="h-5 w-5 text-cyan-300" />
        </Link>
      ))}
    </div>
  );
}