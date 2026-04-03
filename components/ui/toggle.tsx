"use client";

import { cn } from "@/lib/utils";
import { forwardRef, useState, type ButtonHTMLAttributes } from "react";

interface ToggleProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: "sm" | "md" | "lg";
  label?: string;
}

const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      className,
      defaultChecked = false,
      checked: controlledChecked,
      onChange,
      size = "md",
      label,
      disabled,
      ...props
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const isControlled = controlledChecked !== undefined;
    const isChecked = isControlled ? controlledChecked : internalChecked;

    const handleClick = () => {
      if (disabled) return;
      const newValue = !isChecked;
      if (!isControlled) {
        setInternalChecked(newValue);
      }
      onChange?.(newValue);
    };

    const sizes = {
      sm: {
        track: "w-9 h-5",
        thumb: "w-3.5 h-3.5",
        translate: "translate-x-4.5",
      },
      md: {
        track: "w-11 h-6",
        thumb: "w-5 h-5",
        translate: "translate-x-5",
      },
      lg: {
        track: "w-14 h-7",
        thumb: "w-6 h-6",
        translate: "translate-x-7",
      },
    };

    const currentSize = sizes[size];

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={isChecked}
        onClick={handleClick}
        disabled={disabled}
        className={cn(
          "relative inline-flex items-center rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2",
          currentSize.track,
          isChecked ? "bg-accent-primary" : "bg-bg-secondary",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
        {...props}
      >
        <span
          className={cn(
            "inline-block rounded-full bg-white shadow-sm transition-transform duration-200",
            currentSize.thumb,
            isChecked ? currentSize.translate : "translate-x-0.5"
          )}
        />
        {label && (
          <span className="sr-only">{label}</span>
        )}
      </button>
    );
  }
);

Toggle.displayName = "Toggle";

export { Toggle, type ToggleProps };
