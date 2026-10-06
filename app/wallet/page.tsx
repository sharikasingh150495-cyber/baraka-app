"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CreatorWalletPage() {
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [showMonetizationModal, setShowMonetizationModal] = useState(false);
  
  const [balance, setBalance] = useState(1.75);
  const [shareProgress, setShareProgress] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const savedBal = localStorage.getItem('baraka_bal');
    if (savedBal) setBalance(parseFloat(savedBal));

    const savedShares = localStorage.getItem('baraka_shares');
    if (savedShares) setShareProgress(parseInt(savedShares));
  }, []);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  };

  const handleShareTask = async () => {
    if (shareProgress >= 3) return;

    try {
      if (navigator.share) {
        await navigator.share({
          title: "Baraka Wholesale App",
          text: "Join Baraka to get direct factory prices and earn by watching TikTok-style reels! Get $1.75 Welcome Bonus.",
          url: "https://baraka.app"
        });
      }
      
      const newProgress = shareProgress + 1;
      setShareProgress(newProgress);
      localStorage.setItem('baraka_shares', newProgress.toString());

      if (newProgress === 3) {
        const newBal = balance + 0.25;
        setBalance(newBal);
        localStorage.setItem('baraka_bal', newBal.toString());
        showToast("🎉 Mission Complete! $0.25 added to your wallet.");
      } else {
        showToast(`✅ Shared ${newProgress}/3! Keep sharing to unlock $0.25`);
      }
    } catch (e) {}
  };

  const stats = {
    lifetimeEarned: balance,
    currentTier: "Rising Creator",
    rpm: "$0.80",
    followers: 842,
    views30d: 31050,
    nextTierViews: 100000,
    nextTierFollowers: 5000,
  };

  const viewProgress = (stats.views30d / stats.nextTierViews) * 100;

  return (
    <div className="min-h-screen bg-black text-white pb-24 font-sans select-none overflow-x-hidden relative">
      
      {toast && (
        <div className="fixed top-16 left-4 right-4 z-50 bg-emerald-500 text-black font-black text-xs px-4 py-3 rounded-2xl shadow-2xl text-center animate-bounce">
          {toast}
        </div>
      )}

      <header className="px-5 py-4 border-b border-zinc-800/80 bg-zinc-950/95 sticky top-0 z-40 flex justify-between items-center">
        <div>
          <h1 className="text-lg font-black tracking-tight">Creator Wallet</h1>
          <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-0.5">Baraka Partner Program</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-zinc-700 flex items-center justify-center text-lg shadow-lg">
          👤
        </div>
      </header>

      <main className="p-4 max-w-md mx-auto space-y-5">
        <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 rounded-3xl p-6 shadow-2xl shadow-emerald-900/20 border border-emerald-500/30 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl"></div>
          
          <div className="flex justify-between items-start mb-6 relative z-10">
            <div>
              <p className="text-xs text-emerald-200 font-bold uppercase tracking-wider mb-1">Available Balance</p>
              <h2 className="text-4xl font-black text-white flex items-center gap-1">
                <span className="text-2xl text-emerald-400">$</span>{balance.toFixed(2)}
              </h2>
            </div>
            <div className="bg-black/30 px-3 py-1.5 rounded-lg border border-black/20 text-right">
              <p className="text-[9px] text-emerald-200 uppercase">Total Earned</p>
              <p className="text-sm font-bold text-white">${stats.lifetimeEarned.toFixed(2)}</p>
            </div>
          </div>

          <div className="flex gap-2">
            <button 
              onClick={() => setShowWithdrawModal(true)}
              className="flex-1 bg-white text-emerald-900 font-black py-3 rounded-xl text-xs shadow-lg active:scale-95 transition-transform flex justify-center items-center gap-1.5"
            >
              <span>🇰🇭</span> Cashout
            </button>
            <button 
              onClick={() => setShowMonetizationModal(true)}
              className="flex-1 bg-emerald-950 border border-emerald-400/50 text-emerald-300 font-black py-3 rounded-xl text-xs shadow-lg active:scale-95 transition-transform flex justify-center items-center gap-1.5"
            >
              📊 Views to Earn
            </button>
          </div>
        </section>

        <section>
          <h3 className="text-xs font-black text-zinc-400 uppercase tracking-wider mb-3 px-1">Bonus Tasks</h3>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl p-4 space-y-4">
            
            <div className="flex justify-between items-center opacity-60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-lg">🎁</div>
                <div>
                  <h4 className="text-sm font-bold text-white">Welcome Bonus</h4>
                  <p className="text-[10px] text-emerald-400 font-bold mt-0.5">Claimed ✓</p>
                </div>
              </div>
              <span className="text-sm font-black text-emerald-500">+$1.75</span>
            </div>

            <hr className="border-zinc-800" />

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-lg">📣</div>
                <div>
                  <h4 className="text-sm font-bold text-white">Share to 3 Groups</h4>
                  <div className="flex gap-1 mt-1.5">
                    <div className={`w-6 h-1.5 rounded-full ${shareProgress >= 1 ? 'bg-amber-400' : 'bg-zinc-700'}`}></div>
                    <div className={`w-6 h-1.5 rounded-full ${shareProgress >= 2 ? 'bg-amber-400' : 'bg-zinc-700'}`}></div>
                    <div className={`w-6 h-1.5 rounded-full ${shareProgress >= 3 ? 'bg-amber-400' : 'bg-zinc-700'}`}></div>
                  </div>
                </div>
              </div>
              
              {shareProgress >= 3 ? (
                <span className="text-xs font-black text-amber-500 bg-amber-500/10 px-2 py-1 rounded-lg">Claimed</span>
              ) : (
                <button 
                  onClick={handleShareTask}
                  className="bg-amber-500 hover:bg-amber-400 text-black font-black text-xs px-3 py-1.5 rounded-lg active:scale-95 transition"
                >
                  Share ➜
                </button>
              )}
            </div>
          </div>
        </section>

        <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 shadow-xl">
          <div className="flex justify-between items-center mb-4 border-b border-zinc-800 pb-4">
            <div>
              <p className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">Creator Status</p>
              <h3 className="text-base font-black text-amber-400 flex items-center gap-1.5 mt-0.5">
                🌟 {stats.currentTier}
              </h3>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">Current RPM</p>
              <h3 className="text-base font-black text-white mt-0.5">{stats.rpm} <span className="text-[10px] font-normal text-zinc-500">/ 1k views</span></h3>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs mb-1.5 font-bold">
              <span className="text-zinc-300">Monthly Views</span>
              {stats.views30d.toLocaleString('en-US')} ... {stats.nextTierViews.toLocaleString('en-US')}
            </div>
            <div className="w-full h-2 bg-zinc-950 rounded-full overflow-hidden border border-zinc-800">
              <div className="h-full bg-amber-500 rounded-full" style={{ width: `${viewProgress}%` }}></div>
            </div>
            <p className="text-[10px] text-zinc-500 text-center mt-3 font-semibold">
              Reach Pro Influencer tier to unlock $1.50 RPM!
            </p>
          </div>
        </section>
      </main>

      {showMonetizationModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-end justify-center p-4 pb-20">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-md shadow-2xl relative animate-[slideUp_0.2s_ease-out] overflow-hidden">
            <div className="bg-amber-500/10 p-5 border-b border-amber-500/20">
              <button onClick={() => setShowMonetizationModal(false)} className="absolute top-4 right-5 text-zinc-400 hover:text-white font-black text-lg">✕</button>
              <h3 className="text-lg font-black text-amber-400 flex items-center gap-2">
                <span>📈</span> Views to Earn Payouts
              </h3>
              <p className="text-xs text-zinc-400 mt-1">Get paid directly for every 1,000 views (RPM) your reels generate from our sponsors.</p>
            </div>
            
            <div className="p-5 space-y-4">
              <div className="bg-black border border-zinc-800 rounded-xl p-3 flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-bold text-white">Rising Creator</h4>
                  <p className="text-[10px] text-zinc-500">500+ Followers • 10K+ Views</p>
                </div>
                <span className="text-sm font-black text-amber-400">$0.80 / 1k views</span>
              </div>
              <div className="bg-black border border-amber-500/30 rounded-xl p-3 flex justify-between items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent"></div>
                <div className="relative z-10">
                  <h4 className="text-sm font-bold text-amber-400">Pro Influencer</h4>
                  <p className="text-[10px] text-zinc-500">5,000+ Followers • 100K+ Views</p>
                </div>
                <span className="relative z-10 text-sm font-black text-amber-400">$1.50 / 1k views</span>
              </div>
              <div className="bg-black border border-zinc-800 rounded-xl p-3 flex justify-between items-center opacity-50">
                <div>
                  <h4 className="text-sm font-bold text-white">Baraka VIP</h4>
                  <p className="text-[10px] text-zinc-500">20,000+ Followers • 500K+ Views</p>
                </div>
                <span className="text-sm font-black text-zinc-300">$2.50 / 1k views</span>
              </div>

              <button 
                onClick={() => setShowMonetizationModal(false)}
                className="w-full mt-2 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-sm transition-all"
              >
                Got it, let's create! 🎬
              </button>
            </div>
          </div>
        </div>
      )}

      {showWithdrawModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-end justify-center p-4 pb-20">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 w-full max-w-md shadow-2xl relative animate-[slideUp_0.2s_ease-out]">
            <button onClick={() => setShowWithdrawModal(false)} className="absolute top-4 right-5 text-zinc-400 hover:text-white font-black text-lg">✕</button>
            <div className="text-center mb-6">
              <span className="text-4xl mb-2 block">🇰🇭</span>
              <h3 className="text-lg font-black text-white">Bakong Universal KHQR</h3>
              <p className="text-xs text-zinc-400 mt-1">Cashout instantly to any Cambodian bank</p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-black p-4 rounded-xl border border-zinc-800 text-center">
                <p className="text-xs text-zinc-500 mb-1">Available to Withdraw</p>
                <p className="text-3xl font-black text-emerald-400">${balance.toFixed(2)}</p>
              </div>
              <button 
                onClick={() => {
                  setShowWithdrawModal(false);
                  showToast("⚠️ Threshold not met. Minimum cashout is $2.00 USD.");
                }}
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-black text-sm transition-all"
              >
                Scan KHQR to Receive Funds
              </button>
            </div>
          </div>
        </div>
      )}

      <nav className="fixed bottom-0 left-0 right-0 bg-zinc-950/98 border-t border-zinc-800 flex justify-around items-center pt-2 pb-5 z-40 backdrop-blur-md shadow-2xl">
        <Link href="/" className="flex flex-col items-center text-zinc-400 hover:text-white text-xs">
          <span className="text-lg">🏠</span>
          <span className="text-[10px] mt-0.5">Home</span>
        </Link>
        <Link href="/marketplace" className="flex flex-col items-center text-zinc-400 hover:text-white text-xs">
          <span className="text-lg">🛍️</span>
          <span className="text-[10px] mt-0.5">Market</span>
        </Link>
        <Link href="/feed" className="flex flex-col items-center text-zinc-400 hover:text-white text-xs">
          <span className="text-lg">📺</span>
          <span className="text-[10px] mt-0.5">Reels</span>
        </Link>
        <Link href="/wallet" className="flex flex-col items-center text-emerald-400 text-xs">
          <span className="text-lg">💰</span>
          <span className="text-[10px] mt-0.5 font-bold">Wallet</span>
        </Link>
      </nav>
    </div>
  );
}