import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Spoed loodgieterij (24/7) | Turbo Services",
  description:
    "Gesprongen kraan, waterlek, wc overstroomt of terugslag? Bel 24/7. Snelle interventie in Antwerpen en omgeving met transparante richtprijs.",
};

export default function Page() {
  const faqs = [
    {
      question: "Is er een avond/weekendtoeslag?",
      answer:
        "Buiten kantooruren kan dat. We vertellen je vooraf de richtprijs zodat je niet voor verrassingen staat.",
    },
    {
      question: "Wat kan ik zelf doen bij een lek?",
      answer:
        "Sluit de hoofdafsluiter en beveilig de stroom in de getroffen zone. Verplaats waardevolle spullen en bel ons meteen.",
    },
    {
      question: "Kunnen jullie meteen definitief herstellen?",
      answer:
        "Vaak wel. Indien structurele schade, plannen we een vervolg met duidelijke offerte en rapport.",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Spoed loodgieterij (24/7)</h1>
      <p className="mt-3 text-slate-700">
        Voor dringende problemen zoals een <b>gesprongen kraan</b>, <b>waterlek</b>, <b>overstromende wc</b> of{" "}
        <b>terugslag</b>. We zijn 24/7 bereikbaar en komen zo snel mogelijk ter plaatse in Antwerpen en omliggende gemeenten.
      </p>

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border p-5">
          <h2 className="text-lg font-semibold">Dringende interventies</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-700">
            <li>Gesprongen kraan of lekkende leiding</li>
            <li>Wc verstopt / terugstromend water</li>
            <li>Overlopende put of rioolgeur</li>
          </ul>
        </div>
        <div className="rounded-xl border p-5">
          <h2 className="text-lg font-semibold">Eerste hulp</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-700">
            <li>Sluit de hoofdafsluiter bij lek</li>
            <li>Beveilig de stroom in de zone</li>
            <li>Bel ons en geef adres + ernst door</li>
          </ul>
        </div>
      </section>

      <div className="mt-8 rounded-xl bg-slate-50 p-5 text-slate-700">
        Meer lezen:{" "}
        <Link href="/kennisbank/spoed-waterlek" className="underline">waterlek: eerste hulp</Link>{" "}
        •{" "}
        <Link href="/kennisbank/ontstopping/verstopte-wc" className="underline">verstopte wc</Link>
      </div>

      <CTA title="Nu direct hulp nodig?" subtitle="Bel 24/7 – we geven meteen een realistische aankomsttijd." />
      <FAQJsonLd items={faqs} />
    </main>
  );
}
