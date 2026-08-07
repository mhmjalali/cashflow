import { BanknoteArrowDown } from 'lucide-react';

const Received = () => {
  return (
    <button
      type="button"
      className="flex items-center justify-between w-full p-3 rounded-2xl bg-white shadow-sm text-right cursor-pointer"
    >
      <div className="flex flex-col gap-1">
        <span className="text-sm text-text">دریافتی جدید</span>
      </div>
      <div className="p-2 rounded-xl bg-received/15 text-received transition-colors duration-200">
        <BanknoteArrowDown className="w-5 h-5" />
      </div>
    </button>
  );
};

export default Received;
