"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { formatDate } from "@/lib/utils";
import type { Experience, Education } from "@/types";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

interface TimelineProps {
  experiences: Experience[];
  className?: string;
}

export function Timeline({ experiences, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Vertical line */}
      <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-tertiary" />

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-12 md:pl-16"
          >
            {/* Timeline dot */}
            <div className="absolute left-2 md:left-4 top-2 w-4 h-4 rounded-full bg-accent-primary border-4 border-bg-primary dark:border-bg-primary shadow-lg" />

            <div className="bg-card-bg border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {experience.role}
                  </h3>
                  <p className="text-accent-primary font-medium">
                    {experience.company}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {formatDate(experience.startDate, { month: "short", year: "numeric" })} -{" "}
                    {experience.endDate === "present"
                      ? "Present"
                      : formatDate(experience.endDate, { month: "short", year: "numeric" })}
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-sm text-text-secondary mb-4">
                <MapPin className="h-4 w-4" />
                <span>{experience.location}</span>
                <span className="mx-2">•</span>
                <span className="capitalize">{experience.type}</span>
              </div>

              {/* Description */}
              <p className="text-text-secondary mb-4">{experience.description}</p>

              {/* Achievements */}
              {experience.achievements.length > 0 && (
                <ul className="space-y-2 mb-4">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary mt-2 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              )}

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-md bg-accent-primary/10 text-accent-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

interface EducationTimelineProps {
  education: Education[];
  className?: string;
}

export function EducationTimeline({ education, className }: EducationTimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Vertical line */}
      <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-tertiary to-accent-primary" />

      <div className="space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-12 md:pl-16"
          >
            {/* Timeline dot */}
            <div className="absolute left-2 md:left-4 top-2 w-4 h-4 rounded-full bg-accent-tertiary border-4 border-bg-primary shadow-lg" />

            <div className="bg-card-bg border border-border rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent-tertiary/10">
                  <GraduationCap className="h-6 w-6 text-accent-tertiary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-primary">
                    {edu.degree} in {edu.field}
                  </h3>
                  <p className="text-accent-tertiary font-medium">{edu.institution}</p>
                  <p className="text-sm text-text-secondary mt-1">
                    {formatDate(edu.startDate, { year: "numeric" })} -{" "}
                    {formatDate(edu.endDate, { year: "numeric" })}
                  </p>
                  {edu.description && (
                    <p className="text-text-secondary mt-3 text-sm">{edu.description}</p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
