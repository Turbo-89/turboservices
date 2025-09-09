import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const resend = new Resend(process.env.RESEND_API_KEY);

// Hier stel je het vaste ontvangstadres in (jouw inbox)
const TO = process.env.CONTACT_TO || 'info@turboservices.be';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const {
      contactName, phone, email, address, desc,
      urgent, withCamera, date, dayPart, serviceType,
    } = data || {};

    if (!contactName || !phone) {
      return NextResponse.json(
        { ok: false, message: 'Naam en telefoon zijn verplicht.' },
        { status: 400 }
      );
    }

    const subject = `Nieuwe aanvraag Turbo Services: ${contactName} (${serviceType || 'onbekend'})`;
    const bodyLines = [
      `Naam: ${contactName}`,
      `Telefoon: ${phone}`,
      `E-mail: ${email || '-'}`,
      `Adres: ${address || '-'}`,
      `Dienst: ${serviceType || '-'}`,
      `Datum/Deel van dag: ${date || '-'} / ${dayPart || '-'}`,
      `Camera nodig: ${withCamera ? 'Ja' : 'Nee'}`,
      `Urgent: ${urgent ? 'Ja' : 'Nee'}`,
      '',
      'Beschrijving:',
      desc || '-',
    ];

    const { data: sent, error } = await resend.emails.send({
      from: 'Turbo Services <no-reply@turboservices.be>', // afzender op je eigen domein
      to: [TO],
      replyTo: email || undefined, // klant als reply-adres
      subject,
      text: bodyLines.join('\n'),
    });

    if (error) {
      return NextResponse.json({ ok: false, message: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, id: sent?.id });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, message: e?.message || 'Fout bij verzenden' },
      { status: 500 }
    );
  }
}
