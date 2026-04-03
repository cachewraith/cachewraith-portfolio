"use client";

import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/animated-section";
import { Avatar } from "@/components/ui/avatar";
import { stats, experiences } from "@/lib/constants";
import { StatsCounter } from "@/components/features/stats-counter";
import { Code, Shield, Zap, Coffee, Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

const quickFacts = [
  {
    icon: Code,
    label: "Clean Code",
    description: "Maintainable, well-tested code",
  },
  {
    icon: Shield,
    label: "Security First",
    description: "OWASP compliance always",
  },
  {
    icon: Zap,
    label: "Performance",
    description: "90+ Lighthouse scores",
  },
  {
    icon: Coffee,
    label: "Dedicated",
    description: "Fueled by passion",
  },
];

export function About() {
  return (
    <section className="py-24 bg-bg-secondary/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <Container className="relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-accent-primary text-sm font-medium uppercase tracking-wider">Get To Know Me</span>
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mt-2 mb-4">
              About Me
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              A passionate software engineer focused on building secure, scalable, 
              and exceptional digital experiences.
            </p>
          </div>
        </AnimatedSection>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          {/* Left - Profile Card */}
          <div className="lg:col-span-4">
            <AnimatedSection direction="left">
              <Card className="p-8 text-center h-full relative overflow-hidden">
                {/* Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-b from-accent-primary/30 to-transparent rounded-full blur-2xl" />
                
                <div className="relative">
                  <Avatar
                    alt="CacheWraith"
                    fallback="CW"
                    size="xl"
                    className="mx-auto mb-6"
                  />
                  <h3 className="text-2xl font-bold text-text-primary mb-1">
                    CacheWraith
                  </h3>
                  <p className="text-accent-primary font-medium mb-4">
                    Full Stack Engineer
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    <span className="px-3 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary">React</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-accent-secondary/10 text-accent-secondary">Node.js</span>
                    <span className="px-3 py-1 text-xs rounded-full bg-accent-tertiary/10 text-accent-tertiary">Security</span>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Building secure digital experiences that make a difference. 
                    Based in the cloud, available worldwide.
                  </p>
                </div>
              </Card>
            </AnimatedSection>
          </div>

          {/* Middle - Quick Facts */}
          <div className="lg:col-span-4">
            <StaggerContainer className="grid grid-cols-2 gap-4 h-full">
              {quickFacts.map((fact) => (
                <StaggerItem key={fact.label}>
                  <Card className="p-5 h-full hover:shadow-lg hover:shadow-accent-primary/10 transition-all duration-300 group">
                    <div className="p-2.5 rounded-xl bg-accent-primary/10 w-fit mb-3 group-hover:bg-accent-primary/20 transition-colors">
                      <fact.icon className="h-5 w-5 text-accent-primary" />
                    </div>
                    <h4 className="font-semibold text-text-primary text-sm mb-1">
                      {fact.label}
                    </h4>
                    <p className="text-xs text-text-secondary">{fact.description}</p>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right - Current Experience */}
          <div className="lg:col-span-4">
            <AnimatedSection direction="right">
              <Card className="p-6 h-full">
                <h4 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-accent-primary" />
                  Current Role
                </h4>
                {experiences.filter(e => e.endDate === "present").map((exp) => (
                  <div key={exp.id} className="space-y-3">
                    <div>
                      <h5 className="font-semibold text-text-primary">{exp.role}</h5>
                      <p className="text-accent-primary">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-text-secondary">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.startDate} - Present
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.slice(0, 5).map((tech) => (
                        <span key={tech} className="px-2 py-0.5 text-xs rounded bg-bg-secondary text-text-secondary">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
                <button 
                  onClick={() => window.location.href = "/about"}
                  className="mt-4 flex items-center gap-1 text-sm text-accent-primary hover:gap-2 transition-all"
                >
                  View full timeline <ChevronRight className="h-4 w-4" />
                </button>
              </Card>
            </AnimatedSection>
          </div>
        </div>

        {/* Stats */}
        <AnimatedSection delay={0.3}>
          <StatsCounter stats={stats} />
        </AnimatedSection>
      </Container>
    </section>
  );
}
