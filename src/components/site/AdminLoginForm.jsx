"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function AdminLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function submit(event) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const payload = await response.json().catch(() => ({}));
      setStatus("error");
      setError(payload.error || "Login failed.");
      return;
    }

    setStatus("success");
    router.push("/admin");
    router.refresh();
  }

  return (
    <form onSubmit={submit} className="mt-7 grid gap-5">
      <label className="grid gap-2 text-sm font-bold text-[#3e2723]">
        Email
        <input
          required
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="focus-ring rounded-sm border border-[#d7c7b4] bg-white px-4 py-3.5 font-normal shadow-inner shadow-stone-100 transition focus:border-[#2e7d32]"
          autoComplete="email"
          placeholder="admin@nawasenaint.web.id"
        />
      </label>
      <label className="grid gap-2 text-sm font-bold text-[#3e2723]">
        Password
        <input
          required
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="focus-ring rounded-sm border border-[#d7c7b4] bg-white px-4 py-3.5 font-normal shadow-inner shadow-stone-100 transition focus:border-[#2e7d32]"
          autoComplete="current-password"
          placeholder="Enter your password"
          minLength={8}
        />
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="focus-ring rounded-sm bg-[#2e7d32] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-900/20 transition hover:bg-[#245d28] disabled:opacity-60"
      >
        {status === "submitting" ? "Opening workspace..." : "Enter dashboard"}
      </button>
      {error && <p className="rounded-sm bg-red-50 p-3 text-sm font-semibold text-red-700">{error}</p>}
      {status === "success" && <p className="rounded-sm bg-green-50 p-3 text-sm font-semibold text-green-700">Signed in. Redirecting...</p>}
      <p className="text-xs leading-6 text-stone-500">
        Credentials are verified against the <code>admin_users</code> table in Neon. Use the admin creation script to add or rotate accounts.
      </p>
    </form>
  );
}
