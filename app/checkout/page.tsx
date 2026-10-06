"use client";

import { useState } from "react";
import Link from "next/link";

export default function CheckoutPage() {
  const [paid, setPaid] = useState(false);
  const totalAmount = 37.50; // 3 pcs Factory MOQ ($12.50 * 3)

  return (
    <main className="min-h-screen bg-neutral-950 text-white p-6 max-w-md mx-auto flex flex-col justify-center">
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 shadow-2xl text-center space-y-6">
        <div className="flex justify-between items-center text-xs">
          <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full font-bold border border-red-500/30">
            3-Pcs Factory MOQ Escrow
          </span>
          <Link href="/marketplace" className="text-neutral-400 hover:text-white">✕ Cancel</Link>
        </div>

        <div>
          <h1 className="text-lg font-black text-white">Bakong Universal KHQR</h1>
          <p className="text-xs text-neutral-400 mt-1">Cross-Border Cargo: Bangkok ➔ Bavet Transit</p>
        </div>

        {/* Dynamic KHQR Mockup */}
        <div className="bg-white p-5 rounded-2xl inline-block shadow-inner">
          <div className="w-48 h-48 bg-neutral-950 rounded-xl flex flex-col items-center justify-center p-3 text-center border-4 border-red-600">
            <span className="text-red-500 font-black text-xs tracking-widest uppercase">KHQR BAKONG</span>
            <div className="my-2 bg-neutral-900 w-28 h-28 border border-neutral-700 flex items-center justify-center rounded">
              <span className="text-3xl">🏁</span>
            </div>
            <span className="text-[10px] text-neutral-400 font-mono">SCAN TO PAY VIA ANY BANK</span>
          </div>
        </div>

        <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 text-xs space-y-2 text-left">
          <div className="flex justify-between">
            <span className="text-neutral-400">Total Due (USD):</span>
            <span className="text-white font-bold">${totalAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-400">Escrow Status:</span>
            <span className={paid ? "text-emerald-400 font-bold" : "text-amber-400 font-bold"}>
              {paid ? "PAID (Funds Locked in Escrow)" : "Awaiting Bank Confirmation"}
            </span>
          </div>
        </div>

        {!paid ? (
          <button
            onClick={() => setPaid(true)}
            className="w-full bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold py-3.5 rounded-xl text-sm transition-transform cursor-pointer"
          >
            Simulate Bakong Scan Verification
          </button>
        ) : (
          <Link
            href="/marketplace"
            className="block w-full bg-neutral-800 text-white font-bold py-3.5 rounded-xl text-sm text-center"
          >
            ← Return to Orders
          </Link>
        )}
      </div>
    </main>
  );
}