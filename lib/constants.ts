import type { SocialLink, NavLink, Skill, Project, Experience, Education, Stat } from "@/types";

export const siteConfig = {
  name: "CacheWraith",
  description: "Software Engineer & Security Specialist Portfolio",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000",
  author: "CacheWraith",
  twitterHandle: "@cachewraith",
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/cachewraith",
    icon: "github",
    label: "Visit my GitHub profile",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/cachewraith",
    icon: "linkedin",
    label: "Connect on LinkedIn",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/cachewraith",
    icon: "twitter",
    label: "Follow me on Twitter",
  },
  {
    name: "Email",
    url: "mailto:hello@cachewraith.dev",
    icon: "email",
    label: "Send me an email",
  },
];

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "react", proficiency: 95, category: "frontend" },
  { name: "TypeScript", icon: "typescript", proficiency: 92, category: "frontend" },
  { name: "Next.js", icon: "nextjs", proficiency: 90, category: "frontend" },
  { name: "Tailwind CSS", icon: "tailwind", proficiency: 95, category: "frontend" },
  { name: "Vue.js", icon: "vue", proficiency: 80, category: "frontend" },
  
  // Backend
  { name: "Node.js", icon: "nodejs", proficiency: 88, category: "backend" },
  { name: "Python", icon: "python", proficiency: 85, category: "backend" },
  { name: "PostgreSQL", icon: "postgresql", proficiency: 82, category: "backend" },
  { name: "GraphQL", icon: "graphql", proficiency: 78, category: "backend" },
  { name: "Redis", icon: "redis", proficiency: 75, category: "backend" },
  
  // DevOps
  { name: "Docker", icon: "docker", proficiency: 85, category: "devops" },
  { name: "Kubernetes", icon: "kubernetes", proficiency: 72, category: "devops" },
  { name: "AWS", icon: "aws", proficiency: 80, category: "devops" },
  { name: "CI/CD", icon: "cicd", proficiency: 83, category: "devops" },
  { name: "Terraform", icon: "terraform", proficiency: 70, category: "devops" },
  
  // Security
  { name: "OWASP", icon: "owasp", proficiency: 88, category: "security" },
  { name: "Penetration Testing", icon: "pentest", proficiency: 75, category: "security" },
  { name: "Cryptography", icon: "crypto", proficiency: 70, category: "security" },
  
  // Tools
  { name: "Git", icon: "git", proficiency: 95, category: "tools" },
  { name: "Linux", icon: "linux", proficiency: 90, category: "tools" },
  { name: "Figma", icon: "figma", proficiency: 78, category: "tools" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory, secure payments, and admin dashboard.",
    longDescription: "Built a comprehensive e-commerce platform featuring real-time inventory management, Stripe payment integration, multi-tenant architecture, and a powerful admin dashboard for analytics and order management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Redis"],
    category: "fullstack",
    githubUrl: "https://github.com/cachewraith/ecommerce",
    liveUrl: "https://demo.cachewraith.dev",
    featured: true,
    technologies: ["Next.js 14", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "Redis", "Tailwind CSS"],
    type: "fullstack",
    year: 2024,
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative task management with real-time updates, drag-and-drop, and team workspaces.",
    longDescription: "A powerful task management application featuring real-time collaboration via WebSockets, intuitive drag-and-drop interfaces, team workspaces with granular permissions, and advanced filtering and search capabilities.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    category: "fullstack",
    githubUrl: "https://github.com/cachewraith/taskmanager",
    liveUrl: "https://tasks.cachewraith.dev",
    featured: true,
    technologies: ["React", "Node.js", "Express", "Socket.io", "MongoDB", "Docker"],
    type: "fullstack",
    year: 2024,
  },
  {
    id: "3",
    title: "Security Scanner",
    description: "Automated security vulnerability scanner for web applications with detailed reporting.",
    longDescription: "Developed an automated security scanner that identifies common vulnerabilities in web applications including XSS, SQL injection, and CSRF. Features comprehensive reporting with remediation suggestions and CI/CD integration.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    tags: ["Python", "FastAPI", "Docker", "OWASP"],
    category: "security",
    githubUrl: "https://github.com/cachewraith/security-scanner",
    featured: true,
    technologies: ["Python", "FastAPI", "Celery", "Docker", "PostgreSQL", "React"],
    type: "security",
    year: 2023,
  },
  {
    id: "4",
    title: "AI Content Generator",
    description: "AI-powered content generation tool with SEO optimization and multi-language support.",
    longDescription: "An intelligent content generation platform leveraging OpenAI GPT models to create SEO-optimized content. Features include multi-language support, content scheduling, plagiarism detection, and brand voice customization.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["Next.js", "OpenAI", "Vercel AI SDK", "Prisma"],
    category: "ai",
    githubUrl: "https://github.com/cachewraith/ai-content",
    liveUrl: "https://ai.cachewraith.dev",
    featured: false,
    technologies: ["Next.js", "OpenAI API", "Vercel AI SDK", "Prisma", "PostgreSQL"],
    type: "fullstack",
    year: 2024,
  },
  {
    id: "5",
    title: "DevOps Dashboard",
    description: "Centralized dashboard for monitoring CI/CD pipelines, infrastructure, and deployments.",
    longDescription: "A comprehensive DevOps dashboard aggregating data from multiple sources including Jenkins, GitHub Actions, AWS CloudWatch, and Kubernetes. Features real-time alerts, cost optimization insights, and deployment tracking.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "Go", "Kubernetes", "Prometheus"],
    category: "devops",
    githubUrl: "https://github.com/cachewraith/devops-dashboard",
    featured: false,
    technologies: ["React", "Go", "Kubernetes", "Prometheus", "Grafana", "WebSockets"],
    type: "fullstack",
    year: 2023,
  },
  {
    id: "6",
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication and real-time transactions.",
    longDescription: "Developed a secure mobile banking application with biometric authentication, end-to-end encryption, real-time transaction notifications, and comprehensive fraud detection. Compliant with PCI DSS and banking regulations.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop",
    tags: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    category: "mobile",
    githubUrl: "https://github.com/cachewraith/mobile-banking",
    featured: false,
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS", "Plaid API", "Biometrics"],
    type: "mobile",
    year: 2023,
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "TechCorp Inc.",
    role: "Senior Software Engineer",
    startDate: "2022-01",
    endDate: "present",
    description: "Leading frontend architecture decisions and mentoring junior developers. Implemented security best practices and reduced vulnerabilities by 80%.",
    achievements: [
      "Reduced application bundle size by 45% through code splitting and lazy loading",
      "Implemented comprehensive security audit system preventing 50+ vulnerabilities",
      "Led migration from legacy jQuery to modern React architecture",
      "Mentored 5 junior developers to mid-level positions",
    ],
    technologies: ["React", "TypeScript", "Node.js", "AWS", "Docker"],
    location: "San Francisco, CA",
    type: "fulltime",
  },
  {
    id: "2",
    company: "StartupXYZ",
    role: "Full Stack Developer",
    startDate: "2020-06",
    endDate: "2021-12",
    description: "Built scalable web applications serving 100K+ daily users. Focused on performance optimization and security implementation.",
    achievements: [
      "Built real-time chat feature handling 10K+ concurrent users",
      "Implemented CI/CD pipeline reducing deployment time by 70%",
      "Achieved 99.9% uptime through robust error handling and monitoring",
    ],
    technologies: ["Vue.js", "Python", "PostgreSQL", "Redis", "Kubernetes"],
    location: "Remote",
    type: "fulltime",
  },
  {
    id: "3",
    company: "Digital Agency Pro",
    role: "Frontend Developer",
    startDate: "2019-03",
    endDate: "2020-05",
    description: "Developed responsive websites and web applications for diverse clients across multiple industries.",
    achievements: [
      "Delivered 20+ projects on time and within budget",
      "Improved page load times by 60% through optimization techniques",
      "Received 95% client satisfaction rating",
    ],
    technologies: ["JavaScript", "React", "SCSS", "WordPress"],
    location: "New York, NY",
    type: "fulltime",
  },
];

export const education: Education[] = [
  {
    id: "1",
    institution: "University of Technology",
    degree: "Bachelor of Science",
    field: "Computer Science",
    startDate: "2015-09",
    endDate: "2019-05",
    description: "Specialized in Software Engineering and Cybersecurity. Graduated with Honors (GPA: 3.8/4.0)",
  },
];

export const stats: Stat[] = [
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Projects Completed", value: 50, suffix: "+" },
  { label: "Technologies", value: 25, suffix: "" },
  { label: "Coffee Consumed", value: 999, suffix: "+" },
];
