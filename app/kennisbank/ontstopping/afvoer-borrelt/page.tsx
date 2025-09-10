import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/kb/CTA";
import FAQJsonLd from "@/components/seo/FAQJsonLd";

export const metadata: Metadata = {
  title: "Waarom borrelt mijn afvoer? Oorzaken en oplossingen",
  description:
    "Borrelt je afvoer? Dit zijn de oorzaken—van deelverstopping tot ontluchting—en zo los je het op.",
};

export default function Page() {
  const faqs = [
    { question: "Is borrelen gevaarlijk?", answer: "Op zich niet, maar het kan voorafgaan aan overloop of geurproblemen." },
    { question: "Komt dit door de buren (appartement)?", answer: "Ja, gedeelde stijgleidingen beïnvloeden elkaar." },
    { question: "Helpt een ontluchtingsventiel?", answer: "Soms. Eerst de echte oorzaak zeker stellen." },
  ];

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">
        Waarom borrelt mijn afvoer? Oorzaken en oplossingen
      </h1>
      <p className="mt-3 text-slate-700">
        Borrelen of gorgelen wijst vaak op luchtproblemen of een (gedeeltelijke) verstopping.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Typische oorzaken</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Deelverstopping (vet/zeep/haren vernauwen de buis)</li>
        <li>Ontbrekende of verstopte ontluchting</li>
        <li>Foutieve helling of doorhang</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Wat kun je zelf?</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        <li>Sifons schoonmaken</li>
        <li>Plopper gebruiken</li>
        <li>Letten op lucht aanzuigen (stankval droog?)</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Professionele diagnose</h2>
      <p className="mt-3 text-slate-700">
        Rook- of druktest van ontluchting,{" "}
        <Link href="/kennisbank/ontstopping/camera-inspectie" className="underline">camera</Link> om doorhang/breuk op te sporen en hogedrukreiniging bij aanslag.
      </p>

      <CTA />

      <div className="mt-10 border-t pt-6 text-sm text-slate-600">
        Gerelateerd:{" "}
        <Link href="/kennisbank/ontstopping/riool-verstopt-signalen" className="underline">
          eerste signalen verstopt riool
        </Link>{" "}
        •{" "}
        <Link href="/kennisbank/ontstopping/terugstromend-toilet-douche" className="underline">
          terugstromend toilet of douche
        </Link>
      </div>

      <FAQJsonLd items={faqs} />
    </main>
  );
}
