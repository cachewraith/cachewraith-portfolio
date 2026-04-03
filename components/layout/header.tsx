"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/features/theme-toggle";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "py-3"
          : "py-5"
      )}
    >
      {/* Animated gradient background border */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className={cn(
            "absolute inset-x-4 md:inset-x-8 lg:inset-x-12 rounded-2xl transition-all duration-500",
            isScrolled 
              ? "bg-bg-primary/80 backdrop-blur-xl shadow-2xl shadow-accent-primary/5 border border-border/50"
              : "bg-transparent"
          )}
        >
          {/* Glow effect */}
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-accent-primary/20 via-accent-secondary/20 to-accent-tertiary/20 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
        </div>
      </div>

      <Container className="relative z-10">
        <nav className="flex items-center justify-between px-4 py-2">
          {/* Logo with glow */}
          <Link
            href="/"
            className="group relative flex items-center gap-2 text-xl font-bold"
          >
            {/* Logo glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-accent-primary/30 to-accent-secondary/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Sparkles className="h-6 w-6 text-accent-primary" />
            </motion.div>
            
            <span className="relative bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary bg-clip-text text-transparent">
              CacheWraith
            </span>
          </Link>

          {/* Desktop Navigation - Pill style */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-bg-secondary/50 border border-border/30 backdrop-blur-sm">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-4 py-1.5 text-sm font-medium transition-all duration-300 rounded-full"
                  >
                    {/* Active indicator background */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full shadow-lg shadow-accent-primary/25"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    
                    <span className={cn(
                      "relative z-10 transition-colors duration-300",
                      isActive ? "text-white" : "text-text-secondary hover:text-text-primary"
                    )}>
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Hire Me Badge */}
            <a 
              href="/contact"
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full shadow-lg shadow-accent-primary/25 hover:shadow-accent-primary/40 hover:scale-105 transition-all duration-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Hire Me
            </a>

            <div className="p-2 rounded-full bg-bg-secondary/50 border border-border/30 backdrop-blur-sm">
              <ThemeToggle />
            </div>
            
            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-bg-secondary/50 border border-border/30 text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-all duration-300"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </motion.div>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden absolute top-full left-4 right-4 mt-2"
          >
            <div className="bg-bg-primary/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl shadow-accent-primary/10 overflow-hidden">
              <nav className="flex flex-col p-2">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300",
                          isActive
                            ? "bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 text-accent-primary font-medium"
                            : "text-text-secondary hover:text-text-primary hover:bg-bg-secondary"
                        )}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="mobileActiveIndicator"
                            className="w-1.5 h-1.5 rounded-full bg-accent-primary"
                          />
                        )}
                        <span className={isActive ? "ml-0" : "ml-3.5"}>{link.label}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
              
              {/* Mobile CTA */}
              <div className="p-4 border-t border-border/30">
                <a
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium text-white bg-gradient-to-r from-accent-primary to-accent-secondary rounded-xl shadow-lg shadow-accent-primary/25"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
