import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

type Body = {
  amount: number; // bruto EUR, bv 159.99
  description?: string;
  customer: {
    name: string;
    email: string;
    phone?: string;
    street?: string;
    postalCode?: string;
    city?: string;
    country?: string; // 'BE'
    company?: string; // bedrijfsnaam
    vatNumber?: string; // BE0xxx...
    isCompany: boolean;
    privateVat?: '6' | '21'; // enkel bij particulier
  };
};

function eur(v: number) {
  return { currency: 'EUR', value: v.toFixed(2) };
}

export async function POST(req: Request) {
  try {
    const {
      amount,
      description,
      customer,
    } = (await req.json()) as Body;

    if (!amount || !customer?.name || !customer?.email) {
      return NextResponse.json({ ok: false, message: 'Bedrag, naam en e-mail zijn verplicht.' }, { status: 400 });
    }

    const API = process.env.MOLLIE_API_KEY!;
    const BASE = process.env.BASE_URL || 'http://localhost:3000';

    // BTW tarief bepalen
    // Bedrijf => 0%; Particulier => 6% of 21% (door klant gekozen)
    const vatRate = customer.isCompany ? '0.00'
                  : customer.privateVat === '6' ? '6.00'
                  : '21.00';

    // Orderregels (1 lijn met gekozen btw). Mollie verwacht bruto line price.
    const orderLine = {
      type: 'digital' as const,
      name: description || 'Turbo Services – Betaling',
      quantity: 1,
      unitPrice: eur(amount),
      totalAmount: eur(amount),
      vatRate,                // 0.00 / 6.00 / 21.00
      vatAmount: eur( 
        customer.isCompany ? 0 :
        customer.privateVat === '6' ? amount * (6/106) :
        amount * (21/121)
      ),
    };

    const billingAddress = {
      givenName: customer.name,
      organizationName: customer.company || undefined,
      email: customer.email,
      phone: customer.phone || undefined,
      streetAndNumber: customer.street || undefined,
      postalCode: customer.postalCode || undefined,
      city: customer.city || undefined,
      country: (customer.country || 'BE').toUpperCase(),
    };

    // Metadata voor jouw mail/boekhouding
    const metadata = {
      description: description || '',
      isCompany: customer.isCompany,
      company: customer.company || '',
      vatNumber: customer.vatNumber || '',
      privateVat: customer.privateVat || '',
      phone: customer.phone || '',
    };

    // Mollie ORDER aanmaken
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
        payment: {
          // Bancontact / iDEAL / kaart, Mollie kiest automatisch; je kan ook method opleggen
        },
        metadata,
        lines: [orderLine],
        // Voor intracommunautair kan je ook 'vatNumber' meesturen in billingAddress (Mollie gebruikt dit voor exports/overviews)
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
