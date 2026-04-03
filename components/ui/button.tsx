"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { type ButtonHTMLAttributes, type ReactNode, forwardRef } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "outline"
  | "gradient"
  | "destructive";
type ButtonSize = "sm" | "md" | "lg" | "icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants: Record<ButtonVariant, string> = {
      primary:
        "bg-accent-primary text-white hover:bg-accent-primary/90 active:scale-[0.98]",
      secondary:
        "bg-bg-secondary text-text-primary hover:bg-bg-secondary/80 active:scale-[0.98]",
      ghost:
        "text-text-primary hover:bg-bg-secondary/50 active:scale-[0.98]",
      outline:
        "border border-border bg-transparent text-text-primary hover:bg-bg-secondary/50 active:scale-[0.98]",
      gradient:
        "gradient-primary text-white hover:opacity-90 active:scale-[0.98] shadow-lg shadow-accent-primary/25",
      destructive: "bg-red-500 text-white hover:bg-red-600 active:scale-[0.98]",
    };

    const sizes: Record<ButtonSize, string> = {
      sm: "h-8 px-3 text-sm rounded-lg",
      md: "h-10 px-4 py-2 rounded-xl",
      lg: "h-12 px-6 text-lg rounded-xl",
      icon: "h-10 w-10 rounded-xl",
    };

    const MotionButton = motion.button as React.ForwardRefExoticComponent<
      React.ButtonHTMLAttributes<HTMLButtonElement> &
      React.RefAttributes<HTMLButtonElement> &
      { whileHover?: object; whileTap?: object }
    >;

    return (
      <MotionButton
        ref={ref}
        whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          isLoading && "cursor-wait",
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
        {!isLoading && leftIcon}
        {children}
        {!isLoading && rightIcon}
      </MotionButton>
    );
  }
);

Button.displayName = "Button";

export { Button, type ButtonProps, type ButtonVariant, type ButtonSize };
