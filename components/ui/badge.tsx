import { cn } from "@/lib/utils";
import { type HTMLAttributes, forwardRef } from "react";

type BadgeVariant =
  | "default"
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "accent";
type BadgeSize = "sm" | "md" | "lg";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { className, variant = "default", size = "md", children, ...props },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-full font-medium transition-colors";

    const variants: Record<BadgeVariant, string> = {
      default:
        "bg-bg-secondary text-text-primary border border-border",
      primary: "bg-accent-primary text-white",
      secondary: "bg-accent-secondary text-white",
      outline:
        "border border-border bg-transparent text-text-primary",
      ghost: "bg-transparent text-text-secondary hover:bg-bg-secondary",
      accent: "bg-accent-tertiary/10 text-accent-tertiary border border-accent-tertiary/20",
    };

    const sizes: Record<BadgeSize, string> = {
      sm: "px-2 py-0.5 text-xs",
      md: "px-2.5 py-0.5 text-sm",
      lg: "px-3 py-1 text-sm",
    };

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge, type BadgeProps, type BadgeVariant, type BadgeSize };
