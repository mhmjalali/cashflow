"use client";

import PaidReceivedContent from "@/components/shared/paid-received-content";
import { BanknoteArrowUp } from "lucide-react";
import { useState } from "react";

const Paid = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setModalOpen(true)}
        className="flex items-center w-full justify-between p-3 rounded-2xl bg-white shadow-sm text-right cursor-pointer"
      >
        <span className="text-sm text-text">ثبت خرج جدید</span>
        <div className="p-2 rounded-xl bg-paid/15 text-paid transition-colors duration-200">
          <BanknoteArrowUp className="w-5 h-5" />
        </div>
      </button>
      <PaidReceivedContent open={modalOpen} setOpen={setModalOpen} />
    </>
  );
};

export default Paid;
