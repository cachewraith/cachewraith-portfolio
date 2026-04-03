"use client";

import { useState, useEffect } from "react";

type MediaQuery = "sm" | "md" | "lg" | "xl" | "2xl" | string;

const breakpointMap: Record<string, string> = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  "2xl": "(min-width: 1536px)",
};

/**
 * Hook to check if a media query matches
 * @param query - Media query string or predefined breakpoint name
 * @returns Boolean indicating if the media query matches
 */
export function useMediaQuery(query: MediaQuery): boolean {
  const mediaQuery = breakpointMap[query] || query;
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(mediaQuery);
    
    const updateMatch = () => setMatches(media.matches);
    updateMatch();

    media.addEventListener("change", updateMatch);
    return () => media.removeEventListener("change", updateMatch);
  }, [mediaQuery]);

  return matches;
}

/**
 * Hook to check if device is mobile
 * @returns Boolean indicating if viewport is mobile size
 */
export function useIsMobile(): boolean {
  return !useMediaQuery("md");
}

/**
 * Hook to check if device is tablet or larger
 * @returns Boolean indicating if viewport is tablet size or larger
 */
export function useIsTablet(): boolean {
  return useMediaQuery("md");
}

/**
 * Hook to check if device is desktop
 * @returns Boolean indicating if viewport is desktop size
 */
export function useIsDesktop(): boolean {
  return useMediaQuery("lg");
}
