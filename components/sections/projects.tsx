"use client";

import { Container } from "@/components/ui/container";
import { AnimatedSection } from "@/components/animations/animated-section";
import { ProjectCard } from "@/components/features/project-card";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/constants";
import { ArrowRight, FolderGit2, Layers } from "lucide-react";

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-accent-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-accent-secondary/5 rounded-full blur-3xl" />
      
      <Container className="relative z-10">
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              {/* Section Label */}
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-accent-primary/10">
                  <FolderGit2 className="h-5 w-5 text-accent-primary" />
                </div>
                <span className="text-accent-primary text-sm font-medium uppercase tracking-wider">
                  Portfolio
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
                Featured Projects
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                A curated selection of my best work across web development, 
                security engineering, and cloud infrastructure. Each project 
                represents a unique challenge solved with modern technologies.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-bg-secondary border border-border/30">
                <Layers className="h-4 w-4 text-accent-tertiary" />
                <span className="text-sm text-text-secondary">{projects.length}+ Projects</span>
              </div>
              
              <Button 
                variant="gradient" 
                rightIcon={<ArrowRight className="h-4 w-4" />}
                onClick={() => window.location.href = "/work"}
              >
                View All
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Grid with staggered layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <AnimatedSection 
              key={project.id} 
              delay={index * 0.15}
              className={index === 0 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <ProjectCard project={project} featured={index === 0} />
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.5}>
          <div className="mt-16 text-center">
            <p className="text-text-secondary mb-4">
              Want to see more of my work?
            </p>
            <Button
              variant="outline"
              size="lg"
              rightIcon={<ArrowRight className="h-4 w-4" />}
              onClick={() => window.location.href = "/work"}
            >
              Browse All Projects
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
