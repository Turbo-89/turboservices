export const metadata = {
  title: 'Boeken – Turbo Services',
  description:
    'Plan je interventie en rond (optioneel) meteen de online betaling af. Ontstopping, camera-inspectie en ketelservice.',
};

export default function BoekenPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Boeken & betalen</h1>
        <p className="mt-2 text-slate-600">
          Boek je interventie. Wil je de betaling al afronden? Dat kan volledig <strong>los van de boeking</strong> via onze online betaalknop.
        </p>
      </header>

      {/* Kaarten met diensten + prijsindicatie + betaallink */}
      <section className="grid gap-6 md:grid-cols-3">
        {/* Ontstopping */}
        <article className="rounded-2xl border p-5">
          <h2 className="text-xl font-semibold">Ontstopping</h2>
          <p className="mt-1 text-slate-600">Rioleringen, afvoer, WC, keuken…</p>
          <div className="mt-3 text-2xl font-bold">€160</div>
          <div className="mt-5 flex flex-col gap-2">
            <a
              href="/betalen?amount=160&description=Ontstopping%20interventie"
              className="inline-flex items-center justify-center rounded-xl bg-black px-4 py-2 text-white hover:opacity-90"
            >
              Online betalen
            </a>
            <a
              href="/over-ons#contact"
              className="inline-flex items-center justify-center rounded-xl border px-4 py-2 hover:bg-slate-50"
            >
              Boeking/afspraak via contact
            </a>
          </div>
        </article>

        {/* Camera-inspectie */}
        <article className="rounded-2xl border p-5">
          <h2 className="text-xl font-semibold">Camera-inspectie</h2>
          <p className="mt-1 text-slate-600">Optioneel bij ontstopping</p>
          <div className="mt-3 text-2xl font-bold">+ €90</div>
          <div className="mt-5 flex flex-col gap-2">
            <a
              href="/betalen?amount=90&description=Camera-inspectie"
              className="inline-flex items-center justify-center rounded-xl bg-black px-4 py-2 text-white hover:opacity-90"
            >
              Online betalen
            </a>
            <a
              href="/over-ons#contact"
              className="inline-flex items-center justify-center rounded-xl border px-4 py-2 hover:bg-slate-50"
            >
              Boeking/afspraak via contact
            </a>
          </div>
        </article>

        {/* Ketelservice */}
        <article className="rounded-2xl border p-5">
          <h2 className="text-xl font-semibold">Ketelservice</h2>
          <p className="mt-1 text-slate-600">Onderhoud, aanbetaling of volledig</p>
          <div className="mt-3 space-y-1">
            <div className="text-sm text-slate-600">Aanbetaling</div>
            <div className="text-xl font-semibold">€150</div>
            <div className="text-sm text-slate-600 mt-2">Volledige service</div>
            <div className="text-xl font-semibold">€350</div>
          </div>
          <div className="mt-5 flex flex-col gap-2">
            <a
              href="/betalen?amount=150&description=Ketel%20–%20aanbetaling"
              className="inline-flex items-center justify-center rounded-xl bg-black px-4 py-2 text-white hover:opacity-90"
            >
              Online betalen – aanbetaling
            </a>
            <a
              href="/betalen?amount=350&description=Ketel%20–%20volledige%20service"
              className="inline-flex items-center justify-center rounded-xl bg-black px-4 py-2 text-white hover:opacity-90"
            >
              Online betalen – volledig
            </a>
            <a
              href="/over-ons#contact"
              className="inline-flex items-center justify-center rounded-xl border px-4 py-2 hover:bg-slate-50"
            >
              Boeking/afspraak via contact
            </a>
          </div>
        </article>
      </section>

      {/* Info-blok */}
      <section className="mt-10 rounded-2xl border p-5">
        <h3 className="text-lg font-semibold">Belangrijk</h3>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Betalen kan als <strong>particulier (6% of 21%)</strong> of als <strong>bedrijf (0% btw)</strong>. Je kiest dit op de betaalpagina.</li>
          <li>De betaling staat <strong>los van de boeking</strong>. Wij contacteren je na ontvangst voor de planning.</li>
          <li>Wil je een <strong>ander bedrag</strong> betalen? Ga naar <a className="underline" href="/betalen">/betalen</a> en vul zelf het bedrag in.</li>
        </ul>
      </section>
    </main>
  );
}
