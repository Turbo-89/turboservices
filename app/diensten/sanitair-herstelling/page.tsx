import * as React from "react";
import type { Metadata } from "next";
import CTA from "@/components/kb/CTA";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Sanitaire herstellingen (24/7) | Turbo Services",
  description:
    "Lekkende kraan, kapotte wc of waterlek? Turbo Services staat 24/7 klaar voor alle sanitaire herstellingen in Antwerpen en omgeving. Snel ter plaatse en transparante richtprijs.",
};

export default function Page() {
  const faqs = [
    {
      question: "Welke sanitaire herstellingen voeren jullie uit?",
      answer:
        "Wij herstellen lekkende kranen, kapotte wc’s, gesprongen leidingen, defecte sifons, douches, baden en lavabo’s. Voor elk acuut sanitair probleem kan u ons 24/7 bereiken.",
    },
    {
      question: "Zijn jullie dag en nacht bereikbaar?",
      answer:
        "Ja, onze nooddienst is 24/7 bereikbaar, ook tijdens weekends en feestdagen. We zorgen voor een snelle interventie bij dringende sanitaire problemen.",
    },
    {
      question: "Werken jullie met vaste richtprijzen?",
      answer:
        "Ja, wij communiceren altijd een transparante richtprijs zodat u meteen weet waar u aan toe bent. Geen verrassingen achteraf.",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-10">
      {/* Intro */}
      <section className="bg-white rounded-2xl shadow p-6 md:p-10">
        <h1 className="text-3xl font-bold mb-4">
          Sanitaire herstellingen met spoed
        </h1>
        <p className="text-lg leading-relaxed">
          Heeft u een <strong>lekkende kraan</strong>, een{" "}
          <strong>wc die niet meer doorspoelt</strong> of een{" "}
          <strong>gesprongen leiding</strong>? Turbo Services staat{" "}
          <strong>24/7</strong> voor u klaar. Onze ervaren loodgieters lossen
          uw sanitair probleem snel en vakkundig op, met een{" "}
          <strong>transparante richtprijs</strong> zodat u meteen weet waar u aan
          toe bent.
        </p>
      </section>

      {/* Veelvoorkomende herstellingen */}
      <section className="bg-white rounded-2xl shadow p-6 md:p-10">
        <h2 className="text-2xl font-semibold mb-4">
          Veelvoorkomende sanitaire herstellingen
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Herstellen van lekkende kranen en leidingen</li>
          <li>Reparatie van wc’s die blijven doorlopen of niet meer doorspoelen</li>
          <li>Vervangen van kapotte sifons of afvoeren</li>
          <li>Herstellen van douches, baden en lavabo’s</li>
          <li>Spoedinterventie bij waterlek of gesprongen leiding</li>
        </ul>
      </section>

      {/* Waarom kiezen */}
      <section className="bg-white rounded-2xl shadow p-6 md:p-10">
        <h2 className="text-2xl font-semibold mb-4">
          Waarom kiezen voor Turbo Services?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Snel ter plaatse</strong>: binnen 24 uur hersteld
          </li>
          <li>
            <strong>Transparante richtprijs</strong>: geen verborgen kosten
          </li>
          <li>
            <strong>Ervaren en erkende loodgieters</strong>
          </li>
          <li>
            <strong>24/7 bereikbaar</strong>, ook tijdens weekends en feestdagen
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
          Zo bent u verzekerd van een <strong>lokale loodgieter</strong> die snel
          ter plaatse is voor sanitaire herstellingen.
        </p>
      </section>

      <CTA />
      <FAQJsonLd items={faqs} />
    </main>
  );
}
