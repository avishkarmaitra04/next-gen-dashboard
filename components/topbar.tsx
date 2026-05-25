"use client";

import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header
      className="
        flex
        items-center
        justify-between
        mb-6
      "
    >
      <div
        className="
          flex
          items-center
          gap-3
          bg-zinc-900
          border border-zinc-800
          rounded-2xl
          px-4
          py-3
          w-full
          max-w-md
        "
      >
        <Search className="w-5 h-5 text-zinc-400" />

        <input
          placeholder="Search courses..."
          className="
            bg-transparent
            outline-none
            text-white
            w-full
          "
        />
      </div>

      <button
        className="
          ml-4
          bg-zinc-900
          border border-zinc-800
          p-3
          rounded-2xl
          hover:border-cyan-500/40
          transition-all
        "
      >
        <Bell className="w-5 h-5" />
      </button>
    </header>
  );
}