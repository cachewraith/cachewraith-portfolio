"use client";

import { Container } from "@/components/ui/container";
import { socialLinks } from "@/lib/constants";
import { Github, Linkedin, Twitter, Mail, Sparkles, Heart } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  email: Mail,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50 bg-bg-secondary/50 backdrop-blur-sm">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent" />
      
      <Container className="py-16">
        <div className="flex flex-col items-center gap-10">
          {/* Logo with glow */}
          <Link href="/" className="group relative flex items-center gap-2">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Sparkles className="h-6 w-6 text-accent-primary" />
            </motion.div>
            
            <span className="relative text-2xl font-bold bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary bg-clip-text text-transparent">
              CacheWraith
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Work", href: "/work" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-accent-primary transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Social Links - Pill style */}
          <div className="flex items-center gap-2 p-2 rounded-full bg-bg-primary/50 border border-border/30">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full text-text-secondary hover:text-accent-primary hover:bg-accent-primary/10 transition-all duration-300"
                  aria-label={link.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-text-secondary">
            <span>&copy; {currentYear} CacheWraith. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="h-3 w-3 text-accent-secondary fill-accent-secondary" /> using{" "}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-primary hover:underline"
              >
                Next.js
              </a>
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
