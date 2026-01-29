import { NextResponse } from "next/server";
import { Resend } from "resend";

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const fullName = String(body.fullName || "").trim();
    const email = String(body.email || "").trim();
    const level = String(body.level || "").trim();
    const format = String(body.format || "").trim();
    const goal = String(body.goal || "").trim();
    const details = String(body.details || "").trim();

    if (!fullName || !email || !level || !format || !goal) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!isEmail(email)) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }

    // 1) Send email via Resend
    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.APPLY_TO_EMAIL;
    const fromEmail =
      process.env.APPLY_FROM_EMAIL || "Aleto Applications <onboarding@resend.dev>";

    if (!resendKey || !toEmail) {
      return NextResponse.json(
        { error: "Server email config missing (RESEND_API_KEY / APPLY_TO_EMAIL)." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendKey);

    const emailText = [
      "New application received:",
      "",
      `Full name: ${fullName}`,
      `Email: ${email}`,
      `Level: ${level}`,
      `Format: ${format}`,
      "",
      `Goal: ${goal}`,
      "",
      `Details: ${details || "-"}`,
    ].join("\n");

    const { error: resendError } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New Aleto application — ${fullName} (${level}, ${format})`,
      text: emailText,
      replyTo: email, // so you can reply directly to the applicant
    });

    if (resendError) {
      return NextResponse.json(
        { error: "Email sending failed. Try again later." },
        { status: 502 }
      );
    }

    // 2) Save to Google Sheets (Apps Script Web App)
// 2) Save to Google Sheets (Apps Script Web App)
const sheetsUrl = process.env.GOOGLE_SHEETS_WEBAPP_URL;
const sheetsToken = process.env.GOOGLE_SHEETS_TOKEN;

if (!sheetsUrl || !sheetsToken) {
  return NextResponse.json(
    { error: "Sheets env vars missing (GOOGLE_SHEETS_WEBAPP_URL / GOOGLE_SHEETS_TOKEN)." },
    { status: 500 }
  );
}

const res = await fetch(
  `${sheetsUrl}?token=${encodeURIComponent(sheetsToken)}`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fullName, email, level, format, goal, details }),
  }
);

const text = await res.text();

if (!res.ok) {
  return NextResponse.json(
    { error: `Google Sheets failed: ${res.status} ${text}` },
    { status: 502 }
  );
}


return NextResponse.json({ error: "TEST_ERROR" }, { status: 500 });
  } catch (e) {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }
}
