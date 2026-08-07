'use client';

import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import Button from './Button';

const Modal = ({
  children,
  open,
  onClose,
  closeOnBackdrop = false,
  className = '',
}: {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  closeOnBackdrop?: boolean;
  className?: string;
}) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-100 bg-black/50 backdrop-blur-xs"
            onClick={closeOnBackdrop ? onClose : undefined}
          />
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.95, y: '-48%', x: '50%' }}
            animate={{ opacity: 1, scale: 1, y: '-50%', x: '50%' }}
            exit={{ opacity: 0, scale: 0.95, y: '-48%', x: '50%' }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={`z-100 fixed top-[50%] right-[50%] bg-white p-2 rounded-md ${className}`}
          >
            <Button
              onClick={onClose}
              size="sm"
              variant="ghost"
              className="absolute top-2 left-2"
            >
              <X size={16} />
            </Button>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
