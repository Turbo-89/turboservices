// app/api/request/route.ts
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const RESEND_API_KEY = process.env.RESEND_API_KEY!;
const TO_EMAIL = process.env.CONTACT_EMAIL || 'turbobv89@gmail.com';
const FROM = 'Turbo Services <onboarding@resend.dev>'; // na domeinverificatie aanpassen naar no-reply@turboservices.be

function escapeHtml(s: string){
  return (s || '').toString().replace(/[&<>"']/g, (c) =>
    ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'} as any)[c]
  );
}

async function sendEmail(to: string, subject: string, html: string, replyTo?: string) {
  if (!RESEND_API_KEY) throw new Error('RESEND_API_KEY ontbreekt');
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: FROM,
      to: [to],
      subject,
      html,
      reply_to: replyTo ? [replyTo] : undefined,
    })
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Resend error: ${res.status} ${text}`);
  }
  return res.json();
}

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    const {
      address, contactName, phone, email, desc,
      urgent, withCamera, window, date, dayPart,
      payer, sendPaylink, serviceType
    } = payload || {};

    if (!contactName || !phone) {
      return NextResponse.json({ ok:false, message:'Naam en telefoon zijn verplicht.' }, { status: 400 });
    }

    // ---- Admin mail (naar jou) ----
    const adminHtml = `
      <h2>Nieuwe aanvraag (Turbo Services)</h2>
      <ul>
        <li><b>Naam:</b> ${escapeHtml(contactName)}</li>
        <li><b>Telefoon:</b> ${escapeHtml(phone)}</li>
        <li><b>E-mail:</b> ${escapeHtml(email || '')}</li>
        <li><b>Adres/Postcode:</b> ${escapeHtml(address || '')}</li>
        <li><b>Dringend binnen 24u:</b> ${urgent ? 'ja' : 'nee'}</li>
        <li><b>Venster:</b> ${escapeHtml(window || '')}${window==='andere' && date ? ` – ${escapeHtml(date)} (${escapeHtml(dayPart || '')})` : ''}</li>
        <li><b>Service/betaaltype:</b> ${escapeHtml(serviceType || '')}</li>
        <li><b>Camera-inspectie:</b> ${withCamera ? 'ja (+€90)' : 'nee'}</li>
        <li><b>Online betaal-link sturen:</b> ${sendPaylink ? 'ja' : 'nee'}</li>
        ${payer ? `<li><b>Betaler:</b> ${escapeHtml(payer.name || '')} – ${escapeHtml(payer.email || '')}</li>` : ''}
      </ul>
      ${desc ? `<p><b>Omschrijving:</b><br/>${escapeHtml(desc).replace(/\n/g,'<br/>')}</p>` : ''}
    `;
    await sendEmail(TO_EMAIL, 'Nieuwe aanvraag via website', adminHtml, TO_EMAIL);

    // ---- Klantbevestiging (indien e-mail opgegeven) ----
    if (email) {
      const klantHtml = `
        <p>Beste ${escapeHtml(contactName)},</p>
        <p>Bedankt voor je aanvraag bij <b>Turbo Services</b>. We plannen intern en sturen je snel een tijdsvenster (sms/WhatsApp).</p>
        <p><b>Samenvatting</b></p>
        <ul>
          <li><b>Telefoon:</b> ${escapeHtml(phone)}</li>
          <li><b>Adres:</b> ${escapeHtml(address || '')}</li>
          <li><b>Type:</b> ${escapeHtml(serviceType || '')}${withCamera ? ' (+camera)' : ''}</li>
          <li><b>Dringend:</b> ${urgent ? 'ja' : 'nee'}</li>
          <li><b>Venster:</b> ${escapeHtml(window || '')}${window==='andere' && date ? ` – ${escapeHtml(date)} (${escapeHtml(dayPart || '')})` : ''}</li>
        </ul>
        ${desc ? `<p><b>Omschrijving:</b><br/>${escapeHtml(desc).replace(/\n/g,'<br/>')}</p>` : ''}
        <p>Heb je nog een vraag? Bel 0485 03 18 77.</p>
        <p>Groeten,<br/>Turbo Services</p>
      `;
      await sendEmail(email, 'Aanvraag ontvangen – Turbo Services', klantHtml, TO_EMAIL);
    }

    return NextResponse.json({
      ok: true,
      message: email
        ? 'We hebben je aanvraag ontvangen. Je kreeg zonet ook een bevestiging per e-mail.'
        : 'We hebben je aanvraag ontvangen. (Geen e-mail opgegeven voor bevestiging.)'
    });
  } catch (e: any) {
    console.error('REQUEST ERROR', e);
    return NextResponse.json({ ok:false, message: e?.message || 'Er ging iets mis.' }, { status: 500 });
  }
}
