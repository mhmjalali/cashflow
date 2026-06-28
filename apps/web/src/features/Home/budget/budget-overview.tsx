"use client";

import { motion } from "motion/react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { budgetCategories, fakeBudgetData } from "./budget-config";

const ease = [0.22, 1, 0.36, 1] as const;

const MiniDonut = ({
  catKey,
}: {
  catKey: (typeof budgetCategories)[number]["key"];
}) => {
  const cat = budgetCategories.find((c) => c.key === catKey)!;
  const { total, used } = fakeBudgetData[catKey];
  const remaining = Math.max(total - used, 0);
  const Icon = cat.icon;

  const data = [
    { name: "used", value: used, color: cat.color },
    { name: "remaining", value: remaining, color: "#e2e8f0" },
  ];

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative h-20 w-20">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={26}
              outerRadius={36}
              startAngle={90}
              endAngle={-270}
              stroke="none"
              isAnimationActive
              animationDuration={800}
              animationEasing="ease-out"
            >
              {data.map((entry, idx) => (
                <Cell key={idx} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="size-4" style={{ color: cat.color }} />
        </div>
      </div>
      <p className="text-[11px] text-text text-center">{cat.label}</p>
    </div>
  );
};

const BudgetOverview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease }}
      className="rounded-3xl bg-white p-4 shadow-sm"
    >
      <p className="font-bold text-text mb-4">بودجه‌ها</p>
      <div className="grid grid-cols-3 gap-y-4 gap-x-2">
        {budgetCategories.map((cat) => (
          <MiniDonut key={cat.key} catKey={cat.key} />
        ))}
      </div>
    </motion.div>
  );
};

export default BudgetOverview;
