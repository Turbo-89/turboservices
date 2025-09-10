import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Leiding vervangen of ontstoppen? Zo maak je de juiste keuze",
  description:
    "Blijvende verstopping of terugkerende problemen? Lees wanneer ontstoppen volstaat en wanneer vervangen de betere keuze is.",
};

export default function Page() {
  const faqs = [
    {
      question: "Wanneer is vervangen onvermijdelijk?",
      answer:
        "Bij breuk, doorhang, structurele fout of zware wortelinslag die blijft terugkeren. Dat zien we via camera-inspectie.",
    },
    {
      question: "Kan herhaald ontstoppen kwaad?",
      answer:
        "Correct uitgevoerd niet. Als de oorzaak structureel is, dan is vervangen uiteindelijk goedkoper.",
    },
    {
      question: "Moet er altijd gebroken worden?",
      answer:
        "Niet altijd. Soms kan relinen of een lokale herstelling. We adviseren op maat na inspectie.",
    },
  ];

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Leiding vervangen of ontstoppen? Zo maak je de juiste keuze</h1>
      <p className="mt-3 text-slate-700">
        Soms volstaat een grondige reiniging, soms is er een structureel probleem. Met{" "}
        <Link href="/kennisbank/ontstopping/camera-inspectie" className="underline">camera-inspectie</Link> bepalen we objectief wat het meest rendabel is.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Wanneer ontstoppen volstaat</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Lichte tot middelzware aanslag (vet/zeep/haren).</li>
        <li>Lokale prop in sifon of bocht.</li>
        <li>Geen tekenen van doorhang, verzakking of breuk.</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Signalen dat vervanging beter is</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Terugkerende verstopping kort na reiniging.</li>
        <li>Camera toont <b>doorhang</b>, <b>breuk</b> of <b>wortelinslag</b>.</li>
        <li>Foutieve diameter/helling of verouderd materiaal (bv. gres met scheuren).</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Kosten- en breekwerkvergelijk</h2>
      <p className="mt-3 text-slate-700">
        Ontstoppen is snel en budgetvriendelijk. Bij structurele schade is vervangen uiteindelijk goedkoper en
        betrouwbaarder. We werken met een <b>heldere prijs vooraf</b> en rapporteren met beeldmateriaal.
      </p>

      <CTA />

      <div className="mt-10 border-t pt-6 text-sm text-slate-600">
        Gerelateerd:{" "}
        <Link href="/kennisbank/ontstopping/ontstopping-kost" className="underline">kost ontstopping</Link> •{" "}
        <Link href="/kennisbank/ontstopping/riool-verstopt-signalen" className="underline">signalen verstopt riool</Link>
      </div>

      <FAQJsonLd items={faqs} />
    </main>
  );
}
