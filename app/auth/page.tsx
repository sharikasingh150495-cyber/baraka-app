"use client";
import React, { useState } from 'react';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [refId, setRefId] = useState('MISBAH-992');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneOrEmail || !password) {
      alert("Kripya Phone Number / Business Email aur Password bharein!");
      return;
    }
    if (!isLogin) {
      alert("🎉 Account Registered! $1.75 Welcome Bonus + 25¢ Reference Bonus (Ref: " + refId + ") credited!");
    } else {
      alert("✅ Welcome back to Baraka Wholesale!");
    }
    window.location.href = '/wallet/';
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white p-5 justify-center select-none pb-20">
      <div className="w-full max-w-md mx-auto bg-zinc-900 border border-zinc-800 p-6 rounded-3xl shadow-2xl">
        <div className="flex justify-between items-center mb-5">
          <button onClick={() => window.location.href = '/'} className="text-xs text-gray-400 hover:text-white font-bold">
            ← Back to Home
          </button>
          <span className="text-[10px] bg-amber-500/20 text-amber-400 border border-amber-500/40 px-2.5 py-1 rounded-full font-black">
            🎁 $1.75 WELCOME BONUS
          </span>
        </div>

        <div className="text-center mb-5">
          <h1 className="text-2xl font-black tracking-wider text-white">BARAKA</h1>
          <p className="text-[10px] text-amber-400 font-bold uppercase tracking-widest mt-0.5">WHOLESALE NETWORK</p>
          <div className="flex bg-zinc-950 p-1 rounded-xl mt-4 border border-zinc-800">
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 text-xs font-black rounded-lg transition ${!isLogin ? 'bg-amber-500 text-black shadow' : 'text-gray-400'}`}
            >
              Register (Free $1.75)
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 text-xs font-black rounded-lg transition ${isLogin ? 'bg-amber-500 text-black shadow' : 'text-gray-400'}`}
            >
              Login
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] font-bold text-gray-300 mb-1">Phone Number or Business Email</label>
            <input
              type="text"
              placeholder="+855... ya email@domain.com"
              value={phoneOrEmail}
              onChange={(e) => setPhoneOrEmail(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-3 text-xs text-white outline-none focus:border-amber-400"
              required
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-300 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-700 rounded-xl p-3 pr-16 text-xs text-white outline-none focus:border-amber-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] font-bold text-amber-400 bg-zinc-800 px-2 py-1 rounded cursor-pointer"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {!isLogin && (
            <div>
              <label className="block text-[11px] font-bold text-amber-400 mb-1 flex items-center justify-between">
                <span>Reference ID (Auto Bonus)</span>
                <span className="text-[10px] text-emerald-400">+25¢ Instant Credit</span>
              </label>
              <input
                type="text"
                value={refId}
                onChange={(e) => setRefId(e.target.value)}
                className="w-full bg-zinc-950 border border-amber-500/50 rounded-xl p-3 text-xs font-mono font-bold text-amber-300 outline-none"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3.5 mt-2 bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white font-black text-xs rounded-xl shadow-lg shadow-red-600/30 active:scale-95 transition cursor-pointer"
          >
            {!isLogin ? "CLAIM $1.75 & REGISTER NOW 🚀" : "LOGIN TO DASHBOARD ⚡"}
          </button>
        </form>
      </div>
    </div>
  );
}
