'use client';

import { useState } from 'react';
import Link from 'next/link';
import HeroLogo from '@/components/HeroLogo';

export default function BoekenPage() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMsg(null);
    setError(null);

    const fd = new FormData(e.currentTarget);
    const payload = {
      contactName: String(fd.get('contactName') || '').trim(),
      phone: String(fd.get('phone') || '').trim(),
      email: String(fd.get('email') || '').trim(),
      address: String(fd.get('address') || '').trim(),
      desc: String(fd.get('desc') || '').trim(),
      urgent: fd.get('urgent') === 'on',
      windowChoice: String(fd.get('windowChoice') || 'vandaag'),
      date: String(fd.get('date') || ''),
      dayPart: String(fd.get('dayPart') || 'ochtend'),
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json?.message || 'Versturen mislukt.');
      setMsg('Dank je. Je aanvraag is verzonden. We nemen snel contact op.');
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setError(err?.message || 'Er ging iets mis. Probeer opnieuw.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white border-b">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              Afspraak maken voor{" "}
              <span className="text-[var(--turbo-red,#E34D35)]">ontstopping, camera-inspectie</span>
              <span className="block mt-1">of noodherstelling.</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Vul je gegevens in en beschrijf kort het probleem. We plannen je interventie in en
              bevestigen het tijdsvenster via sms of WhatsApp. Je kan ook altijd bellen voor directe
              afstemming.
            </p>

            <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row">
              <a
                href="tel:+32485031877"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-700 hover:bg-slate-50"
              >
                Bel 24/7: 0485 03 18 77
              </a>
              <Link
                href="/prijzen"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--turbo-red,#E34D35)] px-6 py-3 text-white shadow-sm transition hover:opacity-90 text-sm"
              >
                Bekijk tarieven →
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <HeroLogo variant="ontstopping" />
          </div>
        </div>
      </section>

      {/* FORMULIER + ONLINE BETALEN */}
      <main className="mx-auto max-w-6xl px-4 py-10">
        <header className="mb-8">
          <h2 className="text-2xl font-bold">Afspraak &amp; online betaling</h2>
          <p className="mt-2 text-slate-600">
            Links vraag je een <strong>interventie</strong> aan, rechts kan je – volledig los van de
            boeking – een <strong>online betaling</strong> uitvoeren.
          </p>
        </header>

        <section className="grid gap-8 md:grid-cols-2">
          {/* LINKERKOLOM – AFSPRAAKFORMULIER */}
          <div className="rounded-2xl border p-5">
            <h3 className="text-xl font-semibold">Afspraakformulier</h3>
            <p className="text-sm text-slate-600">Wij bevestigen per sms, WhatsApp of telefoon.</p>

            <form onSubmit={submit} className="mt-5 space-y-4">
              {/* Persoonsgegevens */}
              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium">Naam *</label>
                  <input
                    name="contactName"
                    required
                    className="mt-1 w-full rounded-md border px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Telefoon *</label>
                  <input
                    name="phone"
                    required
                    className="mt-1 w-full rounded-md border px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">E-mail</label>
                  <input
                    name="email"
                    type="email"
                    className="mt-1 w-full rounded-md border px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Adres (interventieplaats)</label>
                  <input
                    name="address"
                    className="mt-1 w-full rounded-md border px-3 py-2"
                  />
                </div>
              </div>

              {/* Dienst & opties */}
              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium">Dienst</label>
                  <select
                    name="serviceType"
                    className="mt-1 w-full rounded-md border px-3 py-2"
                    defaultValue="ontstopping"
                  >
                    <option value="ontstopping">Ontstopping</option>
                    <option value="camera_inspectie">Camera-inspectie</option>
                    <option value="noodherstelling">Noodherstelling</option>
                    <option value="andere">Andere</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <input id="withCamera" name="withCamera" type="checkbox" defaultChecked />
                  <label htmlFor="withCamera" className="text-sm">
                    Camera gewenst (indien relevant)
                  </label>
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
                  <input
                    name="date"
                    type="date"
                    className="ml-auto rounded-md border px-3 py-1 text-sm"
                  />
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
                <textarea
                  name="desc"
                  rows={4}
                  placeholder="Kort probleem omschrijven… (bv. wc verstopt, water dat terugkomt, geurhinder)"
                  className="mt-1 w-full resize-y rounded-md border px-3 py-2"
                />
              </div>

              {/* Feedback */}
              {msg && (
                <p className="rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
                  {msg}
                </p>
              )}
              {error && (
                <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
                  {error}
                </p>
              )}

              <button
                disabled={loading}
                className="w-full rounded-md bg-[var(--turbo-red,#E34D35)] px-4 py-2 text-white text-sm font-medium disabled:opacity-50"
              >
                {loading ? 'Versturen…' : 'Aanvraag versturen'}
              </button>
            </form>
          </div>

          {/* RECHTERKOLOM – ONLINE BETALEN */}
          <div className="rounded-2xl border p-5">
            <h3 className="text-xl font-semibold">Online betalen</h3>
            <p className="text-sm text-slate-600">
              Betalen kan volledig los van je boeking. Klik hieronder en vul het{" "}
              <strong>bedrag</strong> en je <strong>gegevens</strong> in. Dit is handig bij
              voorschotten of afspraken op afstand.
            </p>

            <a
              href="/betalen"
              className="mt-5 inline-flex items-center justify-center rounded-xl bg-[var(--turbo-red,#E34D35)] px-4 py-2 text-sm font-medium text-white hover:opacity-90"
            >
              Online betalen
            </a>

            <p className="mt-3 text-xs text-slate-500">
              Op de betaalpagina kies je of je particulier bent (6% of 21% btw naargelang situatie) of
              bedrijf (btw-verlegging mogelijk bij medecontractant).
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
