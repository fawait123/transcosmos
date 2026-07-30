"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email and password required");
      return;
    }

    // ponytail: static creds, replace with real auth later
    if (email === "admin@indodata.com" && password === "admin123") {
      router.push("/admin");
    } else {
      setError("Invalid credentials");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 font-[Inter]">INDODATA</h1>
          <p className="text-sm text-gray-500 font-[Inter] mt-1">Backoffice Login</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 font-[Inter] mb-1.5">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#da2128]/40 focus:border-[#da2128] font-[Inter]"
              placeholder="admin@indodata.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 font-[Inter] mb-1.5">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#da2128]/40 focus:border-[#da2128] font-[Inter]"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-sm text-red-500 font-[Inter]">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-[#da2128] text-white py-2.5 rounded-lg text-sm font-semibold font-[Inter] hover:bg-red-700 transition-colors cursor-pointer"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
