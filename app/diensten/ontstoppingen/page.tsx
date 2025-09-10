import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Ontstoppingen | Turbo Services",
  description:
    "Wc, gootsteen of riool verstopt? Snelle en schadevrije ontstopping. We kunnen al bij de opstart een camera-inspectie en rapport voorzien.",
};

export default function Page() {
  const faqs = [
    {
      question: "Kunnen jullie bij de opstart al camera-inspectie doen?",
      answer:
        "Ja. Op vraag kunnen we meteen beelden en een kort rapport maken zodat de oorzaak duidelijk is en herhaling vermeden wordt.",
    },
    {
      question: "Werken jullie met chemische ontstoppers?",
      answer:
        "Nee, we gebruiken veilige mechanische en hogedrukmethoden. Dat is beter voor leidingen én milieu.",
    },
    {
      question: "Welke regio’s doen jullie?",
      answer:
        "Antwerpen en omliggende gemeenten. Bel of vraag online aan voor een snelle planning.",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Ontstoppingen</h1>
      <p className="mt-3 text-slate-700">
        Snel last van een verstopping? Wij lossen het doordacht en schadevrij op. Waar nodig gebruiken we{" "}
        <b>hogedruk</b> en kunnen we meteen een <b>camera-inspectie + rapport</b> voorzien. Ideaal om de échte oorzaak
        te vinden en discussies met verzekering of aannemer te onderbouwen.
      </p>

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border p-5">
          <h2 className="text-lg font-semibold">Wat we oplossen</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-700">
            <li>Wc, gootsteen, douche en bad</li>
            <li>Hoofdriolering en regenafvoer</li>
            <li>Gorgelende afvoer en rioolgeur</li>
          </ul>
        </div>
        <div className="rounded-xl border p-5">
          <h2 className="text-lg font-semibold">Onze aanpak</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-700">
            <li>Veilige eerste hulp, diagnose</li>
            <li>Mechanisch/hogedruk reinigen</li>
            <li>
              <Link href="/diensten/camera-inspectie-rapport" className="underline">
                Camera-inspectie & rapport
              </Link>{" "}
              (optioneel bij opstart)
            </li>
          </ul>
        </div>
      </section>

      <div className="mt-8 rounded-xl bg-slate-50 p-5 text-slate-700">
        <b>Lees ook:</b>{" "}
        <Link href="/kennisbank/ontstopping/verstopte-wc" className="underline">verstopte wc</Link>,{" "}
        <Link href="/kennisbank/ontstopping/gootsteen-ontstoppen" className="underline">gootsteen ontstoppen</Link>,{" "}
        <Link href="/kennisbank/ontstopping/afvoer-borrelt" className="underline">afvoer borrelt</Link>.
      </div>

      <CTA title="Hulp nodig bij een verstopping?" subtitle="Bel 24/7 of vraag direct een interventie aan." />
      <FAQJsonLd items={faqs} />
    </main>
  );
}
