import type { Metadata } from "next";
import Link from "next/link";
import HeroLogo from "@/components/HeroLogo";

export const metadata: Metadata = {
  title: "Noodherstellingen | Turbo Services – RioolExpert",
  description:
    "Noodherstellingen bij lekkende of beschadigde leidingen. Beperk waterschade met snelle, gerichte ingrepen van Turbo Services.",
};

export default function NoodherstellingenPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white border-b">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              Noodherstellingen bij lekken en rioolschade
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Lekkende of beschadigde leidingen vragen snelle actie. Ik voer noodherstellingen
              uit om verdere schade te beperken en geef duidelijk advies over de definitieve oplossing.
            </p>
            <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row">
              <Link
                href="/boeken"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--turbo-red,#E34D35)] px-6 py-3 text-white text-sm shadow-sm transition hover:opacity-90"
              >
                Vraag noodherstelling aan →
              </Link>
              <a
                href="tel:+32485031877"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm text-slate-700 hover:bg-slate-50"
              >
                Bel: 0485 03 18 77
              </a>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Bij acute risico’s (overstroming, actief lek) is bellen meestal de snelste route.
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
            <h2 className="text-2xl font-semibold text-slate-900">Voor welke situaties?</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              <li>Lekkende of gesprongen leidingen die bereikbaar zijn.</li>
              <li>Ernstige verzakkingen of breuken zichtbaar op camera-inspectie.</li>
              <li>Rioolproblemen die onmiddellijk overlast of schade veroorzaken.</li>
              <li>Tijdelijke oplossingen in afwachting van grotere werken.</li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-slate-900">Werkwijze</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
              <li>Snelle inschatting van de urgentie (telefonisch of ter plaatse).</li>
              <li>Indien nodig eerst ontstopping en/of camera-inspectie voor een correcte diagnose.</li>
              <li>Uitvoeren van een noodherstelling in de mate van wat technisch en veilig haalbaar is.</li>
              <li>Duidelijke toelichting: wat is tijdelijk, wat is definitief?</li>
              <li>Advies over eventuele verdere werken en verantwoordelijken (aannemer, beheerder, eigenaar).</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Prijzen</h2>
            <p className="mt-4 text-slate-700">
              Noodherstellingen zijn meestal gekoppeld aan een interventie en eventueel
              camera-inspectie. De basisstructuur blijft:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              <li><strong>Interventie ontstopping / diagnose:</strong> €160</li>
              <li><strong>Camera-inspectie (indien nodig):</strong> €90</li>
              <li><strong>Totaalpakket (interventie + camera):</strong> €250</li>
            </ul>
            <p className="mt-3 text-slate-700">
              Bijkomende werken (bijvoorbeeld uitgebreide herstellingen of graafwerken) worden
              steeds vooraf besproken en afzonderlijk geoffreerd. Geen bijkomende posten zonder
              akkoord.
            </p>
          </div>
        </div>

        {/* CTA onderaan */}
        <div className="mt-12 rounded-2xl border bg-slate-50 p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-semibold text-slate-900">
            Risico op schade door lek of breuk?
          </h2>
          <p className="mb-5 text-slate-700">
            Meld kort wat je ziet (water, vocht, geur, locatie) en hoe dringend het is. Zo kan ik
            inschatten of een onmiddellijke interventie nodig is of dat het op korte termijn kan
            ingepland worden.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/boeken"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--turbo-red,#E34D35)] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
              Vraag noodherstelling aan →
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
