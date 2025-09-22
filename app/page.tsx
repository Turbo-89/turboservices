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
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              Snel ter plaatse. Degelijk opgelost. <span className="text-[var(--turbo-red,#E34D35)]">Transparant geprijsd.</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Spoedinterventies sanitair & verwarmingsproblemen. Richtprijs <strong>vanaf €160</strong> (eerste uur incl.).
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Spoedloodgieterij (24/7)", "Herstellingen cv-ketel", "Lekkende kranen", "Sanitair vervangen", "Drukverlies oplossen", "Ontluchten leidingen"].map((x) => (
                <span key={x} className="rounded-full bg-white/80 px-3 py-1 text-sm text-slate-700 ring-1 ring-black/5">
                  {x}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row">
              <Link href="/boeken" className="inline-flex items-center gap-2 rounded-xl bg-[var(--turbo-red,#E34D35)] px-6 py-3 text-white shadow-sm transition hover:opacity-90">
                Aanvraag binnen 24u →
              </Link>
              <a href="tel:+32485031877" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-700 hover:bg-slate-50">
                Bel: 0485 03 18 77
              </a>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              We plannen intern en bevestigen je tijdsvenster via sms/WhatsApp.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/logo.png"
              alt="Turbo Services mascotte"
              width={480}
              height={480}
              className="h-auto max-h-[380px] w-auto object-contain md:max-h-[480px]"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Spoedservice zonder omwegen</h2>
          <p className="text-lg md:text-xl text-slate-700 mb-6">
            Ik ben <strong>Alan Debuyser</strong>, de vakman achter <strong>TurboServices</strong>. Met jarenlange ervaring in loodgieterij en herstellingen werk ik onafhankelijk en oplossingsgericht. Geen verwarring. Geen loze beloftes. Alleen snelle, degelijke service.
          </p>
          <p className="text-md text-slate-600 mb-8">
            Spoedinterventie nodig bij lek, defecte kraan, drukverlies of verwarmingsprobleem? Dan ben je hier aan het juiste adres.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/boeken" className="bg-[var(--turbo-red,#E34D35)] text-white font-medium px-6 py-3 rounded-lg hover:opacity-90">
              Aanvraag binnen 24u
            </Link>
            <a href="tel:+32485031877" className="border border-slate-300 px-6 py-3 rounded-lg hover:bg-slate-100">
              Bel direct: 0485 03 18 77
            </a>
          </div>
        </div>
      </section>

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
            <span className="inline-block text-lg">🔥</span>
            <span><strong>Herstellingen cv & sanitair</strong></span>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="rounded-2xl border bg-white p-6 shadow-sm md:p-8">
            <p className="text-slate-700">
              “Alan was er sneller dan verwacht. Geen discussies, alles werd meteen correct opgelost. Eerlijk, snel, en vakwerk.”
            </p>
            <p className="mt-2 text-sm text-slate-500">— Klant uit Boom</p>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/boeken" className="inline-flex items-center gap-2 rounded-xl bg-[var(--turbo-red,#E34D35)] px-6 py-3 text-white shadow-sm transition hover:opacity-90">
              Aanvraag binnen 24u →
            </Link>
            <a href="tel:+32485031877" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-700 hover:bg-slate-50">
              Bel nu: +32 485 03 18 77
            </a>
          </div>
          <p className="mt-3 text-center text-xs text-slate-500">
            We plannen intern en bevestigen je tijdsvenster via sms/WhatsApp.
          </p>
        </div>
      </section>
    </>
  );
}
