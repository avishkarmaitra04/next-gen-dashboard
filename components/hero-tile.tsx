"use client";

import { motion } from "framer-motion";

export default function HeroTile() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="
      xl:col-span-2
      bg-zinc-900
      border border-zinc-800
      rounded-3xl
      p-8
      relative
      overflow-hidden
    "
    >
      <div
        className="
        absolute inset-0
        bg-gradient-to-br
        from-cyan-500/10
        to-purple-500/10
      "
      />

      <div className="relative z-10">
        <p className="text-zinc-400">
          Welcome back,
        </p>

        <h1 className="text-5xl font-bold mt-2">
          Avishkar 👋
        </h1>

        <div
          className="
          mt-6
          inline-flex
          items-center
          gap-2
          bg-zinc-800
          px-4 py-2
          rounded-full
        "
        >
          🔥 12 Day Streak
        </div>
      </div>
    </motion.section>
  );
}