import { NextResponse } from "next/server";
import { Resend } from "resend";

const FALLBACK_CONTACT_EMAIL = "ccmblawncare@gmail.com";
const CLIENT_SEND_ERROR = "Failed to send message. Please call us directly.";

function extractEmailAddress(from: string): string {
  const angle = from.match(/<([^>]+)>/);
  return (angle?.[1] ?? from).trim().toLowerCase();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, address, service, message } = body;

    if (!name || !phone || !email || !address || !service) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      // Avoid crashing the route (which returns HTML and breaks the form).
      // In local/dev without a key, accept the submission so the UI can be tested.
      if (process.env.NODE_ENV !== "production") {
        console.info("[contact] No RESEND_API_KEY — accepting submission in development:", {
          name,
          phone,
          email,
          address,
          service,
          message: message || null,
        });
        return NextResponse.json({ success: true });
      }

      console.error(
        "[contact] RESEND_API_KEY is not set. Add it in the hosting environment variables."
      );
      return NextResponse.json(
        { error: "Email service is not configured. Please call us directly." },
        { status: 500 }
      );
    }

    const contactEmail =
      process.env.CONTACT_EMAIL?.trim() || FALLBACK_CONTACT_EMAIL;
    // Production must use a verified-domain sender. Local/dev can fall back to Resend's test address.
    const fromEmail =
      process.env.RESEND_FROM_EMAIL?.trim() ||
      (process.env.NODE_ENV !== "production"
        ? "onboarding@resend.dev"
        : undefined);

    if (!fromEmail) {
      console.error(
        "[contact] RESEND_FROM_EMAIL is not set. Verify a sending domain in Resend, then set RESEND_FROM_EMAIL to an address on that domain (e.g. Carolina Coast Lawn Care <estimates@your-verified-domain.com>)."
      );
      return NextResponse.json({ error: CLIENT_SEND_ERROR }, { status: 500 });
    }

    const fromAddress = extractEmailAddress(fromEmail);
    if (fromAddress.endsWith("@resend.dev") && process.env.NODE_ENV === "production") {
      console.error(
        "[contact] RESEND_FROM_EMAIL uses resend.dev, which can only send to your Resend account email. Verify your domain at https://resend.com/domains and set RESEND_FROM_EMAIL to an address on that domain."
      );
      return NextResponse.json({ error: CLIENT_SEND_ERROR }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [contactEmail],
      replyTo: email,
      subject: `Free Estimate Request from ${name}`,
      html: `
        <h2>New Free Estimate Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service Address:</strong> ${address}</p>
        <p><strong>Service Needed:</strong> ${service}</p>
        <p><strong>Additional Details:</strong></p>
        <p>${message || "None provided"}</p>
      `,
    });

    if (error) {
      console.error("[contact] Resend API error:", {
        name: error.name,
        message: error.message,
        statusCode:
          "statusCode" in error
            ? (error as { statusCode?: number }).statusCode
            : undefined,
        to: contactEmail,
        fromDomain: fromAddress.split("@")[1] || null,
      });
      return NextResponse.json({ error: CLIENT_SEND_ERROR }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact] Unexpected error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
