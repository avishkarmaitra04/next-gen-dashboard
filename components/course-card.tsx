"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  progress: number;
  iconName: string;
};

export default function CourseCard({
  title,
  progress,
  iconName,
}: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="
        bg-zinc-900
        border
        border-zinc-800
        rounded-3xl
        p-6
        hover:border-cyan-500/40
        hover:shadow-cyan-500/10
        hover:shadow-2xl
        transition-all
        relative
        overflow-hidden
      "
    >
      {/* Background Gradient */}
      <div
        className="
          absolute
          inset-0
          bg-linear-to-br
          from-cyan-500/5
          to-purple-500/5
        "
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {title}
          </h2>

          <div className="text-2xl">
            {iconName}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{
                duration: 1.2,
              }}
              className="
                h-full
                bg-cyan-400
                rounded-full
              "
            />
          </div>

          <p className="text-zinc-400 mt-3 text-sm">
            {progress}% completed
          </p>
        </div>
      </div>
    </motion.article>
  );
}