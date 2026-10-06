import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-300 p-6 max-w-2xl mx-auto space-y-6 text-sm">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
        <h1 className="text-xl font-black text-white">Baraka Terms & Policy</h1>
        <Link href="/" className="text-xs text-red-500 hover:underline">← Return Home</Link>
      </div>

      <section className="space-y-2">
        <h2 className="text-white font-bold text-base">1. Wholesale Orders & Escrow</h2>
        <p>All direct factory orders require a 3-piece Minimum Order Quantity (MOQ). Payments remain secured via Bakong Universal KHQR Escrow until tracking confirms arrival.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-white font-bold text-base">2. Watch-to-Earn Rewards</h2>
        <p>Promotional balances unlock for cashout via Bakong KHQR instantly upon reaching the $2.00 threshold through verified tasks.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-white font-bold text-base">3. Privacy Policy</h2>
        <p>We only store shipping and transaction records strictly required for logistics across Bangkok, Poipet, and Bavet hubs. No user data is sold.</p>
      </section>
    </main>
  );
}