"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/animated-section";
import { Timeline, EducationTimeline } from "@/components/features/timeline";
import { StatsCounter } from "@/components/features/stats-counter";
import { experiences, education, stats, skills } from "@/lib/constants";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { FloatingOrbs } from "@/components/animations/floating-orbs";
import { 
  Sparkles, Code2, Terminal, Zap, Shield, 
  Briefcase, GraduationCap, Award, Heart 
} from "lucide-react";

const highlights = [
  { icon: Code2, label: "Clean Code", value: "Always" },
  { icon: Shield, label: "Security", value: "First" },
  { icon: Zap, label: "Performance", value: "Optimized" },
  { icon: Terminal, label: "Stack", value: "Modern" },
];

const skillCategories = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "devops", label: "DevOps" },
  { id: "security", label: "Security" },
];

export function AboutPageClient() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <FloatingOrbs count={6} />
      <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/5 via-transparent to-accent-secondary/5" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Profile */}
            <AnimatedSection direction="left">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-accent-primary/30 to-accent-secondary/30 rounded-3xl blur-2xl opacity-50" />
                
                <Card className="relative p-8 text-center lg:text-left">
                  <div className="flex flex-col lg:flex-row items-center gap-6">
                    <Avatar
                      alt="CacheWraith"
                      fallback="CW"
                      size="xl"
                      className="lg:w-24 lg:h-24"
                    />
                    <div className="text-center lg:text-left">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 text-accent-primary text-xs font-medium mb-2">
                        <Sparkles className="h-3 w-3" />
                        Available for hire
                      </div>
                      <h1 className="text-3xl font-bold text-text-primary mb-1">
                        CacheWraith
                      </h1>
                      <p className="text-accent-tertiary font-medium">
                        Software Engineer & Security Specialist
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-border/30">
                    <p className="text-text-secondary leading-relaxed">
                      I&apos;m a passionate software engineer with expertise in building 
                      secure, scalable web applications. With a focus on modern technologies 
                      and best practices, I deliver solutions that make a real impact.
                    </p>
                  </div>
                </Card>
              </div>
            </AnimatedSection>

            {/* Right - Quick Stats */}
            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 text-center group hover:shadow-lg hover:shadow-accent-primary/10 transition-all duration-300">
                      <div className="p-3 rounded-xl bg-accent-primary/10 w-fit mx-auto mb-3 group-hover:bg-accent-primary/20 transition-colors">
                        <item.icon className="h-6 w-6 text-accent-primary" />
                      </div>
                      <div className="text-2xl font-bold text-text-primary mb-1">
                        {item.value}
                      </div>
                      <div className="text-sm text-text-secondary">{item.label}</div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 border-y border-border/30 bg-bg-secondary/30">
        <Container>
          <StatsCounter stats={stats} />
        </Container>
      </section>

      {/* Skills Grid */}
      <section className="py-20 relative">
        <Container className="relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-secondary/10 border border-accent-secondary/20 mb-4">
                <Award className="h-4 w-4 text-accent-secondary" />
                <span className="text-sm text-accent-secondary font-medium">Expertise</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Skills & Technologies
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                My comprehensive toolkit built over years of professional experience 
                across the full development stack.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, catIndex) => {
              const categorySkills = skills.filter(s => s.category === category.id);
              return (
                <AnimatedSection key={category.id} delay={catIndex * 0.1}>
                  <Card className="p-6 h-full">
                    <h3 className="text-lg font-semibold text-text-primary mb-4 capitalize">
                      {category.label}
                    </h3>
                    <div className="space-y-3">
                      {categorySkills.map((skill) => (
                        <div key={skill.name} className="flex items-center gap-3">
                          <span className="text-sm text-text-secondary flex-1">
                            {skill.name}
                          </span>
                          <div className="flex-1 h-1.5 bg-bg-secondary rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
                              style={{ width: `${skill.proficiency}%` }}
                            />
                          </div>
                          <span className="text-xs text-text-secondary w-8">
                            {skill.proficiency}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Experience Section */}
      <section className="py-20 relative bg-bg-secondary/30">
        <Container className="relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 mb-4">
                <Briefcase className="h-4 w-4 text-accent-primary" />
                <span className="text-sm text-accent-primary font-medium">Career</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                Work Experience
              </h2>
            </div>
          </AnimatedSection>
          <Timeline experiences={experiences} />
        </Container>
      </section>

      {/* Education Section */}
      <section className="py-20 relative">
        <Container className="relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-tertiary/10 border border-accent-tertiary/20 mb-4">
                <GraduationCap className="h-4 w-4 text-accent-tertiary" />
                <span className="text-sm text-accent-tertiary font-medium">Education</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                Academic Background
              </h2>
            </div>
          </AnimatedSection>
          <EducationTimeline education={education} />
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20 relative bg-gradient-to-b from-transparent to-bg-secondary/50">
        <Container className="relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-secondary/10 border border-accent-secondary/20 mb-4">
                <Heart className="h-4 w-4 text-accent-secondary" />
                <span className="text-sm text-accent-secondary font-medium">Philosophy</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                What Drives Me
              </h2>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Security First",
                description: "Every line of code is written with security in mind. OWASP compliance isn't optional—it's built-in from day one."
              },
              {
                title: "Performance Matters",
                description: "Speed isn't just about load times—it's about user experience. I optimize for 90+ Lighthouse scores on every project."
              },
              {
                title: "Clean Architecture",
                description: "Code should be readable, maintainable, and scalable. I believe in writing code that future developers will thank me for."
              }
            ].map((value) => (
              <StaggerItem key={value.title}>
                <Card className="p-8 h-full text-center hover:shadow-xl hover:shadow-accent-primary/10 transition-all duration-300 group">
                  <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-accent-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </div>
  );
}
