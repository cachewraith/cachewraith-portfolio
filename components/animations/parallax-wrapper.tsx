"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface ParallaxWrapperProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function ParallaxWrapper({
  children,
  className,
  speed = 0.5,
  direction = "up",
}: ParallaxWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const directions = {
    up: { y: useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]), x: 0 },
    down: { y: useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]), x: 0 },
    left: { x: useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]), y: 0 },
    right: { x: useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]), y: 0 },
  };

  const transform = directions[direction];

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{
          x: transform.x,
          y: transform.y,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
