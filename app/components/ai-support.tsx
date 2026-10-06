"use client";

import { useState } from "react";

export default function AISupport() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([
    { role: "bot", text: "Baraka Senior Support Active. How can I help with wholesale orders, escrow, or Bakong cashouts?" },
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userText = input;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "bot", text: "Support temporarily offline. Please retry." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Support Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-4 z-50 w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl border border-red-400 active:scale-90 transition-transform font-bold text-xl cursor-pointer"
        aria-label="AI Help Desk"
      >
        💬
      </button>

      {/* Floating Chat Box */}
      {isOpen && (
        <div className="fixed bottom-40 right-4 z-50 w-80 max-w-[90vw] h-96 bg-neutral-900 border border-neutral-700 rounded-2xl flex flex-col shadow-2xl overflow-hidden">
          <div className="bg-neutral-950 p-3 border-b border-neutral-800 flex justify-between items-center text-xs font-bold text-white">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Baraka Senior Help Center
            </span>
            <button onClick={() => setIsOpen(false)} className="text-neutral-400 hover:text-white text-base">✕</button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-xs">
            {messages.map((m, idx) => (
              <div key={idx} className={`p-2.5 rounded-xl max-w-[85%] leading-relaxed ${m.role === "user" ? "ml-auto bg-red-600 text-white" : "bg-neutral-800 text-neutral-200"}`}>
                {m.text}
              </div>
            ))}
            {loading && <div className="text-[10px] text-neutral-500 animate-pulse">AI Agent replying...</div>}
          </div>

          <div className="p-2 border-t border-neutral-800 flex gap-1.5 bg-neutral-950">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask support..."
              className="flex-1 bg-neutral-900 border border-neutral-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none"
            />
            <button onClick={sendMessage} className="px-3 bg-red-600 rounded-lg text-white font-bold text-xs">➤</button>
          </div>
        </div>
      )}
    </>
  );
}