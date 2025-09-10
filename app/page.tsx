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
          {/* Tekstblok */}
          <div>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              Snel ter plaatse. Degelijk opgelost.{" "}
              <span className="text-[var(--turbo-red,#E34D35)]">Transparant geprijsd.</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Ontstopping <strong>€160</strong> (eerste uur incl.) · Camera-inspectie <strong>+€90</strong> ·
              Rookmachine/zender <strong>+€90</strong> · Extra 1/2 uur / Officieel verslag <strong>+€50</strong>.
            </p>

            {/* Chips – wrapt netjes op mobiel */}
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Ontstoppingen",
                "Camera-inspectie & rapport",
                "Gerichte rioolherstellingen",
                "Septische putten",
                "Spoed loodgieterij (24/7)",
                "Verwarmingsketels",
              ].map((x) => (
                <span
                  key={x}
                  className="rounded-full bg-white/80 px-3 py-1 text-sm text-slate-700 ring-1 ring-black/5"
                >
                  {x}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row">
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
                Bel: 0485 03 18 77
              </a>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              We plannen intern en bevestigen je tijdsvenster via sms/WhatsApp (geen publieke agenda).
            </p>
          </div>

          {/* Mascotte rechts – schaalt netjes, geen overlap */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/logo.png"
              alt="Turbo Services mascot"
              width={480}
              height={480}
              className="h-auto max-h-[380px] w-auto object-contain md:max-h-[480px]"
              priority
            />
          </div>
        </div>
      </section>

      {/* INTRO – Nieuwe naam, dezelfde expertise */}
      <section className="bg-slate-50 py-14">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Nieuwe naam, dezelfde expertise</h2>
          <p className="text-lg md:text-xl text-slate-700 mb-6">
            Ik ben <strong>Wim Verloo</strong>, oprichter van <strong>Turbo Ontstoppingen &amp; Ruimingen</strong>.
            Met jarenlange ervaring in complexe ontstoppingen en rioolherstellingen start ik nu
            <strong> Turbo Services</strong> – een frisse aanpak met dezelfde vakkennis,
            transparante prijzen en focus op <em>snelle, degelijke oplossingen</em>.
          </p>
          <p className="text-md text-slate-600 mb-8">
            Of het nu gaat om een dringende ontstopping, camera-inspectie, of spoed bij verwarmingsketels:
            u kan rekenen op de vakman waar al talloze klanten beroep op deden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/boeken"
              className="bg-[var(--turbo-red,#E34D35)] text-white font-medium px-6 py-3 rounded-lg hover:opacity-90"
            >
              Aanvraag binnen 24u
            </Link>
            <a
              href="tel:+32485031877"
              className="border border-slate-300 px-6 py-3 rounded-lg hover:bg-slate-100"
            >
              Bel direct: 0485 03 18 77
            </a>
          </div>
        </div>
      </section>

      {/* USP STRIP */}
      <section className="border-y bg-white">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-6 text-sm text-slate-700 md:grid-cols-3">
          <div className="flex items-center gap-2">
            <span className="inline-block text-lg">⚡️</span>
            <span>
              <strong>24u-belofte</strong> bij dringendheid
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block text-lg">🛠️</span>
            <span>
              <strong>Gerichte herstellingen</strong> – enkel wat nodig is
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block text-lg">🎥</span>
            <span>
              <strong>Camera-inspectie + rapport</strong> mogelijk
            </span>
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
            {/* Ontstoppingen */}
            <div className="rounded-2xl border p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Ontstoppingen</h3>
              <p className="mt-2 text-slate-600">
                Snelle interventies voor wc, gootsteen, douche en afvoer. Richtprijs <strong>vanaf €160</strong>.
                Optioneel camera-inspectie <strong>+€90</strong>.
              </p>
              <Link href="/diensten/ontstoppingen" className="mt-4 inline-block text-[var(--turbo-red,#E34D35)] underline">
                Meer over Ontstoppingen →
              </Link>
            </div>

            {/* Camera-inspectie & rapport */}
            <div className="rounded-2xl border p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Camera-inspectie &amp; rapport</h3>
              <p className="mt-2 text-slate-600">
                Exacte lokalisatie en duidelijke diagnose met beelden en advies. Ideaal bij moeilijke dossiers.
              </p>
              <Link href="/diensten/camera-inspectie-rapport" className="mt-4 inline-block text-[var(--turbo-red,#E34D35)] underline">
                Meer over Camera-inspectie &amp; rapport →
              </Link>
            </div>

            {/* Gerichte rioolherstellingen */}
            <div className="rounded-2xl border p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Gerichte rioolherstellingen</h3>
              <p className="mt-2 text-slate-600">
                We pakken het échte probleem aan zonder meteen alles te vervangen. Perfect om te overbruggen tot renovatie.
              </p>
              <Link href="/diensten/gerichte-rioolherstellingen" className="mt-4 inline-block text-[var(--turbo-red,#E34D35)] underline">
                Meer over Gerichte rioolherstellingen →
              </Link>
            </div>

            {/* Septische putten */}
            <div className="rounded-2xl border p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Septische putten</h3>
              <p className="mt-2 text-slate-600">
                Dringende interventies en structurele oplossingen. Herstel/vervanging van ingezakte of beschadigde putten.
              </p>
              <Link href="/diensten/septische-putten" className="mt-4 inline-block text-[var(--turbo-red,#E34D35)] underline">
                Meer over Septische putten →
              </Link>
            </div>

            {/* Spoed loodgieterij */}
            <div className="rounded-2xl border p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Spoed loodgieterij (24/7)</h3>
              <p className="mt-2 text-slate-600">
                Gesprongen kraan, waterlek of terugslag? Bel direct – transparante richtprijs en snelle interventie.
              </p>
              <Link href="/diensten/spoed-loodgieterij" className="mt-4 inline-block text-[var(--turbo-red,#E34D35)] underline">
                Meer over Spoed loodgieterij →
              </Link>
            </div>

            {/* Verwarmingsketels */}
            <div className="rounded-2xl border p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Verwarmingsketels</h3>
              <p className="mt-2 text-slate-600">
                Dringend vervangen? Richtprijs <strong>28 kW ≈ €3.500 excl.</strong> Plaatsing vaak mogelijk <strong>binnen 24u</strong>.
              </p>
              <Link href="/diensten/verwarmingsketels" className="mt-4 inline-block text-[var(--turbo-red,#E34D35)] underline">
                Meer over Verwarmingsketels →
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
              href="tel:+32485031877"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-700 hover:bg-slate-50"
            >
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
