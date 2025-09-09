import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

type Body = {
  amount: number;
  description?: string;
  customer: {
    name: string;
    email: string;
    phone?: string;
    street?: string;
    postalCode?: string;
    city?: string;
    country?: string; // 'BE'
    company?: string;
    vatNumber?: string;
    isCompany: boolean;
    privateVat?: '6' | '21';
  };
};

function eur(v: number) {
  return { currency: 'EUR', value: v.toFixed(2) };
}

// ➜ NIEUW: eenvoudige E.164 normalisatie (default BE)
function toE164(raw: string | undefined, country: string | undefined) {
  if (!raw) return undefined;
  const c = (country || 'BE').toUpperCase();
  let s = raw.replace(/[^\d+]/g, ''); // laat + en digits toe

  if (!s) return undefined;

  if (s.startsWith('+')) {
    const digits = s.replace(/\D/g, '');
    return digits.length >= 8 && digits.length <= 15 ? '+' + digits : undefined;
  }

  const digits = s.replace(/\D/g, '');

  if (c === 'BE') {
    // BE: 0xxxxxxxxx => +32 xxxxxxxxx
    if (digits.startsWith('0') && digits.length >= 9) {
      const d = '+32' + digits.slice(1);
      return d;
    }
    if (digits.startsWith('32')) {
      const d = '+' + digits;
      return d.length <= 16 ? d : undefined;
    }
  }

  // fallback: als het er op lijkt, prefixed met +
  if (digits.length >= 8 && digits.length <= 15) return '+' + digits;

  return undefined;
}

export async function POST(req: Request) {
  try {
    const { amount, description, customer } = (await req.json()) as Body;

    if (!amount || !customer?.name || !customer?.email) {
      return NextResponse.json({ ok: false, message: 'Bedrag, naam en e-mail zijn verplicht.' }, { status: 400 });
    }
    if (customer.isCompany && !customer.vatNumber) {
      return NextResponse.json(
        { ok: false, message: 'BTW-nummer is verplicht voor bedrijven (0% btw).' },
        { status: 400 }
      );
    }

    const API = process.env.MOLLIE_API_KEY!;
    const BASE = process.env.BASE_URL || 'http://localhost:3000';

    const vatRate =
      customer.isCompany ? '0.00' : customer.privateVat === '6' ? '6.00' : '21.00';

    const orderLine = {
      type: 'digital' as const,
      name: description || 'Turbo Services – Betaling',
      quantity: 1,
      unitPrice: eur(amount),
      totalAmount: eur(amount),
      vatRate,
      vatAmount: eur(
        customer.isCompany ? 0 : customer.privateVat === '6' ? amount * (6 / 106) : amount * (21 / 121)
      ),
    };

    const country = (customer.country || 'BE').toUpperCase();
    const phoneE164 = toE164(customer.phone, country);

    // Belangrijk: stuur phone ALLEEN mee als het geldig E.164 is
    const billingAddress: any = {
      givenName: customer.name,
      organizationName: customer.company || undefined,
      email: customer.email,
      streetAndNumber: customer.street || undefined,
      postalCode: customer.postalCode || undefined,
      city: customer.city || undefined,
      country,
    };
    if (phoneE164) billingAddress.phone = phoneE164;

    const metadata = {
      description: description || '',
      isCompany: customer.isCompany,
      company: customer.company || '',
      vatNumber: customer.vatNumber || '',
      privateVat: customer.privateVat || '',
      phone: phoneE164 || customer.phone || '',
    };

    const res = await fetch('https://api.mollie.com/v2/orders', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: eur(amount),
        orderNumber: `TS-${Date.now()}`,
        redirectUrl: `${BASE}/bedankt`,
        webhookUrl: `${BASE}/api/payment/webhook`,
        billingAddress,
        locale: 'nl_BE',
        payment: {},
        metadata,
        lines: [orderLine],
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json({ ok: false, message: `Mollie error: ${err}` }, { status: 500 });
    }

    const data = await res.json();
    const checkoutUrl = data?._links?.checkout?.href;
    if (!checkoutUrl) {
      return NextResponse.json({ ok: false, message: 'Geen checkout URL ontvangen.' }, { status: 500 });
    }

    return NextResponse.json({ ok: true, url: checkoutUrl, orderId: data.id });
  } catch (e: any) {
    return NextResponse.json({ ok: false, message: e?.message || 'Fout bij aanmaken betaling.' }, { status: 500 });
  }
}
