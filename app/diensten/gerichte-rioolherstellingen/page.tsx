import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Gerichte rioolherstellingen | Turbo Services",
  description:
    "We pakken het échte probleem aan zonder meteen alles te vervangen. Ideaal om te overbruggen tot volledige renovatie binnen budget.",
};

export default function Page() {
  const faqs = [
    {
      question: "Doen jullie volledige relining/vervanging?",
      answer:
        "We focussen op gerichte herstellingen. Moet er toch groter worden aangepakt, dan adviseren we eerlijk en plannen we dat met duidelijke offerte.",
    },
    {
      question: "Hoe bepalen jullie waar hersteld moet worden?",
      answer:
        "Met camera-inspectie en lokalisatie bepalen we exact de schadezone. Zo beperken we breekwerk en kosten.",
    },
    {
      question: "Is dit een duurzame oplossing?",
      answer:
        "Ja, het is bedoeld om het probleem nu écht weg te nemen. Bij structurele schade bespreken we een gefaseerd renovatieplan.",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Gerichte rioolherstellingen</h1>
      <p className="mt-3 text-slate-700">
        Onze visie: <b>we lossen het probleem op</b>, zonder meteen een volledige relining of totaalrenovatie. Perfect
        om te <b>overbruggen</b> tot er budget is voor een grotere aanpak. Zo hou je de kosten onder controle en ben je
        snel weer operationeel.
      </p>

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border p-5">
          <h2 className="text-lg font-semibold">Typische cases</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-700">
            <li>Lokale breuk of verzakking</li>
            <li>Foutieve aansluiting of instorting in bocht</li>
            <li>Terugkerende prop op dezelfde plek</li>
          </ul>
        </div>
        <div className="rounded-xl border p-5">
          <h2 className="text-lg font-semibold">Aanpak</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-700">
            <li>Camera-inspectie en markering bovengronds</li>
            <li>Gericht openmaken, herstellen, testen</li>
            <li>Rapport en advies voor latere renovatie</li>
          </ul>
        </div>
      </section>

      <div className="mt-8 rounded-xl bg-slate-50 p-5 text-slate-700">
        <b>Onderbouwing:</b> we werken geregeld met{" "}
        <span className="whitespace-nowrap">verzekeraars</span> en{" "}
        <span className="whitespace-nowrap">gemeentelijke diensten</span>; onze rapporten zijn daarop afgestemd.
      </div>

      <CTA title="Gerichte herstelling nodig?" subtitle="We pakken het probleem aan en beperken kosten en breekwerk." />
      <FAQJsonLd items={faqs} />
    </main>
  );
}
