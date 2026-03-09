import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Camera-inspectie & rapport | Turbo Services",
  description:
    "Exacte diagnose met rioolcamera en duidelijk rapport. Gespecialiseerd in complexe gevallen, met ervaring voor verzekeraars en gemeentelijke diensten.",
};

export default function Page() {
  const faqs = [
    {
      question: "Krijg ik de beelden en een verslag?",
      answer:
        "Ja, we bezorgen de videobeelden en een helder rapport met bevindingen en advies.",
    },
    {
      question: "Helpen jullie richting verzekering of gemeente?",
      answer:
        "We zijn vertrouwd met dossiers voor verzekeraars en gemeentelijke diensten – ons verslag is opgesteld om discussie te vermijden.",
    },
    {
      question: "Doen jullie ook rooktest of lokalisatie boven grond?",
      answer:
        "Ja, indien nodig gebruiken we rook/druktest en zender-ontvanger om exact te markeren.",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Camera-inspectie & rapport</h1>
      <p className="mt-3 text-slate-700">
        We profileren ons bewust als <b>rioolexpert</b> voor moeilijke gevallen. Met professionele camera’s lokaliseren
        we breuken, doorhang en foutieve aansluitingen. Je krijgt <b>beelden + verslag</b> dat gebruikt kan worden voor
        verzekeraar, aannemer of gemeentelijke diensten.
      </p>

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border p-5">
          <h2 className="text-lg font-semibold">Ideaal bij</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-700">
            <li>Terugkerende verstoppingen of geur</li>
            <li>Vermoeden van breuk/doorhang</li>
            <li>Discussie over oorzaak/schade</li>
          </ul>
        </div>
        <div className="rounded-xl border p-5">
          <h2 className="text-lg font-semibold">Wat je krijgt</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-700">
            <li>Videobeelden + exacte lokalisatie</li>
            <li>Helder rapport met advies (herstel of vervanging)</li>
            <li>Afstemming met verzekeraar/gemeente indien nodig</li>
          </ul>
        </div>
      </section>

      <div className="mt-8 rounded-xl bg-slate-50 p-5 text-slate-700">
        <b>Tip:</b> combineer dit met{" "}
        <Link href="/diensten/ontstoppingen" className="underline">ontstopping</Link> voor directe oplossing + bewijs.
      </div>

      <CTA
        title="Camera-inspectie inplannen?"
        subtitle="Krijg duidelijke beelden en een rapport dat standhoudt bij verzekering en aannemer."
        primaryHref="/aanvraag"
        primaryLabel="Afspraak maken"
      />
      <FAQJsonLd items={faqs} />
    </main>
  );
}
