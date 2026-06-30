import Modal from "@/components/ui/Modal";
import Tabs from "@/components/ui/TabPanel";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import PaidContent from "./paid-content";
import ReceivedContent from "./received-content";

type DepOppModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DepOppModal = ({ open, setOpen }: DepOppModalProps) => {
  const [activeTab, setActiveTab] = useState("expense");

  return (
    <Modal open={open} onClose={() => setOpen(false)} closeOnBackdrop>
      <Tabs
        value={activeTab}
        onChange={setActiveTab}
        items={[
          { value: "expense", label: "خرج" },
          { value: "income", label: "دریافتی" },
        ]}
      />
      <div className="relative mt-4 overflow-hidden">
        <AnimatePresence mode="wait">
          {activeTab === "expense" ? (
            <motion.div
              key="expense"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
            >
              <PaidContent />
            </motion.div>
          ) : (
            <motion.div
              key="income"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
            >
              <ReceivedContent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Modal>
  );
};

export default DepOppModal;
