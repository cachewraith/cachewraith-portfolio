"use client";

import { useState, useEffect } from "react";

interface ScrollPosition {
  x: number;
  y: number;
  scrollProgress: number;
}

/**
 * Hook to track scroll position and progress
 * @returns Current scroll position and progress (0-1)
 */
export function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    scrollProgress: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
      
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
        scrollProgress: Math.min(Math.max(progress, 0), 1),
      });
    };

    // Initial calculation
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollPosition;
}
