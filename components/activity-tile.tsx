"use client";

import { motion } from "framer-motion";

export default function ActivityTile() {
  const bars = [40, 80, 55, 90, 65, 70, 100];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="
        col-span-1
        bg-zinc-900
        border border-zinc-800
        rounded-3xl
        p-6
      "
    >
      <h2 className="text-xl font-semibold">
        Weekly Activity
      </h2>

      <div className="mt-6 flex items-end gap-2 h-40">
        {bars.map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{
              delay: i * 0.1,
              duration: 0.5,
            }}
            className="
              flex-1
              bg-cyan-400/80
              rounded-t-xl
            "
          />
        ))}
      </div>
    </motion.section>
  );
}