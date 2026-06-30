"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const inputVariants = cva(
  "w-full rounded-md border bg-white text-text outline-none transition-colors placeholder:text-text-muted disabled:pointer-events-none disabled:opacity-40 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
  {
    variants: {
      size: {
        sm: "text-xs px-3 py-1.5 h-8",
        md: "text-sm px-3.5 py-2 h-10",
        lg: "text-base px-4 py-2.5 h-12",
      },
      state: {
        default: "border-border focus:border-primary",
        error: "border-error focus:border-error",
      },
    },
    defaultVariants: {
      size: "md",
      state: "default",
    },
  },
);

interface InputFieldProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, size, state, className, id, ...props }, ref) => {
    const inputId = id ?? props.name;
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-text">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            inputVariants({ size, state: error ? "error" : state }),
            className,
          )}
          {...props}
        />
        {error && <p className="text-xs text-error">{error}</p>}
      </div>
    );
  },
);

InputField.displayName = "InputField";

export default InputField;
