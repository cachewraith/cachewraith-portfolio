"use client";

import { motion } from "framer-motion";

interface GradientMeshProps {
  className?: string;
}

export function GradientMesh({ className }: GradientMeshProps) {
  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.15) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(236, 72, 153, 0.15) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(6, 182, 212, 0.15) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(139, 92, 246, 0.15) 0px, transparent 50%)
          `,
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
