import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_EMAIL = "info@marinetech.lt";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "MarineTECH Website <kontaktai@marinetech.lt>";

export async function POST(request: Request) {
  const { name, email, topic, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: CONTACT_EMAIL,
    replyTo: email,
    subject: `Nauja užklausa: ${topic || "Bendra žinutė"}`,
    text: `Vardas: ${name}\nEl. paštas: ${email}\nTema: ${topic || "-"}\n\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
