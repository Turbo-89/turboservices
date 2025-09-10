import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Verwarmingsketel vervangen: prijs, timing en subsidies",
  description:
    "Is je ketel aan vervanging toe? Lees alles over prijsindicaties, timing, wettelijke aandachtspunten en Vlaamse premies. Turbo Services plaatst snel en erkend.",
};

export default function Page() {
  const faqs = [
    {
      question: "Wanneer is mijn ketel aan vervanging toe?",
      answer:
        "Vaak na 12–15 jaar, of bij herhaalde defecten, roest/lekkage en een inefficiënte verbranding. We voeren graag een objectieve inspectie uit.",
    },
    {
      question: "Wat kost een nieuwe condensatieketel ongeveer?",
      answer:
        "Dat hangt af van vermogen, merk en complexiteit. We geven vooraf een heldere, opmetingsgebonden offerte met opties.",
    },
    {
      question: "Zijn er Vlaamse premies of subsidies?",
      answer:
        "Er bestaan vaak premies of fiscale voordelen, afhankelijk van jouw situatie en werken. We helpen je met actuele info en de aanvraag.",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">
        Verwarmingsketel vervangen: prijs, timing & subsidies
      </h1>
      <p className="mt-3 text-slate-700">
        Overweeg je een nieuwe (gas)condensatieketel of een efficiënter alternatief? We bekijken samen je verbruik,
        woning en budget en adviseren de beste keuze. Plaatsing door erkende techniekers, met correcte keuring en inregeling.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Signalen dat vervangen logisch is</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Ouderdom (&gt; 12–15 jaar) of frequente storingen</li>
        <li>Hoge energiefactuur en inefficiënte verbranding</li>
        <li>Onderdelen moeilijk te verkrijgen</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Prijs & planning</h2>
      <p className="mt-3 text-slate-700">
        We starten met een <b>plaatsbezoek/opmeting</b>, bespreken opties (vermogen, merk, type), en bezorgen je een
        <b> transparante offerte</b>. Plaatsing gebeurt in overleg – vaak kan dit zeer snel ingepland worden.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Wetgeving & premies</h2>
      <p className="mt-3 text-slate-700">
        We informeren je over huidige vereisten (keuring, rookgasafvoer, ventilatie) en mogelijke <b>premies/subsidies</b>.
        De regelingen wijzigen regelmatig; we helpen je met de meest recente info en aanvraag.
      </p>

      <CTA
        title="Nieuwe ketel laten plaatsen?"
        subtitle="Vraag een snelle opmeting en transparante offerte. Plaatsing door erkende techniekers."
        primaryHref="/aanvraag"
        primaryLabel="Offerte aanvragen"
      />

      <div className="mt-10 border-t pt-6 text-sm text-slate-600">
        Gerelateerd:{" "}
        <Link href="/kennisbank/ketel-herstellen-of-vervangen" className="underline">
          herstellen of vervangen?
        </Link>{" "}
        •{" "}
        <Link href="/kennisbank/ontstopping/ontstopping-kost" className="underline">
          kosten transparantie
        </Link>
      </div>

      <FAQJsonLd items={faqs} />
    </main>
  );
}
