import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const MAIL_FROM =
  process.env.MAIL_FROM || "Turbo Services <no-reply@turboservices.be>";
const CONTACT_TO = process.env.CONTACT_TO || "info@turboservices.be";
const SEND_CUSTOMER =
  (process.env.SEND_CUSTOMER_EMAILS || "false").toLowerCase() === "true";

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY ontbreekt");
  }
  return new Resend(apiKey);
}

const SERVICE_LABELS: Record<string, string> = {
  ontstopping: "Ontstopping",
  herstelling: "Herstelling",
  ketel_vervangen: "Vervangen ketel",
  andere: "Andere",
};

const WINDOW_LABELS: Record<string, string> = {
  vandaag: "Vandaag",
  morgen: "Morgen",
  andere: "Andere datum",
};

const DAYPART_LABELS: Record<string, string> = {
  ochtend: "Ochtend",
  namiddag: "Namiddag",
  avond: "Avond",
};

type ContactBody = {
  contactName?: string;
  phone?: string;
  email?: string;
  address?: string;
  desc?: string;
  urgent?: boolean;
  withCamera?: boolean;
  date?: string;
  dayPart?: string;
  windowChoice?: string;
  serviceType?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactBody;

    if (!body?.contactName || !body?.phone) {
      return NextResponse.json(
        { ok: false, message: "Naam en telefoon zijn verplicht." },
        { status: 400 }
      );
    }

    const resend = getResend();

    const serviceRaw = body.serviceType || "andere";
    const serviceNice = SERVICE_LABELS[serviceRaw] || serviceRaw;

    const windowNice = body.windowChoice
      ? WINDOW_LABELS[body.windowChoice] || body.windowChoice
      : "-";

    const dayPartNice = body.dayPart
      ? DAYPART_LABELS[body.dayPart] || body.dayPart
      : "-";

    const subject = `Nieuwe aanvraag – ${body.contactName} (${serviceNice})`;

    const lines = [
      `Naam: ${body.contactName}`,
      `Telefoon: ${body.phone}`,
      `E-mail: ${body.email || "-"}`,
      `Adres: ${body.address || "-"}`,
      `Service: ${serviceNice}`,
      `Tijdvenster: ${windowNice}`,
      `Datum: ${body.date || "-"}`,
      `Dagdeel: ${dayPartNice}`,
      `Camera gewenst: ${body.withCamera ? "Ja" : "Nee"}`,
      `Spoed: ${body.urgent ? "Ja" : "Nee"}`,
      "",
      "Beschrijving:",
      body.desc || "-",
    ];

    const toYou = await resend.emails.send({
      from: MAIL_FROM,
      to: [CONTACT_TO],
      replyTo: body.email || undefined,
      subject,
      text: lines.join("\n"),
    });

    if (toYou.error) {
      return NextResponse.json(
        { ok: false, message: toYou.error.message },
        { status: 500 }
      );
    }

    if (SEND_CUSTOMER && body.email) {
      const customerMsg = [
        `Dag ${body.contactName},`,
        "",
        "We hebben je aanvraag goed ontvangen. Hieronder een samenvatting:",
        "",
        `• Service: ${serviceNice}`,
        `• Tijdvenster: ${windowNice}`,
        `• Datum: ${body.date || "-"}`,
        `• Dagdeel: ${dayPartNice}`,
        `• Spoed: ${body.urgent ? "Ja" : "Nee"}`,
        "",
        "Wij nemen zo snel mogelijk contact op om je afspraak te bevestigen.",
        "",
        "Met vriendelijke groet,",
        "Turbo Services",
      ];

      const toCustomer = await resend.emails.send({
        from: MAIL_FROM,
        to: [body.email],
        subject: "Ontvangstbevestiging – Turbo Services",
        text: customerMsg.join("\n"),
      });

      if (toCustomer.error) {
        return NextResponse.json({
          ok: true,
          id: toYou.data?.id,
          customerEmailError: toCustomer.error.message,
        });
      }
    }

    return NextResponse.json({ ok: true, id: toYou.data?.id });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, message: e?.message || "Fout bij verzenden." },
      { status: 500 }
    );
  }
}