import type { LucideIcon } from "lucide-react";

// =========================================
// Navigation
// =========================================

export interface NavItem {
  label: string;
  href: string;
}

// =========================================
// Hero
// =========================================

export interface HeroSocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface HeroData {
  greeting: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  social: HeroSocialLinks;
}

export interface AboutData {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

// =========================================
// Skills
// =========================================

export interface SkillCategory {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
}

// =========================================
// Projects
// =========================================

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  featured: boolean;
}


// =========================================
// Contact
// =========================================

export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
}

// =========================================
// Education
// =========================================

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  description: string;
  current?: boolean;
}

// =========================================
// Experience
// =========================================

export interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  duration: string;
  description: string[];
}

// =========================================
// Certification
// =========================================

export interface CertificationItem {
  id: number;
  title: string;
  issuer: string;
  year: string;
  credential?: string;
}

// =========================================
// Achievement
// =========================================

export interface AchievementItem {
  id: number;
  title: string;
  description: string;
}

// =========================================
// Social
// =========================================

export interface SocialItem {
  platform: string;
  url: string;
}