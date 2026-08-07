"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import {
  Home,
  PiggyBank,
  ArrowLeftRight,
  UserRound,
  Plus,
  type LucideIcon,
} from "lucide-react";

type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

const rightItems: NavItem[] = [
  { href: "/dashboard", label: "خانه", icon: Home },
  { href: "/dashboard/budget", label: "بودجه", icon: PiggyBank },
];

const leftItems: NavItem[] = [
  { href: "/dashboard/transactions", label: "تراکنش", icon: ArrowLeftRight },
  { href: "/dashboard/account", label: "کاربر", icon: UserRound },
];

function NavLink({ item, isActive }: { item: NavItem; isActive: boolean }) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className="relative flex flex-1 flex-col items-center justify-center gap-1 py-2"
    >
      {isActive && (
        <motion.span
          layoutId="nav-active-pill"
          className="absolute inset-x-2 top-0.5 h-[90%] rounded-2xl bg-secondary/10"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
      <motion.span
        animate={{ y: isActive ? -1 : 0, scale: isActive ? 1.08 : 1 }}
        transition={{ type: "spring", stiffness: 380, damping: 20 }}
        className="relative z-10"
      >
        <Icon
          className={`h-5.5 w-5.5 transition-colors duration-200 ${
            isActive ? "text-secondary" : "text-text-muted"
          }`}
          strokeWidth={isActive ? 2.4 : 2}
        />
      </motion.span>
      <span
        className={`relative z-10 text-[11px] transition-colors duration-200 ${
          isActive ? "font-medium text-secondary" : "text-text-muted"
        }`}
      >
        {item.label}
      </span>
    </Link>
  );
}

export default function BottomNavigation({
  onFastAction,
}: {
  onFastAction?: () => void;
}) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/dashboard" ? pathname === href : pathname.startsWith(href);

  return (
    <div
      dir="rtl"
      className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
    >
      <div className="relative flex w-full max-w-md items-center rounded-full border border-border/30 bg-background px-2 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.18)] backdrop-blur-md">
        {rightItems.map((item) => (
          <NavLink key={item.href} item={item} isActive={isActive(item.href)} />
        ))}

        <div className="flex flex-1 justify-center">
          <motion.button
            type="button"
            onClick={onFastAction}
            aria-label="عملیات سریع"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="relative -mt-7 flex h-13 w-13 items-center justify-center rounded-full bg-secondary shadow-[0_10px_20px_-6px_rgba(217,119,6,0.55)]"
          >
            <motion.span
              className="absolute inset-0 rounded-full bg-secondary/50"
              animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <Plus
              className="relative z-10 h-5 w-5 text-white"
              strokeWidth={2.5}
            />
          </motion.button>
        </div>

        {leftItems.map((item) => (
          <NavLink key={item.href} item={item} isActive={isActive(item.href)} />
        ))}
      </div>
    </div>
  );
}
