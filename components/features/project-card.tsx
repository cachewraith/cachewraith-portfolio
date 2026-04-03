"use client";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  className?: string;
  featured?: boolean;
}

export function ProjectCard({ project, className, featured = false }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={className}
    >
      <Card
        variant="default"
        hover={false}
        className={cn(
          "group h-full flex flex-col overflow-hidden border-border/50",
          featured && "md:col-span-2"
        )}
      >
        {/* Image Container */}
        <div className="relative aspect-video overflow-hidden">
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-transparent z-10 opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
          
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
          />
          
          {/* Top Tags */}
          <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
            {project.tags.slice(0, 2).map((tag) => (
              <span 
                key={tag} 
                className="px-2.5 py-1 text-xs font-medium rounded-full bg-bg-primary/80 backdrop-blur-sm text-text-primary border border-border/30"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Arrow indicator on hover */}
          <div className="absolute top-4 right-4 z-20 p-2 rounded-full bg-accent-primary/90 text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight className="h-4 w-4" />
          </div>
          
          {/* Action buttons overlay */}
          <div className="absolute inset-0 z-20 flex items-end justify-center pb-6 gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
            {project.liveUrl && (
              <Button
                size="sm"
                variant="gradient"
                leftIcon={<ExternalLink className="h-3.5 w-3.5" />}
                onClick={() => window.open(project.liveUrl, "_blank")}
                className="shadow-lg"
              >
                Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button
                size="sm"
                variant="outline"
                leftIcon={<Github className="h-3.5 w-3.5" />}
                onClick={() => window.open(project.githubUrl, "_blank")}
                className="bg-bg-primary/80 backdrop-blur-sm"
              >
                View Code
              </Button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent-primary transition-colors line-clamp-1">
            {project.title}
          </h3>

          <p className="text-text-secondary text-sm flex-1 mb-4 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/30">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-0.5 rounded-md bg-bg-secondary/50 text-text-secondary hover:bg-accent-primary/10 hover:text-accent-primary transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-xs px-2 py-0.5 rounded-md text-text-secondary">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
