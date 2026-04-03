import { cn } from "@/lib/utils";
import { type HTMLAttributes, forwardRef } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
  padding?: "none" | "sm" | "md" | "lg";
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    { className, size = "lg", padding = "md", children, ...props },
    ref
  ) => {
    const sizes = {
      sm: "max-w-3xl",
      md: "max-w-4xl",
      lg: "max-w-6xl",
      xl: "max-w-7xl",
      full: "max-w-full",
    };

    const paddings = {
      none: "",
      sm: "px-4 sm:px-6",
      md: "px-4 sm:px-6 lg:px-8",
      lg: "px-6 sm:px-8 lg:px-12",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full",
          sizes[size],
          paddings[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export { Container, type ContainerProps };
