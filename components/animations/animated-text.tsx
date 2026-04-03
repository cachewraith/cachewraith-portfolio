"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: "typewriter" | "fade" | "slide" | "chars";
  speed?: number;
}

export function AnimatedText({
  text,
  className = "",
  delay = 0,
  type = "chars",
  speed = 0.05,
}: AnimatedTextProps) {
  const [displayText, setDisplayText] = useState(type === "typewriter" ? "" : text);

  useEffect(() => {
    if (type !== "typewriter") return;

    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, speed * 1000);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [text, delay, type, speed]);

  if (type === "typewriter") {
    return (
      <span className={className}>
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-0.5 h-[1em] bg-current ml-0.5 align-middle"
        />
      </span>
    );
  }

  if (type === "chars") {
    const characters = text.split("");
    
    return (
      <motion.span className={className}>
        {characters.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: delay + index * speed,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  if (type === "fade") {
    return (
      <motion.span
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay }}
      >
        {text}
      </motion.span>
    );
  }

  if (type === "slide") {
    return (
      <motion.span
        className={className}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {text}
      </motion.span>
    );
  }

  return <span className={className}>{text}</span>;
}

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function TypewriterLoop({
  texts,
  className = "",
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullText = texts[currentTextIndex];

        if (!isDeleting) {
          setCurrentText(fullText.slice(0, currentText.length + 1));
          if (currentText === fullText) {
            setIsDeleting(true);
          }
        } else {
          setCurrentText(fullText.slice(0, currentText.length - 1));
          if (currentText === "") {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deletingSpeed : currentText === texts[currentTextIndex] ? pauseDuration : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block w-0.5 h-[1em] bg-accent-primary ml-1 align-middle"
      />
    </span>
  );
}
