import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, message } = body;

    const BOT = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT = process.env.TELEGRAM_CHAT_ID;

    if (!BOT || !CHAT) {
      return NextResponse.json(
        { error: 'Telegram bot token or chat id not configured' },
        { status: 500 },
      );
    }

    const text = `Yangi xabar:%0AIsm: ${name}%0ATelefon: ${phone}%0AMessage: ${message}`;

    const res = await fetch(`https://api.telegram.org/bot${BOT}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT, text, parse_mode: 'HTML' }),
    });

    if (!res.ok) {
      const txt = await res.text();
      return NextResponse.json(
        { error: 'Telegram send failed', details: txt },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
