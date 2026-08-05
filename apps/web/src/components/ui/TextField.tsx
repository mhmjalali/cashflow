"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { AlertCircle, CheckCircle2, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { forwardRef, useId } from "react";

const fieldVariants = cva(
  [
    "flex w-full items-center gap-2 rounded-lg border bg-white transition-colors",
    "focus-within:outline-none focus-within:ring-4",
    "has-disabled:cursor-not-allowed has-disabled:bg-background has-disabled:opacity-60",
  ],
  {
    variants: {
      state: {
        default:
          "border-border focus-within:border-primary focus-within:ring-primary/15",
        success:
          "border-success focus-within:border-success focus-within:ring-success/15",
        error:
          "border-error focus-within:border-error focus-within:ring-error/15",
        warning:
          "border-warning focus-within:border-warning focus-within:ring-warning/15",
      },
      fieldSize: {
        sm: "h-9 px-2.5 text-sm",
        md: "h-10 px-3 text-sm",
        lg: "h-11 px-3.5 text-base",
      },
    },
    defaultVariants: {
      state: "default",
      fieldSize: "md",
    },
  },
);

export interface TextFieldProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof fieldVariants> {
  label?: string;
  helperText?: string;
  errorText?: string;
  successText?: string;
  warningText?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  numeric?: boolean;
  containerClassName?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      helperText,
      errorText,
      successText,
      warningText,
      leadingIcon,
      trailingIcon,
      numeric,
      state,
      fieldSize,
      className,
      containerClassName,
      id,
      required,
      disabled,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const helperId = `${inputId}-helper`;

    const resolvedState =
      state ??
      (errorText
        ? "error"
        : warningText
          ? "warning"
          : successText
            ? "success"
            : "default");

    const message = errorText ?? warningText ?? successText ?? helperText;
    const messageColor =
      resolvedState === "error"
        ? "text-error"
        : resolvedState === "warning"
          ? "text-warning"
          : resolvedState === "success"
            ? "text-success"
            : "text-text-muted";

    const MessageIcon =
      resolvedState === "error"
        ? AlertCircle
        : resolvedState === "warning"
          ? AlertTriangle
          : resolvedState === "success"
            ? CheckCircle2
            : null;

    return (
      <div className={cn("flex flex-col gap-1.5", containerClassName)}>
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-text">
            {label}
            {required && <span className="ml-0.5 text-error">*</span>}
          </label>
        )}

        <div className={cn(fieldVariants({ state: resolvedState, fieldSize }))}>
          {leadingIcon && (
            <span className="flex shrink-0 items-center text-text-muted [&_svg]:h-4 [&_svg]:w-4">
              {leadingIcon}
            </span>
          )}

          <input
            id={inputId}
            ref={ref}
            disabled={disabled}
            required={required}
            aria-invalid={resolvedState === "error"}
            aria-describedby={message ? helperId : undefined}
            className={cn(
              "w-full min-w-0 bg-transparent text-text placeholder:text-text-muted",
              "focus:outline-none disabled:cursor-not-allowed",
              numeric && "tabular-nums",
              className,
            )}
            {...props}
          />

          {trailingIcon && (
            <span className="flex shrink-0 items-center text-text-muted [&_svg]:h-4 [&_svg]:w-4">
              {trailingIcon}
            </span>
          )}
        </div>

        {message && (
          <p
            id={helperId}
            className={cn("flex items-center gap-1 text-xs", messageColor)}
          >
            {MessageIcon && <MessageIcon className="h-3.5 w-3.5 shrink-0" />}
            {message}
          </p>
        )}
      </div>
    );
  },
);

TextField.displayName = "TextField";
