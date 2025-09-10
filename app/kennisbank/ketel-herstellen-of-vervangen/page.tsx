import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Ketel herstellen of vervangen? Zo maak je de juiste keuze",
  description:
    "Twijfel je of je ketel nog te herstellen is of beter vervangen wordt? Gebruik onze checklist en krijg objectief advies.",
};

export default function Page() {
  const faqs = [
    {
      question: "Wanneer volstaat herstellen?",
      answer:
        "Bij jonge toestellen of wanneer het om een beperkt onderdeel gaat (sensor, ontsteking, pomp). We evalueren eerst de staat en het rendement.",
    },
    {
      question: "Wanneer beter vervangen?",
      answer:
        "Bij 12–15 jaar of ouder, frequente storingen, hoge verbruiken en dure onderdelen. Op termijn is vervangen vaak voordeliger.",
    },
    {
      question: "Hoe snel kunnen jullie plaatsen?",
      answer:
        "Na opmeting en offerte plannen we de plaatsing in overleg. In drukke periodes doen we ons best om snel te schakelen.",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">
        Ketel herstellen of vervangen? Zo beslis je slim
      </h1>
      <p className="mt-3 text-slate-700">
        Twijfel je tussen herstel en vervanging? Gebruik onderstaande checklist om de economische en praktische keuze te maken. 
        We adviseren objectief op basis van leeftijd, staat, verbruik en comfort.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Checklist: herstellen volstaat wanneer…</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Toestel is relatief jong (&lt; 10 jaar)</li>
        <li>Los probleem (sensor, ontsteker, kleine lekkage)</li>
        <li>Onderdelen zijn vlot beschikbaar</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Vervangen is slimmer wanneer…</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>12–15 jaar of ouder</li>
        <li>Terugkerende storingen of onbetrouwbaar comfort</li>
        <li>Hoge verbruiken en lage efficiëntie</li>
        <li>Dure of moeilijk verkrijgbare onderdelen</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Zo helpen wij je beslissen</h2>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
        <li><b>Technische check</b> – staat en veiligheid.</li>
        <li><b>Rendementsinschatting</b> – verbruik vs. nieuw toestel.</li>
        <li><b>Kostvergelijk</b> – herstel vs. vervanging, inclusief garantie.</li>
      </ol>

      <CTA
        title="Objectief advies nodig?"
        subtitle="We voeren een gerichte check uit en bezorgen een heldere aanbeveling met offerte-opties."
        primaryHref="/aanvraag"
        primaryLabel="Inspectie aanvragen"
      />

      <div className="mt-10 border-t pt-6 text-sm text-slate-600">
        Gerelateerd:{" "}
        <Link href="/kennisbank/verwarmingsketel-vervangen" className="underline">
          ketel vervangen: prijs & timing
        </Link>{" "}
        •{" "}
        <Link href="/kennisbank/ontstopping/camera-inspectie" className="underline">
          camera-inspectie leidingen
        </Link>
      </div>

      <FAQJsonLd items={faqs} />
    </main>
  );
}
