import type { Metadata } from "next";
import Link from "next/link";
import HeroLogo from "@/components/HeroLogo";

export const metadata: Metadata = {
  title:
    "Noodherstellingen riool & leidingen | Groot Antwerpen, Rupelstreek & Rivierenland | Turbo Services",
  description:
    "Noodherstellingen bij lekken, breuken en rioolschade. Snelle interventie om schade te beperken. Avond, weekend en feestdagen aan hetzelfde tarief. Actief in Groot Antwerpen, Rupelstreek en Rivierenland.",
};

export default function NoodherstellingenPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              Noodherstellingen bij lekken en rioolschade
            </h1>

            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Lekkende of beschadigde leidingen vereisen snelle en gerichte actie.
              Ik voer noodherstellingen uit om verdere schade te beperken en geef
              duidelijk advies over wat tijdelijk is en wat definitief moet worden opgelost.
            </p>

            {/* USP BLOK */}
            <ul className="mt-6 space-y-2 text-slate-700">
              <li>
                <strong>Avond, weekend en feestdagen:</strong> hetzelfde tarief
              </li>
              <li>
                <strong>Na 22u:</strong> supplement <strong>+50%</strong>
              </li>
              <li>
                <strong>Rechtstreeks contact</strong> met de uitvoerder (geen callcenter)
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
                Bel direct: 0485 03 18 77
              </a>

              <Link
                href="/boeken"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm text-slate-700 hover:bg-slate-50"
              >
                Vraag noodherstelling aan →
              </Link>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              Bij acute situaties (actief lek, overstroming) is bellen de snelste optie.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <HeroLogo variant="herstelling" />
          </div>
        </div>
      </section>

      {/* INHOUD */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Voor welke situaties?
            </h2>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              <li>Lekkende of gesprongen leidingen die bereikbaar zijn.</li>
              <li>Breuken of verzakkingen vastgesteld via camera-inspectie.</li>
              <li>Rioolproblemen die onmiddellijk schade of overlast veroorzaken.</li>
              <li>Tijdelijke oplossingen in afwachting van structurele werken.</li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-slate-900">
              Werkwijze
            </h3>

            <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
              <li>Snelle inschatting van de urgentie (telefonisch of ter plaatse).</li>
              <li>Indien nodig eerst diagnose via ontstopping en/of camera-inspectie.</li>
              <li>Uitvoeren van een noodherstelling binnen technisch veilige grenzen.</li>
              <li>Duidelijke uitleg: wat is tijdelijk, wat vraagt definitieve aanpak?</li>
              <li>Advies over verdere stappen (aannemer, beheerder, eigenaar).</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Prijzen
            </h2>

            <p className="mt-4 text-slate-700">
              Noodherstellingen worden uitgevoerd binnen een duidelijke en transparante
              prijsstructuur:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              <li>
                <strong>Interventie / diagnose:</strong> €160
              </li>
              <li>
                <strong>Camera-inspectie (indien nodig):</strong> €90
              </li>
              <li>
                <strong>Totaalpakket interventie + camera:</strong> €250
              </li>
            </ul>

            <p className="mt-3 text-slate-700">
              Bedragen zijn <strong>exclusief btw</strong>. Voor particuliere woningen ouder
              dan 10 jaar geldt doorgaans 6% btw, in andere privé-situaties 21%.
              Voor zakelijke klanten kan een btw-verlegging (0%) van toepassing zijn.
            </p>

            <p className="mt-3 text-slate-700">
              Bijkomende herstellingen of structurele werken worden altijd vooraf besproken
              en afzonderlijk geoffreerd. Geen extra kosten zonder akkoord.
            </p>
          </div>
        </div>

        {/* CTA ONDERAAN */}
        <div className="mt-12 rounded-2xl border bg-slate-50 p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold text-slate-900">
            Risico op schade door lek of breuk?
          </h2>

          <p className="mb-5 text-slate-700">
            Geef kort door wat je vaststelt (water, vocht, geur, locatie) en hoe dringend
            de situatie is. Zo kan ik correct inschatten of onmiddellijke interventie
            nodig is.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+32485031877"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--turbo-red,#E34D35)] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
              Bel direct: 0485 03 18 77
            </a>

            <Link
              href="/boeken"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm text-slate-700 hover:bg-slate-50"
            >
              Vraag noodherstelling aan →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
