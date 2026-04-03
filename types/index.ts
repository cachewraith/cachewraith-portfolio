/**
 * Skill categories and proficiency levels
 */
export interface Skill {
  name: string;
  icon: string;
  proficiency: number; // 1-100
  category: SkillCategory;
}

export type SkillCategory =
  | "frontend"
  | "backend"
  | "devops"
  | "tools"
  | "security"
  | "mobile";

/**
 * Project structure for portfolio
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  category: Project["type"];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  technologies: string[];
  type: "frontend" | "backend" | "fullstack" | "mobile" | "other" | "security" | "ai" | "devops";
  year: number;
}

/**
 * Work experience timeline entry
 */
export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string | "present";
  description: string;
  achievements: string[];
  technologies: string[];
  location: string;
  type: "fulltime" | "parttime" | "contract" | "freelance";
}

/**
 * Education entry
 */
export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
}

/**
 * Social link structure
 */
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}

/**
 * Site metadata for SEO
 */
export interface SiteMetadata {
  title: string;
  description: string;
  author: string;
  siteUrl: string;
  image: string;
  twitterHandle: string;
  keywords: string[];
}

/**
 * Navigation link structure
 */
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

/**
 * Statistics for about section
 */
export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

/**
 * Testimonial structure
 */
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}
