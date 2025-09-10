import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Waterlek spoed – wat nu doen tot de loodgieter er is?",
  description:
    "Waterlek? Sluit de hoofdafsluiter, beveilig de stroom en bel Turbo Services. 24/7 spoedhulp in Antwerpen en omgeving.",
};

export default function Page() {
  const faqs = [
    {
      question: "Waar zit de hoofdafsluiter?",
      answer:
        "Meestal bij de watermeter (kelder, meterkast of technische ruimte). Draai met de klok mee om te sluiten.",
    },
    {
      question: "Wordt een lek vaak vergoed door de verzekering?",
      answer:
        "Veel brandverzekeringen dekken waterschade of lekdetectie. Raadpleeg je polis. We bezorgen een verslag met foto’s indien nodig.",
    },
    {
      question: "Kunnen jullie zonder breken een lek vinden?",
      answer:
        "We gebruiken niet-invasieve methodes (druktest, camera, akoestiek). Als breekwerk toch nodig is, doen we dat gericht en beperkt.",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Waterlek spoed: wat nu doen?</h1>
      <p className="mt-3 text-slate-700">
        Een waterlek kan snel schade veroorzaken. Volg deze stappen om risico’s te beperken tot we arriveren.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Eerste hulp in 5 stappen</h2>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
        <li><b>Hoofdafsluiter dicht</b> (bij de watermeter).</li>
        <li><b>Stroom beveiligen</b> in de getroffen zone (schakel uit bij risico).</li>
        <li>Water opvangen, meubels/elektronica verplaatsen.</li>
        <li>Foto’s maken voor verzekeraar.</li>
        <li>Bel ons en geef adres + ernst door voor prioriteit.</li>
      </ol>

      <h2 className="mt-8 text-xl font-semibold">Hoe wij dit aanpakken</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Gerichte <b>lekdetectie</b> (zonder onnodig breekwerk).</li>
        <li><b>Noodherstel</b> of bypass om de watertoevoer veilig te herstellen.</li>
        <li>Rapport & advies voor definitief herstel of verzekering.</li>
      </ul>

      <CTA title="Onmiddellijk hulp nodig bij waterlek?" subtitle="Bel 24/7 – snelle interventie in Antwerpen en randgemeenten." />

      <div className="mt-10 border-t pt-6 text-sm text-slate-600">
        Gerelateerd:{" "}
        <Link href="/kennisbank/ontstopping/stank-uit-afvoer" className="underline">
          stank uit afvoer
        </Link>{" "}
        •{" "}
        <Link href="/kennisbank/ontstopping/camera-inspectie" className="underline">
          camera-inspectie van leidingen
        </Link>
      </div>

      <FAQJsonLd items={faqs} />
    </main>
  );
}
