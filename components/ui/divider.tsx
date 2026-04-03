import { cn } from "@/lib/utils";
import { type HTMLAttributes, forwardRef } from "react";

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  text?: string;
  variant?: "default" | "gradient" | "dashed";
}

const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      className,
      orientation = "horizontal",
      text,
      variant = "default",
      ...props
    },
    ref
  ) => {
    const baseStyles = {
      horizontal: "w-full h-px",
      vertical: "h-full w-px",
    };

    const variants = {
      default: "bg-border",
      gradient: "bg-gradient-to-r from-transparent via-accent-primary to-transparent",
      dashed: "border-t border-dashed border-border bg-transparent",
    };

    if (text) {
      return (
        <div
          ref={ref}
          className={cn(
            "flex items-center gap-4",
            orientation === "vertical" && "flex-col",
            className
          )}
          {...props}
          role="separator"
        >
          <div className={cn("flex-1", baseStyles.horizontal, variants[variant])} />
          <span className="text-sm text-text-secondary whitespace-nowrap">
            {text}
          </span>
          <div className={cn("flex-1", baseStyles.horizontal, variants[variant])} />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(baseStyles[orientation], variants[variant], className)}
        {...props}
        role="separator"
        aria-orientation={orientation}
      />
    );
  }
);

Divider.displayName = "Divider";

export { Divider, type DividerProps };
