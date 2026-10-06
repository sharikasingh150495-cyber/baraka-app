"use client";
import React from 'react';
import Link from 'next/link';
import { useLanguage, Lang } from '@/components/LanguageContext';
 
export default function HomePage() {
  const { t, lang, setLang } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-black text-white pb-28 select-none overflow-x-hidden">
      {/* 1. Top Banner */}
      <Link
        href="/auth"
        className="bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white text-[11px] font-black py-2 px-3 shadow-md flex items-center justify-between shrink-0"
      >
        <div className="flex items-center gap-1.5 overflow-hidden">
          <span className="bg-black/30 px-1.5 py-0.5 rounded text-[9px] uppercase font-mono tracking-widest shrink-0">{lang}</span>
          <span className="truncate">{t('bannerBonus')}</span>
        </div>
        <span className="bg-black/40 px-2 py-0.5 rounded text-[10px] font-bold shrink-0 border border-white/20 whitespace-nowrap">
          {t('signupBtn')} ➜
        </span>
      </Link>

      {/* 2. Top Header */}
      <header className="flex justify-between items-center px-3.5 py-2.5 border-b border-zinc-800/80 bg-zinc-950/95 sticky top-0 z-40">
        <Link href="/" className="shrink-0">
          <h1 className="text-lg font-black tracking-wider text-white leading-none">BARAKA</h1>
          <p className="text-[8px] text-amber-400 font-bold tracking-widest uppercase mt-0.5">WHOLESALE</p>
        </Link>

        <div className="flex items-center gap-1.5 shrink-0">
          <div className="flex items-center bg-zinc-900 border border-zinc-700 px-1.5 py-1 rounded-lg">
            <span className="text-xs mr-0.5">🌐</span>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Lang)}
              className="bg-transparent text-[11px] text-amber-400 font-bold outline-none cursor-pointer"
            >
              <option value="EN" className="bg-zinc-900 text-white">EN</option>
              <option value="KH" className="bg-zinc-900 text-white">KH</option>
              <option value="TH" className="bg-zinc-900 text-white">TH</option>
              <option value="VI" className="bg-zinc-900 text-white">VI</option>
              <option value="ZH" className="bg-zinc-900 text-white">ZH</option>
              {/* Nayi languages yahan add hui hain */}
              <option value="KO" className="bg-zinc-900 text-white">KO</option>
              <option value="JA" className="bg-zinc-900 text-white">JA</option>
            </select>
          </div>

          <Link
            href="/wallet"
            className="flex items-center gap-1 bg-amber-500/15 border border-amber-500/40 text-amber-400 font-black text-[11px] px-2 py-1 rounded-lg"
          >
            <span>💰</span>
            <span>$1.75</span>
          </Link>

          <Link
            href="/auth"
            className="bg-red-600 hover:bg-red-500 text-white font-black text-[11px] px-2.5 py-1 rounded-lg shrink-0"
          >
            {t('loginBtn')}
          </Link>
        </div>
      </header>

      {/* 3. Hero Section */}
      <section className="p-4 pt-5">
        <div className="inline-flex items-center gap-2 bg-red-950/40 border border-red-500/40 px-3 py-1 rounded-full mb-3">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
          <span className="text-[11px] font-bold text-red-400">{t('hubBadge')}</span>
        </div>

        <h1 className="text-3xl font-black leading-tight tracking-tight text-white">
          {t('heroTitle1')}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-amber-400 mt-1">
            {t('heroTitle2')}
          </span>
        </h1>

        <p className="text-xs text-gray-400 mt-2.5 leading-relaxed">
          {t('heroDesc')}
        </p>

        <div className="mt-4 space-y-2.5">
          <Link
            href="/feed"
            className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-red-600 via-orange-600 to-amber-500 text-white font-black text-sm shadow-lg active:scale-95 transition"
          >
            {t('btnTikTok')}
          </Link>

          <Link
            href="/marketplace"
            className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-zinc-900 border border-zinc-700 text-white font-bold text-sm hover:bg-zinc-800 active:scale-95 transition"
          >
            {t('btnWholesale')}
          </Link>
        </div>
      </section>

      {/* 4. Live Video Feed Card */}
      <section className="px-4 mt-1">
        <div className="bg-zinc-900/90 border border-zinc-800 p-4 rounded-2xl shadow-xl">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">LIVE REELS & SPONSOR ADS</span>
          </div>
          <h2 className="text-base font-bold text-white">{t('liveFeedTitle')}</h2>
          <p className="text-xs text-gray-400 mt-1 leading-relaxed">{t('liveFeedDesc')}</p>
          <Link
            href="/feed"
            className="mt-3.5 flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl text-xs shadow active:scale-95 transition"
          >
            📺 {t('btnOpenReels')}
          </Link>
        </div>
      </section>

      {/* 5. 4 Ecosystem Cards */}
      <section className="px-4 mt-3.5 grid grid-cols-2 gap-2.5">
        <Link href="/marketplace" className="bg-zinc-900/80 border border-zinc-800 p-3.5 rounded-xl flex flex-col justify-between active:scale-95 transition">
          <div className="w-8 h-8 bg-pink-500/10 text-pink-400 flex items-center justify-center rounded-lg mb-2 text-base">🛍️</div>
          <div>
            <h3 className="text-xs font-bold text-white">{t('marketTitle')}</h3>
            <p className="text-[10px] text-gray-400 mt-0.5">{t('marketDesc')}</p>
          </div>
        </Link>

        <Link href="/wallet" className="bg-zinc-900/80 border border-zinc-800 p-3.5 rounded-xl flex flex-col justify-between active:scale-95 transition">
          <div className="w-8 h-8 bg-amber-500/10 text-amber-400 flex items-center justify-center rounded-lg mb-2 text-base">💰</div>
          <div>
            <h3 className="text-xs font-bold text-white">{t('escrowTitle')}</h3>
            <p className="text-[10px] text-gray-400 mt-0.5">{t('escrowDesc')}</p>
          </div>
        </Link>

        <Link href="/studio" className="bg-zinc-900/80 border border-zinc-800 p-3.5 rounded-xl flex flex-col justify-between active:scale-95 transition">
          <div className="w-8 h-8 bg-emerald-500/10 text-emerald-400 flex items-center justify-center rounded-lg mb-2 text-base">📹</div>
          <div>
            <h3 className="text-xs font-bold text-white">{t('studioTitle')}</h3>
            <p className="text-[10px] text-gray-400 mt-0.5">{t('studioDesc')}</p>
          </div>
        </Link>

        <Link href="/checkout" className="bg-zinc-900/80 border border-zinc-800 p-3.5 rounded-xl flex flex-col justify-between active:scale-95 transition">
          <div className="w-8 h-8 bg-purple-500/10 text-purple-400 flex items-center justify-center rounded-lg mb-2 text-base">📦</div>
          <div>
            <h3 className="text-xs font-bold text-white">{t('ordersTitle')}</h3>
            <p className="text-[10px] text-gray-400 mt-0.5">{t('ordersDesc')}</p>
          </div>
        </Link>
      </section>

      {/* 6. Clean Bottom Navigation Bar (No Overlap) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-zinc-950/98 border-t border-zinc-800 flex justify-around items-center pt-2 pb-5 z-50 backdrop-blur-md shadow-2xl">
        <Link href="/" className="flex flex-col items-center text-amber-400 text-xs">
          <span className="text-lg">🏠</span>
          <span className="text-[10px] mt-0.5 font-bold">{t('navHome')}</span>
        </Link>
        <Link href="/marketplace" className="flex flex-col items-center text-gray-400 hover:text-white text-xs">
          <span className="text-lg">🛍️</span>
          <span className="text-[10px] mt-0.5">{t('navMarket')}</span>
        </Link>
        <Link href="/feed" className="flex flex-col items-center text-gray-400 hover:text-white text-xs">
          <span className="text-lg">📺</span>
          <span className="text-[10px] mt-0.5">{t('navReels')}</span>
        </Link>
        <Link href="/wallet" className="flex flex-col items-center text-gray-400 hover:text-white text-xs">
          <span className="text-lg">💰</span>
          <span className="text-[10px] mt-0.5">{t('navWallet')}</span>
        </Link>
      </nav>
    </div>
  );
}