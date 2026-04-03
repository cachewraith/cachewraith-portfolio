"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Orb {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

interface FloatingOrbsProps {
  count?: number;
  className?: string;
}

export function FloatingOrbs({ count = 6, className }: FloatingOrbsProps) {
  const [orbs, setOrbs] = useState<Orb[]>([]);

  useEffect(() => {
    const colors = [
      "bg-accent-primary/20",
      "bg-accent-secondary/20",
      "bg-accent-tertiary/20",
      "bg-purple-500/20",
      "bg-pink-500/20",
    ];

    const newOrbs: Orb[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 200 + 100,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setOrbs(newOrbs);
  }, [count]);

  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}>
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute rounded-full blur-3xl ${orb.color}`}
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
          }}
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
