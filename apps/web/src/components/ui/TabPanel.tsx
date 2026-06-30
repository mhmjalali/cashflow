"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "motion/react";
import { useId } from "react";

const tabsVariants = cva(
  "relative flex items-center rounded-xl bg-muted/50 p-1 border border-border/60 backdrop-blur-sm",
  {
    variants: {
      size: {
        sm: "h-9",
        md: "h-11",
        lg: "h-13",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const tabButtonVariants = cva(
  `
    relative
    flex
    h-full
    flex-1
    items-center
    justify-center
    rounded-lg
    px-5
    text-sm
    font-medium
    transition-colors
    duration-200
    cursor-pointer
    select-none
    outline-none
    disabled:pointer-events-none
    disabled:opacity-50
  `,
);

interface TabItem {
  value: string;
  label: string;
}

interface TabsProps extends VariantProps<typeof tabsVariants> {
  items: TabItem[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const Tabs = ({ items, value, onChange, size, className }: TabsProps) => {
  const layoutId = useId();

  return (
    <div className={cn(tabsVariants({ size }), className)}>
      {items.map((item) => {
        const isActive = item.value === value;

        return (
          <button
            key={item.value}
            type="button"
            onClick={() => onChange(item.value)}
            className={cn(
              tabButtonVariants(),
              isActive
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {isActive && (
              <motion.div
                layoutId={`active-pill-${layoutId}`}
                className="absolute inset-0 z-0 rounded-lg bg-primary/50 shadow-sm"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}
            <span className="relative z-10 text-text">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
