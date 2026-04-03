"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { Skill } from "@/types";

interface SkillBadgeProps {
  skill: Skill;
  className?: string;
  showProficiency?: boolean;
}

const categoryColors: Record<string, string> = {
  frontend: "from-blue-500 to-indigo-500",
  backend: "from-green-500 to-emerald-500",
  devops: "from-orange-500 to-red-500",
  tools: "from-purple-500 to-pink-500",
  security: "from-red-500 to-rose-500",
  mobile: "from-cyan-500 to-blue-500",
};

const categoryBgColors: Record<string, string> = {
  frontend: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  backend: "bg-green-500/10 text-green-600 dark:text-green-400",
  devops: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  tools: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  security: "bg-red-500/10 text-red-600 dark:text-red-400",
  mobile: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
};

export function SkillBadge({ skill, className, showProficiency = true }: SkillBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative group p-4 rounded-xl border border-border bg-card-bg hover:shadow-lg transition-all duration-300",
        className
      )}
    >
      {/* Proficiency indicator */}
      {showProficiency && (
        <div className="absolute top-2 right-2">
          <div className="h-2 w-2 rounded-full bg-accent-primary" />
        </div>
      )}

      <div className="flex flex-col items-center gap-3">
        {/* Icon placeholder - in production, use actual icons */}
        <div
          className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold",
            categoryBgColors[skill.category]
          )}
        >
          {skill.name.slice(0, 2).toUpperCase()}
        </div>

        <div className="text-center">
          <h4 className="text-sm font-medium text-text-primary">{skill.name}</h4>
          {showProficiency && (
            <p className="text-xs text-text-secondary mt-0.5">
              {skill.proficiency}%
            </p>
          )}
        </div>
      </div>

      {/* Progress bar */}
      {showProficiency && (
        <div className="mt-3 h-1 w-full bg-bg-secondary rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.proficiency}%` }}
            transition={{ duration: 1, delay: 0.2 }}
            className={cn(
              "h-full rounded-full bg-gradient-to-r",
              categoryColors[skill.category]
            )}
          />
        </div>
      )}
    </motion.div>
  );
}

interface SkillCategorySectionProps {
  category: string;
  skills: Skill[];
  className?: string;
}

export function SkillCategorySection({ category, skills, className }: SkillCategorySectionProps) {
  const categoryLabels: Record<string, string> = {
    frontend: "Frontend Development",
    backend: "Backend Development",
    devops: "DevOps & Cloud",
    tools: "Tools & Platforms",
    security: "Security",
    mobile: "Mobile Development",
  };

  return (
    <div className={className}>
      <h3 className="text-lg font-semibold text-text-primary mb-4 capitalize">
        {categoryLabels[category] || category}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}
