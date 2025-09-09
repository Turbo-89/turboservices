import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const resend = new Resend(process.env.RESEND_API_KEY);
const MAIL_FROM = process.env.MAIL_FROM || 'Turbo Services <no-reply@turboservices.be>';
const TO = process.env.CONTACT_TO || 'info@turboservices.be';
const SEND_CUSTOMER = (process.env.SEND_CUSTOMER_EMAILS || 'false').toLowerCase() === 'true';

async function fetchOrder(orderId: string) {
  const res = await fetch(`https://api.mollie.com/v2/orders/${orderId}`, {
    headers: { Authorization: `Bearer ${process.env.MOLLIE_API_KEY}` }
  });
  if (!res.ok) throw new Error('Mollie order ophalen mislukt');
  return res.json();
}

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const orderId = (form.get('id') || form.get('orderId') || '').toString();
    if (!orderId) return NextResponse.json({ ok: false, message: 'Geen order id' }, { status: 400 });

    const order = await fetchOrder(orderId);

    const status = order.status; // 'paid' | 'authorized' | 'canceled' | 'expired' | ...
    const billing = order.billingAddress || {};
    const meta = order.metadata || {};
    const lines = order.lines || [];
    const total = order.amount?.value;

    // Mail naar jou (status update)
    const adminLines = [
      `Status: ${status}`,
      `Bedrag: € ${total}`,
      `Order: ${order.id} (${order.orderNumber || '-'})`,
      '',
      'Klant:',
      `Naam: ${billing.givenName || '-'}`,
      `Bedrijf: ${billing.organizationName || meta.company || '-'}`,
      `BTW: ${meta.vatNumber || '-'}`,
      `E-mail: ${billing.email || '-'}`,
      `Tel: ${meta.phone || '-'}`,
      '',
      'Omschrijving/metadata:',
      `Beschrijving: ${meta.description || '-'}`,
      `Particulier BTW: ${meta.privateVat || '-'}`,
      '',
      'Lijnen:',
      ...lines.map((l: any) => `- ${l.name} x${l.quantity} @ €${l.unitPrice?.value} (btw ${l.vatRate}%)`),
    ];

    await resend.emails.send({
      from: MAIL_FROM,
      to: [TO],
      subject: `Mollie update: ${status.toUpperCase()} – ${order.orderNumber || order.id}`,
      text: adminLines.join('\n'),
    });

    // Optioneel mail naar klant bij betaald
    if (SEND_CUSTOMER && (status === 'paid' || status === 'authorized')) {
      const msg = [
        `Dag ${billing.givenName || 'klant'},`,
        '',
        'Bedankt voor je betaling aan Turbo Services.',
        `Ordernummer: ${order.orderNumber || order.id}`,
        `Bedrag: € ${total}`,
        '',
        'We nemen snel contact met je op om alles verder af te stemmen.',
        '',
        'Met vriendelijke groet,',
        'Turbo Services',
      ];

      await resend.emails.send({
        from: MAIL_FROM,
        to: [billing.email],
        subject: 'Betaling ontvangen – Turbo Services',
        text: msg.join('\n'),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ ok: false, message: e?.message || 'Webhook fout' }, { status: 500 });
  }
}
