"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark" | "system";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={cn("w-9 h-9", className)} />
    );
  }

  const currentTheme = theme as Theme;
  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    if (currentTheme === "system") {
      setTheme(isDark ? "light" : "dark");
    } else {
      setTheme(currentTheme === "light" ? "dark" : "light");
    }
  };

  const cycleTheme = () => {
    const themes: Theme[] = ["light", "dark", "system"];
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <motion.button
        type="button"
        onClick={toggleTheme}
        className="relative p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={`Current theme: ${currentTheme}. Click to toggle.`}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ y: -20, opacity: 0, rotate: -90 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 20, opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <Moon className="h-5 w-5" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ y: -20, opacity: 0, rotate: -90 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 20, opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <Sun className="h-5 w-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Theme indicator */}
      <motion.button
        type="button"
        onClick={cycleTheme}
        className="hidden sm:flex p-1.5 rounded-md text-xs font-medium text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label={`Switch to next theme. Current: ${currentTheme}`}
      >
        {currentTheme === "system" && <Monitor className="h-3.5 w-3.5" />}
        <span className="sr-only">{currentTheme}</span>
      </motion.button>
    </div>
  );
}
