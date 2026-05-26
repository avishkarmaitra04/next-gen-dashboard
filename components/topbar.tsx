"use client";

import { Bell, Search, LogOut } from "lucide-react";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/navigation";

export default function Topbar() {
  const router = useRouter();

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  return (
    <header
    className="
    flex
    flex-col
    sm:flex-row
    items-center
    justify-between
    gap-4
    mb-6
    "
    >
      {/* Search Bar */}
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
          sm:max-w-md
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

      {/* Right Side Buttons */}
      <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-normal">
        {/* Notification */}
        <button
          className="
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

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="
            bg-red-500
            hover:bg-red-400
            transition-all
            px-4
            py-3
            rounded-2xl
            font-semibold
            flex
            items-center
            gap-2
          "
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </header>
  );
}