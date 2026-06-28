import { Landmark, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import CountUp from "react-countup";

const fakeData = {
  total_balance: 210000000,
  target: 300000000,
  received: 13000000,
  paid: 3800000,
};

const ease = [0.22, 1, 0.36, 1] as const;

const SaveBox = () => {
  const progress = Math.min(
    (fakeData.total_balance / fakeData.target) * 100,
    100,
  );
  const remaining = fakeData.target - fakeData.total_balance;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease }}
      className="relative overflow-hidden flex-1 rounded-3xl bg-white p-4 shadow-sm"
    >
      <motion.div
        className="pointer-events-none absolute left-[50%] top-[30%] h-25 w-25 rounded-full bg-secondary/40 blur-2xl"
        animate={{ x: [0, 20, -10, 0], y: [0, -15, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
            <p className="font-medium text-text">پس انداز</p>
            <p className="text-sm text-text-muted">14:15</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5, ease }}
        className="mt-4 text-center"
      >
        <CountUp
          className="text-3xl font-bold text-text tracking-tight [font-variant-numeric:tabular-nums]"
          end={fakeData.total_balance}
          separator=","
          duration={1.4}
          delay={0.25}
        />
        <p className="mt-1 text-xs text-text-muted">تومان</p>
      </motion.div>

      {/* progress toward target */}
      <div className="mt-3">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary/15">
          <motion.div
            className="h-full rounded-full bg-secondary"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            transition={{ delay: 0.5, duration: 0.8, ease }}
            style={{ transformOrigin: "right" }}
          />
        </div>
        <div className="mt-1.5 flex items-center justify-between">
          <span className="text-[11px] text-text-muted">
            <CountUp end={progress} duration={1.2} delay={0.5} decimals={0} />٪
            از هدف
          </span>
          <span className="text-[11px] text-text-muted">
            <CountUp end={remaining} separator="," duration={1.2} delay={0.5} />{" "}
            تومان تا هدف
          </span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="my-3 h-px bg-text/20"
      />
      <div>
        <p className="text-text font-bold mb-2">تاریخچه پس انداز</p>
        <div className="rounded-xl border border-secondary/30 bg-secondary/15  flex items-center flex-col justify-center">
          <div className="mb-1.5 flex items-center gap-1 flex-row-reverse justify-end">
            <TrendingUp className="size-3.5 text-secondary" />
            <span className="text-sm text-secondary">واریز</span>
          </div>
          <CountUp
            className="font-semibold text-secondary [font-variant-numeric:tabular-nums]"
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
