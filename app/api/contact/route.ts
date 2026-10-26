import { NextResponse } from "next/server";

/**
 * Receives every form on the site: contact, quote request and newsletter.
 * Body: { type: "contact" | "quote" | "newsletter", ...fields }
 *
 * TODO (backend): forward the payload to your email provider (Resend,
 * Nodemailer, Formspree) or CRM. Right now it validates and logs it.
 */
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  if (!body || typeof body !== "object" || typeof body.type !== "string") {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  if (body.email && !/^\S+@\S+\.\S+$/.test(String(body.email))) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

  console.log("[xplo-factory] form submission:", body);

  return NextResponse.json({ ok: true });
}
