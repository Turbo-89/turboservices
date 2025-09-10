import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Verwarmingsketels (24u vervanging) | Turbo Services",
  description:
    "Dringend een nieuwe ketel nodig? Richtprijs 28 kW ≈ €3.500 excl. Snelle opmeting en 24u-plaatsing mogelijk. Geen eindeloze offertes—helder, snel en correct.",
};

export default function Page() {
  const faqs = [
    {
      question: "Waarom communiceren jullie een richtprijs (€3.500 excl. voor 28 kW)?",
      answer:
        "Omdat veel klanten dringend een oplossing willen zonder weken te wachten op offertes. Met een duidelijke richtprijs kun je meteen beslissen. Na een korte check verfijnen we de prijs enkel als de situatie afwijkt.",
    },
    {
      question: "Kan de ketel écht binnen 24 uur geplaatst worden?",
      answer:
        "Ja—op dit type dringende interventies zijn we ingericht. Bij standaardconfiguratie en vlotte bereikbaarheid plannen we doorgaans binnen 24 uur. Bel ons voor directe beschikbaarheid.",
    },
    {
      question: "Doen jullie ook plaatsbezoek en een gedetailleerde offerte?",
      answer:
        "Dat kan zeker. Maar onze kern is spoed: we geven snel een richtprijs en schakelen meteen door naar uitvoering. Wil je toch een uitgebreidere offerte, dan plannen we die in.",
    },
    {
      question: "Wat als ik een ander vermogen/merk of extra’s nodig heb?",
      answer:
        "Geen probleem. De richtprijs is het startpunt. Bij opmeting stemmen we merk/vermogen en opties (thermostaat, rookgas, leidingen) af en passen we de prijs transparant aan.",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Verwarmingsketels – snelle vervanging (24u)</h1>

      {/* Positionering op dringendheid */}
      <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <p className="text-slate-700">
          Moet je ketel <b>nu</b> vervangen worden? Wij focussen op <b>dringende vervangingen</b> zonder eindeloze
          offertetrajecten. Je krijgt meteen een <b>heldere richtprijs</b> en we plannen de plaatsing <b>binnen 24 uur</b>
          waar mogelijk. Snel, correct en transparant.
        </p>
      </div>

      {/* Richtprijs / wat inbegrepen */}
      <section className="mt-8 rounded-2xl border p-5">
        <h2 className="text-lg font-semibold text-slate-900">Richtprijs & wat je mag verwachten</h2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border p-4">
            <div className="text-slate-900 font-medium">Nieuwe condensatieketel – 28 kW</div>
            <div className="mt-1 text-2xl font-bold">≈ €3.500 <span className="text-base font-semibold">excl.</span></div>
            <ul className="mt-2 list-disc pl-5 text-slate-700 text-sm">
              <li>Voorbeeldconfiguratie: standaard woning, vervanging bestaand toestel</li>
              <li>Inclusief basisplaatsing en inregeling</li>
              <li>Heldere prijs vóór we starten</li>
            </ul>
          </div>

          <div className="rounded-xl border p-4">
            <div className="text-slate-900 font-medium">Wat kan de prijs beïnvloeden?</div>
            <ul className="mt-2 list-disc pl-5 text-slate-700 text-sm">
              <li>Afwijkend vermogen/merk of extra’s (thermostaat, zonekleppen)</li>
              <li>Aanpassingen aan rookgasafvoer/leidingen</li>
              <li>Complexe bereikbaarheid of bijkomende werken</li>
            </ul>
            <p className="mt-2 text-sm text-slate-600">
              We doen een <b>korte check/opmeting</b> en bevestigen de eindprijs transparant.
            </p>
          </div>
        </div>

        <p className="mt-3 text-sm text-slate-600">
          <b>Waarom zo duidelijk?</b> Omdat je bij spoed geen tijd hebt om offertes te verzamelen. Met een richtprijs
          kun je <b>nu</b> beslissen; wij zorgen voor een <b>vlotte en correcte</b> plaatsing.
        </p>
      </section>

      {/* 24u-werkwijze */}
      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border p-5">
          <h2 className="text-lg font-semibold">Onze 24u-werkwijze</h2>
          <ol className="mt-2 list-decimal pl-5 text-slate-700">
            <li><b>Intake & richtprijs</b> via telefoon of formulier</li>
            <li><b>Korte check/opmeting</b> (foto’s of ter plaatse)</li>
            <li><b>Plaatsing</b> – doorgaans binnen 24 uur</li>
            <li><b>Inregeling & keuring</b> volgens de regels</li>
          </ol>
        </div>
        <div className="rounded-xl border p-5">
          <h2 className="text-lg font-semibold">Wanneer vervangen logisch is</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-700">
            <li>Ketel 12–15 jaar of ouder</li>
            <li>Herhaalde storingen of lekkage</li>
            <li>Hoog verbruik/laag rendement</li>
          </ul>
          <p className="mt-2 text-sm text-slate-600">
            Nog twijfels? Lees:{" "}
            <Link href="/kennisbank/ketel-herstellen-of-vervangen" className="underline">
              herstellen of vervangen?
            </Link>
          </p>
        </div>
      </section>

      {/* Kennisbank links */}
      <div className="mt-8 rounded-xl bg-slate-50 p-5 text-slate-700">
        <b>Meer achtergrond?</b>{" "}
        <Link href="/kennisbank/verwarmingsketel-vervangen" className="underline">ketel vervangen: prijs & timing</Link>{" "}
        •{" "}
        <Link href="/kennisbank/ketel-herstellen-of-vervangen" className="underline">
          herstellen of vervangen?
        </Link>
      </div>

      <CTA
        title="Nieuwe ketel binnen 24 uur?"
        subtitle="Bel ons voor een directe richtprijs (28 kW ≈ €3.500 excl.) en snelle planning."
        primaryHref="/aanvraag"
        primaryLabel="Richtprijs & planning"
      />

      <FAQJsonLd items={faqs} />
    </main>
  );
}
