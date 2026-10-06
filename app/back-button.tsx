"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function BackButton() {
  const pathname = usePathname();
  const router = useRouter();

  const isHome = pathname === "/";
  const isAuth = pathname === "/auth";

  if (isAuth) return null;

  return (
    <div className="w-full bg-neutral-950/95 backdrop-blur border-b border-neutral-800 px-4 py-2.5 flex items-center justify-between sticky top-0 z-50">
      {isHome ? (
        <span className="text-xs font-black tracking-wider text-red-500">BARAKA</span>
      ) : (
        <button
          onClick={() => router.back()}
          aria-label="Go Back"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-700 text-white text-xs font-semibold active:scale-95 transition-transform cursor-pointer"
        >
          <span className="text-base font-bold leading-none">←</span>
          <span>Back</span>
        </button>
      )}

      {/* Top Bar Login & Reference Button */}
      <Link
        href="/auth"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-bold active:scale-95 transition-transform"
      >
        <span>👤</span>
        <span>Login / Sign Up</span>
      </Link>
    </div>
  );
}