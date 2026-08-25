import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!message || !message.trim() || !email || !email.trim()) {
    return NextResponse.json(
      { error: "email and message are required" },
      { status: 400 },
    );
  }

  const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;
  const userId = process.env.LINE_USER_ID;
  if (!token || !userId) {
    console.error("LINE credentials not set");
    return NextResponse.json(
      { error: "LINE not configured" },
      { status: 500 },
    );
  }

  const now = new Date().toLocaleString("ja-JP", {
    timeZone: "Asia/Singapore",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  const lineMessage = [
    "📨 Willoaサイトにお問い合わせが届きました",
    "",
    name && name.trim() ? `お名前: ${name.trim()}` : null,
    `メール: ${email.trim()}`,
    "",
    message.trim(),
    "",
    `🕐 ${now} (SGT)`,
  ]
    .filter((line) => line !== null)
    .join("\n");

  try {
    const response = await fetch("https://api.line.me/v2/bot/message/push", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        to: userId,
        messages: [{ type: "text", text: lineMessage }],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("LINE push error:", err);
      return NextResponse.json(
        { error: "LINE push failed" },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("LINE push exception:", e);
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "unknown error" },
      { status: 500 },
    );
  }
}
