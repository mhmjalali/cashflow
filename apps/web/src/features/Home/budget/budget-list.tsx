'use client';

import { motion } from 'motion/react';
import CountUp from 'react-countup';
import {
  budgetCategories,
  fakeBudgetData,
  type BudgetCategoryKey,
} from './budget-config';

const ease = [0.22, 1, 0.36, 1] as const;

const RADIUS = 22;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const BudgetCard = ({ catKey }: { catKey: BudgetCategoryKey }) => {
  const cat = budgetCategories.find((c) => c.key === catKey)!;
  const { total, used } = fakeBudgetData[catKey];
  const percent = Math.min((used / total) * 100, 100);
  const remaining = Math.max(total - used, 0);
  const Icon = cat.icon;
  const offset = CIRCUMFERENCE - (percent / 100) * CIRCUMFERENCE;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease }}
      className="flex items-center gap-3 rounded-2xl bg-white p-2 shadow-sm"
    >
      <div className="relative shrink-0 h-14 w-14">
        <svg className="h-14 w-14 -rotate-90" viewBox="0 0 56 56">
          <circle
            cx="28"
            cy="28"
            r={RADIUS}
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="5"
          />
          <motion.circle
            cx="28"
            cy="28"
            r={RADIUS}
            fill="none"
            stroke={cat.color}
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            initial={{ strokeDashoffset: CIRCUMFERENCE }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1, delay: 0.2, ease }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="size-5" style={{ color: cat.color }} />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <p className="font-medium text-text text-sm">{cat.label}</p>
          <span className="text-xs font-semibold" style={{ color: cat.color }}>
            <CountUp end={percent} duration={1.2} delay={0.3} decimals={0} />٪
          </span>
        </div>
        <div className="mt-1 flex items-center justify-between text-[11px] text-text-muted">
          <span>
            {used.toLocaleString('en-US')} از {total.toLocaleString('en-US')}
          </span>
          <span>{remaining.toLocaleString('en-US')} باقی‌مانده</span>
        </div>
      </div>
    </motion.div>
  );
};

const BudgetList = () => (
  <div className="flex flex-col gap-2.5">
    {budgetCategories.map((cat) => (
      <BudgetCard key={cat.key} catKey={cat.key} />
    ))}
  </div>
);

export default BudgetList;
