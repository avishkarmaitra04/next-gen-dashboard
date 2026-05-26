"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });
  
    if (error) {
      alert(error.message);
      return;
    }
  
    router.push("/");
  }

  async function handleSignup() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Account created!");
    }
  }

  return (
    <main className="min-h-screen bg-black flex items-center justify-center text-white">
      <div className="bg-zinc-900 p-8 rounded-3xl w-full max-w-md space-y-4">
        <h1 className="text-3xl font-bold">Welcome</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-xl bg-zinc-800"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-xl bg-zinc-800"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-cyan-500 py-3 rounded-xl font-semibold"
        >
          Login
        </button>

        <button
          onClick={handleSignup}
          className="w-full bg-zinc-700 py-3 rounded-xl"
        >
          Sign Up
        </button>
      </div>
    </main>
  );
}