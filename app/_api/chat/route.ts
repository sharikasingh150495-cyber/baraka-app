import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.DEEPSEEK_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        reply: "Baraka Senior Support Active: Bakong KHQR withdrawals unlock instantly at the $2.00 threshold. 3-Piece factory orders are fully protected by escrow."
      });
    }

    const response = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          {
            role: "system",
            content: "You are the Senior Authority Support Executive at Baraka App (Cambodia's video-first wholesale marketplace). Assist users with factory MOQ (3 pcs), Bakong KHQR cashouts ($2.00 threshold), and logistics. Keep responses short and professional."
          },
          { role: "user", content: message }
        ]
      }),
    });

    const data = await response.json();
    return NextResponse.json({ reply: data.choices?.[0]?.message?.content || "Support desk busy. Please retry." });
  } catch (error) {
    return NextResponse.json({ reply: "Support service temporarily offline." }, { status: 500 });
  }
}