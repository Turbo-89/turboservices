import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Rookgasafvoer vervangen | Turbo Services",
  description:
    "Wanneer en waarom de rookgasafvoer van uw ketel vervangen? Belangrijke veiligheids- en efficiëntieredenen, inclusief richtlijnen voor spoedinterventie.",
};

export default function Page() {
  const faqs = [
    {
      question: "Wanneer moet de rookgasafvoer vervangen worden?",
      answer:
        "Bij lekkages, veroudering of wanneer u een nieuwe condensatieketel plaatst. Een slechte rookgasafvoer kan gevaarlijke gassen binnenlaten en de efficiëntie verminderen.",
    },
    {
      question: "Wat kost het vervangen van een rookgasafvoer?",
      answer:
        "De prijs hangt af van type ketel, lengte van de afvoer, benodigde materialen en bereikbaarheid. Vaak zit dit inbegrepen bij een nieuwe ketelinstallatie.",
    },
    {
      question: "Is dit verplicht bij een nieuwe ketel?",
      answer:
        "Ja, bij de plaatsing van een condensatieketel is een aangepaste rookgasafvoer verplicht volgens de regelgeving. Dit verzekert veilige en efficiënte werking.",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-10">
      <section className="bg-white rounded-2xl shadow p-6 md:p-10">
        <h1 className="text-3xl font-bold mb-4">Rookgasafvoer vervangen: veiligheid eerst</h1>
        <p className="text-lg leading-relaxed">
          De <strong>rookgasafvoer</strong> zorgt ervoor dat verbrandingsgassen veilig naar buiten worden afgevoerd. 
          Bij een <strong>nieuwe condensatieketel</strong> of wanneer de bestaande afvoer <strong>verouderd of beschadigd</strong> is, 
          moet deze vervangen worden. Dit is essentieel voor zowel veiligheid als rendement.
        </p>
      </section>

      <section className="bg-white rounded-2xl shadow p-6 md:p-10">
        <h2 className="text-2xl font-semibold mb-4">Waarom vervangen?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Veiligheid:</strong> voorkomt CO-lekken en rookgas in huis.</li>
          <li><strong>Regelgeving:</strong> verplicht bij plaatsing nieuwe condensatieketel.</li>
          <li><strong>Efficiëntie:</strong> een correcte afvoer optimaliseert ketelrendement.</li>
          <li><strong>Duurzaamheid:</strong> minder slijtage en langere levensduur van de ketel.</li>
        </ul>
      </section>

      <section className="bg-white rounded-2xl shadow p-6 md:p-10">
        <h2 className="text-2xl font-semibold mb-4">Prijs en plaatsing</h2>
        <p className="leading-relaxed">
          De <strong>kostprijs</strong> hangt af van type ketel, lengte en moeilijkheidsgraad. Vaak wordt de 
          rookgasafvoer vervangen tegelijk met de installatie van een <strong>nieuwe condensatieketel</strong>. 
          Zo bent u meteen conform de wetgeving en veilig gesteld.
        </p>
        <p className="mt-3">
          Interesse in een <strong>spoedvervanging</strong>? Bekijk ook onze pagina{" "}
          <Link href="/diensten/verwarmingsketels" className="text-blue-600 underline">
            ketel vervangen (spoed)
          </Link>
          .
        </p>
      </section>

      <CTA />
      <FAQJsonLd items={faqs} />
    </main>
  );
}
