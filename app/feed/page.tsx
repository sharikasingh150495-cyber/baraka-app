"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// Master Brain ko yahan bulaya
import { useLanguage } from '../../components/LanguageContext';

const INITIAL_REELS_DATA = [
  {
    id: "v1",
    type: "organic",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    author: "@cambodia_comedy",
    description: "When you try to bargain at Olympic market 😂 #phnompenh #funny",
    song: "Original Sound - Khmer Comedy 🇰🇭",
    likes: "45.2K",
    comments: "1,204",
    shares: "8.5K",                                                    
  },
  {
    id: "v2",
    type: "ad",
    sponsorName: "ABA Bank Cambodia",
    bidAmount: 50.00,
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4",
    author: "@ababank_kh",
    description: "Zero fees on all Baraka Wholesale transfers using ABA KHQR! 🚀",
    song: "Promoted Music - ABA Bank",
    likes: "12K",
    comments: "430",
    shares: "1.1K",
    adAction: "Open ABA Mobile",
  },
  {
    id: "v3",
    type: "live",
    videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",
    author: "@fashion_hub_orussey",
    description: "LIVE Bidding: Korean Puffer Bags Master Carton - Floor Prices! 🔥",
    song: "LIVE NOW 🔴",
    likes: "8.9K",
    comments: "Live Chat",
    shares: "340",
    viewers: "1,240 Watching",
  },
  {
    id: "v4",
    type: "ad",
    sponsorName: "Smart Axiata",
    bidAmount: 35.00,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    author: "@smart_axiata",
    description: "Get 50GB extra data for live streaming your wholesale business! 📶",
    song: "Smart 5G Network",
    likes: "5.4K",
    comments: "120",
    shares: "50",
    adAction: "Claim 50GB Now",
  }
];

