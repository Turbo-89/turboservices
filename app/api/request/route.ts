// app/api/request/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const RESEND_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = process.env.CONTACT_EMAIL || 'verloo.wim@icloud.com';

// Safeguard: key moet gezet zijn
if (!RESEND_KEY) {
  console.warn('[request route] RESEND_API_KEY ontbreekt');
}

const resend = RESEND_KEY ? new Resend(RESEND_KEY) : null;

// Helper om HTML te escapen
function escapeHtml(s: string){
  return (s || '').toString().replace(/[&<>"']/g, (c) =>
    ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'} as any)[c]
  );
}

export async function POST(req: Request) {
  try {
    if (!resend) {
      return NextResponse.json(
        { ok: false, message: 'E-mailservice niet geconfigureerd (RESEND_API_KEY ontbreekt).' },
        { status: 500 }
      );
    }

    const payload = await req.json();
    const {
      address, contactName, phone, email, desc,
      urgent, withCamera, window, date, dayPart,
      payer, sendPaylink, serviceType
    } = payload || {};

    // Minimale validatie
    if (!contactName || !phone) {
      return NextResponse.json({ ok:false, message:'Naam en telefoon zijn verplicht.' }, { status: 400 });
    }

    // -------- Admin mail (naar jou) --------
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

    // Gebruik voorlopig Resend-afzender; later vervangen door jouw domein na verificatie
    const FROM = 'Turbo Services <onboarding@resend.dev>';

    await resend.emails.send({
      from: FROM,
      to: [TO_EMAIL],                     // Jouw iCloud-adres als ontvanger
      subject: 'Nieuwe aanvraag via website',
      html: adminHtml,
      reply_to: TO_EMAIL,                 // zodat je direct kan beantwoorden
    });

    // -------- Klantbevestiging (indien e-mail opgegeven) --------
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

      await resend.emails.send({
        from: FROM,
        to: [email],
        subject: 'Aanvraag ontvangen – Turbo Services',
        html: klantHtml,
        reply_to: TO_EMAIL,               // klantreply komt bij jouw iCloud terecht
      });
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
