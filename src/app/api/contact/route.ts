import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const company = String(formData.get("company") ?? "");
    const fullName = String(formData.get("fullName") ?? "");
    const email = String(formData.get("email") ?? "");
    const phone = String(formData.get("phone") ?? "");

    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      SMTP_FROM_EMAIL,
      SMTP_FROM_NAME,
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SMTP_FROM_EMAIL) {
      return NextResponse.json(
        {
          error:
            "Email is not configured. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and SMTP_FROM_EMAIL in your environment.",
        },
        { status: 500 }
      );
    }

    const port = Number(SMTP_PORT);

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const subject = `RFQ Request — ${fullName ? fullName : "Techmed Lab"}`;

    const text = [
      "New RFQ request received:",
      "",
      `Company: ${company || "-"}`,
      `Full name: ${fullName || "-"}`,
      `Email: ${email}`,
      `Phone: ${phone || "-"}`,
      "",
      "Sent from the Techmed Lab website.",
    ].join("\n");

    await transporter.sendMail({
      from: `"${SMTP_FROM_NAME || "Techmed Lab"}" <${SMTP_FROM_EMAIL}>`,
      to: "info@techmedlab.com",
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error && error.message
            ? error.message
            : "Failed to send request. Please try again.",
      },
      { status: 500 }
    );
  }
}

