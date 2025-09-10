import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Verwarmingsketels | Turbo Services",
  description:
    "Vervanging en plaatsing van (gas)condensatieketels met keuring en inregeling. Advies op maat en snelle planning in Antwerpen en omgeving.",
};

export default function Page() {
  const faqs = [
    {
      question: "Wanneer is mijn ketel aan vervanging toe?",
      answer:
        "Vaak na 12–15 jaar of bij herhaalde storingen, roest/lekkage en laag rendement. We doen eerst een objectieve check.",
    },
    {
      question: "Krijg ik vooraf een duidelijke offerte?",
      answer:
        "Ja. Na opmeting ontvang je een transparante offerte met opties, timing en garantie.",
    },
    {
      question: "Helpen jullie met premies en keuring?",
      answer:
        "We informeren over actuele premies en voorzien de wettelijke keuring en correcte inregeling.",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Verwarmingsketels</h1>
      <p className="mt-3 text-slate-700">
        We adviseren het juiste toestel voor jouw woning en budget. Plaatsing door erkende techniekers, met correcte
        rookgasafvoer, keuring en inregeling. Snelle planning mogelijk.
      </p>

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border p-5">
          <h2 className="text-lg font-semibold">Waarom vervangen?</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-700">
            <li>Hoger rendement en lager verbruik</li>
            <li>Meer comfort en betrouwbaarheid</li>
            <li>Moderne regeling en garantie</li>
          </ul>
        </div>
        <div className="rounded-xl border p-5">
          <h2 className="text-lg font-semibold">Werkwijze</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-700">
            <li>Plaatsbezoek en advies</li>
            <li>Transparante offerte</li>
            <li>Professionele plaatsing + keuring</li>
          </ul>
        </div>
      </section>

      <div className="mt-8 rounded-xl bg-slate-50 p-5 text-slate-700">
        Meer achtergrond?{" "}
        <Link href="/kennisbank/verwarmingsketel-vervangen" className="underline">ketel vervangen: prijs & timing</Link>{" "}
        •{" "}
        <Link href="/kennisbank/ketel-herstellen-of-vervangen" className="underline">
          herstellen of vervangen?
        </Link>
      </div>

      <CTA
        title="Nieuwe ketel laten plaatsen?"
        subtitle="Vraag een opmeting en transparante offerte. Snel ingepland."
        primaryHref="/aanvraag"
        primaryLabel="Offerte aanvragen"
      />
      <FAQJsonLd items={faqs} />
    </main>
  );
}
