"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { AnimatedSection } from "@/components/animations/animated-section";
import { ProjectCard } from "@/components/features/project-card";
import { projects } from "@/lib/constants";
import { FloatingOrbs } from "@/components/animations/floating-orbs";
import { FolderGit2, Layers, Sparkles, Code2, Shield, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "All Projects", icon: Layers },
  { id: "fullstack", label: "Full Stack", icon: Code2 },
  { id: "security", label: "Security", icon: Shield },
  { id: "frontend", label: "Frontend", icon: Globe },
];

export function WorkPageClient() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory || p.type === activeCategory);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <FloatingOrbs count={5} />
      <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/5 via-transparent to-accent-secondary/5" />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16">
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 mb-6">
                <Sparkles className="h-4 w-4 text-accent-primary" />
                <span className="text-sm text-accent-primary font-medium">Portfolio</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-text-primary">My </span>
                <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                  Projects
                </span>
              </h1>
              
              <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                A curated collection of my work across web development, security engineering, 
                and cloud infrastructure. Each project solved real problems with modern technology.
              </p>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Stats Bar */}
      <section className="relative py-8 border-y border-border/30 bg-bg-secondary/30 backdrop-blur-sm">
        <Container>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-text-primary mb-1">
                {projects.length}
              </div>
              <div className="text-sm text-text-secondary">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-primary mb-1">
                {projects.filter(p => p.featured).length}
              </div>
              <div className="text-sm text-text-secondary">Featured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-secondary mb-1">
                {new Set(projects.flatMap(p => p.technologies)).size}+
              </div>
              <div className="text-sm text-text-secondary">Technologies</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-30 py-4 bg-bg-primary/80 backdrop-blur-xl border-b border-border/30">
        <Container>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    isActive
                      ? "bg-gradient-to-r from-accent-primary to-accent-secondary text-white shadow-lg shadow-accent-primary/25"
                      : "bg-bg-secondary text-text-secondary hover:text-text-primary border border-border/30"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="py-16 relative">
        <Container className="relative z-10">
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <FolderGit2 className="h-16 w-16 text-text-secondary mx-auto mb-4" />
              <p className="text-text-secondary">No projects found in this category.</p>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
