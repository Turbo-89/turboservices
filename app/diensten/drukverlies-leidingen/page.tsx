import * as React from "react";
import type { Metadata } from "next";
import CTA from "@/components/kb/CTA";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Drukverlies & leidingen ontluchten | Turbo Services",
  description:
    "Last van drukverlies in leidingen of radiatoren die niet goed warm worden? Turbo Services helpt u met het opsporen en oplossen van drukverlies en het professioneel ontluchten van uw installatie.",
};

export default function Page() {
  const faqs = [
    {
      question: "Wat is de oorzaak van drukverlies in mijn installatie?",
      answer:
        "Drukverlies kan ontstaan door kleine lekken, versleten onderdelen of lucht in de leidingen. Onze techniekers sporen de oorzaak snel op en lossen het probleem blijvend op.",
    },
    {
      question: "Hoe merk ik dat mijn installatie ontlucht moet worden?",
      answer:
        "Borrelende geluiden, radiatoren die niet volledig warm worden of onstabiele druk zijn duidelijke signalen dat er lucht in de leidingen zit.",
    },
    {
      question: "Kan ik zelf mijn installatie ontluchten?",
      answer:
        "Kleine luchtproblemen kan u zelf oplossen met een ontluchtingssleutel. Bij terugkerend drukverlies of hardnekkige luchtproblemen schakelt u best een vakman in.",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-10">
      {/* Intro */}
      <section className="bg-white rounded-2xl shadow p-6 md:p-10">
        <h1 className="text-3xl font-bold mb-4">
          Drukverlies en leidingen ontluchten
        </h1>
        <p className="text-lg leading-relaxed">
          Heeft u last van <strong>drukverlies in uw cv-installatie</strong> of{" "}
          <strong>radiatoren die niet goed warm worden</strong>? Vaak is{" "}
          <strong>lucht in de leidingen</strong> de boosdoener. Turbo Services
          staat klaar om uw installatie professioneel te ontluchten en blijvend
          drukverlies te verhelpen.
        </p>
      </section>

      {/* Veelvoorkomende problemen */}
      <section className="bg-white rounded-2xl shadow p-6 md:p-10">
        <h2 className="text-2xl font-semibold mb-4">
          Veelvoorkomende problemen bij drukverlies
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Installatie verliest continu druk</li>
          <li>Radiatoren worden niet volledig warm</li>
          <li>Borrelende of tikkende geluiden in de leidingen</li>
          <li>Regelmatig bijvullen van het systeem</li>
          <li>Kleine lekkages in leidingen of koppelingen</li>
        </ul>
      </section>

      {/* Waarom Turbo Services */}
      <section className="bg-white rounded-2xl shadow p-6 md:p-10">
        <h2 className="text-2xl font-semibold mb-4">
          Waarom Turbo Services voor drukverlies?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Snelle diagnose</strong>: wij sporen lekken en luchtproblemen
            efficiënt op
          </li>
          <li>
            <strong>Professioneel ontluchten</strong> van leidingen en radiatoren
          </li>
          <li>
            <strong>Structurele oplossingen</strong> i.p.v. tijdelijk bijvullen
          </li>
          <li>
            <strong>Ervaren techniekers</strong> met kennis van cv- en
            sanitaire systemen
          </li>
        </ul>
      </section>

      {/* Werkgebied */}
      <section className="bg-white rounded-2xl shadow p-6 md:p-10">
        <h2 className="text-2xl font-semibold mb-4">
          Werkgebied in provincie Antwerpen en omgeving
        </h2>
        <p className="leading-relaxed">
          Turbo Services is actief in heel provincie Antwerpen en de omliggende regio's.
          Zo bent u verzekerd van een <strong>lokale technieker</strong> die snel
          ter plaatse is voor het oplossen van drukverlies of het ontluchten van
          leidingen.
        </p>
      </section>

      <CTA />
      <FAQJsonLd items={faqs} />
    </main>
  );
}
