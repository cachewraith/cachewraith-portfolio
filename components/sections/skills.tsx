"use client";

import { Container } from "@/components/ui/container";
import { AnimatedSection } from "@/components/animations/animated-section";
import { SkillBadge } from "@/components/features/skill-badge";
import { skills } from "@/lib/constants";
import { useState } from "react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "devops", label: "DevOps" },
  { id: "security", label: "Security" },
  { id: "tools", label: "Tools" },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section className="py-24">
      <Container>
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Skills & Technologies
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              A comprehensive toolkit built over years of professional experience
              across the full development stack.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === cat.id
                    ? "bg-accent-primary text-white"
                    : "bg-bg-secondary text-text-secondary hover:text-text-primary"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredSkills.map((skill) => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
