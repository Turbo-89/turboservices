import type { Metadata } from "next";
import Link from "next/link";
import HeroLogo from "@/components/HeroLogo";

export const metadata: Metadata = {
  title: "Camera-inspecties | Turbo Services – RioolExpert",
  description:
    "Camera-inspectie van riolering en afvoerleidingen. Breng breuken, verzakkingen en verstoppingen exact in beeld met Turbo Services.",
};

export default function CameraInspectiePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white border-b">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              Camera-inspecties van riolering en leidingen
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Met camera-inspectie zie je exact wat er in je leidingen gebeurt: breuken,
              verzakkingen, wortelgroei of hardnekkige verstoppingen. Ideaal bij terugkerende
              problemen of discussie over de oorzaak.
            </p>
            <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row">
              <Link
                href="/boeken"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--turbo-red,#E34D35)] px-6 py-3 text-white text-sm shadow-sm transition hover:opacity-90"
              >
                Plan camera-inspectie →
              </Link>
            <a
              href="tel:+32485031877"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm text-slate-700 hover:bg-slate-50"
            >
              Bel: 0485 03 18 77
            </a>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Beelden en verslag kunnen worden meegestuurd voor verzekering of aannemer.
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
            <h2 className="text-2xl font-semibold text-slate-900">Wanneer is camera-inspectie zinvol?</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              <li>Terugkerende verstoppingen op dezelfde plaats.</li>
              <li>Vermoeden van breuk, verzakking of wortelgroei in leidingen.</li>
              <li>Onverklaarbare geurproblemen of water dat blijft staan.</li>
              <li>Vochtproblemen langs leidingen of muren.</li>
              <li>Discussies met aannemer, syndicus of verzekering over oorzaak en aansprakelijkheid.</li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-slate-900">Werkwijze</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
              <li>Indien nodig wordt de leiding eerst ontstopt om de camera door te laten.</li>
              <li>De camera wordt ingebracht en de leiding wordt systematisch afgefilmd.</li>
              <li>Probleemzones (breuk, verzakking, wortelgroei, opstopping) worden duidelijk vastgelegd.</li>
              <li>Je krijgt een duidelijke uitleg over de oorzaak en de gevolgen.</li>
              <li>Beelden en/of een kort verslag kunnen worden aangeleverd voor dossieropbouw.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Prijzen</h2>
            <p className="mt-4 text-slate-700">
              Camera-inspectie wordt vaak gecombineerd met een ontstoppingsinterventie.
              De basisstructuur blijft dezelfde:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              <li><strong>Interventie ontstopping (indien nodig):</strong> €160</li>
              <li><strong>Camera-inspectie:</strong> €90</li>
              <li><strong>Totaalpakket (ontstopping + camera):</strong> €250</li>
            </ul>
            <p className="mt-3 text-slate-700">
              Deze tarieven gelden ook <strong>’s avonds en in het weekend</strong>, zonder toeslag.
              Bedragen zijn exclusief btw (6% of 21% naargelang de werken).
            </p>

            <h3 className="mt-8 text-xl font-semibold text-slate-900">Resultaat</h3>
            <p className="mt-3 text-slate-700">
              Met de beelden kun je gericht beslissen: plaatselijke herstelling, grotere vernieuwing of eerst
              een bijkomende expert inschakelen. Zo vermijd je onnodige breekwerken en kosten.
            </p>
          </div>
        </div>

        {/* CTA onderaan */}
        <div className="mt-12 rounded-2xl border bg-slate-50 p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold text-slate-900">
            Camera-inspectie nodig?
          </h2>
          <p className="mb-5 text-slate-700">
            Beschrijf kort de situatie en vermeld of er al eerdere verstoppingen waren. Op basis
            daarvan bepalen we of enkel een inspectie volstaat of een combinatie met ontstopping nodig is.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/boeken"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--turbo-red,#E34D35)] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
              Plan camera-inspectie →
            </Link>
            <a
              href="tel:+32485031877"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm text-slate-700 hover:bg-slate-50"
            >
              Bel: 0485 03 18 77
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
