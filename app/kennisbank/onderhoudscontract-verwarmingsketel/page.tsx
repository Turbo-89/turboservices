import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Onderhoudscontract verwarmingsketel | Turbo Services",
  description:
    "Waarom kiezen voor een onderhoudscontract voor uw verwarmingsketel? Ontdek voordelen, verplichtingen en hoe het storingen voorkomt.",
};

export default function Page() {
  const faqs = [
    {
      question: "Waarom een onderhoudscontract afsluiten?",
      answer:
        "Met een onderhoudscontract blijft uw ketel in topconditie, voldoet u aan wettelijke verplichtingen en verkleint u de kans op storingen.",
    },
    {
      question: "Wat zit er in een onderhoudscontract?",
      answer:
        "Periodieke controles, reiniging, afstelling van brander, rookgasmeting en een verslag dat u nodig heeft voor verzekering en keuring.",
    },
    {
      question: "Hoe vaak moet mijn ketel onderhouden worden?",
      answer:
        "In Vlaanderen is een tweejaarlijks onderhoud verplicht voor gasketels en jaarlijks voor stookolieketels. Met een contract vergeet u dit nooit.",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-10">
      <section className="bg-white rounded-2xl shadow p-6 md:p-10">
        <h1 className="text-3xl font-bold mb-4">Onderhoudscontract voor uw verwarmingsketel</h1>
        <p className="text-lg leading-relaxed">
          Met een <strong>onderhoudscontract</strong> bent u zeker van regelmatige controles en wettelijke conformiteit. 
          Dit garandeert veiligheid, efficiëntie en minder kans op <strong>storingen of spoedvervanging</strong>.
        </p>
      </section>

      <section className="bg-white rounded-2xl shadow p-6 md:p-10">
        <h2 className="text-2xl font-semibold mb-4">Wat zit er in?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Periodiek onderhoud volgens wetgeving.</li>
          <li>Reiniging, afstelling en rookgasmeting.</li>
          <li>Officieel attest voor verzekering en keuring.</li>
          <li>Voorrang bij storingen en spoedinterventies.</li>
        </ul>
      </section>

      <section className="bg-white rounded-2xl shadow p-6 md:p-10">
        <h2 className="text-2xl font-semibold mb-4">Voordelen van een contract</h2>
        <p className="leading-relaxed">
          Een contract betekent geen zorgen: u krijgt automatisch een herinnering wanneer het tijd is voor onderhoud. 
          Bovendien geniet u vaak van <strong>korting op interventies</strong> en staat u bovenaan bij een eventuele storing.
        </p>
        <p className="mt-3">
          Bij onverwachte defecten schakelen we snel door naar{" "}
          <Link href="/diensten/verwarmingsketels" className="text-blue-600 underline">
            spoed vervanging
          </Link>
          .
        </p>
      </section>

      <CTA />
      <FAQJsonLd items={faqs} />
    </main>
  );
}
