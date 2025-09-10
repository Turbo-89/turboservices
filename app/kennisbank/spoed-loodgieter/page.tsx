import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Spoed loodgieter Antwerpen – 24/7 hulp bij wc verstopt of waterlek",
  description:
    "Dringend een loodgieter nodig? Turbo Services is 24/7 bereikbaar voor wc verstopt, waterlek of cv-probleem. Direct hulp in Antwerpen en omgeving.",
};

export default function Page() {
  const faqs = [
    {
      question: "Hoe snel kunnen jullie ter plaatse zijn?",
      answer:
        "We plannen zo snel mogelijk in op basis van je adres en de drukte. Bel ons 24/7 en we geven je meteen een realistische aankomsttijd.",
    },
    {
      question: "Rekenen jullie avond/weekendtoeslag?",
      answer:
        "Er kan een toeslag gelden buiten kantooruren. We communiceren altijd vooraf een transparante richtprijs.",
    },
    {
      question: "Kunnen jullie meteen definitief oplossen?",
      answer:
        "Vaak wel. We hebben materiaal aan boord voor ontstoppen, lekdetectie en noodherstel. Bij structurele schade plannen we een vervolg met duidelijke offerte.",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">
        Spoed loodgieter in Antwerpen – 24/7 bereikbaar
      </h1>
      <p className="mt-3 text-slate-700">
        Wc verstopt, waterlek of ketel die uitvalt? Bel ons meteen. We zijn 24/7 bereikbaar en komen zo snel mogelijk
        ter plaatse in Antwerpen en omliggende gemeenten. Transparante prijzen vóór we starten.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Waarvoor je ons direct belt</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Wc verstopt of terugstroming</li>
        <li>Waterlek of plots vocht in muren/plafonds</li>
        <li>Afvoer borrelt, rioolgeur, meerdere toestellen lopen traag weg</li>
        <li>Ketelstoring of geen warm water</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Onze aanpak bij spoed</h2>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
        <li><b>Telefonische intake</b> – we stellen gerichte vragen en geven een eerlijke richtprijs.</li>
        <li><b>Snelle interventie</b> – diagnose en directe oplossing waar mogelijk.</li>
        <li><b>Transparantie</b> – prijs en eventuele toeslag worden vooraf gecommuniceerd.</li>
        <li><b>Rapport & advies</b> – bij structurele oorzaken plannen we vervolgwerken met duidelijke offerte.</li>
      </ol>

      <CTA title="Dringend hulp nodig?" subtitle="Bel ons 24/7 – we komen zo snel mogelijk ter plaatse in Antwerpen en omgeving." />

      <div className="mt-10 border-t pt-6 text-sm text-slate-600">
        Handig om te weten:{" "}
        <Link href="/kennisbank/ontstopping/verstopte-wc" className="underline">
          verstopte wc
        </Link>{" "}
        •{" "}
        <Link href="/kennisbank/spoed-waterlek" className="underline">
          waterlek: eerste hulp
        </Link>{" "}
        •{" "}
        <Link href="/kennisbank/ontstopping/afvoer-borrelt" className="underline">
          afvoer borrelt
        </Link>
      </div>

      <FAQJsonLd items={faqs} />
    </main>
  );
}
