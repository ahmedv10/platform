import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();
  if (!payload?.email || !payload?.name && !payload?.organization) return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  console.info("Lead captured", { ...payload, receivedAt: new Date().toISOString(), source: "website" });
  return NextResponse.json({ ok: true, message: "Request received." });
}
