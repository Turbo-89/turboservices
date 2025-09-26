import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
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
    <main>
      {/* Hero / Intro */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">
            Sanitaire herstellingen met spoed
          </h1>
          <p className="text-lg mb-6">
            Heeft u een <strong>lekkende kraan</strong>, een{" "}
            <strong>wc die niet meer doorspoelt</strong> of een{" "}
            <strong>gesprongen leiding</strong>? Turbo Services staat{" "}
            <strong>24/7</strong> voor u klaar. Onze ervaren loodgieters lossen
            uw sanitair probleem snel en vakkundig op.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Bel ons nu
          </Link>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <div>
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
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Waarom kiezen voor Turbo Services?
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Snel ter plaatse</strong>: vaak binnen 2 uur in uw regio
            </li>
            <li>
              <strong>Transparante richtprijs</strong>: geen verborgen kosten
            </li>
            <li>
              <strong>Ervaren en erkende loodgieters</strong>
            </li>
            <li>
              <strong>24/7 bereikbaar</strong>, ook tijdens weekends en
              feestdagen
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Werkgebied in Antwerpen en omgeving
          </h2>
          <p>
            Turbo Services is actief in heel Antwerpen en de omliggende
            gemeenten. Zo bent u verzekerd van een{" "}
            <strong>lokale loodgieter</strong> die snel ter plaatse is voor
            sanitaire herstellingen.
          </p>
        </div>
      </section>

      <CTA />

      <FAQJsonLd items={faqs} />
    </main>
  );
}
