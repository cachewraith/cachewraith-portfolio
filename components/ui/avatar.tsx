"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt: string;
  fallback?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "default" | "circle" | "square" | "rounded";
  bordered?: boolean;
  status?: "online" | "offline" | "away" | "busy";
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      className,
      src,
      alt,
      fallback,
      size = "md",
      variant = "circle",
      bordered = false,
      status,
      ...props
    },
    ref
  ) => {
    const sizes = {
      xs: "w-6 h-6 text-xs",
      sm: "w-8 h-8 text-sm",
      md: "w-12 h-12 text-base",
      lg: "w-16 h-16 text-lg",
      xl: "w-24 h-24 text-xl",
    };

    const variants = {
      default: "rounded-lg",
      circle: "rounded-full",
      square: "rounded-none",
      rounded: "rounded-xl",
    };

    const getInitials = (name: string) => {
      return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent-primary to-accent-secondary font-medium text-white",
          sizes[size],
          variants[variant],
          bordered && "ring-2 ring-white dark:ring-gray-800",
          className
        )}
        {...props}
      >
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
          />
        ) : (
          <span>{fallback ? getInitials(fallback) : getInitials(alt)}</span>
        )}
        {status && (
          <span
            className={cn(
              "absolute bottom-0 right-0 block rounded-full ring-2 ring-white dark:ring-gray-800",
              size === "xs" || size === "sm" ? "w-2 h-2" : "w-3 h-3",
              status === "online" && "bg-green-500",
              status === "offline" && "bg-gray-400",
              status === "away" && "bg-yellow-500",
              status === "busy" && "bg-red-500"
            )}
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";

export { Avatar, type AvatarProps };
