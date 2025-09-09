'use client';
import { useState } from 'react';

export default function BetalenPage() {
  const [loading, setLoading] = useState(false);
  const [isCompany, setIsCompany] = useState(false);
  const [privateVat, setPrivateVat] = useState<'6' | '21'>('6');

  // Prefill vanuit URL-parameters
  const [prefill, setPrefill] = useState<{ amount?: string; description?: string }>({});
  // @ts-ignore: window bestaat enkel in browser
  React.useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const amount = params.get('amount') || undefined;
      const description = params.get('description') || undefined;
      setPrefill({ amount: amount ?? undefined, description: description ?? undefined });
    } catch {}
  }, []);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      amount: Number(fd.get('amount')),
      description: String(fd.get('description') || ''),
      customer: {
        name: String(fd.get('name') || ''),
        email: String(fd.get('email') || ''),
        phone: String(fd.get('phone') || ''),
        street: String(fd.get('street') || ''),
        postalCode: String(fd.get('postalCode') || ''),
        city: String(fd.get('city') || ''),
        country: String(fd.get('country') || 'BE'),
        company: isCompany ? String(fd.get('company') || '') : '',
        vatNumber: isCompany ? String(fd.get('vatNumber') || '') : '',
        isCompany,
        privateVat: isCompany ? undefined : privateVat,
      },
    };

    try {
      setLoading(true);
      const res = await fetch('/api/payment/create', {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!json.ok) throw new Error(json.message || 'Fout bij aanmaken betaling');
      window.location.href = json.url; // naar Mollie
    } catch (err:any) {
      alert(err.message || 'Er ging iets mis');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="text-2xl font-bold">Online betalen</h1>
      <p className="text-sm text-slate-600">Vul je gegevens in en kies het gewenste btw-regime. Het bedrag is vrij in te vullen.</p>
      <form onSubmit={submit} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium">Bedrag (EUR)</label>
          <input name="amount" type="number" step="0.01" min="1" required className="mt-1 w-full rounded-md border px-3 py-2"/>
        </div>

        <div>
          <label className="block text-sm font-medium">Omschrijving (optioneel)</label>
          <input name="description" type="text" placeholder="bv. Ontstopping, interventie..." className="mt-1 w-full rounded-md border px-3 py-2"/>
        </div>

        <div className="rounded-lg border p-3">
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" checked={!isCompany} onChange={()=>setIsCompany(false)} />
              Particulier
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" checked={isCompany} onChange={()=>setIsCompany(true)} />
              Bedrijf (0% btw)
            </label>
          </div>

          {!isCompany ? (
            <div className="mt-3 flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="privateVat" checked={privateVat==='6'} onChange={()=>setPrivateVat('6')} />
                6% (herstelling/renovatie voorwaarden)
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="privateVat" checked={privateVat==='21'} onChange={()=>setPrivateVat('21')} />
                21%
              </label>
            </div>
          ) : (
            <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium">Bedrijf</label>
                <input name="company" type="text" className="mt-1 w-full rounded-md border px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium">BTW-nummer</label>
                <input name="vatNumber" type="text" placeholder="BE0XXXXXXXXX" className="mt-1 w-full rounded-md border px-3 py-2" />
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">Naam</label>
            <input name="name" required className="mt-1 w-full rounded-md border px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">E-mail</label>
            <input name="email" type="email" required className="mt-1 w-full rounded-md border px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Telefoon</label>
            <input name="phone" className="mt-1 w-full rounded-md border px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Straat + nr.</label>
            <input name="street" className="mt-1 w-full rounded-md border px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Postcode</label>
            <input name="postalCode" className="mt-1 w-full rounded-md border px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Gemeente</label>
            <input name="city" className="mt-1 w-full rounded-md border px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Land</label>
            <input name="country" defaultValue="BE" className="mt-1 w-full rounded-md border px-3 py-2" />
          </div>
        </div>

        <button disabled={loading} className="rounded-md bg-black px-4 py-2 text-white disabled:opacity-50">
          {loading ? 'Doorsturen…' : 'Ga naar betalen'}
        </button>

        <div className="pt-2 text-sm">
          Of stuur ons meteen via WhatsApp:{' '}
          <a
            className="underline"
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ''}?text=${encodeURIComponent('Hallo Turbo Services, ik wil online betalen.')}`}
            target="_blank"
          >
            WhatsApp openen
          </a>
        </div>
      </form>
    </main>
  );
}
