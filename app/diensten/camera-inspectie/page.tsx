import type { Metadata } from "next";
import Link from "next/link";
import HeroLogo from "@/components/HeroLogo";

export const metadata: Metadata = {
  title:
    "Camera-inspectie riolering | Groot Antwerpen, Rupelstreek & Rivierenland | Turbo Services",
  description:
    "Camera-inspectie van riolering en afvoerleidingen. Breng breuken, verzakkingen en verstoppingen exact in beeld. Avond en weekend aan hetzelfde tarief. Actief in Groot Antwerpen, Rupelstreek, Rivierenland en Waasland.",
};

export default function CameraInspectiePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              Camera-inspectie van riolering en leidingen
            </h1>

            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Met camera-inspectie zie je exact wat er in je leidingen gebeurt:
              breuken, verzakkingen, wortelgroei of hardnekkige verstoppingen.
              Ideaal bij terugkerende problemen of discussie over de oorzaak.
            </p>

            <ul className="mt-6 space-y-2 text-slate-700">
              <li>
                <strong>Avond, weekend en feestdagen:</strong> hetzelfde tarief
              </li>
              <li>
                <strong>Na 22u:</strong> supplement <strong>+50%</strong>
              </li>
              <li>
                <strong>Beelden & verslag</strong> mogelijk voor verzekering of aannemer
              </li>
              <li>
                <strong>Actief in:</strong> Groot Antwerpen – Rupelstreek – Rivierenland
              </li>
            </ul>

            <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row">
              <a
                href="tel:+32485031877"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--turbo-red,#E34D35)] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                Bel 24/7: 0485 03 18 77
              </a>

              <Link
                href="/boeken"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-700 hover:bg-slate-50"
              >
                Plan camera-inspectie →
              </Link>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              Avond, weekend en feestdagen aan hetzelfde tarief.
              <strong> Na 22u geldt een supplement van +50%.</strong>
              Afspraakbevestiging via sms of WhatsApp.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <HeroLogo variant="camera" />
          </div>
        </div>
      </section>

      {/* INHOUD */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Wanneer is camera-inspectie zinvol?
            </h2>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              <li>Terugkerende verstoppingen op dezelfde plaats.</li>
              <li>Vermoeden van breuk, verzakking of wortelgroei.</li>
              <li>Rioolgeur of water dat blijft staan zonder zichtbare oorzaak.</li>
              <li>Vochtproblemen langs leidingen of muren.</li>
              <li>Discussie met aannemer, syndicus of verzekering.</li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-slate-900">
              Werkwijze
            </h3>

            <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
              <li>Indien nodig wordt de leiding eerst vrijgemaakt.</li>
              <li>De camera wordt ingebracht en systematisch gebruikt.</li>
              <li>Probleemzones worden duidelijk vastgelegd.</li>
              <li>Heldere uitleg over oorzaak en impact.</li>
              <li>Beelden of verslag voor dossieropbouw.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Prijzen</h2>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              <li><strong>Interventie (indien nodig):</strong> €160</li>
              <li><strong>Camera-inspectie:</strong> €90</li>
              <li><strong>Totaalpakket:</strong> €250</li>
            </ul>

            <p className="mt-3 text-slate-700">
              Bedragen zijn <strong>exclusief btw</strong>. Avond, weekend en
              feestdagen zonder toeslag.
              <strong> Na 22u geldt +50%.</strong>
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border bg-slate-50 p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold text-slate-900">
            Camera-inspectie nodig?
          </h2>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+32485031877"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--turbo-red,#E34D35)] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
              Bel 24/7: 0485 03 18 77
            </a>

            <Link
              href="/boeken"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm text-slate-700 hover:bg-slate-50"
            >
              Plan camera-inspectie →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
