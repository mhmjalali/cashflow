"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "motion/react";

const buttonVariants = cva(
  "flex items-center justify-center gap-2 font-medium rounded-md cursor-pointer transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        filled: "",
        outlined: "border bg-transparent",
        ghost: "bg-transparent",
      },
      size: {
        sm: "text-xs px-3 py-1.5 h-8",
        md: "text-sm px-4 py-2 h-10",
        lg: "text-base px-6 py-2.5 h-12",
      },
      color: {
        primary: "",
        secondary: "",
        success: "",
        error: "",
        warning: "",
        info: "",
      },
    },
    compoundVariants: [
      // primary
      {
        variant: "filled",
        color: "primary",
        class: "bg-primary hover:bg-primary/90 active:bg-primary/95 text-white",
      },
      {
        variant: "outlined",
        color: "primary",
        class:
          "border-primary text-primary hover:bg-primary/10 active:bg-primary-hover/20",
      },
      {
        variant: "ghost",
        color: "primary",
        class: "text-primary hover:bg-primary/10 active:bg-primary-hover/20",
      },

      // secondary
      {
        variant: "filled",
        color: "secondary",
        class:
          "bg-secondary hover:bg-secondary/90 active:bg-secondary/95 text-white",
      },
      {
        variant: "outlined",
        color: "secondary",
        class:
          "border-secondary text-secondary hover:bg-secondary/10 active:bg-secondary-hover/20",
      },
      {
        variant: "ghost",
        color: "secondary",
        class:
          "text-secondary hover:bg-secondary/10 active:bg-secondary-hover/20",
      },

      // error
      {
        variant: "filled",
        color: "error",
        class: "bg-error hover:bg-error/90 active:bg-error/95 text-white",
      },
      {
        variant: "outlined",
        color: "error",
        class:
          "border-error text-error hover:bg-error/10 active:bg-error-hover/20",
      },
      {
        variant: "ghost",
        color: "error",
        class: "text-error hover:bg-error/10 active:bg-error-hover/20",
      },

      // warning
      {
        variant: "filled",
        color: "warning",
        class: "bg-warning hover:bg-warning/90 active:bg-warning/95 text-white",
      },
      {
        variant: "outlined",
        color: "warning",
        class:
          "border-warning text-warning hover:bg-warning/10 active:bg-warning-hover/20",
      },
      {
        variant: "ghost",
        color: "warning",
        class: "text-warning hover:bg-warning/10 active:bg-warning-hover/20",
      },

      // success
      {
        variant: "filled",
        color: "success",
        class: "bg-success hover:bg-success/90 active:bg-success/95 text-white",
      },
      {
        variant: "outlined",
        color: "success",
        class:
          "border-success text-success hover:bg-success/10 active:bg-success-hover/20",
      },
      {
        variant: "ghost",
        color: "success",
        class: "text-success hover:bg-success/10 active:bg-success-hover/20",
      },
    ],
    defaultVariants: {
      variant: "filled",
      size: "md",
      color: "primary",
    },
  },
);

interface ButtonProps
  extends
    Omit<HTMLMotionProps<"button">, "size" | "color">,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  loadingText?: string;
  children?: React.ReactNode;
}

function ArcSpinner() {
  return (
    <motion.span
      className="w-4 h-4 rounded-full shrink-0"
      style={{
        background: "conic-gradient(currentColor 270deg, transparent 270deg)",
        WebkitMask:
          "radial-gradient(farthest-side, transparent calc(100% - 2.5px), #000 calc(100% - 2.5px))",
        mask: "radial-gradient(farthest-side, transparent calc(100% - 2.5px), #000 calc(100% - 2.5px))",
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 0.75, repeat: Infinity, ease: "linear" }}
    />
  );
}

const Button = ({
  variant,
  size,
  color,
  loading = false,
  loadingText = "درحال بارگزاری...",
  disabled,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
      disabled={disabled || loading}
      className={cn(buttonVariants({ variant, size, color }), className)}
      {...props}
    >
      <motion.span
        className={cn("items-center gap-2", loading ? "hidden" : "flex")}
        animate={loading ? { y: "110%", opacity: 0 } : { y: "0%", opacity: 1 }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      >
        {children}
      </motion.span>
      <motion.span
        className={cn(
          "items-center text-nowrap justify-center gap-2",
          loading ? "flex" : "hidden",
        )}
        initial={{ y: "-110%", opacity: 0 }}
        animate={loading ? { y: "0%", opacity: 1 } : { y: "-110%", opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      >
        <ArcSpinner />
        {loadingText}
      </motion.span>
    </motion.button>
  );
};

export default Button;
