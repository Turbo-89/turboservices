import Image from "next/image";
import Link from "next/link";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-sm text-slate-700 ring-1 ring-black/5">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 -z-10 opacity-30 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]">
          <div className="absolute -top-32 left-1/2 h-96 w-[120rem] -translate-x-1/2 bg-[radial-gradient(closest-side,_rgba(227,77,53,.15),_transparent_70%)]" />
        </div>

        <div className="container mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <Image
                src="/logo.png" // <-- zet je logo als /public/logo.png
                alt="Turbo Services"
                width={220}
                height={70}
                priority
                className="h-auto w-[180px] md:w-[220px]"
              />
            </div>

            <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
              <Pill>Ontstoppingen</Pill>
              <Pill>Camera-inspectie</Pill>
              <Pill>Gerichte rioolherstellingen</Pill>
              <Pill>Ketels & loodgieterij (spoed)</Pill>
            </div>

            <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              Snel ter plaatse. Degelijk opgelost. <span className="text-[var(--turbo-red,#E34D35)]">Transparant geprijsd.</span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              24u-belofte voor dringende interventies. Ontstopping <strong>€160</strong>, camera-inspectie <strong>+€90</strong>.
              We herstellen wat écht nodig is – geen overbodige werken.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/boeken"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--turbo-red,#E34D35)] px-6 py-3 text-white shadow-sm transition hover:opacity-90"
              >
                Aanvraag binnen 24u →
              </Link>
              <a
                href="tel:+32485031877"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-700 hover:bg-slate-50"
              >
                Bel nu: +32 485 03 18 77
              </a>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              In opstartfase bieden we ook standaard ontstoppingen aan. Bij te grote drukte beperken we die om kwaliteit te garanderen.
            </p>
          </div>
        </div>
      </section>

      {/* USP STRIP */}
      <section className="border-y bg-white">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-6 text-sm text-slate-700 md:grid-cols-3">
          <div className="flex items-center gap-2">
            <span className="inline-block text-lg">⚡️</span>
            <span><strong>24u-belofte</strong> bij dringendheid</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block text-lg">🛠️</span>
            <span><strong>Gerichte herstellingen</strong> – enkel wat nodig is</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block text-lg">🎥</span>
            <span><strong>Camera-inspectie + rapport</strong> mogelijk</span>
          </div>
        </div>
      </section>

      {/* DIENSTEN KAARTEN */}
      <section className="bg-white">
        <div className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">Diensten</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-slate-600">
            Kleine/korte werken, ook in spoed. We focussen op minimale ingrepen met maximaal resultaat.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Ontstoppingen</h3>
              <p className="mt-2 text-slate-600">
                Snelle interventies voor wc, gootsteen, douche en afvoer. Basis <strong>€160</strong>.
              </p>
              <Link href="/boeken" className="mt-4 inline-block text-[var(--turbo-red,#E34D35)] underline">
                Afspraak binnen 24u
              </Link>
            </div>

            <div className="rounded-2xl border p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Camera-inspectie & rapport</h3>
              <p className="mt-2 text-slate-600">
                Exacte lokalisatie en duidelijke diagnose. Optioneel bij ontstopping <strong>+€90</strong>.
              </p>
              <Link href="/diensten" className="mt-4 inline-block text-[var(--turbo-red,#E34D35)] underline">
                Meer info
              </Link>
            </div>

            <div className="rounded-2xl border p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Gerichte rioolherstellingen</h3>
              <p className="mt-2 text-slate-600">
                We herstellen het essentiële zodat je jaren verder kan. Geen volledige relining als dat niet hoeft.
              </p>
              <Link href="/diensten" className="mt-4 inline-block text-[var(--turbo-red,#E34D35)] underline">
                Meer info
              </Link>
            </div>

            <div className="rounded-2xl border p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Ketels & loodgieterij (spoed)</h3>
              <p className="mt-2 text-slate-600">
                Standaard ketelvervanging richtprijs <strong>€3.500 all-in</strong>. Spoedplaatsing mogelijk.
              </p>
              <Link href="/prijzen" className="mt-4 inline-block text-[var(--turbo-red,#E34D35)] underline">
                Bekijk prijzen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL / TRUST */}
      <section className="bg-slate-50">
        <div className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="rounded-2xl border bg-white p-6 shadow-sm md:p-8">
            <p className="text-slate-700">
              “Dankzij Wim (Turbo Services) eindelijk een blijvende oplossing. Geen onnodige werken – enkel wat echt moest. Snelle, eerlijke service.”
            </p>
            <p className="mt-2 text-sm text-slate-500">— Klant uit Antwerpen</p>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/boeken"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--turbo-red,#E34D35)] px-6 py-3 text-white shadow-sm transition hover:opacity-90"
            >
              Aanvraag binnen 24u →
            </Link>
            <a
              href="tel:+32470000000"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-700 hover:bg-slate-50"
            >
              Bel nu: +32 470 00 00 00
            </a>
          </div>
          <p className="mt-3 text-center text-xs text-slate-500">
            We plannen intern en bevestigen je tijdsvenster via sms/WhatsApp (geen publieke agenda).
          </p>
        </div>
      </section>
    </>
  );
}
