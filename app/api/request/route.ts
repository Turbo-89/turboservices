import { NextResponse } from 'next/server';

// --- E-mail (Resend) optioneel ---
import { Resend } from 'resend';
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const TO_EMAIL = process.env.CONTACT_EMAIL || 'info@turboservices.be';

// --- Twilio (SMS/WhatsApp) optioneel ---
const TWILIO_SID   = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const ALERT_TO     = process.env.ALERT_TO || '+32485031877';
const SMS_FROM     = process.env.TWILIO_SMS_FROM;           // bv. +12025550123
const WA_FROM      = process.env.TWILIO_WHATSAPP_FROM;      // bv. whatsapp:+14155238886 (sandbox) of je WA sender

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    const {
      address, contactName, phone, email, desc,
      urgent, withCamera, window, date, dayPart,
      payer, sendPaylink, serviceType
    } = payload || {};

    // minimale validatie
    if (!contactName || !phone) {
      return NextResponse.json({ ok:false, message:'Naam en telefoon zijn verplicht.' }, { status: 400 });
    }

    // 1) E-MAIL (indien Resend geconfigureerd)
    if (resend) {
      const html = `
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
        <p><b>Omschrijving:</b><br/>${escapeHtml(desc || '').replace(/\n/g,'<br/>')}</p>
      `;
      await resend.emails.send({
        from: 'Turbo Services <no-reply@turboservices.be>', // of onboarding@resend.dev tot domain verified is
        to: [TO_EMAIL],
        subject: 'Nieuwe aanvraag via website',
        html,
      });
    }

    // 2) SMS/WHATSAPP ALERT (indien Twilio geconfigureerd)
    if (TWILIO_SID && TWILIO_TOKEN) {
      const twilio = require('twilio')(TWILIO_SID, TWILIO_TOKEN);
      const text =
`Nieuwe aanvraag:
${contactName} – ${phone}
Adres: ${address || '-'}
Type: ${serviceType}${withCamera ? ' (+camera)' : ''}
Spoed: ${urgent ? 'ja' : 'nee'}
Venster: ${window}${window==='andere' && date ? ` – ${date} (${dayPart})` : ''}
${desc ? '— ' + (desc as string).slice(0,200) : ''}`;

      // SMS (als ingesteld)
      if (SMS_FROM) {
        await twilio.messages.create({
          from: SMS_FROM,
          to: ALERT_TO,
          body: text,
        });
      }
      // WhatsApp (als ingesteld)
      if (WA_FROM) {
        await twilio.messages.create({
          from: WA_FROM,                 // 'whatsapp:+14155238886'
          to: `whatsapp:${ALERT_TO}`,    // 'whatsapp:+32485031877'
          body: text,
        });
      }
    }

    // 3) Optioneel: betaal-link genereren (nu nog niet gekoppeld)
    const pay = sendPaylink ? null : null;

    return NextResponse.json({ ok:true, message:'We hebben je aanvraag ontvangen. We sturen snel een bevestiging via sms/WhatsApp.', pay });
  } catch (e:any) {
    console.error('REQUEST ERROR', e);
    return NextResponse.json({ ok:false, message: e?.message || 'Er ging iets mis.' }, { status: 500 });
  }
}

function escapeHtml(s: string){
  return s.replace(/[&<>"']/g, (c) =>
    ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'} as any)[c]
  );
}
