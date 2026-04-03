"use client";

import { cn } from "@/lib/utils";
import { AlertCircle, Eye, EyeOff } from "lucide-react";
import { forwardRef, useState, type InputHTMLAttributes, type ReactNode } from "react";

type InputVariant = "default" | "filled" | "outline" | "ghost";
type InputSize = "sm" | "md" | "lg";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: InputVariant;
  inputSize?: InputSize;
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isPassword?: boolean;
  containerClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant = "default",
      inputSize = "md",
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      isPassword = false,
      containerClassName,
      disabled,
      type,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputType = isPassword ? (showPassword ? "text" : "password") : type;

    const baseStyles =
      "flex w-full rounded-xl border bg-transparent px-3 py-2 text-sm text-text-primary ring-offset-bg-primary transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

    const variants: Record<InputVariant, string> = {
      default: "border-border bg-bg-primary",
      filled: "border-transparent bg-bg-secondary",
      outline: "border-border bg-transparent",
      ghost: "border-transparent bg-transparent focus-visible:bg-bg-secondary",
    };

    const sizes: Record<InputSize, string> = {
      sm: "h-8 text-xs",
      md: "h-10 text-sm",
      lg: "h-12 text-base",
    };

    const iconSizes: Record<InputSize, string> = {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-5 w-5",
    };

    const paddingWithIcon = leftIcon ? "pl-10" : "";
    const paddingWithRightIcon = rightIcon || isPassword ? "pr-10" : "";

    return (
      <div className={cn("w-full", containerClassName)}>
        {label && (
          <label className="mb-2 block text-sm font-medium text-text-primary">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary">
              {typeof leftIcon === "string" ? (
                <span className="text-sm">{leftIcon}</span>
              ) : (
                <div className={iconSizes[inputSize]}>{leftIcon}</div>
              )}
            </div>
          )}
          <input
            ref={ref}
            type={inputType}
            className={cn(
              baseStyles,
              variants[variant],
              sizes[inputSize],
              paddingWithIcon,
              paddingWithRightIcon,
              error && "border-red-500 focus-visible:ring-red-500",
              className
            )}
            disabled={disabled}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? `${props.id}-error` : undefined}
            {...props}
          />
          {(rightIcon || isPassword) && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {isPassword ? (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-text-secondary hover:text-text-primary transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <EyeOff className={iconSizes[inputSize]} />
                  ) : (
                    <Eye className={iconSizes[inputSize]} />
                  )}
                </button>
              ) : (
                <div className={iconSizes[inputSize]}>{rightIcon}</div>
              )}
            </div>
          )}
        </div>
        {(error || helperText) && (
          <div className="mt-1.5 flex items-center gap-1.5">
            {error && <AlertCircle className="h-4 w-4 text-red-500" />}
            <p
              id={error ? `${props.id}-error` : undefined}
              className={cn(
                "text-xs",
                error ? "text-red-500" : "text-text-secondary"
              )}
            >
              {error || helperText}
            </p>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

interface TextareaProps
  extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, "size"> {
  label?: string;
  error?: string;
  helperText?: string;
  rows?: number;
  autoResize?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { className, label, error, helperText, rows = 4, autoResize, ...props },
    ref
  ) => {
    const baseStyles =
      "flex w-full rounded-xl border border-border bg-bg-primary px-3 py-2 text-sm text-text-primary ring-offset-bg-primary transition-all duration-200 placeholder:text-text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none";

    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-medium text-text-primary">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          rows={rows}
          className={cn(
            baseStyles,
            error && "border-red-500 focus-visible:ring-red-500",
            autoResize && "min-h-[100px]",
            className
          )}
          aria-invalid={error ? "true" : "false"}
          {...props}
        />
        {(error || helperText) && (
          <div className="mt-1.5 flex items-center gap-1.5">
            {error && <AlertCircle className="h-4 w-4 text-red-500" />}
            <p
              className={cn(
                "text-xs",
                error ? "text-red-500" : "text-text-secondary"
              )}
            >
              {error || helperText}
            </p>
          </div>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Input, Textarea, type InputProps, type TextareaProps };
