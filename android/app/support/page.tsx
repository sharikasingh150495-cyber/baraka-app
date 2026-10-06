"use client";
import { useState } from "react";

export default function SupportChat() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message) return;
    setLoading(true);
    try {
      // Assuming your API file is saved at app/api/chat/route.ts
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
      });
      const data = await res.json();
      setReply(data.reply);
    } catch (error) {
      setReply("Connection failed.");
    }
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-neutral-950 text-white min-h-screen">
      <h1 className="text-xl font-bold mb-4">Baraka Support Desk</h1>
      
      <div className="bg-neutral-900 p-4 rounded-xl border border-neutral-800 mb-4 h-64 overflow-y-auto text-sm">
        {reply ? (
           <p className="text-emerald-400 font-mono">Agent: {reply}</p>
        ) : (
           <p className="text-neutral-500">Ask a question about MOQ or Bakong cashouts...</p>
        )}
      </div>

      <div className="flex gap-2">
        <input 
          type="text" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type message..." 
          className="flex-1 p-3 rounded-lg bg-neutral-800 text-white outline-none"
        />
        <button 
          onClick={sendMessage}
          disabled={loading}
          className="bg-emerald-600 px-4 py-2 rounded-lg font-bold hover:bg-emerald-500"
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}