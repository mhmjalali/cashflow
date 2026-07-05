import { Landmark } from "lucide-react";

const Saving = () => {
  return (
    <button
      type="button"
      className="flex items-center justify-between p-3 rounded-2xl bg-white shadow-sm text-right cursor-pointer"
    >
      <div className="flex flex-col gap-1">
        <span className="text-sm text-text">پس‌انداز</span>
      </div>
      <div className="p-2 rounded-xl bg-secondary/15 text-secondary duration-200">
        <Landmark className="w-5 h-5" />
      </div>
    </button>
  );
};

export default Saving;
