"use client";

import { cn } from "@/lib/utils";
import { socialLinks } from "@/lib/constants";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";

interface SocialLinksProps {
  className?: string;
  iconSize?: "sm" | "md" | "lg";
  showLabels?: boolean;
}

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  email: Mail,
};

const sizeMap = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

export function SocialLinks({ className, iconSize = "md", showLabels = false }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socialLinks.map((link, index) => {
        const Icon = iconMap[link.icon as keyof typeof iconMap];
        return (
          <motion.a
            key={link.name}
            href={link.url}
            target={link.icon === "email" ? undefined : "_blank"}
            rel={link.icon === "email" ? undefined : "noopener noreferrer"}
            className={cn(
              "flex items-center gap-2 p-2.5 rounded-xl",
              "text-text-secondary hover:text-accent-primary",
              "hover:bg-accent-primary/10",
              "transition-all duration-200"
            )}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            aria-label={link.label}
          >
            <Icon className={sizeMap[iconSize]} />
            {showLabels && (
              <span className="text-sm font-medium">{link.name}</span>
            )}
          </motion.a>
        );
      })}
    </div>
  );
}
