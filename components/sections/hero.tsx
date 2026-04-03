"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FloatingOrbs } from "@/components/animations/floating-orbs";
import { SocialLinks } from "@/components/features/social-links";
import { ArrowDown, ChevronRight, Mail, Terminal, Code2, Shield, Zap } from "lucide-react";

const techStack = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#ffffff" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#339933" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "Docker", color: "#2496ED" },
];

const codeSnippet = `const developer = {
  name: "CacheWraith",
  role: "Full Stack Engineer",
  skills: ["React", "Node", "Security"],
  passion: "Building secure apps",
  available: true
};`;

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Effects */}
      <FloatingOrbs count={6} />
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-secondary/5" />
      
      <Container className="relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Badge variant="accent" size="lg" className="px-4 py-2">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
                </span>
                Available for Hire
              </Badge>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            >
              <span className="text-text-primary">Hi, I&apos;m </span>
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                CacheWraith
              </span>
            </motion.h1>

            {/* Role with Icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <Terminal className="h-5 w-5 text-accent-tertiary" />
              <span className="text-lg md:text-xl text-accent-tertiary font-medium">
                Software Engineer & Security Specialist
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-text-secondary text-lg max-w-xl mb-8 leading-relaxed"
            >
              I architect secure, high-performance web applications. From frontend 
              animations to backend infrastructure, I deliver production-ready solutions 
              that scale.
            </motion.p>

            {/* Tech Stack Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8"
            >
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-bg-secondary border border-border/50 text-text-secondary hover:border-accent-primary/50 hover:text-accent-primary transition-all duration-300"
                >
                  {tech.name}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Button
                variant="gradient"
                size="lg"
                rightIcon={<ChevronRight className="h-5 w-5" />}
                onClick={() => window.location.href = "/work"}
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                leftIcon={<Mail className="h-5 w-5" />}
                onClick={() => window.location.href = "/contact"}
              >
                Let&apos;s Talk
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <SocialLinks />
            </motion.div>
          </div>

          {/* Right Content - Code Window */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent-primary/30 to-accent-secondary/30 rounded-2xl blur-2xl opacity-50" />
            
            {/* Code Window */}
            <div className="relative bg-card-bg rounded-xl border border-border/50 shadow-2xl overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-bg-secondary/50 border-b border-border/30">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-text-secondary">developer.ts</span>
                </div>
                <div className="w-16" />
              </div>
              
              {/* Code Content */}
              <div className="p-6 font-mono text-sm leading-relaxed">
                <pre className="text-text-secondary">
                  <code>{codeSnippet}</code>
                </pre>
              </div>
              
              {/* Status Bar */}
              <div className="flex items-center gap-4 px-4 py-2 bg-bg-secondary/30 border-t border-border/30 text-xs text-text-secondary">
                <span className="flex items-center gap-1">
                  <Code2 className="h-3 w-3" /> TypeScript
                </span>
                <span className="flex items-center gap-1">
                  <Shield className="h-3 w-3" /> OWASP Compliant
                </span>
                <span className="flex items-center gap-1">
                  <Zap className="h-3 w-3" /> 99% Performance
                </span>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-card-bg border border-border/50 rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-500/10">
                  <Zap className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary">Performance Score</p>
                  <p className="text-lg font-bold text-text-primary">98/100</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -top-4 -right-4 bg-card-bg border border-border/50 rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent-primary/10">
                  <Shield className="h-5 w-5 text-accent-primary" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary">Security Grade</p>
                  <p className="text-lg font-bold text-text-primary">A+</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-text-secondary cursor-pointer hover:text-accent-primary transition-colors"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