export default function TikTokFeedPage() {
  const [activeTab, setActiveTab] = useState<'forYou' | 'following' | 'live'>('forYou');
  const [feedReels, setFeedReels] = useState<any[]>([]);
  // Loudspeaker ko is component ke andar activate kiya
  const { t } = useLanguage();

  useEffect(() => {
    const sorted = [...INITIAL_REELS_DATA].sort((a, b) => {
      if (a.type === 'ad' && b.type === 'ad') {
        return (b.bidAmount || 0) - (a.bidAmount || 0);
      }
      return 0;
    });

    try {
      const savedUserReel = localStorage.getItem('baraka_user_reel');
      if (savedUserReel) {
        const parsed = JSON.parse(savedUserReel);
        parsed.videoUrl = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4";
        setFeedReels([parsed, ...sorted]);
      } else {
        setFeedReels(sorted);
      }
    } catch (e) {
      setFeedReels(sorted);
    }
  }, []);

  return (
    <div className="bg-zinc-950 min-h-screen w-full flex justify-center text-white font-sans select-none">
      <div className="w-full max-w-md h-[100dvh] relative overflow-hidden bg-black shadow-2xl border-x border-zinc-800">
        
        <div className="absolute top-0 left-0 right-0 z-50 pt-10 pb-4 bg-gradient-to-b from-black/80 to-transparent flex justify-center items-center gap-6 font-bold text-base drop-shadow-md">
          <button onClick={() => setActiveTab('live')} className={`transition-all flex items-center gap-1 ${activeTab === 'live' ? 'text-white' : 'text-white/60'}`}>
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span> Live
          </button>
          <button onClick={() => setActiveTab('following')} className={`transition-all ${activeTab === 'following' ? 'text-white' : 'text-white/60'}`}>Following</button>
          <button onClick={() => setActiveTab('forYou')} className={`transition-all relative ${activeTab === 'forYou' ? 'text-white' : 'text-white/60'}`}>
            For You
            {activeTab === 'forYou' && <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 bg-white rounded-full"></div>}
          </button>
        </div>

        <div className="h-full w-full overflow-y-scroll snap-y snap-mandatory scrollbar-none pb-24">
          {feedReels.map((reel) => (
            <div key={reel.id} className="relative h-full w-full snap-start flex items-center justify-center bg-black">
              
              <video 
                src={reel.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80"></div>

              {reel.type === 'ad' && (
                <div className="absolute top-24 left-4 z-40 bg-amber-500/20 backdrop-blur-md border border-amber-500/50 text-amber-400 px-3 py-1 rounded-md text-[11px] font-black tracking-widest uppercase flex items-center gap-1.5 shadow-lg">
                  <span>💰</span> SPONSORED • {reel.sponsorName}
                </div>
              )}

              {reel.type === 'live' && (
                <div className="absolute top-24 left-4 z-40 flex items-center gap-2">
                  <div className="bg-red-600 text-white px-2 py-0.5 rounded text-[11px] font-black uppercase tracking-widest flex items-center gap-1 shadow-lg shadow-red-600/40">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span> LIVE
                  </div>
                  <div className="bg-black/40 backdrop-blur text-white px-2 py-0.5 rounded text-[11px] font-bold">
                    👁️ {reel.viewers}
                  </div>
                </div>
              )}

              <div className="absolute bottom-28 left-4 right-16 z-40 space-y-2.5">
                <h3 className="text-base font-bold text-white shadow-black drop-shadow-lg flex items-center gap-1.5">
                  {reel.author}
                  {reel.type === 'organic' && <span className="bg-sky-500 text-white rounded-full w-3.5 h-3.5 flex items-center justify-center text-[8px]">✓</span>}
                </h3>
                <p className="text-[13px] text-white/90 line-clamp-2 drop-shadow-md">
                  {reel.description}
                </p>
                
                <div className="flex items-center gap-2 text-[12px] font-semibold text-white mt-1">
                  <span className="animate-[spin_4s_linear_infinite]">🎵</span>
                  <span className="truncate w-48">{reel.song}</span>
                </div>

                {reel.type === 'ad' && (
                  <button className="w-full mt-3 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold py-2.5 rounded-lg text-sm flex items-center justify-between px-4 active:scale-95 transition-all">
                    <span>{reel.adAction}</span>
                    <span>➜</span>
                  </button>
                )}
              </div>

              <div className="absolute bottom-28 right-2 z-40 flex flex-col items-center gap-5">
                <div className="relative w-11 h-11 bg-white rounded-full border-2 border-white flex items-center justify-center overflow-hidden mb-2 shadow-lg bg-zinc-700 text-xs">
                  <span className="font-bold text-zinc-300">PF</span>
                  <button className="absolute -bottom-1.5 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs border border-white font-bold shadow">
                    +
                  </button>
                </div>

                <button className="flex flex-col items-center gap-1 group">
                  <div className="w-10 h-10 flex items-center justify-center bg-black/20 rounded-full backdrop-blur-sm group-active:scale-75 transition-transform">
                    <svg className="w-7 h-7 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  </div>
                  <span className="text-[11px] font-bold text-white shadow-black drop-shadow-md">{reel.likes}</span>
                </button>

                <button className="flex flex-col items-center gap-1 group">
                  <div className="w-10 h-10 flex items-center justify-center bg-black/20 rounded-full backdrop-blur-sm group-active:scale-75 transition-transform">
                    <svg className="w-7 h-7 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/></svg>
                  </div>
                  <span className="text-[11px] font-bold text-white shadow-black drop-shadow-md">{reel.comments}</span>
                </button>

                <button className="flex flex-col items-center gap-1 group">
                  <div className="w-10 h-10 flex items-center justify-center bg-black/20 rounded-full backdrop-blur-sm group-active:scale-75 transition-transform">
                    <svg className="w-7 h-7 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24"><path d="M14.73 3.3l-7.1 4.1c-1.22-.73-2.77-.53-3.76.55-1.15 1.25-1.04 3.23.23 4.35l7.04 4.09c-.06.27-.1.54-.1.83 0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4c-1.51 0-2.82.84-3.5 2.1l-6.9-4c.05-.24.08-.48.08-.73 0-.31-.05-.61-.13-.9l7.06-4.1c.72 1.15 1.98 1.9 3.4 1.9 2.21 0 4-1.79 4-4s-1.79-4-4-4c-1.89 0-3.48 1.32-3.87 3.09z"/></svg>
                  </div>
                  <span className="text-[11px] font-bold text-white shadow-black drop-shadow-md">{reel.shares}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <Link 
          href="/studio"
          className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 px-6 py-2.5 rounded-full shadow-lg shadow-red-900/50 flex items-center gap-2 text-sm font-black active:scale-95 transition-transform z-50 border border-white/20"
        >
          <span>🎬</span> {t('studioDesc')} {/* Isko bhi theek kar diya taaki change ho sake */}
        </Link>

        {/* Niche wala navbar ab LanguageContext (Master Brain) se text lega */}
        <nav className="absolute bottom-0 left-0 right-0 bg-zinc-950/98 border-t border-zinc-800 flex justify-around items-center pt-2 pb-3 z-50 backdrop-blur-md">
          <Link href="/" className="flex flex-col items-center text-zinc-400 hover:text-white text-xs">
            <span className="text-lg">🏠</span>
            <span className="text-[10px] mt-0.5">{t('navHome')}</span>
          </Link>
          <Link href="/marketplace" className="flex flex-col items-center text-zinc-400 hover:text-white text-xs">
            <span className="text-lg">🛍️</span>
            <span className="text-[10px] mt-0.5">{t('navMarket')}</span>
          </Link>
          <Link href="/feed" className="flex flex-col items-center text-white text-xs">
            <span className="text-lg">📺</span>
            <span className="text-[10px] mt-0.5 font-bold">{t('navReels')}</span>
          </Link>
          <Link href="/wallet" className="flex flex-col items-center text-zinc-400 hover:text-white text-xs">
            <span className="text-lg">💰</span>
            <span className="text-[10px] mt-0.5">{t('navWallet')}</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}