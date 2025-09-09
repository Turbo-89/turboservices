// pages/api/request.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type Window = 'vandaag'|'morgen'|'andere';
type DayPart = 'ochtend'|'namiddag'|'avond';
type ServiceType = 'ontstopping'|'ketel_aanbetaling'|'ketel_volledig';

function idemKey() {
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function todayISO() {
  return new Date().toISOString().slice(0,10);
}

/** simpele prijslogica (excl. btw) */
function calcLines(serviceType: ServiceType, withCamera: boolean) {
  const lines: { description: string; quantity: number; unitPriceExcl: number; vatPercentage: number }[] = [];
  if (serviceType === 'ontstopping') {
    lines.push({ description: 'Ontstopping', quantity: 1, unitPriceExcl: 160, vatPercentage: 21 });
    if (withCamera) lines.push({ description: 'Camera-inspectie', quantity: 1, unitPriceExcl: 90, vatPercentage: 21 });
  }
  if (serviceType === 'ketel_aanbetaling') {
    lines.push({ description: 'Ketel – aanbetaling', quantity: 1, unitPriceExcl: 500, vatPercentage: 21 });
  }
  if (serviceType === 'ketel_volledig') {
    lines.push({ description: 'Ketel – volledig bedrag', quantity: 1, unitPriceExcl: 3500, vatPercentage: 21 });
  }
  return lines;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const {
    address, contactName, phone, email, desc, urgent, withCamera,
    window: windowChoice, date, dayPart,
    payer, sendPaylink, serviceType,
  } = req.body as {
    address?: string; contactName: string; phone: string; email?: string; desc?: string;
    urgent?: boolean; withCamera?: boolean;
    window: Window; date?: string|null; dayPart?: DayPart;
    payer?: { name?: string; email?: string } | null;
    sendPaylink?: boolean;
    serviceType: ServiceType;
  };

  if (!contactName?.trim()) return res.status(400).json({ error: 'Naam is verplicht.' });
  if (!phone?.trim()) return res.status(400).json({ error: 'Telefoon is verplicht.' });

  const BILLIT_API_BASE = process.env.BILLIT_API_BASE || 'https://api.billit.be';
  const BILLIT_API_KEY  = process.env.BILLIT_API_KEY!;
  const BILLIT_PARTY_ID = process.env.BILLIT_PARTY_ID!;

  if (!BILLIT_API_KEY || !BILLIT_PARTY_ID) {
    return res.status(500).json({ error: 'Server niet geconfigureerd: BILLIT_API_KEY/BILLIT_PARTY_ID ontbreken.' });
  }

  // klantgegevens → als er een aparte betaler is, gebruiken we diens naam/e-mail op de factuur
  const invoiceCustomerName  = payer?.name?.trim() || contactName.trim();
  const invoiceCustomerEmail = payer?.email?.trim() || email?.trim() || undefined;

  // beschrijving voor op factuur
  const whenTxt = windowChoice === 'andere'
    ? `${date} (${dayPart || ''})`
    : windowChoice;
  const ref = `WEB-${Date.now()}`;
  const longDesc = [
    desc?.trim() ? `Omschrijving: ${desc.trim()}` : '',
    address?.trim() ? `Adres: ${address.trim()}` : '',
    phone ? `Tel: ${phone}` : '',
    urgent ? 'Dringend binnen 24u' : 'Standaard',
    `Venster: ${whenTxt}`,
  ].filter(Boolean).join(' | ');

  const orderLines = calcLines(serviceType, Boolean(withCamera));

  try {
    // 1) Factuur aanmaken
    const orderNumber = `WEB-${todayISO()}-${Math.floor(Math.random()*9999)}`;
    const payload = {
      OrderType: 'Invoice',
      OrderDirection: 'Income',
      OrderNumber: orderNumber,
      OrderDate: todayISO(),
      Reference: ref,
      Remarks: longDesc, // interne opmerking/omschrijving
      Customer: {
        Name: invoiceCustomerName,
        PartyType: 'Customer',
        Addresses: [
          {
            AddressType: 'InvoiceAddress',
            Name: invoiceCustomerName,
            Email: invoiceCustomerEmail,
            CountryCode: 'BE',
          },
        ],
      },
      OrderLines: orderLines.map(l => ({
        Quantity: l.quantity,
        UnitPriceExcl: l.unitPriceExcl,
        Description: l.description,
        VATPercentage: l.vatPercentage,
      })),
    };

    const createResp = await fetch(`${BILLIT_API_BASE}/v1/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ApiKey': BILLIT_API_KEY,
        'PartyID': BILLIT_PARTY_ID,
        'Idempotent-Key': idemKey(),
      },
      body: JSON.stringify(payload),
    });

    const createText = await createResp.text();
    if (!createResp.ok) {
      return res.status(createResp.status).json({ step: 'create', error: createText || 'Aanmaken factuur mislukt' });
    }

    // Billit retourneert doorgaans het numerieke OrderID
    const orderId = (() => {
      try { return JSON.parse(createText); } catch { return Number(createText) || createText; }
    })();

    // 2) Factuur versturen per e-mail (Mollie-QR/link moet al geactiveerd zijn in Billit)
    //    Als sendPaylink uit staat, sturen we niet; maar het is meestal gewenst.
    if (sendPaylink !== false) {
      const sendResp = await fetch(`${BILLIT_API_BASE}/v1/orders/commands/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'ApiKey': BILLIT_API_KEY,
          'PartyID': BILLIT_PARTY_ID,
        },
        body: JSON.stringify({
          Transporttype: 'Email',
          OrderIDs: [orderId],
        }),
      });
      const sendText = await sendResp.text();
      if (!sendResp.ok) {
        return res.status(sendResp.status).json({ step: 'send', orderId, error: sendText || 'Verzenden mislukt' });
      }
    }

    // Antwoord naar frontend
    return res.status(200).json({
      ok: true,
      orderId,
      orderNumber,
      message: 'Aanvraag ontvangen. De factuur met betaallink is verzonden naar het opgegeven e-mailadres.',
      pay: { url: null }, // Billit geeft de betaallink niet altijd via API terug; die staat in de factuurmail/QR.
    });
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || 'Onbekende serverfout' });
  }
}
