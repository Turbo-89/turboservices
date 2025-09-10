import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Septische putten | Turbo Services",
  description:
    "Herstel of vervanging van ingezakte/kapotte septische putten. Vaak dringend – we plannen snel en werken met duidelijk advies en rapport.",
};

export default function Page() {
  const faqs = [
    {
      question: "Moet er altijd geruimd worden?",
      answer:
        "Niet altijd. Vaak kunnen we eerst ontstoppen en de doorstroming herstellen. Daarna beslissen we objectief of ruimen echt nodig is.",
    },
    {
      question: "Kunnen jullie een put vervangen op 1 dag?",
      answer:
        "Afhankelijk van de situatie wel. We maken eerst een plaatsbezoek en planning.",
    },
    {
      question: "Helpen jullie bij ingezakte putten?",
      answer:
        "Ja, we herstellen of vervangen structurele schade en zorgen voor een stabiele aansluiting.",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Septische putten</h1>
      <p className="mt-3 text-slate-700">
        Problemen met je septische put? We helpen bij <b>dringende interventies</b> en bij structurele oplossingen:
        van ontstoppen en diagnose tot herstel of vervanging van ingezakte/kapotte putten.
      </p>

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border p-5">
          <h2 className="text-lg font-semibold">Typische symptomen</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-700">
            <li>Gorgelen, stank of terugslag</li>
            <li>Put staat hoog of loopt over</li>
            <li>Periodieke verstopping ondanks reiniging</li>
          </ul>
        </div>
        <div className="rounded-xl border p-5">
          <h2 className="text-lg font-semibold">Onze volgorde</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-700">
            <li>Ontstopping en doorstroming testen</li>
            <li>
              <Link href="/diensten/camera-inspectie-rapport" className="underline">Camera-inspectie & rapport</Link>
            </li>
            <li>Objectief advies: enkel ruimen/vervangen als nodig</li>
          </ul>
        </div>
      </section>

      <CTA title="Dringend hulp nodig met je septische put?" subtitle="Bel 24/7 of vraag snel een plaatsbezoek aan." />
      <FAQJsonLd items={faqs} />
    </main>
  );
}
