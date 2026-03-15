"use client";

import {FormEvent, useState} from "react";
import {useRouter} from "next/navigation";

export default function DashboardLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);
      const res = await fetch("/api/dashboard/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username, password}),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Login gagal");
        return;
      }

      router.replace("/dashboard");
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-100 px-5 py-12">
      <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Lightstudio</p>
        <h1 className="mt-1 text-2xl font-semibold text-slate-900">Dashboard Login</h1>
        <p className="mt-2 text-sm text-slate-500">Masuk untuk mengelola portfolio dan paket harga.</p>

        <form onSubmit={onSubmit} className="mt-5 space-y-4">
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Username</label>
            <input className="h-10 w-full rounded-md border border-slate-300 px-3 text-sm" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Password</label>
            <input type="password" className="h-10 w-full rounded-md border border-slate-300 px-3 text-sm" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <button className="h-10 w-full rounded-md bg-slate-900 text-sm font-semibold text-white" disabled={loading}>
            {loading ? "Memproses..." : "Masuk"}
          </button>
        </form>
      </div>
    </main>
  );
}
