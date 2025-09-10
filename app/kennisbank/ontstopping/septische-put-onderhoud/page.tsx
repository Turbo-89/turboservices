import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Septische put: problemen, onderhoud en wanneer (niet) ruimen",
  description:
    "Septic tank geur of verstopping? Lees wanneer je moet ruimen en wanneer ontstoppen volstaat. Vaak kunnen we eerst ontstoppen zonder te ruimen.",
};

export default function Page() {
  const faqs = [
    {
      question: "Moet ik altijd ruimen bij geur of verstopping?",
      answer:
        "Nee. Vaak kunnen we eerst ontstoppen en de doorstroming herstellen zonder te ruimen. Na diagnose beslissen we objectief of ruimen nodig is.",
    },
    {
      question: "Hoe vaak moet ik een septische put laten ruimen?",
      answer:
        "Afhankelijk van volume en gebruik. Gemiddeld om de 2–4 jaar, maar enkel wanneer het slibniveau te hoog is.",
    },
    {
      question: "Is een additief nuttig?",
      answer:
        "Niet nodig bij correct gebruik. Additieven lossen structurele problemen of proppen niet op.",
    },
  ];

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">
        Septische put: problemen, onderhoud en wanneer (niet) ruimen
      </h1>
      <p className="mt-3 text-slate-700">
        Geur, borrelen of traag weglopen kan te maken hebben met je septische put, maar ook met de leidingen vóór of
        na de put. <b>Belangrijk:</b> we kunnen in de meeste gevallen eerst de <b>ontstopping uitvoeren zonder te ruimen</b>.
        Ideaal als je niet zeker weet wat het probleem is—wij bepalen na inspectie objectief of ruimen echt nodig is.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Typische symptomen</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Gorgelen, stank of terugslag bij wc/douche.</li>
        <li>Put die hoog staat of zichtbaar overloopt bij regen.</li>
        <li>Periodieke verstopping ondanks eerdere reiniging.</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Onze diagnose & volgorde</h2>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
        <li><b>Leidingen ontstoppen</b> (voor en na de put) en doorstroming testen.</li>
        <li><b>Camera-inspectie</b> om breuk/doorhang uit te sluiten en niveau in de put te beoordelen.</li>
        <li><b>Objectief advies</b>: enkel ruimen als het slibniveau of inhoud het vereist.</li>
      </ol>

      <h2 className="mt-8 text-xl font-semibold">Preventie & correct gebruik</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Geen vet, olie, doekjes of agressieve chemicaliën in het systeem.</li>
        <li>Laat geen stankafsluiters droogvallen (vloerputjes regelmatig vullen).</li>
        <li>Plan tijdig controle als je signalen opmerkt (borrelen, stank, traag weglopen).</li>
      </ul>

      <CTA />

      <div className="mt-10 border-t pt-6 text-sm text-slate-600">
        Gerelateerd:{" "}
        <Link href="/kennisbank/ontstopping/terugstromend-toilet-douche" className="underline">terugstromend toilet/douche</Link>{" "}
        •{" "}
        <Link href="/kennisbank/ontstopping/afvoer-borrelt" className="underline">afvoer borrelt</Link>
      </div>

      <FAQJsonLd items={faqs} />
    </main>
  );
}
