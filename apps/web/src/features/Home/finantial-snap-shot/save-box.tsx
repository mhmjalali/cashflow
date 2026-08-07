import { Landmark, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import CountUp from 'react-countup';

const fakeData = {
  total_balance: 210000000,
  target: 300000000,
  received: 13000000,
  paid: 3800000,
};

const ease = [0.22, 1, 0.36, 1] as const;

const SaveBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease }}
      className="relative overflow-hidden flex-1 rounded-3xl bg-foreground p-4 shadow-xs m-0.5"
    >
      <motion.div
        className="pointer-events-none absolute left-[50%] top-[30%] h-25 w-25 rounded-full bg-secondary/40 blur-2xl"
        animate={{ x: [0, 20, -10, 0], y: [0, -15, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="flex items-start justify-between"
      >
        <div className="flex items-center gap-2.5">
          <div className="rounded-xl bg-secondary/50 p-2">
            <Landmark className="size-5 text-text" />
          </div>
          <div>
            <p className="font-medium text-text text-xs">پس انداز</p>
            <p className="text-[10px] text-text-muted">14:15</p>
          </div>
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="my-2 h-px bg-text/20"
      />
      <div>
        <p className="text-text font-bold mb-2 text-xs">آخرین تراکنش</p>
        <div className="rounded-xl border border-secondary/30 bg-secondary/15  flex items-center flex-col justify-center">
          <div className="mb-0.5 flex items-center gap-1 flex-row-reverse justify-end">
            <TrendingUp className="size-3.5 text-secondary" />
            <span className="text-xs text-secondary">واریز</span>
          </div>
          <CountUp
            className="font-semibold text-secondary text-sm [font-variant-numeric:tabular-nums]"
            end={fakeData.paid}
            separator=","
            duration={0.9}
            delay={0.48}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SaveBox;
