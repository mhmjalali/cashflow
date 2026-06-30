import { Landmark } from "lucide-react";

const Saving = () => {
  return (
    <button
      type="button"
      className="flex items-center justify-between p-3 rounded-2xl bg-secondary/40 shadow-sm text-right cursor-pointer"
    >
      <div className="flex flex-col gap-1">
        <span className="text-sm text-text">پس‌انداز</span>
        <span className="text-[10px] text-text-muted">
          انتقال به صندوق ذخیره
        </span>
      </div>
      <div className="p-2 rounded-xl bg-white/60 text-primary-dark duration-200">
        <Landmark className="w-5 h-5" />
      </div>
    </button>
  );
};

export default Saving;
