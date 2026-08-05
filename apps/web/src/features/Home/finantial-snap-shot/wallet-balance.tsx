"use client";

import { ArrowLeftRight, TrendingDown, TrendingUp, Wallet } from "lucide-react";
import CountUp from "react-countup";
import { motion } from "motion/react";

const fakeData = {
  total_balance: 210000000,
  total_budget: 150000000,
  used_budget: 95000000,
  received: 13000000,
  paid: 3800000,
};

const ease = [0.22, 1, 0.36, 1] as const;

const WalletBalance = () => {
  // const usedPercent = Math.min(
  //   (fakeData.used_budget / fakeData.total_budget) * 100,
  //   100,
  // );
  // const remainingBudget = fakeData.total_budget - fakeData.used_budget;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease }}
      className="relative overflow-hidden flex-1 rounded-3xl bg-white p-4 shadow-xs m-0.5"
    >
      <motion.div
        className="pointer-events-none absolute left-[50%] top-[30%] h-25 w-25 rounded-full bg-primary/40 blur-2xl"
        animate={{ x: [0, 20, -10, 0], y: [0, -15, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="flex items-start justify-between"
      >
        <div className="flex items-center gap-2.5">
          <div className="rounded-xl bg-primary/50 p-2">
            <Wallet className="size-5 text-text" />
          </div>
          <div>
            <p className="font-medium text-text text-xs">موجودی کیف پول</p>
            <p className="text-[10px] text-text-muted">14:15</p>
          </div>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-error/20 px-2.5 py-1">
          <TrendingDown className="size-3 text-error" />
          <span className="text-[10px] font-medium text-error">12%</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5, ease }}
        className="mt-2 text-center"
      >
        <CountUp
          className="text-xl font-bold text-text tracking-tight [font-variant-numeric:tabular-nums]"
          end={fakeData.total_balance}
          separator=","
          duration={1.4}
          delay={0.25}
        />
        <p className="mt-0.5 text-[10px] text-text-muted">تومان</p>
      </motion.div>

      {/* <div className="mt-2">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-primary/15">
          <motion.div
            className="h-full rounded-full bg-primary"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: usedPercent / 100 }}
            transition={{ delay: 0.5, duration: 0.8, ease }}
            style={{ transformOrigin: "right" }}
          />
        </div>
        <div className="mt-1 flex items-center justify-between">
          <span className="text-[10px] text-text-muted">
            <CountUp
              end={usedPercent}
              duration={1.2}
              delay={0.5}
              decimals={0}
            />
            ٪ از بودجه
          </span>
          <span className="text-[10px] text-text-muted">
            <CountUp
              end={remainingBudget}
              separator=","
              duration={1.2}
              delay={0.5}
            />{" "}
            تومان باقی‌مانده
          </span>
        </div>
      </div> */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="my-2 h-px bg-text/20"
      />
      <div>
        <div className="flex items-center gap-2 mb-2">
          <ArrowLeftRight className="size-3 text-text" />
          <p className="text-text font-bold text-xs">آخرین تراکنش</p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.4, ease }}
          className="grid grid-cols-2 gap-2.5"
        >
          <div className="rounded-xl border border-error/15 bg-error/8  flex items-center flex-col justify-center">
            <div className="mb-0.5 flex items-center gap-1 flex-row-reverse justify-end">
              <TrendingDown className="size-3.5 text-paid" />
              <span className="text-xs text-paid">پرداختی</span>
            </div>
            <CountUp
              className="font-semibold text-paid text-sm [font-variant-numeric:tabular-nums]"
              end={fakeData.paid}
              separator=","
              duration={0.9}
              delay={0.48}
            />
          </div>
          <div className="rounded-xl border border-success/20 bg-success/10 flex items-center flex-col justify-center">
            <div className="mb-0.5 flex items-center gap-1 flex-row-reverse justify-end">
              <TrendingUp className="size-3.5 text-received" />
              <span className="text-xs text-received">دریافتی</span>
            </div>
            <CountUp
              className="font-semibold text-received text-sm [font-variant-numeric:tabular-nums]"
              end={fakeData.received}
              separator=","
              duration={1.1}
              delay={0.42}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WalletBalance;
