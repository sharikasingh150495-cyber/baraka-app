"use client";
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AIStudioPage() {
  const [activeMode, setActiveMode] = useState<'camera' | 'ai'>('ai');
  const [isRecording, setIsRecording] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [previewVideo, setPreviewVideo] = useState<string | null>(null);

  // TikTok Style Camera UI States
  const [flash, setFlash] = useState(false);
  const [beautyFilter, setBeautyFilter] = useState(true);

  // Mock AI Generation Process
  const handleAIGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    
    // Simulating Python Backend (Gemini API + gTTS) Processing Time
    setTimeout(() => {
      setIsGenerating(false);
      // Mock generated video URL
      setPreviewVideo("https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80");
    }, 4500);
  };

  // Publish to Feed Logic
  const handlePublish = () => {
    if (!previewVideo) return;
    
    const newReel = {
      id: "user_reel_" + Date.now(),
      type: "organic",
      videoUrl: previewVideo,
      author: "@baraka_creator",
      description: prompt || "Just generated this amazing product video! 🚀 #BarakaApp",
      song: "AI Auto-Voiceover 🎵",
      likes: "0",
      comments: "0",
      shares: "0"
    };

    // Save to localStorage so it appears in the Feed
    localStorage.setItem('baraka_user_reel', JSON.stringify(newReel));
    window.location.href = '/feed';
  };

  return (
    <div className="bg-black min-h-screen h-[100dvh] w-full relative overflow-hidden text-white font-sans select-none">
      
      {/* Top Navigation */}
      <div className="absolute top-0 left-0 right-0 z-50 pt-10 pb-4 px-5 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
        <Link href="/feed" className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-xl">
          ✕
        </Link>
        
        <div className="flex bg-black/60 backdrop-blur-md rounded-full p-1 border border-white/10">
          <button 
            onClick={() => setActiveMode('ai')}
            className={`px-4 py-1.5 rounded-full text-xs font-black transition-all ${activeMode === 'ai' ? 'bg-gradient-to-r from-red-600 to-amber-500 text-white' : 'text-zinc-400'}`}
          >
            ✨ AI Studio
          </button>
          <button 
            onClick={() => setActiveMode('camera')}
            className={`px-4 py-1.5 rounded-full text-xs font-black transition-all ${activeMode === 'camera' ? 'bg-zinc-800 text-white' : 'text-zinc-400'}`}
          >
            📷 Camera
          </button>
        </div>

        <button className="text-sm font-bold text-amber-400 bg-amber-400/10 px-3 py-1.5 rounded-full">
          Drafts
        </button>
      </div>

      {/* Main Viewport */}
      <div className="absolute inset-0 bg-zinc-950 flex flex-col justify-center items-center overflow-hidden">
        
        {previewVideo ? (
          // --- PREVIEW SCREEN ---
          <div className="relative w-full h-full flex items-center justify-center">
            <Image 
              src={previewVideo} 
              alt="Preview" 
              fill 
              className="object-cover" 
              unoptimized 
            />
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10 flex flex-col justify-end pb-32 px-5">
              <div className="bg-black/60 backdrop-blur-md p-5 rounded-3xl border border-white/20">
                <h3 className="text-xl font-black text-white mb-2">Ready to Publish! 🎉</h3>
                <p className="text-xs text-zinc-300 mb-4">Your AI video and auto-voiceover have been successfully generated.</p>
                <div className="flex gap-3">
                  <button onClick={() => setPreviewVideo(null)} className="flex-1 py-3.5 rounded-xl bg-zinc-800 font-bold text-sm">
                    Discard
                  </button>
                  <button onClick={handlePublish} className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-black text-sm shadow-lg shadow-emerald-500/30">
                    Post to Feed 🚀
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : activeMode === 'ai' ? (
          
          // --- AI GENERATOR MODE ---
          <div className="w-full max-w-sm px-6 flex flex-col items-center">
            <div className="w-24 h-24 mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600 to-amber-500 rounded-3xl animate-[spin_4s_linear_infinite] blur-xl opacity-50"></div>
              <div className="relative w-full h-full bg-zinc-900 border border-zinc-700 rounded-3xl flex items-center justify-center text-4xl shadow-2xl">
                🤖
              </div>
            </div>
            
            <h2 className="text-2xl font-black text-white mb-2 text-center">Gemini AI Studio</h2>
            <p className="text-xs text-zinc-400 text-center mb-8">
              Describe your product. We will generate the video, script, and background music automatically.
            </p>

            <div className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl p-3 focus-within:border-amber-500 transition-colors shadow-inner">
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., Show a premium Korean Puffer Bag with a stylish wholesale pitch..."
                className="w-full bg-transparent text-sm text-white placeholder-zinc-500 resize-none outline-none h-24"
              />
              <div className="flex justify-between items-center mt-2 border-t border-zinc-800 pt-2">
                <div className="flex gap-2 text-lg opacity-70">
                  <span>🎙️</span>
                  <span>🎵</span>
                  <span>✨</span>
                </div>
                <span className="text-[10px] text-zinc-500">{prompt.length} / 250</span>
              </div>
            </div>

            <button 
              onClick={handleAIGenerate}
              disabled={isGenerating || !prompt}
              className={`w-full mt-6 py-4 rounded-2xl font-black text-sm transition-all shadow-xl flex justify-center items-center gap-2 ${
                isGenerating 
                  ? 'bg-zinc-800 text-zinc-500' 
                  : prompt 
                    ? 'bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white active:scale-95' 
                    : 'bg-zinc-800 text-zinc-500'
              }`}
            >
              {isGenerating ? (
                <>
                  <span className="w-4 h-4 border-2 border-zinc-500 border-t-white rounded-full animate-spin"></span>
                  Generating Studio Reel...
                </>
              ) : (
                'Generate Video & Voiceover ✨'
              )}
            </button>
          </div>

        ) : (
          
          // --- CAMERA MODE (TikTok Style) ---
          <div className="relative w-full h-full bg-zinc-900">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80')] bg-cover bg-center opacity-60"></div>
            
            {/* Right Side Tools */}
            <div className="absolute right-4 top-32 flex flex-col gap-6 z-20">
              <button className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 bg-black/40 backdrop-blur rounded-full flex items-center justify-center text-xl border border-white/20">🔄</div>
                <span className="text-[10px] font-bold">Flip</span>
              </button>
              <button onClick={() => setFlash(!flash)} className="flex flex-col items-center gap-1">
                <div className={`w-10 h-10 backdrop-blur rounded-full flex items-center justify-center text-xl border ${flash ? 'bg-amber-400 text-black border-amber-400' : 'bg-black/40 text-white border-white/20'}`}>⚡</div>
                <span className="text-[10px] font-bold">Flash</span>
              </button>
              <button onClick={() => setBeautyFilter(!beautyFilter)} className="flex flex-col items-center gap-1">
                <div className={`w-10 h-10 backdrop-blur rounded-full flex items-center justify-center text-xl border ${beautyFilter ? 'bg-pink-500 text-white border-pink-500' : 'bg-black/40 text-white border-white/20'}`}>✨</div>
                <span className="text-[10px] font-bold">Beauty</span>
              </button>
              <button className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 bg-black/40 backdrop-blur rounded-full flex items-center justify-center text-xl border border-white/20">🎵</div>
                <span className="text-[10px] font-bold">Sound</span>
              </button>
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-10 left-0 right-0 z-20 flex flex-col items-center">
              <div className="flex gap-6 mb-6 text-[11px] font-bold text-white/70">
                <span>15s</span>
                <span className="text-white">60s</span>
                <span>3m</span>
                <span>LIVE</span>
              </div>
              
              <div className="flex items-center justify-center gap-10">
                <button className="w-12 h-12 bg-black/40 backdrop-blur-md rounded-xl border border-white/20 flex flex-col items-center justify-center">
                  <span className="text-xl">🪄</span>
                  <span className="text-[9px] font-bold mt-0.5">Effects</span>
                </button>
                
                <button 
                  onClick={() => setIsRecording(!isRecording)}
                  className={`w-20 h-20 rounded-full flex items-center justify-center border-4 transition-all ${isRecording ? 'border-red-500/50' : 'border-red-500'}`}
                >
                  <div className={`bg-red-600 rounded-full transition-all ${isRecording ? 'w-8 h-8 rounded-md' : 'w-16 h-16'}`}></div>
                </button>

                <button className="w-12 h-12 bg-black/40 backdrop-blur-md rounded-xl border border-white/20 flex flex-col items-center justify-center overflow-hidden relative">
                  <Image src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&q=80" alt="Upload" fill className="object-cover opacity-60" unoptimized />
                  <span className="relative z-10 text-[9px] font-bold text-white shadow-black drop-shadow-md">Upload</span>
                </button>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}