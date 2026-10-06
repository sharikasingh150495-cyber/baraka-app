'use client';

import React, { Suspense, useState, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { MASTER_B2B_CATALOG, B2BProduct } from '@/lib/products-master';

function ProductDetailContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');

  // URL ID ke hisaab se catalog match karein
  const product: B2BProduct = useMemo(() => {
    return (
      MASTER_B2B_CATALOG.find((p) => p.id === productId) ||
      MASTER_B2B_CATALOG[0]
    );
  }, [productId]);

  // Gallery ke liye active image state
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Alibaba Style Interactive Quantity Counter (1 Pc Sample se shuru)
  const [orderQty, setOrderQty] = useState<number>(1);

  // Live Unit Price Calculation based on wholesale tier
  const activePrice = useMemo(() => {
    if (orderQty >= product.moq) {
      return product.pricing.bulkWholesale.price;
    } else if (orderQty >= Math.max(2, Math.floor(product.moq / 4))) {
      return product.pricing.smallLot.price;
    } else {
      return product.pricing.sample.price;
    }
  }, [orderQty, product]);

  const totalPrice = (activePrice * orderQty).toFixed(2);

  // Alibaba Related Lots
  const relatedProducts = useMemo(() => {
    return MASTER_B2B_CATALOG.filter((p) => p.id !== product.id);
  }, [product.id]);

  const [showRfqModal, setShowRfqModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0d11] text-zinc-100 font-sans pb-16">
      {/* Top B2B Navigation Banner */}
      <div className="bg-[#12161f] border-b border-white/10 px-4 py-3 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-2 text-zinc-400">
            <Link href="/marketplace" className="hover:text-amber-400 font-semibold flex items-center gap-1">
              <span>←</span> All B2B Wholesale Hubs
            </Link>
            <span>/</span>
            <span className="text-zinc-500">{product.category}</span>
            <span>/</span>
            <span className="text-amber-400 font-medium truncate max-w-[200px] sm:max-w-none">
              {product.title}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 text-[11px]">
              🛡 Bakong Escrow Guaranteed
            </span>
            <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 font-semibold px-2.5 py-1 rounded-full text-[11px]">
              Factory Direct Price
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-6 space-y-10">
        {/* Main Product Showcase Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#12151c] border border-white/10 rounded-2xl p-5 md:p-7 shadow-xl">
          {/* Left Column: Interactive Image Gallery with Clickable Thumbnails */}
          <div className="lg:col-span-5 space-y-3">
            {/* Big Main Active Image */}
            <div className="relative rounded-xl overflow-hidden bg-zinc-950 border border-white/10 aspect-square shadow-inner">
              <span className="absolute top-3 left-3 z-10 bg-black/85 backdrop-blur-md border border-white/15 text-zinc-200 text-xs px-3 py-1.5 rounded-full font-medium flex items-center gap-1.5">
                <span>{product.origin.flag}</span>
                <span>{product.origin.country} Factory Lot</span>
              </span>
              <img
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.title}
                className="w-full h-full object-cover transition-all duration-300"
              />
              <span className="absolute bottom-3 left-3 bg-amber-500 text-black text-[11px] font-black px-2.5 py-1 rounded uppercase tracking-wider">
                OEM / Custom Branding Ready
              </span>
            </div>

            {/* Clickable Image Thumbnails Strip */}
            <div className="flex items-center gap-2.5 pt-1 overflow-x-auto pb-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                    activeImageIndex === idx
                      ? 'border-amber-500 scale-105 shadow-md shadow-amber-500/20'
                      : 'border-white/15 opacity-60 hover:opacity-100 hover:border-white/40'
                  }`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <div className="text-[11px] text-zinc-500 flex justify-between px-1">
              <span>{product.images.length} Verified Factory Photos</span>
              <span className="text-amber-400/80">Click thumb to switch view</span>
            </div>
          </div>

          {/* Right Column: Wholesale Slabs, 1-Pc Sample Order & RFQ */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-amber-500 text-xs font-mono font-bold tracking-widest uppercase">
                  MODEL: {product.modelNo}
                </span>
                <span className="text-xs text-zinc-400">
                  Factory MOQ: <strong className="text-white">{product.moq} Units</strong>
                </span>
              </div>
              <h1 className="text-xl md:text-2xl font-black text-white mt-1.5 leading-snug">
                {product.title}
              </h1>
              <div className="flex flex-wrap gap-4 items-center text-xs text-zinc-400 mt-2 border-b border-white/10 pb-4">
                <span>🚢 Port: <strong className="text-zinc-200">{product.origin.port}</strong></span>
                <span>•</span>
                <span>⏱️ Lead Time: <strong className="text-emerald-400">{product.leadTime}</strong></span>
              </div>
            </div>

            {/* Alibaba Style Tiered Pricing Table */}
            <div className="bg-[#181c25] border border-white/10 rounded-xl p-4 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-400 font-bold uppercase tracking-wider">Factory Wholesale Slabs</span>
                <span className="text-emerald-400 text-[11px] font-medium">Bulk FOB Discounts Applied</span>
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                <div
                  onClick={() => setOrderQty(1)}
                  className={`cursor-pointer rounded-lg p-3 text-center transition-all ${
                    orderQty < Math.max(2, Math.floor(product.moq / 4))
                      ? 'bg-amber-500/10 border-2 border-amber-500 shadow-md'
                      : 'bg-zinc-900/80 border border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="text-[11px] text-zinc-400">{product.pricing.sample.qty}</div>
                  <div className="text-lg font-bold text-white mt-0.5">
                    ${product.pricing.sample.price.toFixed(2)}
                  </div>
                  <div className="text-[10px] text-amber-400 truncate mt-0.5 font-semibold">
                    1 Pc Sample Slab
                  </div>
                </div>

                <div
                  onClick={() => setOrderQty(Math.max(2, Math.floor(product.moq / 4)))}
                  className={`cursor-pointer rounded-lg p-3 text-center transition-all ${
                    orderQty >= Math.max(2, Math.floor(product.moq / 4)) && orderQty < product.moq
                      ? 'bg-amber-500/10 border-2 border-amber-500 shadow-md'
                      : 'bg-zinc-900/80 border border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="text-[11px] text-amber-400">{product.pricing.smallLot.qty}</div>
                  <div className="text-lg font-bold text-amber-400 mt-0.5">
                    ${product.pricing.smallLot.price.toFixed(2)}
                  </div>
                  <div className="text-[10px] text-zinc-400 truncate mt-0.5">
                    {product.pricing.smallLot.label}
                  </div>
                </div>

                <div
                  onClick={() => setOrderQty(product.moq)}
                  className={`cursor-pointer rounded-lg p-3 text-center transition-all ${
                    orderQty >= product.moq
                      ? 'bg-red-500/15 border-2 border-red-500 shadow-md'
                      : 'bg-zinc-900/80 border border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="text-[11px] text-red-400 font-bold">{product.pricing.bulkWholesale.qty}</div>
                  <div className="text-lg font-black text-red-400 mt-0.5">
                    ${product.pricing.bulkWholesale.price.toFixed(2)}
                  </div>
                  <div className="text-[10px] text-zinc-300 truncate mt-0.5">
                    {product.pricing.bulkWholesale.label}
                  </div>
                </div>
              </div>
            </div>

            {/* Alibaba Style 1-Pc Sample Order & Quantity Selector */}
            <div className="bg-[#181c25] border border-white/10 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-xs text-zinc-400 font-semibold">Select Order / Sample Quantity:</div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center border border-white/20 bg-zinc-900 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOrderQty((prev) => Math.max(1, prev - 1))}
                      className="px-3 py-1.5 text-zinc-300 hover:bg-zinc-800 text-sm font-bold"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min={1}
                      value={orderQty}
                      onChange={(e) => setOrderQty(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-14 bg-transparent text-center font-bold text-sm text-white focus:outline-none"
                    />
                    <button
                      onClick={() => setOrderQty((prev) => prev + 1)}
                      className="px-3 py-1.5 text-zinc-300 hover:bg-zinc-800 text-sm font-bold"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-xs text-zinc-400">Pcs</span>
                  {orderQty === 1 && (
                    <span className="text-[11px] bg-amber-500/20 text-amber-400 border border-amber-500/40 px-2 py-0.5 rounded font-bold">
                      Testing 1 Pc Sample
                    </span>
                  )}
                </div>
              </div>

              <div className="text-right">
                <div className="text-[11px] text-zinc-400">Total Calculated FOB:</div>
                <div className="text-xl font-black text-amber-400">
                  ${totalPrice}
                  <span className="text-xs text-zinc-500 font-normal ml-1">
                    (${activePrice.toFixed(2)}/unit)
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons: 1-Pc Sample Checkout & RFQ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <button
                onClick={() =>
                  alert(`Direct sample order dispatched: 1 Pc ${product.title} at $${product.pricing.sample.price.toFixed(2)}`)
                }
                className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 px-4 rounded-xl border border-white/15 transition flex items-center justify-center gap-2 text-sm shadow-md"
              >
                ⚡ Buy 1 Pc Sample (${product.pricing.sample.price.toFixed(2)})
              </button>
              <button
                onClick={() =>
                  alert(`Securing batch: ${orderQty} units of ${product.title} via Bakong Escrow. Total: $${totalPrice}`)
                }
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-black py-3 px-4 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-sm"
              >
                🔒 Lock Order with Bakong Escrow
              </button>
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => setShowRfqModal(true)}
                className="text-xs text-zinc-400 hover:text-amber-400 underline font-semibold flex items-center gap-1"
              >
                📄 Need custom OEM packaging or CIF rates? Send Custom Factory RFQ
              </button>
            </div>

            {/* TradeKorea Style Verified Supplier Info */}
            <div className="bg-[#181c25] border border-white/10 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-white text-sm flex items-center gap-1.5">
                    {product.supplier.name}
                    {product.supplier.isGold && <span className="text-sky-400 text-xs">💎</span>}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">{product.supplier.location}</p>
                </div>
                <span className="bg-amber-500/20 text-amber-400 border border-amber-500/40 text-[11px] font-black px-2 py-0.5 rounded">
                  {product.supplier.yearsVerified} YRS GOLD
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-white/10 text-xs">
                <div>
                  <div className="text-zinc-500 text-[10px]">Response Rate</div>
                  <div className="font-semibold text-emerald-400 mt-0.5">{product.supplier.responseRate}</div>
                </div>
                <div>
                  <div className="text-zinc-500 text-[10px]">Annual Volume</div>
                  <div className="font-semibold text-white mt-0.5">{product.supplier.annualVolume}</div>
                </div>
                <div>
                  <div className="text-zinc-500 text-[10px]">Factory Audit</div>
                  <div className="text-zinc-300 mt-0.5 truncate">{product.supplier.certifications[0] || 'ISO 9001'}</div>
                </div>
              </div>
            </div>

            {/* Product Specifications */}
            <div className="bg-[#181c25] border border-white/10 rounded-xl p-4">
              <h4 className="text-xs uppercase font-black text-amber-500 tracking-wider mb-2.5">
                Technical Specifications & Inspection
              </h4>
              <div className="divide-y divide-white/5 text-xs">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="py-2 flex justify-between gap-4">
                    <span className="text-zinc-400">{key}</span>
                    <span className="text-white font-medium text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ALIBABA & TRADEKOREA STYLE: Complete Recommended & Related Wholesale Catalog */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <h2 className="text-lg md:text-xl font-black text-white flex items-center gap-2">
                <span>📦</span> More Verified Wholesale Lots & Factory Catalogs
              </h2>
              <p className="text-xs text-zinc-400 mt-0.5">
                Explore real direct-factory lots across Japan, South Korea, China, and Thailand. Click any item to inspect its B2B slabs.
              </p>
            </div>
            <Link
              href="/marketplace"
              className="hidden sm:inline-block text-xs font-bold text-amber-400 hover:text-amber-300 hover:underline"
            >
              Browse All Categories →
            </Link>
          </div>

          {/* Grid of Related Products with Working Dynamic Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                href={`/marketplace/product?id=${item.id}`}
                className="group bg-[#12151c] hover:bg-[#181c25] border border-white/10 hover:border-amber-500/50 rounded-xl overflow-hidden transition-all duration-200 flex flex-col justify-between p-3.5 shadow-md hover:shadow-amber-500/10"
              >
                <div>
                  <div className="relative aspect-square bg-zinc-950 rounded-lg overflow-hidden mb-3">
                    <span className="absolute top-2 left-2 z-10 bg-black/80 backdrop-blur-sm text-[10px] px-2 py-0.5 rounded-full text-zinc-300 font-semibold flex items-center gap-1 border border-white/10">
                      <span>{item.origin.flag}</span>
                      <span>{item.origin.country}</span>
                    </span>
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                    {item.category}
                  </div>
                  <h3 className="text-xs font-bold text-white mt-1 line-clamp-2 leading-snug group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-3 pt-3 border-t border-white/5 space-y-1">
                  <div className="flex items-baseline justify-between">
                    <div className="text-sm font-black text-amber-400">
                      ${item.pricing.bulkWholesale.price.toFixed(2)}
                      <span className="text-[10px] text-zinc-500 font-normal ml-0.5">/unit</span>
                    </div>
                    <div className="text-[10px] text-zinc-400 font-medium">
                      MOQ: <span className="text-white font-bold">{item.moq}</span>
                    </div>
                  </div>
                  <div className="text-[10px] text-zinc-500 truncate flex items-center gap-1">
                    <span>🏢</span> {item.supplier.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* RFQ Modal */}
      {showRfqModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#181b22] border border-white/15 rounded-2xl max-w-md w-full p-6 space-y-4">
            <h3 className="text-base font-bold text-white">Direct RFQ Inquiry to {product.supplier.name}</h3>
            <p className="text-xs text-zinc-400">
              Model: <strong className="text-white">{product.modelNo}</strong> • Factory FOB Port: <strong className="text-white">{product.origin.port}</strong>
            </p>
            <div>
              <label className="text-[11px] text-zinc-400 font-semibold block mb-1">Target Quantity (Units)</label>
              <input
                type="number"
                value={orderQty}
                onChange={(e) => setOrderQty(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full bg-zinc-900 border border-white/10 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="text-[11px] text-zinc-400 font-semibold block mb-1">Custom Message / Destination Port</label>
              <textarea
                className="w-full bg-zinc-900 border border-white/10 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                rows={3}
                defaultValue="We are requesting official FOB and CIF shipping quotations to Cambodia. Please include packaging specifications and master carton dimensions."
              />
            </div>
            <div className="flex gap-2 justify-end pt-1">
              <button
                onClick={() => setShowRfqModal(false)}
                className="px-4 py-2 text-xs text-zinc-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert('RFQ dispatched directly to factory trade terminal.');
                  setShowRfqModal(false);
                }}
                className="px-5 py-2 text-xs bg-amber-500 hover:bg-amber-400 text-black font-black rounded-lg"
              >
                Send RFQ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProductDetailPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0b0d11] text-white p-8">Loading B2B Storefront...</div>}>
      <ProductDetailContent />
    </Suspense>
  );
}