import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Prijs condensatieketel (uitleg & richtprijzen) | Turbo Services",
  description:
    "Alles over de prijs van een condensatieketel: wat bepaalt de kost, wat zit er meestal in, en wanneer is spoedvervanging aangewezen. Transparante richtprijs en snelle plaatsing.",
};

export default function Page() {
  const faqs = [
    {
      question: "Wat bepaalt de prijs van een condensatieketel?",
      answer:
        "Het type en vermogen van de ketel, wel of geen combi (sanitair warm water), complexiteit van de plaatsing (rookgasafvoer, aanpassingen leidingwerk), en extra’s zoals thermostaat of waterbehandeling. Ook bereikbaarheid op locatie speelt mee.",
    },
    {
      question: "Wat zit doorgaans in de totale projectkost?",
      answer:
        "Levering ketel en toebehoren, plaatsing, aansluiting en inbedrijfstelling. Indien nodig aanpassingen aan rookgasafvoer, gas/leidingwerk en afvoercondensaat. Eventuele slimme regeling/thermostaat kan optioneel zijn.",
    },
    {
      question: "Wanneer is spoedvervanging aangewezen?",
      answer:
        "Bij onherstelbare defecten (ketel slaat niet aan, onveilige situatie, geen verwarming). In dat geval plannen we een snelle vervanging/plaatsing, vaak binnen 24 uur, afhankelijk van voorraad en bereikbaarheid.",
    },
    {
      question: "Doen jullie ook onderhoudscontracten?",
      answer:
        "Ja. Na plaatsing kunnen we een onderhoudscontract voorzien. Zo blijft de ketel efficiënt en verkleint de kans op storingen.",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-10">
      {/* Intro */}
      <section className="bg-white rounded-2xl shadow p-6 md:p-10">
        <p className="text-xs text-slate-500 mb-2">Laatste update: {new Date().toLocaleDateString("nl-BE")}</p>
        <h1 className="text-3xl font-bold mb-4">Prijs condensatieketel: zo leest u richtprijzen correct</h1>
        <p className="text-lg leading-relaxed">
          Overweegt u een <strong>nieuwe condensatieketel</strong> of is uw huidige ketel <strong>defect</strong>?
          Op deze pagina leggen we uit welke factoren de <strong>totale kost</strong> bepalen, wat er
          doorgaans in de prijs zit en wanneer <strong>spoedvervanging</strong> aangewezen is. We werken met een{" "}
          <strong>transparante richtprijs</strong> en focussen op snelle plaatsing.
        </p>
      </section>

      {/* Factoren die de prijs bepalen */}
      <section className="bg-white rounded-2xl shadow p-6 md:p-10">
        <h2 className="text-2xl font-semibold mb-4">Wat beïnvloedt de prijs van een condensatieketel?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Type & vermogen</strong>: solo vs. <em>combi</em> (ook sanitair warm water) en het benodigde vermogen.
          </li>
          <li>
            <strong>Complexiteit plaatsing</strong>: bereikbaarheid, ombouwwerken en <strong>rookgasafvoer vervangen</strong> indien nodig.
          </li>
          <li>
            <strong>Aansluitingen & toebehoren</strong>: gas- en waterleiding, condensafvoer, veiligheidsarmaturen.
          </li>
          <li>
            <strong>Regeling</strong>: klassieke of slimme thermostaat, zoneregeling.
          </li>
          <li>
            <strong>Afwerking & nazorg</strong>: opstart, inregeling en optie <strong>onderhoudscontract</strong>.
          </li>
        </ul>
      </section>

      {/* Richtprijs en transparantie */}
      <section className="bg-white rounded-2xl shadow p-6 md:p-10">
        <h2 className="text-2xl font-semibold mb-4">Richtprijs & transparantie</h2>
        <p className="leading-relaxed">
          We hanteren een <strong>duidelijke richtprijs</strong>, afgestemd op uw situatie (type ketel, vermogen,
          rookgasafvoer, bereikbaarheid). Tijdens de telefonische intake krijgt u een{" "}
          <strong>realistische inschatting</strong> en bij de plaatsing volgt een heldere, itemized offerte.
          Zo vermijdt u verrassingen en weet u exact wat inbegrepen is.
        </p>
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
          <p className="font-semibold mb-1">Tip om offertes te vergelijken</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Vergelijk altijd <strong>totale projectkost</strong> (materiaal + plaatsing + rookgasafvoer).</li>
            <li>Let op <strong>garantie</strong> en inbegrepen <strong>inbedrijfstelling</strong>.</li>
            <li>Vraag naar doorlooptijd: <strong>spoedplaatsing</strong> vs. standaardplanning.</li>
          </ul>
        </div>
      </section>

      {/* Wanneer spoed? */}
      <section className="bg-white rounded-2xl shadow p-6 md:p-10">
        <h2 className="text-2xl font-semibold mb-4">Geen verwarming of ketel slaat niet aan?</h2>
        <p className="leading-relaxed">
          Bij <strong>ketel defect</strong>, <strong>geen verwarming</strong> of onveilige storingen is{" "}
          <strong>spoedvervanging</strong> vaak de snelste en veiligste oplossing. We controleren ter plaatse of
          herstellen zinvol is, of directe vervanging aangewezen is.
        </p>
        <ul className="mt-3 list-disc list-inside space-y-2">
          <li><strong>CV ketel werkt niet</strong> of <strong>slaat niet aan</strong></li>
          <li><strong>Gasketel vervangen</strong> of <strong>nieuwe combiketel</strong> nodig</li>
          <li>Nood aan <strong>rookgasafvoer vervangen</strong> of aanpassingen</li>
        </ul>
        <p className="mt-3">
          Snel hulp nodig? Bekijk onze pagina{" "}
          <Link href="/diensten/verwarmingsketels" className="text-blue-600 underline">
            ketel vervanging (spoed)
          </Link>
          .
        </p>
      </section>

      {/* Gerelateerde onderwerpen */}
      <section className="bg-white rounded-2xl shadow p-6 md:p-10">
        <h2 className="text-2xl font-semibold mb-4">Gerelateerde onderwerpen</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <Link href="/weetjes/rookgasafvoer-vervangen" className="text-blue-600 underline">
              Rookgasafvoer vervangen: wanneer en waarom?
            </Link>
          </li>
          <li>
            <Link href="/weetjes/onderhoudscontract-verwarmingsketel" className="text-blue-600 underline">
              Onderhoudscontract verwarmingsketel: wat zit erin?
            </Link>
          </li>
          <li>
            <Link href="/diensten/verwarmingsketels" className="text-blue-600 underline">
              Spoed: verwarmingsketel vervangen & installeren
            </Link>
          </li>
        </ul>
      </section>

      <CTA />

      {/* Structured data voor FAQ */}
      <FAQJsonLd items={faqs} />
    </main>
  );
}
