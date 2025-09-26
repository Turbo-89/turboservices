import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Sanitaire herstellingen (24/7) | Turbo Services",
  description:
    "Lekkende kraan, kapotte wc of waterlek? Turbo Services staat 24/7 klaar voor alle sanitaire herstellingen. Snelle interventie en transparante richtprijs.",
};

export default function Page() {
  const faqs = [
    {
      question: "Welke sanitaire herstellingen voeren jullie uit?",
      answer:
        "Wij herstellen lekkende kranen, kapotte wc’s, leidingen die gesprongen zijn, defecte sifons en alle dringende sanitaire problemen.",
    },
    {
      question: "Kan ik jullie 24/7 bereiken voor een dringende herstelling?",
      answer:
        "Ja, onze nooddienst is dag en nacht bereikbaar, ook tijdens weekends en feestdagen.",
    },
    {
      question: "Werken jullie met een richtprijs?",
      answer:
        "Ja, wij communiceren altijd een transparante richtprijs zodat u meteen weet waar u aan toe bent.",
    },
  ];

  return (
    <main className="prose max-w-3xl mx-auto px-4 py-8">
      <h1>Sanitaire herstellingen met spoed</h1>
      <p>
        Heeft u last van een <strong>waterlek</strong>, een <strong>kraan die blijft druppelen</strong> 
        of een <strong>wc die niet meer doorspoelt</strong>? Onze ervaren loodgieters staan{" "}
        <strong>24/7 klaar</strong> voor alle soorten sanitaire herstellingen in Antwerpen en omgeving.
      </p>

      <h2>Veelvoorkomende sanitaire herstellingen</h2>
      <ul>
        <li>Herstellen van lekkende kranen en leidingen</li>
        <li>Reparatie van wc’s die blijven doorlopen of niet meer doorspoelen</li>
        <li>Vervangen van kapotte sifons of afvoeren</li>
        <li>Herstellen van douches, baden en lavabo’s</li>
        <li>Spoedinterventie bij waterlek of gesprongen leiding</li>
      </ul>

      <h2>Waarom kiezen voor Turbo Services?</h2>
      <ul>
        <li><strong>Snel ter plaatse</strong>: vaak binnen 2 uur in uw regio</li>
        <li><strong>Transparante richtprijs</strong>: geen verborgen kosten</li>
        <li><strong>Ervaren en erkende loodgieters</strong></li>
        <li><strong>24/7 bereikbaar</strong>, ook tijdens weekends en feestdagen</li>
      </ul>

      <h2>Sanitaire herstelling in spoed</h2>
      <p>
        Een waterlek of kapotte wc wacht niet. Bel ons rechtstreeks via de{" "}
        <Link href="/contact" className="text-blue-600 underline">
          spoedlijn
        </Link>{" "}
        en wij zorgen voor een snelle interventie. Dankzij onze voorraad aan onderdelen
        kunnen wij de meeste problemen <strong>onmiddellijk oplossen</strong>.
      </p>

      <h2>Werkgebied</h2>
      <p>
        Turbo Services is actief in heel provincie Antwerpen en de omliggende regio's.
        Zo bent u verzekerd van een <strong>lokale loodgieter</strong> die snel ter plaatse is.
      </p>

      <CTA />

      <FAQJsonLd faqs={faqs} />
    </main>
  );
}
