"use client";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  Mail,
} from "lucide-react";

import SocialButton from "@/components/ui/SocialButton";

import { heroData } from "@/data/hero";


export default function SocialLinks() {
  return (
    <div className="mt-10 flex gap-4">

      <SocialButton href={heroData.social.github}>
        <FaGithub size={20} />
      </SocialButton>


      <SocialButton href={heroData.social.linkedin}>
        <FaLinkedin size={20} />
      </SocialButton>


      <SocialButton href={heroData.social.email}>
        <Mail size={20} />
      </SocialButton>

    </div>
  );
}