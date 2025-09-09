'use client';
import React, { useState } from 'react';

type WindowChoice = 'vandaag' | 'morgen' | 'andere';
type DayPart = 'ochtend' | 'namiddag' | 'avond';

export default function BoekenPage() {
  // Form state
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMsg(null); setError(null);
    const fd = new FormData(e.currentTarget);

    const payload = {
      contactName: String(fd.get('contactName') || '').trim(),
      phone: String(fd.get('phone') || '').trim(),
      email: String(fd.get('email') || '').trim(),
      address: String(fd.get('address') || '').trim(),
      desc: String(fd.get('desc') || '').trim(),
      urgent: fd.get('urgent') === 'on',
      windowChoice: String(fd.get('windowChoice') || 'vandaag') as WindowChoice,
      date: String(fd.get('date') || ''),
      dayPart: String(fd.get('dayPart') || 'ochtend') as DayPart,
      withCamera: fd.get('withCamera') === 'on',
      serviceType: String(fd.get('serviceType') || 'ontstopping'),
    };

    if (!payload.contactName || !payload.phone) {
      setError('Naam en telefoon zijn verplicht.');
      return;
    }

    try {
      setLoading(true);
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json?.message || 'Versturen mislukt.');
      setMsg('Dank je! Je aanvraag is verzonden. We nemen snel contact op.');
      (e.target as HTMLFormElement).reset();
    } catch (err:any) {
      setError(err?.message || 'Er ging iets mis. Probeer opnieuw.');
    } finally {
      setLoading(false);
    }
  }

  // Snelknoppen voor betalen (prefill van bedrag + omschrijving)
  function payLink(amount: number, description: string) {
    const p = new URLSearchParams({ amount: String(amount), description });
    return `/betalen?${p.toString()}`;
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Afspraak maken & online betalen</h1>
        <p className="mt-2 text-slate-600">
          Vul links je gegevens in om een <strong>afspraak</strong> aan te vragen.
          Rechts kan je, volledig <strong>los van de boeking</strong>, meteen <strong>online betalen</strong>.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        {/* LINKERKOLOM – AFSPRAAKFORMULIER */}
        <div className="rounded-2xl border p-5">
          <h2 className="text-xl font-semibold">Afspraakformulier</h2>
          <p className="text-sm text-slate-600">Wij bevestigen per e-mail of telefoon.</p>

          <form onSubmit={submit} className="mt-5 space-y-4">
            {/* Persoonsgegevens */}
            <div className="grid gap-3 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium">Naam *</label>
                <input name="contactName" required className="mt-1 w-full rounded-md border px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium">Telefoon *</label>
                <input name="phone" required className="mt-1 w-full rounded-md border px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium">E-mail</label>
                <input name="email" type="email" className="mt-1 w-full rounded-md border px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium">Adres (interventieplaats)</label>
                <input name="address" className="mt-1 w-full rounded-md border px-3 py-2" />
              </div>
            </div>

            {/* Dienst & opties */}
            <div className="grid gap-3 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium">Dienst</label>
                <select name="serviceType" className="mt-1 w-full rounded-md border px-3 py-2">
                  <option value="ontstopping">Ontstopping</option>
                  <option value="camera_inspectie">Camera-inspectie</option>
                  <option value="ketel_aanbetaling">Ketel – aanbetaling</option>
                  <option value="ketel_volledig">Ketel – volledige service</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <input id="withCamera" name="withCamera" type="checkbox" defaultChecked />
                <label htmlFor="withCamera" className="text-sm">Camera gewenst</label>
              </div>
            </div>

            {/* Tijdvenster */}
            <div className="rounded-lg border p-3">
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-sm font-medium">Wanneer:</span>
                <label className="flex items-center gap-2 text-sm">
                  <input type="radio" name="windowChoice" value="vandaag" defaultChecked /> Vandaag
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="radio" name="windowChoice" value="morgen" /> Morgen
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="radio" name="windowChoice" value="andere" /> Andere datum
                </label>
                <input name="date" type="date" className="ml-auto rounded-md border px-3 py-1 text-sm" />
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-4">
                <span className="text-sm font-medium">Dagdeel:</span>
                <label className="flex items-center gap-2 text-sm">
                  <input type="radio" name="dayPart" value="ochtend" defaultChecked /> Ochtend
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="radio" name="dayPart" value="namiddag" /> Namiddag
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="radio" name="dayPart" value="avond" /> Avond
                </label>
                <label className="ml-auto flex items-center gap-2 text-sm">
                  <input type="checkbox" name="urgent" defaultChecked /> Spoed
                </label>
              </div>
            </div>

            {/* Beschrijving */}
            <div>
              <label className="block text-sm font-medium">Beschrijving</label>
              <textarea name="desc" rows={4} placeholder="Kort probleem omschrijven..."
                        className="mt-1 w-full resize-y rounded-md border px-3 py-2" />
            </div>

            {/* Feedback */}
            {msg && <p className="rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-700">{msg}</p>}
            {error && <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}

            <button
              disabled={loading}
              className="w-full rounded-md bg-black px-4 py-2 text-white disabled:opacity-50"
            >
              {loading ? 'Versturen…' : 'Aanvraag versturen'}
            </button>
          </form>
        </div>

        {/* RECHTERKOLOM – ONLINE BETALEN */}
        <div className="rounded-2xl border p-5">
          <h2 className="text-xl font-semibold">Online betalen</h2>
          <p className="text-sm text-slate-600">
            Betalen kan volledig los van je boeking. Kies hieronder een bedrag of vul zelf in op de betaalpagina.
          </p>

          <div className="mt-5 grid gap-3">
            <a
              href={payLink(160, 'Ontstopping interventie')}
              className="inline-flex items-center justify-center rounded-xl bg-black px-4 py-2 text-white hover:opacity-90"
            >
              Betaal €160 – Ontstopping
            </a>
            <a
              href={payLink(90, 'Camera-inspectie')}
              className="inline-flex items-center justify-center rounded-xl bg-black px-4 py-2 text-white hover:opacity-90"
            >
              Betaal €90 – Camera-inspectie
            </a>
            <a
              href={payLink(150, 'Ketel – aanbetaling')}
              className="inline-flex items-center justify-center rounded-xl bg-black px-4 py-2 text-white hover:opacity-90"
            >
              Betaal €150 – Ketel (aanbetaling)
            </a>
            <a
              href={payLink(350, 'Ketel – volledige service')}
              className="inline-flex items-center justify-center rounded-xl bg-black px-4 py-2 text-white hover:opacity-90"
            >
              Betaal €350 – Ketel (volledig)
            </a>
          </div>

          <div className="mt-6 rounded-lg border p-4">
            <p className="text-sm text-slate-700">
              Liever een ander bedrag? Klik hieronder en vul **bedrag** en **omschrijving** zelf in.
            </p>
            <a
              href="/betalen"
              className="mt-3 inline-flex items-center justify-center rounded-xl border px-4 py-2 hover:bg-slate-50"
            >
              Ga naar betaalpagina
            </a>
            <p className="mt-3 text-xs text-slate-500">
              Op de betaalpagina kan je kiezen: particulier (6% of 21%) of bedrijf (0% btw).
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
