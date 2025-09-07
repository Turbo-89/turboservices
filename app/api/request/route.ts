import { NextResponse } from 'next/server';

export const runtime = 'nodejs'; // blijf op Node runtime

// env
const TO_EMAIL = process.env.CONTACT_EMAIL || 'info@turboservices.be';
const TWILIO_SID   = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const ALERT_TO     = process.env.ALERT_TO || '+32485031877';
const SMS_FROM     = process.env.TWILIO_SMS_FROM;          // bv +12025550123
const WA_FROM      = process.env.TWILIO_WHATSAPP_FROM;     // bv whatsapp:+14155238886

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

    // ---------- E-MAIL (Resend) - optioneel & dynamische import ----------
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY!);
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
          from: 'Turbo Services <no-reply@turboservices.be>', // of onboarding@resend.dev tot je domein verified is
          to: [TO_EMAIL],
          subject: 'Nieuwe aanvraag via website',
          html,
        });
      } catch (e) {
        console.warn('Resend mail skipped/fout:', (e as any)?.message || e);
      }
    }

    // ---------- SMS/WHATSAPP ALERT (Twilio) - optioneel & dynamische import ----------
    if (TWILIO_SID && TWILIO_TOKEN && (SMS_FROM || WA_FROM)) {
      try {
        // Twilio ESM/CJS compat
        const twilioMod: any = await import('twilio');
        const twilio = twilioMod?.default ? twilioMod.default(TWILIO_SID, TWILIO_TOKEN) : twilioMod(TWILIO_SID, TWILIO_TOKEN);

        const text =
`Nieuwe aanvraag:
${contactName} – ${phone}
Adres: ${address || '-'}
Type: ${serviceType}${withCamera ? ' (+camera)' : ''}
Spoed: ${urgent ? 'ja' : 'nee'}
Venster: ${window}${window==='andere' && date ? ` – ${date} (${dayPart})` : ''}
${desc ? '— ' + (desc as string).slice(0,200) : ''}`;

        if (SMS_FROM) {
          await twilio.messages.create({ from: SMS_FROM, to: ALERT_TO, body: text });
        }
        if (WA_FROM) {
          await twilio.messages.create({ from: WA_FROM, to: `whatsapp:${ALERT_TO}`, body: text });
        }
      } catch (e) {
        console.warn('Twilio alert skipped/fout:', (e as any)?.message || e);
      }
    }

    // (optioneel) paylink integratie later
    return NextResponse.json({
      ok: true,
      message: 'We hebben je aanvraag ontvangen. We sturen snel een bevestiging via sms/WhatsApp.'
    });
  } catch (e: any) {
    console.error('REQUEST ERROR', e);
    return NextResponse.json({ ok:false, message: e?.message || 'Er ging iets mis.' }, { status: 500 });
  }
}

function escapeHtml(s: string){
  return s.replace(/[&<>"']/g, (c) =>
    ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'} as any)[c]
  );
}
