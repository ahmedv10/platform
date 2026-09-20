import { NextResponse } from "next/server";

type LeadPayload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
};

function isFilledString(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  if (!isFilledString(payload.name) || !isFilledString(payload.company) || !isFilledString(payload.email)) {
    return NextResponse.json({ error: "Name, company, and email are required." }, { status: 400 });
  }

  console.info("Lead captured", {
    ...payload,
    receivedAt: new Date().toISOString(),
    source: "website",
  });

  return NextResponse.json({ ok: true, message: "Request received." });
}
