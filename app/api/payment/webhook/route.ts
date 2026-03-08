import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const MAIL_FROM =
  process.env.MAIL_FROM || "Turbo Services <no-reply@turboservices.be>";
const TO = process.env.CONTACT_TO || "info@turboservices.be";
const SEND_CUSTOMER =
  (process.env.SEND_CUSTOMER_EMAILS || "false").toLowerCase() === "true";

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY ontbreekt");
  }
  return new Resend(apiKey);
}

async function fetchOrder(orderId: string) {
  const mollieApiKey = process.env.MOLLIE_API_KEY;
  if (!mollieApiKey) {
    throw new Error("MOLLIE_API_KEY ontbreekt");
  }

  const res = await fetch(`https://api.mollie.com/v2/orders/${orderId}`, {
    headers: { Authorization: `Bearer ${mollieApiKey}` },
  });

  if (!res.ok) {
    throw new Error("Mollie order ophalen mislukt");
  }

  return res.json();
}

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const orderId = (form.get("id") || form.get("orderId") || "").toString();

    if (!orderId) {
      return NextResponse.json(
        { ok: false, message: "Geen order id" },
        { status: 400 }
      );
    }

    const resend = getResend();
    const order = await fetchOrder(orderId);

    const status = order.status;
    const billing = order.billingAddress || {};
    const meta = order.metadata || {};
    const lines = order.lines || [];
    const total = order.amount?.value;

    const adminLines = [
      `Status: ${status}`,
      `Bedrag: € ${total}`,
      `Order: ${order.id} (${order.orderNumber || "-"})`,
      "",
      "Klant:",
      `Naam: ${billing.givenName || "-"}`,
      `Bedrijf: ${billing.organizationName || meta.company || "-"}`,
      `BTW: ${meta.vatNumber || "-"}`,
      `E-mail: ${billing.email || "-"}`,
      `Tel: ${meta.phone || "-"}`,
      "",
      "Omschrijving/metadata:",
      `Beschrijving: ${meta.description || "-"}`,
      `Particulier BTW: ${meta.privateVat || "-"}`,
      "",
      "Lijnen:",
      ...lines.map(
        (l: any) =>
          `- ${l.name} x${l.quantity} @ €${l.unitPrice?.value} (btw ${l.vatRate}%)`
      ),
    ];

    await resend.emails.send({
      from: MAIL_FROM,
      to: [TO],
      subject: `Mollie update: ${String(status).toUpperCase()} – ${
        order.orderNumber || order.id
      }`,
      text: adminLines.join("\n"),
    });

    if (SEND_CUSTOMER && (status === "paid" || status === "authorized")) {
      const customerEmail = billing.email;
      if (customerEmail) {
        const msg = [
          `Dag ${billing.givenName || "klant"},`,
          "",
          "Bedankt voor je betaling aan Turbo Services.",
          `Ordernummer: ${order.orderNumber || order.id}`,
          `Bedrag: € ${total}`,
          "",
          "We nemen snel contact met je op om alles verder af te stemmen.",
          "",
          "Met vriendelijke groet,",
          "Turbo Services",
        ];

        await resend.emails.send({
          from: MAIL_FROM,
          to: [customerEmail],
          subject: "Betaling ontvangen – Turbo Services",
          text: msg.join("\n"),
        });
      }
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, message: e?.message || "Webhook fout" },
      { status: 500 }
    );
  }
}