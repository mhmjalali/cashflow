"use client";

import { BanknoteArrowDown, BanknoteArrowUp, Landmark } from "lucide-react";

const QuickActions = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full" dir="rtl">
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          className="flex items-center w-full justify-between p-4 rounded-2xl bg-white border border-border shadow-xs text-right cursor-pointer"
        >
          <span className="text-sm font-semibold text-text">ثبت خرج جدید</span>
          <div className="p-3 rounded-xl bg-paid/15 text-paid transition-colors duration-200">
            <BanknoteArrowUp className="w-6 h-6" />
          </div>
        </button>
        <button
          type="button"
          className="flex items-center justify-between w-full p-4 rounded-2xl bg-white border border-border shadow-xs text-right cursor-pointer"
        >
          <span className="text-sm font-semibold text-text">دریافتی جدید</span>
          <div className="p-3 rounded-xl bg-success/15 text-success transition-colors duration-200">
            <BanknoteArrowDown className="w-6 h-6" />
          </div>
        </button>
      </div>
      <button
        type="button"
        className="flex items-center justify-between p-4 rounded-2xl bg-secondary/40 shadow-xs text-right cursor-pointer border border-border"
      >
        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold text-text">پس‌انداز</span>
          <span className="text-xs text-text-muted">انتقال به صندوق ذخیره</span>
        </div>
        <div className="p-3 rounded-xl bg-white/60 text-primary-dark duration-200">
          <Landmark className="w-6 h-6" />
        </div>
      </button>
    </div>
  );
};

export default QuickActions;
